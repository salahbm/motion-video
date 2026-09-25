# KREE8-inspired SaaS motion: annotated storyboard + Remotion production plan

Prepared from the user-uploaded `KREE8 MOTION part 2K_20-01-26 v3_3.mp4` (87.875s; 2560×1440; 24 FPS). **Reference timestamps are approximate visual boundaries** from sampled frames, and **the numerical motion settings are proposed implementation parameters**, not claimed measurements of the creator's source timeline or software.

## What to borrow / what not to copy

Borrow the **visual grammar**: chat → action → product UI → animated message → product examples → recognizable brand and CTA. Use new copy, authentic app screens, own font/palette/mark, owned visual assets, and truthful customer/product data. The reference is a 16:9 agency showcase; the recommended social version below is a redesigned 9:16 narrative, not a cropped copy.

## Reference storyboard: six requested animation families

| Reference time | On-screen observation | Repeatable visual beat | Production approach |
| --- | --- | --- | --- |
| 00:00–00:07, 00:18–00:26, 00:69–00:72 | White/blue chat bubbles, typing dots, animated cursor/input, link/published output, dark completion chat | Ask → typing → short answer → concrete result | React bubble components, frame-based dot cycle, cursor path, one visible outcome. |
| 00:09–00:15 | Tall website plane at a visible angle with floating UI pieces; apparent camera moves down web page | Product website becomes a spatial stage | CSS perspective / 2.5D camera rig with sliced app images or recreated UI. |
| 00:07–00:09, 00:63–00:69 | Light/dark Kanban columns, task cards and cursors, movement into Completed | Work visibly moves from state A to state B | Cards as semantic data; one in-flight card layer follows interpolated path; final state stays visible. |
| 00:37–00:47, 00:76–00:83 | Short white/dark copy; green words, slim caret-like vertical accent, soft colored glow, alternating gradient and dark fields | One phrase lands, one key term becomes visual anchor | Word/chunk reveals, sharp text over blurred glow duplicate, hold message for phone-scale reading. |
| 00:50–00:57, 00:72–00:76 | Overlapping web cards and profile/review-like cards with different apparent depth and camera motion | Broad capability → single featured outcome | Layered cards, staggered fan-out, parallax and selected card promotion. Use approved genuine proof only. |
| 00:26–00:35, 00:83–00:88 | Brand text, visible vector-circle/curve construction, logo appearance and a minimal final contact end card | Brand introduction and recognizable exit | Approved SVG mark, path drawing / mask or compatible morph, concise CTA hold. |

Note: visible curves around a logo do not prove true path-to-path morphing. A tilted website does not prove an actual 3D render; CSS perspective can reproduce the visible style.

## Proposed social reel: 30 seconds, 1080×1920, 30 FPS

**Creative target:** a short SaaS journey from a relatable customer problem to a real product action and CTA. Replace the placeholders in brackets with approved customer-specific data. All times/frames here are NEW motion specs for Remotion.

### Shot 01 — Opening hook | 00:00.0–00:02.5 | frames 0–74

- Story: `[Short, truthful problem]` displayed in 3–7 words, over a light blue/green gradient. One incoming chat bubble appears below it.
- Layout: hero text within x=90–990 and y=430–900; chat bubble at x=90–880, y=980–1150; keep platform UI overlays away from copy.
- Proposed keys: f0 background visible; f0–10 headline y+35→0, opacity 0→1; f12–28 bubble scale .90→1 and y+38→0; f28–65 settled/readable. f65–74 bubble shifts toward center to lead to next shot.
- Easing: headline ease-out; bubble spring stiffness 170/damping 22. Transition: visual match to next chat stack (no disorienting full-screen effect).
- Acceptance: hook legible on a phone without audio; only one main focal point.

### Shot 02 — Animated chat | 00:02.5–00:06.0 | frames 75–179 (local 0–104)

