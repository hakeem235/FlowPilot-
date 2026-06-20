import { test, expect } from "@playwright/test";
test("invoice workspace exposes creation and reminders",async({page})=>{await page.goto("/invoices");await expect(page.getByRole("button",{name:/Create invoice/})).toBeVisible();await expect(page.getByRole("button",{name:/Remind/}).first()).toBeVisible()});
