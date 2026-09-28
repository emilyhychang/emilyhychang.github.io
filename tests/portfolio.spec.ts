import { test, expect } from "@playwright/test";

test("case studies preserve scroll and support history, focus and next project", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  const trigger = page.locator("#watchtogether .case-link");
  await trigger.scrollIntoViewIfNeeded();
  await trigger.focus();
  await expect(page.locator("#watchtogether").locator("..")).toHaveCSS(
    "transform",
    "none",
  );
  const scroll = await page.evaluate(() => window.scrollY);
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(page).toHaveURL(/#\/work\/watchtogether$/);
  await expect(page.locator("body")).toHaveCSS("position", "fixed");
  await page.keyboard.press("Shift+Tab");
  expect(
    await page.evaluate(() => !!document.activeElement?.closest("dialog")),
  ).toBe(true);
  await dialog
    .getByRole("button", {
      name: "Why synchronized playback first?",
      exact: false,
    })
    .click();
  await expect(
    dialog.getByRole("button", {
      name: "Why synchronized playback first?",
      exact: false,
    }),
  ).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await expect
    .poll(() => page.evaluate(() => window.scrollY))
    .toBeCloseTo(scroll, 0);
  await page.goForward();
  await expect(dialog).toBeVisible();
  await dialog
    .getByRole("button", { name: "Next project Formula 1 Explorer" })
    .click();
  await expect(page).toHaveURL(/#\/work\/f1$/);
  await expect(
    dialog.getByRole("heading", { name: "Formula 1 Explorer", exact: true }),
  ).toBeVisible();
  await page.goBack();
  await expect(dialog).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("direct links open, close, and reload without a server fallback", async ({
  page,
}) => {
  for (const id of [
    "watchtogether",
    "f1",
    "cornerstone",
    "lma",
    "healthcare",
    "soft-drinks",
  ]) {
    await page.goto(`/#/work/${id}`);
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.reload();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.getByRole("button", { name: "Close case study" }).click();
    await expect(page.getByRole("dialog")).toHaveCount(0);
    await expect(page).toHaveURL(/#work$/);
  }
});

test("command search supports keyboard selection, empty results and project opening", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("button", { name: "Search portfolio" }),
  ).toBeVisible();
  await page.keyboard.press("Control+k");
  const input = page.getByRole("combobox");
  await expect(input).toBeFocused();
  await input.fill("unmatched text");
  await expect(page.getByRole("dialog").getByRole("status")).toContainText(
    "No matches",
  );
  await input.fill("f1");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("dialog", { name: "Formula 1 Explorer", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Search portfolio" }).click();
  await input.fill("resume");
  await expect(page.getByRole("option", { name: /Resume/ })).toHaveAttribute(
    "aria-disabled",
    "false",
  );
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Search portfolio" }),
  ).toBeFocused();
});

test("preview playback, slide controls and relevance lens work", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Play demo" }).click();
  await expect(page.getByRole("button", { name: "Pause demo" })).toBeVisible();
  await expect
    .poll(() =>
      page
        .getByRole("progressbar", { name: "Demo playback" })
        .getAttribute("aria-valuenow"),
    )
    .not.toBe("0");
  await page.getByRole("button", { name: "Pause demo" }).click();
  await page
    .getByRole("button", { name: "Next presentation slide", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "[Add research insight]" }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Previous presentation slide" })
    .click();
  await expect(
    page.getByRole("heading", { name: "Making sense of what’s next." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Marketing", exact: true }).click();
  await expect(page.locator(".is-dimmed")).toHaveCount(4);
  await expect(page.locator("article")).toHaveCount(6);
  await page.getByRole("button", { name: "All", exact: true }).click();
  await expect(page.locator(".is-dimmed")).toHaveCount(0);
});

test("mobile menu, full-screen dialog and responsive widths", async ({
  page,
}) => {
  for (const width of [375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.goto("/#/work/lma");
    await expect(page.getByRole("dialog")).toBeVisible();
    expect(
      await page
        .locator(".case-scroll")
        .evaluate((element) => element.scrollWidth <= element.clientWidth),
    ).toBe(true);
  }
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "Menu +" }).click();
  await page.getByRole("link", { name: "About", exact: true }).click();
  await expect(page.getByRole("button", { name: "Menu +" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await page.getByRole("button", { name: "Menu +" }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Menu +" })).toBeFocused();
});

test("reduced motion retains content and disables decorative movement", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".hero-line").first()).toHaveCSS("opacity", "1");
  await expect(page.locator(".workflow-indicator")).toHaveCount(0);
  await page.getByRole("button", { name: "Search portfolio" }).click();
  await page.getByRole("combobox").fill("f1");
  await expect(page.locator(".palette-racer")).toHaveCount(0);
});

test("each lens reorders all six projects and All restores the default order", async ({
  page,
}) => {
  await page.goto("/");
  const expected = {
    Product: [
      "watchtogether",
      "cornerstone",
      "f1",
      "soft-drinks",
      "lma",
      "healthcare",
    ],
    Engineering: [
      "f1",
      "watchtogether",
      "lma",
      "healthcare",
      "cornerstone",
      "soft-drinks",
    ],
    Data: [
      "healthcare",
      "f1",
      "soft-drinks",
      "lma",
      "cornerstone",
      "watchtogether",
    ],
    Marketing: [
      "lma",
      "soft-drinks",
      "cornerstone",
      "f1",
      "watchtogether",
      "healthcare",
    ],
    Research: [
      "soft-drinks",
      "healthcare",
      "cornerstone",
      "f1",
      "watchtogether",
      "lma",
    ],
    All: [
      "watchtogether",
      "f1",
      "cornerstone",
      "lma",
      "healthcare",
      "soft-drinks",
    ],
  };
  for (const [lens, order] of Object.entries(expected)) {
    const button = page.getByRole("button", { name: lens, exact: true });
    await button.click();
    await expect(button).toHaveAttribute("aria-pressed", "true");
    await expect
      .poll(() =>
        page
          .locator("article")
          .evaluateAll((items) => items.map((item) => item.id)),
      )
      .toEqual(order);
    await expect(button).toBeFocused();
  }
  await page.getByRole("button", { name: "Search portfolio" }).click();
  await page.getByRole("combobox").fill("soft drinks");
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("dialog", { name: "Soft Drinks & Behavior" }),
  ).toBeVisible();
});
