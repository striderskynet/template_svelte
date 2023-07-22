import { expect, test } from '@playwright/test';

test('i18n Module Loaded', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTestId('language-tester')).toHaveText('Spanish');
});

test('i18n Module Change Language', async ({ page }) => {
	await page.goto('/');
	await page.getByTestId('language-changer').click();
	await expect(page.getByTestId('language-tester')).toHaveText('English');
});