- Story: approved user question → 3-dot typing → short product response `[actual answer]`.
- Layout: white incoming on left, blue outgoing right; max bubble width 780px; gradient softly static or drifting.
- Keys LOCAL: f0–11 question rises 38px + scales .90→1; f13–37 typing dot scale .70→1 staggered 4f; f38–52 outgoing appears; f53–77 cursor moves in 2–3 waypoints toward send or link; f78–90 click / input success; f90–104 hold.
- Easing: mild bubble spring; cursor smooth cubic path; a click ring expands ≤22px over 5f. Avoid inventing a real chat feature if product does not have one: present this as a *customer conversation framing device*, not app UI.
- Transition: blue bubble expands/crops into board background at f98–104.
- Acceptance: the final response reads as a complete sentence and cursor aligns with the target.

### Shot 03 — Dashboard / Kanban | 00:06.0–00:10.0 | frames 180–299 (local 0–119)

- Story: `[Task/document]` advances through authentic product states; counts/statuses match product.
- Layout: 9:16 focuses on one full column + partial adjacent column, pans with card; do not shrink 3 desktop columns into tiny text.
- Keys LOCAL: f0–14 board y+45→0, opacity 0→1; f15–28 headers/card stagger; f29–45 cursor approaches and selects; f46–77 detached card floats y−24px across columns, scale 1→1.045; f78–88 card lands scale 1.045→.98→1; f89–100 destination changes and check appears; f100–119 final state hold.
- Easing: curve-assisted travel with ease-in-out; damped landing spring. Keep one actual traveling card; do not duplicate it at origin/destination during flight.
- Transition: target card grows into a site panel framing Shot 04.
- Acceptance: viewer can tell what changed in the app.

### Shot 04 — 2.5D website camera | 00:10.0–00:15.0 | frames 300–449 (local 0–149)

- Story: demonstrate `[one genuine workflow + result]` across 2–3 readable authentic UI details.
- Layout: hero browser plane at x=120–960 with cropped readable content; floating badges over sides; backdrop stays uncluttered.
- Keys LOCAL: f0–15 plane opacity 0→1, scale .88→.96, rotateX 22°→16°, y+140→0. f15–100 virtual rig drifts vertically so focus changes; scale .96→1.15, rotateX 16°→7°. f55–100 2–4 detail tags stagger at 6f; f100–130 flatten to 0°, center actual outcome; f130–149 hold.
- Easing: smooth cubic camera, settle spring for selected feature. Proposed perspective 1100–1600px for initial tests; not a source measurement.
- Transition: the selected UI component becomes flat and is used as the background mask for next title.
- Acceptance: product interface visibly belongs to the customer; title/CTA large enough to understand.

### Shot 05 — Kinetic promise | 00:15.0–00:19.0 | frames 450–569 (local 0–119)

- Story: `[one verifiable benefit]`; animate emphasis on ONE keyword.
- Layout: sharp white/dark hero text over dark or vibrant gradient; 80–116px headline (1080-wide starting range); accent word green or user's brand color. Hold a secondary blurred text glow behind sharp letters.
- Keys LOCAL: f0–10 initial phrase opacity 0→1/y+35→0; f10–23 hold; f24–32 phrase exits while next enters f28–42; f42–62 highlighted word unmasked left→right with 3–5px vertical caret; f55–74 accent glow reaches full subtle strength; f75–100 hold; f100–119 transition.
- Easing: clear reveal, not jitter or constant bouncing. Keep sentences short; no text reflow between animation states.
- Acceptance: message is understandable at 25% viewport size.

### Shot 06 — Feature/portfolio collage | 00:19.0–00:23.5 | frames 570–704 (local 0–134)

