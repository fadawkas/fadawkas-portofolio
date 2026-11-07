/* global document, innerWidth, scrollY */
// Dependency-free browser checks. Supply a Playwright Page and a running preview URL.
// Example from a Playwright fixture: await checkPortfolio(page, 'http://localhost:4173');
export async function checkPortfolio(page, baseURL = 'http://localhost:4173') {
  const checks = [];
  const assert = (condition, message) => {
    if (!condition) throw new Error(message);
    checks.push(message);
  };

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(baseURL);
  await page.evaluate(() => globalThis.localStorage.setItem('theme', 'dark'));
  await page.reload();
  await page.evaluate(() => document.fonts.ready);

  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.waitForTimeout(100);
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `No horizontal overflow at ${width}px`);
  }

  await page.keyboard.press('Tab');
  assert(await page.evaluate(() => document.activeElement.textContent === 'Skip to content'), 'Skip link is first keyboard stop');
  await page.keyboard.press('Enter');
  assert(await page.evaluate(() => document.activeElement.id === 'main-content'), 'Skip link moves focus to main');

  await page.getByRole('button', { name: 'View Projects', exact: false }).click();
  const immediateY = await page.evaluate(() => scrollY);
  await page.waitForTimeout(120);
  assert(immediateY > 0 && Math.abs(await page.evaluate(() => scrollY) - immediateY) < 2, 'Reduced-motion hero navigation is immediate');
  assert(await page.locator('#projects article').count() === 7, 'All seven projects are present');

  const cards = page.locator('#projects article');
  assert(await page.getByRole('list', { name: 'System flow' }).count() === 0, 'Project cards do not show system flows');
  const expectedTitles = await cards.locator('h3').allTextContents();
  assert(expectedTitles[0] === 'Agentic AI Voice Helpline', 'Voice helpline is the flagship project');
  assert(await cards.first().getByRole('link', { name: /^GitHub:/ }).getAttribute('href') === 'https://github.com/fadawkas/agentic-ai-helpline', 'Flagship links to its repository');
  for (let index = 0; index < expectedTitles.length; index++) {
    const opener = cards.nth(index).getByRole('button', { name: /^View case study:/ });
    await opener.focus();
    await page.keyboard.press('Enter');
    const dialog = page.getByRole('dialog');
    await dialog.waitFor();
    assert((await dialog.locator('h2').innerText()) === expectedTitles[index], `Correct case study opens: ${expectedTitles[index]}`);
    if (index === 0) {
      assert(await dialog.getByText('Not a substitute for professional mental health care or an emergency response service.', { exact: true }).count() === 1, 'Flagship case study includes the explicit limitation');
      assert(await dialog.getByRole('link', { name: 'View on GitHub' }).getAttribute('href') === 'https://github.com/fadawkas/agentic-ai-helpline', 'Flagship case study links to its repository');
      assert(await dialog.getByRole('link', { name: 'Live Demo' }).count() === 0, 'No unconfirmed live demo is advertised');
    }
    assert(await page.evaluate(() => document.activeElement.getAttribute('aria-label') === 'Close dialog'), 'Dialog receives keyboard focus');
    const scrollBody = dialog.locator('.project-dialog-scroll');
    const headerStayedFixed = await dialog.evaluate((element) => {
      const header = element.querySelector('h2');
      const body = element.querySelector('.project-dialog-scroll');
      const before = header.getBoundingClientRect().top;
      body.scrollTop = body.scrollHeight;
      return header.getBoundingClientRect().top === before;
    });
    assert(await scrollBody.evaluate((element) => element.scrollTop > 0), 'Case study body scrolls independently');
    assert(await dialog.evaluate((element) => element.scrollTop === 0), 'Dialog shell does not scroll');
    assert(headerStayedFixed, 'Case study header stays fixed while reading');
    assert(await scrollBody.evaluate((element) => element.scrollWidth <= element.clientWidth), 'Case study body has no horizontal overflow');
    assert(await dialog.getByRole('heading', { name: 'How the system works' }).count() === 0, 'Case study does not show a system flow');
    if (index === 0) {
      const engineering = dialog.locator('section').filter({ has: page.getByRole('heading', { name: 'Engineering approach' }) }).locator('p');
      assert(await engineering.evaluate((element) => globalThis.getComputedStyle(element).textAlign === 'justify'), 'Engineering paragraph remains justified');
    }
    assert(await page.locator('#root').evaluate((element) => element.inert), 'Background is inert while case study is open');
    await page.keyboard.press('Shift+Tab');
    assert(await page.evaluate(() => !!document.activeElement.closest('[role="dialog"]') && document.activeElement.tagName === 'A'), 'Reverse Tab wraps inside dialog');
    await page.keyboard.press('Tab');
    assert(await page.evaluate(() => document.activeElement.getAttribute('aria-label') === 'Close dialog'), 'Forward Tab wraps to close button');
    await page.keyboard.press('Escape');
    await dialog.waitFor({ state: 'detached' });
    await page.waitForTimeout(30);
    assert(await opener.evaluate((element) => element === element.ownerDocument.activeElement), 'Focus returns to the case-study opener');
    assert(!await page.locator('#root').evaluate((element) => element.inert), 'Background is restored after closing');
  }

  const firstOpener = cards.first().getByRole('button', { name: /^View case study:/ });
  await firstOpener.click();
  await page.keyboard.press('Escape');
  await firstOpener.focus();
  await page.keyboard.press('Enter');
  await page.waitForTimeout(350);
  assert(await page.getByRole('dialog').count() === 1, 'Rapid dismissal and reopening does not clear the selected project');
  await page.keyboard.press('Escape');
  await page.getByRole('dialog').waitFor({ state: 'detached' });

  const firstPreview = cards.first().getByRole('region');
  await firstPreview.getByRole('button', { name: /^Next / }).click();
  assert(await cards.first().locator('figcaption').innerText().then((text) => text.includes('Image 2 of 3')), 'Carousel pointer action updates visible image status');
  await firstPreview.getByRole('button', { name: /^Next / }).click();
  assert(await cards.first().locator('figcaption').innerText().then((text) => text.includes('Image 3 of 3')), 'Flagship carousel reaches the third screenshot');
  await firstPreview.getByRole('button', { name: /screenshot 1$/ }).click();
  assert(await cards.first().locator('figcaption').innerText().then((text) => text.includes('Image 1 of 3')), 'Carousel dot returns to first image');

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseURL);
  const menu = page.getByRole('button', { name: 'Open menu', exact: true });
  await menu.click();
  assert(await page.getByRole('button', { name: 'Close menu', exact: true }).getAttribute('aria-expanded') === 'true', 'Mobile menu exposes expanded state');
  await page.keyboard.press('Escape');
  assert(await menu.getAttribute('aria-expanded') === 'false', 'Escape dismisses mobile navigation');
  await menu.click();
  await page.locator('#mobile-navigation').getByRole('link', { name: 'Contact', exact: true }).click();
  const contactY = await page.evaluate(() => scrollY);
  await page.waitForTimeout(120);
  assert(contactY > 0 && Math.abs(await page.evaluate(() => scrollY) - contactY) < 2, 'Reduced-motion menu navigation is immediate');
  assert(await menu.getAttribute('aria-expanded') === 'false', 'Choosing a destination closes mobile navigation');

  const email = page.locator('#contact a[href^="mailto:"]');
  assert(await email.getAttribute('href') === 'mailto:oemarkid@gmail.com', 'Email destination is preserved');
  assert(await page.locator('#contact a[href^="https://wa.me/"]').getAttribute('href') === 'https://wa.me/6285186861325', 'WhatsApp destination is preserved');
  const cv = await page.request.get(`${baseURL}/Fadawkas_CV.pdf`);
  assert(cv.ok() && cv.headers()['content-type'].includes('application/pdf'), 'CV is served as a PDF');

  await page.getByRole('link', { name: 'Back to top', exact: false }).click();
  await page.getByRole('button', { name: 'Switch to light mode', exact: true }).click();
  assert(!await page.locator('html').evaluate((element) => element.classList.contains('dark')), 'Light theme can be activated');
  await page.reload();
  assert(!await page.locator('html').evaluate((element) => element.classList.contains('dark')), 'Theme choice persists after reload');
  await page.getByRole('button', { name: 'Switch to dark mode', exact: true }).click();
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  return checks;
}
