import { PrismaClient, InvoiceStatus, TransactionType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const organization = await prisma.organization.upsert({
    where: { clerkOrganizationId: "org_demo_flowpilot" },
    update: {},
    create: { clerkOrganizationId: "org_demo_flowpilot", name: "Northline Studio", slug: "northline-studio", currency: "SAR", openingBalance: 186400, minimumCashBuffer: 30000, taxReservePercent: 15 },
  });
  const account = await prisma.account.create({ data: { organizationId: organization.id, name: "Operating account", bankName: "Demo Bank", balance: 186400 } });
  const income = await prisma.transactionCategory.create({ data: { organizationId: organization.id, name: "Client income", type: TransactionType.INCOME, color: "#18745A" } });
  const software = await prisma.transactionCategory.create({ data: { organizationId: organization.id, name: "Software", type: TransactionType.EXPENSE, color: "#B87516" } });
  await prisma.transaction.createMany({ data: [
    { organizationId: organization.id, accountId: account.id, categoryId: income.id, type: TransactionType.INCOME, amount: 42000, description: "Qamar Labs retainer", transactedAt: new Date("2026-06-20") },
    { organizationId: organization.id, accountId: account.id, categoryId: software.id, type: TransactionType.EXPENSE, amount: 1260, description: "Adobe Creative Cloud", transactedAt: new Date("2026-06-19") },
  ] });
  const client = await prisma.client.create({ data: { organizationId: organization.id, name: "Nakhla Foods", email: "finance@nakhla.example", paymentTermsDays: 30 } });
  await prisma.invoice.create({ data: { organizationId: organization.id, clientId: client.id, number: "FP-2038", status: InvoiceStatus.OVERDUE, amount: 28500, issuedAt: new Date("2026-05-15"), dueAt: new Date("2026-06-14"), predictedPaymentAt: new Date("2026-06-25") } });
  await prisma.taxReserve.create({ data: { organizationId: organization.id, period: "2026-Q2", estimatedTax: 27960, reservedAmount: 27960 } });
}

main().finally(() => prisma.$disconnect());
