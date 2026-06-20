import { z } from "zod";
export const transactionSchema = z.object({
  type: z.enum(["INCOME", "EXPENSE"]), amount: z.coerce.number().positive().max(100_000_000),
  description: z.string().trim().min(2).max(200), transactedAt: z.coerce.date(), accountId: z.string().cuid(), categoryId: z.string().cuid().optional(),
});
export const invoiceSchema = z.object({ clientId: z.string().cuid(), number: z.string().trim().min(2).max(30), amount: z.coerce.number().positive(), dueAt: z.coerce.date() });
export const settingsSchema = z.object({ currency: z.string().length(3), minimumCashBuffer: z.coerce.number().nonnegative(), taxReservePercent: z.coerce.number().min(0).max(100) });