- Story: show 3 real features or example screens; feature A becomes selected hero.
- Layout: one centered card plus 2 partially overlapping depth cards; rounded screenshots, high-resolution crops, soft shadows, card labels short enough to read.
- Keys LOCAL: f0–15 center card scale .80→1, y+100→0; f14–38 side cards fan to x−350/+380 and −9°/+7°; f39–85 rig pan x−120→+135 and scale 1→1.16 while layers move .65×/1.25× relative to camera; f65–100 hero grows .92→1.10, rotation→0, other card opacity→.65; f100–120 hold, f120–134 camera zoom into hero or pull out into brand color.
- Easing: staggered ease-out and smooth pan; reduce motion if product UI is text-heavy.
- Acceptance: at least the selected UI/feature is readable and genuine.

### Shot 07 — Logo identity | 00:23.5–00:26.5 | frames 705–794 (local 0–89)

- Story: approved brand icon → wordmark; no counterfeit or invented SVG.
- Keys LOCAL: f0–12 dark/brand background; f10–35 optional thin SVG outline draws using strokeDashoffset; f26–53 mark reveals using actual matching SVG paths, mask or crossfade; f45–68 wordmark opacity 0→1/y+22→0; f68–89 settled logo.
- Easing: precise restrained spring; blur only behind foreground logo; no need for an expensive 3D object unless user explicitly wants it.
- Acceptance: approved symbol, aspect ratio and typography are intact.

### Shot 08 — CTA / outro | 00:26.5–00:30.0 | frames 795–899 (local 0–104)

- Story: `[Brand]` + `[one action]` + `[real URL]`.
- Layout: URL and CTA in central safe area; no tiny footnote; background subdued so copy has contrast.
- Keys LOCAL: f0–12 CTA fades in; f12–30 subtle button rise/shadow; f30–104 static readable hold; optionally one small glow pulse around f45–60, do not distract from URL.
- Acceptance: CTA visible ≥2 seconds and exact domain typed correctly.

## Global motion / composition settings (proposed)

| Variable | Starting value / decision |
| --- | --- |
| Primary social format | 1080×1920, 30 FPS, 900 total frames |
| Other outputs | 1080×1350 (4:5), 1080×1080 (1:1), 1920×1080 (16:9), each with responsive scene layout and recrop |
| Title safe zone | Side margins ~90px; primary CTA/copy should avoid outer top/bottom UI overlay regions; verify on target app |
| Motion easing | Basic ease-out entrances, ease-in-out camera motion, mildly damped springs for card/bubble landings |
| Scene transitions | 8–15 frames where overlap is intentional; otherwise direct cuts; total timeline must account for overlap |
| Timing source | `useCurrentFrame()` + `useVideoConfig().fps`, local sequence time, clamped frame interpolations |
| Sound | Approved music; optional whoosh on major camera changes, pop on chat/card, soft impact on logo; sync to supplied beat map rather than making one up |
| Fidelity | Real approved screenshots, typed React UI when possible, crisp text, shadows/glow behind sharp layers |
| Review | Render critical stills, transitions, full MP4 and phone-scale preview; inspect then adjust |

## Reusable skills and practical instructions

Download the companion `saas-motion-reels` agent skill folder and copy it to `.claude/skills/saas-motion-reels/` for Claude Code or `.agents/skills/saas-motion-reels/` for Codex. The main `SKILL.md` routes to the six technique recipes, one reference observation sheet, the storyboard workflow and Remotion production checklist. It is intentionally compatible with either coding agent. Also consider the official Remotion agent skills: `npx skills add remotion-dev/skills` (see https://www.remotion.dev/docs/ai/skills).

Example next prompt:

> Use the `saas-motion-reels` skill and the KREE8-inspired storyboard. Produce a 30-second 1080×1920 Remotion reel for [real product]. Inspect this repo and use existing brand assets. First output a shot plan with exact frame ranges and the assets required. Then implement six animation techniques (chat, Kanban, perspective website, kinetic type, portfolio, SVG logo) as parameterized TypeScript scene components. The supplied video is a motion reference only; do not copy its branding or invent product capabilities. Preview/render key frames and the final MP4, report what you actually inspected, and revise any clipped or unreadable scenes. Use placeholders for missing approved assets and claims.
