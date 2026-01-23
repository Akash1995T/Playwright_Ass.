import { Page } from '@playwright/test';

export async function acceptCookies(page: Page) {
  const acceptButton = page.locator('button:has-text("Akzeptieren")');
  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }
}