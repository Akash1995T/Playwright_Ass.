import { test } from '@playwright/test';
import { acceptCookies } from '../utils/cookies';
import { ParfumPage } from '../pages/ParfumPage';

const filterData = [
  { filter: 'Highlights', option: 'Sale' },
  { filter: 'Highlights', option: 'Neu' },
  { filter: 'Produktart', option: 'Eau de Parfum' },
  { filter: 'Für Wen', option: 'Damen' }
];

test.describe('Douglas Parfum filters', () => {
  for (const data of filterData) {
    test(`Filter by ${data.filter} -> ${data.option}`, async ({ page }) => {
      await page.goto('/');
      await acceptCookies(page);

      const parfumPage = new ParfumPage(page);
      await parfumPage.openParfumCategory();
      await parfumPage.applyFilter(data.filter, data.option);
      await parfumPage.verifyProductsListed();
    });
  }
});