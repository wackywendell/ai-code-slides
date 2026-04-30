# AI and Good Code

A [Slidev](https://sli.dev) deck.

This talk is about the tension between two things everyone has noticed about AI-generated code: it's astonishing, and it's often terrible. And that that's where good engineering comes in: the discipline of building good interfaces and abstraction layers to reduce the context needed for subsequent changes.

Tasks are defined in [mise.toml](mise.toml) and run via [mise](https://mise.jdx.dev).

## Develop

```sh
mise run dev
```

Opens the deck at <http://localhost:3030> with hot reload — saving [slides.md](slides.md) updates the browser instantly. Equivalent to `slidev --open`.

Useful keystrokes in the browser:

| Key           | Action                             |
| ------------- | ---------------------------------- |
| `→` / `Space` | Next click or slide                |
| `←`           | Previous                           |
| `F`           | Fullscreen                         |
| `O`           | Slide overview (jump to any slide) |
| `D`           | Toggle dark mode                   |
| `G`           | Go to slide by number              |

Or mouse over the bottom left to see a toolbar.

Other useful URLs while the dev server is running:

- <http://localhost:3030/presenter> — presenter mode, with speaker notes (the `<!-- … -->` blocks in [slides.md](slides.md)) and a next-slide preview
- <http://localhost:3030/overview> — scrollable grid of every slide

## Export

```sh
mise run export    # → slides-export.pdf
mise run build     # → dist/ (static SPA)
```

For PPTX, run `slidev export --format pptx` directly.

## Layout

- [slides.md](slides.md) — deck content
- [components/](components/) — Vue components (`Callout`, `Prompt`, `Claude`, `StepRow`, `Takeaway`)
- [layouts/](layouts/) — custom Slidev layouts (`stage`)
- [style.css](style.css), [uno.config.ts](uno.config.ts) — styling

## Slidev primer

The whole deck lives in [slides.md](slides.md). Slides are separated by `---` on its own line. Each slide can start with its own YAML frontmatter for per-slide options (`layout: section`, `class: text-center`, etc.).

Inside a slide:

- **Markdown** for prose, lists, headings, code blocks.
- **Vue components** like `<Callout>`, `<Prompt>`, `<Claude>` are imported automatically from [components/](components/) — just use them inline.
- **`<v-click>…</v-click>`** wraps content that should appear on the next click during a presentation.
- **UnoCSS utility classes** (`text-2xl`, `mt-6`, `grid grid-cols-2`, etc.) work directly in `class="…"` — see [uno.config.ts](uno.config.ts) for project shortcuts.
- **HTML-style comments** (`<!-- … -->`) become speaker notes in presenter mode.

For anything beyond this, the Slidev docs at <https://sli.dev> are excellent.
