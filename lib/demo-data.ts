export const money = new Intl.NumberFormat("en-SA", { style: "currency", currency: "SAR", maximumFractionDigits: 0 });

export const forecastData = [
  { day: "Jun 20", expected: 186400, optimistic: 186400, conservative: 186400 },
  { day: "Jun 27", expected: 164900, optimistic: 177000, conservative: 151000 },
  { day: "Jul 04", expected: 213500, optimistic: 232000, conservative: 179000 },
  { day: "Jul 11", expected: 191200, optimistic: 221000, conservative: 155000 },
  { day: "Jul 18", expected: 145800, optimistic: 188000, conservative: 116000 },
  { day: "Jul 25", expected: 174400, optimistic: 225000, conservative: 124000 },
  { day: "Aug 02", expected: 137600, optimistic: 205000, conservative: 89000 },
  { day: "Aug 09", expected: 158900, optimistic: 238000, conservative: 74000 },
  { day: "Aug 18", expected: 126800, optimistic: 219000, conservative: 52000 },
];

export const transactions = [
  { id: "TX-1048", date: "20 Jun", name: "Retainer · Qamar Labs", category: "Client income", amount: 42000, type: "income" },
  { id: "TX-1047", date: "19 Jun", name: "Adobe Creative Cloud", category: "Software", amount: -1260, type: "expense" },
  { id: "TX-1046", date: "18 Jun", name: "Payroll · June", category: "Team", amount: -46800, type: "expense" },
  { id: "TX-1045", date: "17 Jun", name: "Project deposit · Nakhla", category: "Client income", amount: 28500, type: "income" },
  { id: "TX-1044", date: "16 Jun", name: "AWS EMEA", category: "Infrastructure", amount: -2180, type: "expense" },
  { id: "TX-1043", date: "15 Jun", name: "Studio rent", category: "Workspace", amount: -8500, type: "expense" },
];

export const invoices = [
  { number: "FP-2041", client: "Qamar Labs", amount: 42000, due: "Jun 26", status: "Due soon", probability: 80 },
  { number: "FP-2038", client: "Nakhla Foods", amount: 28500, due: "Jun 14", status: "Overdue", probability: 60 },
  { number: "FP-2035", client: "Sadu Works", amount: 18200, due: "May 30", status: "Overdue", probability: 40 },
  { number: "FP-2044", client: "Mizan Health", amount: 36000, due: "Jul 08", status: "Sent", probability: 80 },
  { number: "FP-2030", client: "Rimal Studio", amount: 24000, due: "May 12", status: "Partially paid", probability: 20 },
];

export const navItems = [
  ["/dashboard", "Overview"], ["/transactions", "Transactions"], ["/invoices", "Invoices"],
  ["/forecast", "Forecast"], ["/scenarios", "Scenarios"], ["/reports", "Reports"], ["/settings", "Settings"],
] as const;
