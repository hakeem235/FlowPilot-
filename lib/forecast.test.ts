import { describe, expect, it } from "vitest";
import { buildForecast, calculateSafeToSpend, probabilityAdjustedInvoices } from "./forecast";

describe("forecast calculations", () => {
  it("weights invoice payments by collection confidence", () => {
    expect(probabilityAdjustedInvoices([
      { amount: 10_000, status: "confirmed" },
      { amount: 5_000, status: "overdue-30-plus" },
    ])).toBe(10_500);
  });

  it("rolls each daily balance into the next day", () => {
    const result = buildForecast(20_000, [
      { date: "2026-06-20", income: 5_000, recurringExpenses: 2_000 },
      { date: "2026-06-21", scheduledExpenses: 4_000 },
    ]);
    expect(result.map((entry) => entry.balance)).toEqual([23_000, 19_000]);
  });

  it("never reports negative safe-to-spend cash", () => {
    expect(calculateSafeToSpend({ currentCash: 10_000, obligationsBeforeIncome: 8_000,
      taxReserve: 2_000, minimumBuffer: 3_000, highConfidenceRisks: 500 })).toBe(0);
  });
});
