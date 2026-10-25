# Portfolio visual hierarchy QA — 25 October 2026

final result: passed

## Target and evidence

Source visual truth: `/Users/marwan/.codex/visualizations/2026/10/05/01a10e15-4197-7733-8235-446e65fca381/visual-redesign/design-reference.png` (selected visual editorial grid). The user delegated the design decision; the existing brand palette and original project work remain the grounding source. This is a redesign, not a pixel-for-pixel clone of generated project artwork.

Implementation: `http://127.0.0.1:4173/projects`.

- Desktop: `/Users/marwan/.codex/visualizations/2026/10/05/01a10e15-4197-7733-8235-446e65fca381/visual-redesign/12-after-work-final.jpg`, 1440 × 1100 CSS pixels and image pixels, density 1.
- Reference: 1435 × 1096 pixels, normalized to 1440 × 1100 for comparison (aspect difference below 0.1%).
- Full comparison: `/Users/marwan/.codex/visualizations/2026/10/05/01a10e15-4197-7733-8235-446e65fca381/visual-redesign/comparison-final.jpg`, 2880 × 1144 including a 44px label band.
- Focused project-card comparison: `/Users/marwan/.codex/visualizations/2026/10/05/01a10e15-4197-7733-8235-446e65fca381/visual-redesign/comparison-cards.jpg`, 2880 × 540.
- Mobile: `/Users/marwan/.codex/visualizations/2026/10/05/01a10e15-4197-7733-8235-446e65fca381/visual-redesign/10-after-work-mobile.jpg`, 390 × 844.
- Narrow mobile: `/Users/marwan/.codex/visualizations/2026/10/05/01a10e15-4197-7733-8235-446e65fca381/visual-redesign/14-after-small-mobile.jpg`, 320 × 740.
- Tablet: `/Users/marwan/.codex/visualizations/2026/10/05/01a10e15-4197-7733-8235-446e65fca381/visual-redesign/15-after-work-tablet.jpg`, 768 × 1024.
- Case-study entry and decisions: `06-after-case-intro.jpg`, `07-after-decisions.jpg` in the same evidence folder.
- Brand collection: `13-after-archive.jpg` in the same evidence folder.

All comparisons use the default light palette. The Work comparison uses All work selected at page start. Screenshots were captured with the in-app browser and inspected. Separate reference/implementation images were also combined into one input for full-view and focused review.

## Comparison history and fixes

1. **[P2] Work appeared too far below the fold.** The first implementation (`04-after-work-first.jpg`, `comparison-first.jpg`) added an extra eyebrow and excess opening space. Removed the redundant line, reduced top spacing and card height. The final desktop capture puts the visual collection immediately below the heading and filters.
2. **[P2] Tall mobile screens became too narrow when fitted in full.** Changed the in-page mobile preview to a readable, top-cropped viewport. The lightbox retains the original artwork and its scrollable full view. WeCare's screen selection, preview, zoom, and gallery navigation were tested at 390px.
3. **[P2] A decorative portrait watermark overflowed at 320px.** Reduced the narrow-screen mark and headline sizes. Post-fix DOM checks show no horizontal overflow; `14-after-small-mobile.jpg` confirms the result.
4. **[P2] Small role captions weakened recruiter scanning on mobile.** Standardized the role line at 13px and weight 600 for the role. The final mobile capture shows the role and project stage directly under each image.

No actionable P0/P1/P2 finding remains in the checked states.

## Required fidelity surfaces

- **Fonts and typography:** Urbanist with Bodoni Moda italics; both verified loaded through `document.fonts.check`. Large titles, 13px role lines, and clear section headings establish a visible reading order. The role remains distinct from project stage.
- **Spacing and layout:** Two-column image grid on desktop/tablet; one column on mobile. Shared gutters, light dividers, and restrained image corners replace repeated bordered prose blocks. The home collection was moved ahead of the identity strip so work is reached sooner.
- **Colors and tokens:** Original paper `#f5f1e8` and ink `#151515` retained; oxblood accent and project-specific surfaces provide emphasis. Active filters, section links, and focus states are explicit.
- **Images and assets:** Original screenshots and source logos are used. Generated mock screens were not substituted for real work. Full-resolution originals remain in the zoom viewer; 50 lightweight archive previews reduce their combined transfer size from 115.5 MiB to 14.8 MiB (87%). Source images are preserved. Corrected two IEEE polo captions that had been mislabeled as badges.
- **Copy and content:** Clear role/stage distinction for live client work, handoff, prototypes, and independent exploration. Work default main content falls from 388 to about 140 visible words; Goldera from 742 to about 235 with details closed. Full decision rationale is available on demand. No invented impact figures were added.

## Interaction verification

- All 13 public routes loaded with the expected heading, no visible broken images, and no horizontal overflow at 1280px.
- Three unknown/prototype-property routes rendered the intended 404 screen without runtime errors.
- Twelve responsive checks: Home, Work, WeCare, and Moon at 320, 390, and 768px; all without horizontal overflow.
- Work filters return the correct sets (10 total, 5 product, 2 websites, 3 visual). Filter state is stored in the URL; an old creative-archive fragment still selects visual work.
- Case-study section links land below the sticky navigation; the active section updates with scroll.
- Screen selectors update their pressed state and corresponding image.
- Image preview opens with Enter. Ten Tab presses remain in the dialog. Zoom reaches 150%; fit-width resets it; arrow navigation changes the gallery item. Escape closes the dialog, restores focus, clears inert isolation, and unlocks scroll.
- Mobile menu focus containment and Escape/focus restoration passed.
- IEEE expands from 9 selected works to all 25 and filters to the selected group. Its keyboard image preview and focus restoration passed.
- Scroll reveal progression observed from 4 revealed / 6 pending cards to 8 revealed / 2 pending after scrolling. Page progress updates. The motion implementation preserves native scroll, uses passive listeners and requestAnimationFrame, and respects reduced motion.
- No warning/error console messages in the verification pass.
- Production build and 14 automated tests passed; diff whitespace check passed.

## Intentional differences and limits

The structural grid, palette, typography hierarchy, and sparse copy follow the selected reference. Actual SmartMeet/WeCare interfaces and truthful prototype labels intentionally replace the generated mock's fictional interfaces and client labels. The existing working header retains CV, availability, and navigation.

This is not a full screen-reader or hardware-device accessibility audit, a production performance benchmark, or proof of improved recruiter conversion. Reduced-motion behavior is supported in CSS and event handling; OS-level preference switching was not automated. Original high-resolution images still cost more to load when a visitor explicitly opens them.

## Implementation checklist

- [x] Source/current flow captured and reviewed.
- [x] Visual collection and case-study hierarchy implemented.
- [x] Real assets and lightweight previews placed.
- [x] Responsive and keyboard checks completed.
- [x] P2 findings repaired and verified.
- [x] Build and automated tests pass.
- [x] Reviewable implementation ready for release.
