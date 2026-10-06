import { test, expect } from "@playwright/test";

test("case studies preserve scroll and support history, focus and next project", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/#/projects");
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
    "pantrypal",
    "smart-basket",
  ]) {
    await page.goto(`/#/work/${id}`);
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.reload();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.getByRole("button", { name: "Close case study" }).click();
    await expect(page.getByRole("dialog")).toHaveCount(0);
    await expect(page).toHaveURL(/#\/projects$/);
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
  await page.goto("/#/projects");
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
    page.getByRole("heading", {
      name: "One-time visitors and returning learners.",
    }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Previous presentation slide" })
    .click();
  await expect(
    page.getByRole("heading", { name: "Finding the right pottery class." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Marketing", exact: true }).click();
  await expect(page.locator(".is-dimmed")).toHaveCount(6);
  await expect(page.locator("article")).toHaveCount(8);
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

test("each lens reorders all eight projects and All restores the default order", async ({
  page,
}) => {
  await page.goto("/#/projects");
  const expected = {
    Product: [
      "smart-basket",
      "watchtogether",
      "pantrypal",
      "cornerstone",
      "f1",
      "soft-drinks",
      "lma",
      "healthcare",
    ],
    Engineering: [
      "f1",
      "pantrypal",
      "watchtogether",
      "lma",
      "healthcare",
      "cornerstone",
      "soft-drinks",
      "smart-basket",
    ],
    Data: [
      "healthcare",
      "f1",
      "pantrypal",
      "soft-drinks",
      "lma",
      "cornerstone",
      "watchtogether",
      "smart-basket",
    ],
    Marketing: [
      "lma",
      "soft-drinks",
      "cornerstone",
      "f1",
      "watchtogether",
      "healthcare",
      "pantrypal",
      "smart-basket",
    ],
    Research: [
      "smart-basket",
      "soft-drinks",
      "healthcare",
      "pantrypal",
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
      "pantrypal",
      "smart-basket",
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

test("home gallery supports trackpad, wheel, keyboard and case-study return", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".projects")).toHaveCount(0);
  await expect(page.locator(".gallery-card")).toHaveCount(8);
  const rail = page.getByRole("region", {
    name: "Project previews",
    exact: true,
  });
  await rail.scrollIntoViewIfNeeded();
  await rail.hover();
  const y = await page.evaluate(() => window.scrollY);
  await page.mouse.wheel(300, 0);
  await expect
    .poll(() => rail.evaluate((e) => e.scrollLeft))
    .toBeGreaterThan(150);
  const horizontal = await rail.evaluate((e) => e.scrollLeft);
  await page.mouse.wheel(0, 300);
  await expect
    .poll(() => rail.evaluate((e) => e.scrollLeft))
    .toBeGreaterThan(horizontal + 100);
  expect(await page.evaluate(() => window.scrollY)).toBeCloseTo(y, 0);
  await rail.focus();
  await page.keyboard.press("Home");
  await expect.poll(() => rail.evaluate((e) => e.scrollLeft)).toBe(0);
  await page.keyboard.press("ArrowRight");
  await expect
    .poll(() => rail.evaluate((e) => e.scrollLeft))
    .toBeGreaterThan(100);
  await page.keyboard.press("End");
  await expect(
    page.getByRole("button", { name: "Next project preview" }),
  ).toBeDisabled();
  await rail.hover();
  await page.mouse.wheel(0, 250);
  await expect
    .poll(() => page.evaluate(() => window.scrollY))
    .toBeGreaterThan(y + 50);
  await rail.scrollIntoViewIfNeeded();
  await rail.focus();
  await page.keyboard.press("Home");
  const card = page.getByRole("button", {
    name: "View WatchTogether case study",
    exact: true,
  });
  await card.click();
  await expect(
    page.getByRole("dialog", { name: "WatchTogether", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(card).toBeFocused();
  await expect(rail).toBeVisible();
  await page.getByRole("link", { name: "View all projects" }).click();
  await expect(page).toHaveURL(/#\/projects$/);
  await expect(
    page.getByRole("heading", { level: 1, name: "Projects." }),
  ).toBeVisible();
  await expect(page.locator("article.project")).toHaveCount(8);
  await page.reload();
  await expect(page.locator("article.project")).toHaveCount(8);
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "About" })
    .click();
  await expect(
    page.getByRole("heading", {
      name: "I like problems that don’t come with instructions.",
    }),
  ).toBeInViewport();
});

test("gallery covers load and fit mobile and desktop", async ({ page }) => {
  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    for (const card of await page.locator(".gallery-card").all()) {
      await card.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          card
            .locator("img")
            .evaluate(
              (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
            ),
        )
        .toBe(true);
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page
      .getByRole("button", {
        name: "View Smart Basket case study",
        exact: true,
      })
      .click();
    await expect(
      page.getByRole("dialog", { name: "Smart Basket", exact: true }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator(".project-gallery-rail")).toBeVisible();
  }
});

test("Kody appears after reading, responds to a click, and resets for the next case", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#/work/lma");
  const dog = page.getByRole("button", { name: "Say hello to Kody" });
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(dog).toHaveCount(0);
  const scroller = page.locator(".case-scroll");
  await scroller.evaluate((el) => {
    el.scrollTop = (el.scrollHeight - el.clientHeight) * 0.6;
  });
  await expect(
    page.getByRole("progressbar", { name: "Case study reading progress" }),
  ).toHaveAttribute("aria-valuenow", "60");
  await expect(dog).toHaveCount(0);
  await scroller.evaluate((el) => {
    el.scrollTop = (el.scrollHeight - el.clientHeight) * 0.7;
  });
  await expect(dog).toBeVisible();
  await dog.click();
  await expect(page.getByRole("dialog").getByRole("status")).toHaveText(
    "you found kody :)",
  );
  await expect(dog).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "Hide Kody" }).click();
  await expect(dog).toHaveCount(0);
  await scroller.evaluate((el) => {
    el.scrollTop = el.scrollHeight;
  });
  await expect(dog).toHaveCount(0);
  await page
    .getByRole("button", { name: "Next project Healthcare Spending" })
    .click();
  await expect(page).toHaveURL(/healthcare$/);
  await expect(dog).toHaveCount(0);
});

test("About interests cycle through every item and wrap with keyboard input", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/#about");
  const bubble = page.locator(".interests-bubble");
  await bubble.scrollIntoViewIfNeeded();
  const expected = [
    "golf",
    "tennis",
    "reading",
    "finding new places on Yelp",
    "trying new restaurants",
    "traveling",
    "chasing sunsets",
    "birdwatching",
    "my dog, Kody - try to find him on this site :)",
  ];
  await bubble.focus();
  for (const interest of expected) {
    await expect(bubble.locator(".interests-value")).toHaveText(interest);
    await page.keyboard.press("Enter");
  }
  await expect(bubble.locator(".interests-value")).toHaveText("golf");
  await expect(
    page.getByRole("heading", { name: "In my free time" }),
  ).toHaveCount(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

test("About interests automatically slide upward and keep the compact desktop alignment", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/#about");
  const bubble = page.locator(".interests-bubble");
  await bubble.scrollIntoViewIfNeeded();
  await page.mouse.move(0, 0);
  const initial = await bubble.locator(".interests-value").last().textContent();
  await expect
    .poll(async () => bubble.locator(".interests-value").last().textContent(), {
      timeout: 4000,
    })
    .not.toBe(initial);
  const alignment = await page.evaluate(() => ({
    heading: document
      .querySelector("#about-heading .muted")!
      .getBoundingClientRect().top,
    lead: document.querySelector(".about-lead")!.getBoundingClientRect().top,
    photo: document.querySelector(".about-portrait")!.getBoundingClientRect()
      .bottom,
    bubble: document.querySelector(".interests-bubble")!.getBoundingClientRect()
      .bottom,
  }));
  expect(Math.abs(alignment.heading - alignment.lead)).toBeLessThan(12);
  expect(alignment.bubble - alignment.photo).toBeLessThan(40);
  await expect(page.locator(".interests-footer")).toHaveCount(0);
});

test("all gallery covers share the same top edge", async ({ page }) => {
  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.locator(".project-gallery-rail").scrollIntoViewIfNeeded();
    const tops = await page
      .locator(".gallery-cover")
      .evaluateAll((covers) =>
        covers.map((cover) => cover.getBoundingClientRect().top),
      );
    expect(Math.max(...tops) - Math.min(...tops)).toBeLessThan(1);
  }
});
