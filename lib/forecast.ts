export type InvoiceRisk = {
  amount: number;
  status: "paid" | "confirmed" | "not-due" | "overdue-1-15" | "overdue-16-30" | "overdue-30-plus";
};

export const invoiceProbability: Record<InvoiceRisk["status"], number> = {
  paid: 1,
  confirmed: 0.95,
  "not-due": 0.8,
  "overdue-1-15": 0.6,
  "overdue-16-30": 0.4,
  "overdue-30-plus": 0.2,
};

export function probabilityAdjustedInvoices(invoices: InvoiceRisk[]) {
  return invoices.reduce((sum, invoice) => sum + invoice.amount * invoiceProbability[invoice.status], 0);
}

export type DailyMovement = {
  date: string;
  income?: number;
  invoices?: InvoiceRisk[];
  recurringExpenses?: number;
  scheduledExpenses?: number;
};

export function buildForecast(openingBalance: number, movements: DailyMovement[]) {
  let previousBalance = openingBalance;
  return movements.map((movement) => {
    const adjustedInvoices = probabilityAdjustedInvoices(movement.invoices ?? []);
    const balance = previousBalance + (movement.income ?? 0) + adjustedInvoices
      - (movement.recurringExpenses ?? 0) - (movement.scheduledExpenses ?? 0);
    previousBalance = balance;
    return { ...movement, adjustedInvoices, balance };
  });
}

export type SafeToSpendInputs = {
  currentCash: number;
  obligationsBeforeIncome: number;
  taxReserve: number;
  minimumBuffer: number;
  highConfidenceRisks: number;
};

export function calculateSafeToSpend(inputs: SafeToSpendInputs) {
  return Math.max(0, inputs.currentCash - inputs.obligationsBeforeIncome - inputs.taxReserve
    - inputs.minimumBuffer - inputs.highConfidenceRisks);
}
