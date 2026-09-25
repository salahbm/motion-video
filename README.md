# Silka motion assets

This workspace collects the visual and audio assets used to build Silka motion videos and social reels.

## Project contents

| Folder | Purpose |
|---|---|
| [`public/brand/`](public/brand/) | Silka brand brief and logo assets. |
| [`public/fonts/`](public/fonts/) | 74 font families / 103 font files, kept in family folders. |
| [`public/songs/`](public/songs/) | Downloaded music grouped by mood and reel use case. |
| [`public/sound-effects/`](public/sound-effects/) | UI, transition, whoosh, riser, camera, gear, money, and pop sounds. |
| [`.agents/`](.agents/) | Local Remotion and motion-video skills plus inspiration references. |
| [`src/`](src/) | Application/composition source area. |

## Remotion starter

This repository is a Remotion project with a five-second Silka intro in landscape and portrait formats. The intro uses the approved mark and one line from the brand brief. Its type and palette are choices for this sample title card, not product UI rules.

```bash
bun install
bun run dev
```

Remotion Studio lists `SilkaIntroLandscape` (1920 × 1080) and `SilkaIntroPortrait` (1080 × 1920), both at 30 fps. To export either one:

```bash
bun run render:landscape
bun run render:portrait
```

Outputs go to the ignored `out/` directory. Run `bun run typecheck` after editing composition code. Assets under `public/` are available to Remotion through `staticFile()`, using paths relative to `public/` such as `staticFile('brand/logo_light.png')`. Select music and sound effects through their manuals and check usage rights before publishing.

If Remotion cannot download its bundled Chrome, pass a locally installed Chrome executable to a render command, for example `bun run render:landscape --browser-executable='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'` on macOS.

### Remotion UI components

[RemotionUI](https://remotionui.com/docs/components/browse) is an optional registry of source components for Remotion. Browse it by the motion needed for a scene, then install only selected components into this project with its CLI. For example, a later tender-search scene may benefit from `search-results-populate`, while `kanban-move` could support a tasks beat. Adapt any copied component to authentic Silka UI and approved content. No RemotionUI component is required by this starter.

When a component is needed, initialize the registry in this existing project, add the chosen component, and validate its setup:

```bash
bunx remotion-ui@latest init --existing --no-agent-skill
bunx remotion-ui@latest add kanban-move
bunx remotion-ui@latest doctor
```

## Manuals

- [Brand information](public/brand/brand-info.md)
- [Font manual](public/fonts/FONTS_MANUAL.md)
- [Music/Reels manual](public/songs/MUSIC_REELS_MANUAL.md)
- [Sound-effects manual](public/sound-effects/SOUND_EFFECTS_MANUAL.md)
- [Agent instructions](AGENTS.md)

## Inspiration

The KREE8 storyboard and Remotion plan is stored as reference material here:

[KREE8 motion storyboard inspiration](.agents/inspiration/KREE8_motion_storyboard_and_remotion_plan.md)

It describes visual grammar and proposed motion approaches. It is inspiration, not a copy target or executable project instruction.

## Working principles

- Build the story around a real Silka workflow: discover an opportunity, understand it, organize the workspace, collaborate, and become ready.
- Use authentic or approved product UI and truthful data.
- Keep social compositions readable on a phone.
- Choose music, sound effects, and fonts through their manuals rather than by filename alone.
- Check font licenses and music usage rights before publishing commercial or client work.
- Keep asset names and manuals synchronized after reorganizing files.
