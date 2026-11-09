import { expect, test, type Page } from "@playwright/test"

async function openDetails(page: Page) {
  await page.goto("/")
  const trigger = page.getByRole("button", { name: /Show details about/ }).first()
  await trigger.focus()
  await trigger.press("Enter")
  const dialog = page.getByRole("dialog")
  await expect(dialog).toBeVisible()
  await expect(dialog).toHaveAccessibleName(/\S/)
  return { trigger, dialog }
}

test("contains keyboard focus, blocks background focus and restores it on Escape", async ({ page }) => {
  const { trigger, dialog } = await openDetails(page)
  await expect(page.locator("body")).toHaveCSS("overflow", "hidden")
  // Native modality blocks programmatic focus outside the dialog too.
  await page.locator("#contact-email").evaluate((element: HTMLInputElement) => element.focus())
  expect(await dialog.evaluate(element => element.contains(document.activeElement))).toBe(true)

  const close = dialog.getByRole("button", { name: "Close", exact: true })
  const lastLink = dialog.getByRole("link").last()
  await close.focus()
  await page.keyboard.press("Shift+Tab")
  await expect(lastLink).toBeFocused()
  await page.keyboard.press("Tab")
  await expect(close).toBeFocused()
  await page.keyboard.press("Escape")
  await expect(dialog).toHaveCount(0)
  await expect(trigger).toBeFocused()
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden")
})

test("content clicks stay open; close button and backdrop dismiss", async ({ page }) => {
  const { trigger, dialog } = await openDetails(page)
  await dialog.getByRole("heading", { level: 2 }).click()
  await expect(dialog).toBeVisible()
  await dialog.getByRole("button", { name: "Close", exact: true }).click()
  await expect(dialog).toHaveCount(0)
  await expect(trigger).toBeFocused()
  await trigger.press("Enter")
  await expect(dialog).toBeVisible()
  await page.mouse.click(1, 1)
  await expect(dialog).toHaveCount(0)
  await expect(trigger).toBeFocused()
})

test("unmount restores the original inline scroll style", async ({ page }) => {
  await page.goto("/")
  await page.locator("body").evaluate(element => { element.style.overflow = "auto" })
  const trigger = page.getByRole("button", { name: /Show details about/ }).first()
  await trigger.click()
  await expect(page.getByRole("dialog")).toBeVisible()
  await page.keyboard.press("Escape")
  await expect(page.locator("body")).toHaveCSS("overflow", "auto")
})

test("parent updates do not reset focus in the open dialog", async ({ page }) => {
  const { dialog } = await openDetails(page)
  // Moving the background programmatically updates HomeContainer's contact
  // observer and rerenders Projects with a new inline onClose callback.
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }))
  const shortcut = page.locator("button.glass-bubble")
  await expect(shortcut).toHaveAttribute("aria-hidden", "false")
  const link = dialog.getByRole("link").last()
  await link.focus()
  await page.locator("#contact-container").evaluate(element => element.scrollIntoView({ behavior: "instant" }))
  await expect(shortcut).toHaveAttribute("aria-hidden", "true")
  await expect(link).toBeFocused()
  await expect(dialog).toBeVisible()
})

test("open project details follow locale changes without losing selection", async ({ page }) => {
  await page.goto("/")
  await page.getByRole("button", { name: "Show details about Pienissimo", exact: true }).click()
  const dialog = page.getByRole("dialog", { name: "Pienissimo", exact: true })
  await expect(dialog.getByRole("heading", { name: "Multi-tenant booking engine", exact: true })).toBeVisible()

  // The language picker is correctly inert while a modal is open. Simulate
  // a client-side locale navigation using the existing Next.js router instead.
  await page.evaluate(async () => {
    const { next } = window as unknown as {
      next: { router: { replace: (
        _url: string, _as: string, _options: { locale: string; scroll: boolean }
      ) => Promise<boolean> } }
    }
    await next.router.replace("/", "/", { locale: "it-IT", scroll: false })
  })

  await expect(page).toHaveURL(/\/it-IT$/)
  await expect(dialog).toBeVisible()
  await expect(dialog.getByRole("heading", { name: "Motore di prenotazione multi-tenant", exact: true })).toBeVisible()
  await expect(dialog.getByRole("heading", { name: "Multi-tenant booking engine", exact: true })).toHaveCount(0)
  await page.keyboard.press("Escape")
  await expect(dialog).toHaveCount(0)
  // Closing clears the ID, so a subsequent selection opens a different project.
  await page.getByRole("button", { name: /Anubi Digital/ }).click()
  await expect(page.getByRole("dialog", { name: "Anubi Digital", exact: true })).toBeVisible()
})
