import { test, expect } from "@playwright/test";
test("onboarding captures an opening balance",async({page})=>{await page.goto("/onboarding");await expect(page.getByRole("heading",{name:"Where are you starting from?"})).toBeVisible();await page.getByLabel("Opening bank balance").fill("200000");await expect(page.getByRole("link",{name:/Continue/})).toBeVisible()});
