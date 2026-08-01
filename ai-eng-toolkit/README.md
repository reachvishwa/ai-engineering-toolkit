# AI Engineering Toolkit

A public documentation site built with **MkDocs** and **Material for MkDocs**, deployed automatically to **GitHub Pages** via **GitHub Actions**.

It documents practical AI engineering work: Claude Code skills, MCP servers, Power BI, Qlik, Python, SQL, and NVIDIA NIM — all authored as plain Markdown files, with zero custom frontend framework.

**Live site:** `https://YOUR_GITHUB_USERNAME.github.io/ai-engineering-toolkit/`

---

## What this is

- A static documentation site generated from Markdown by MkDocs.
- Styled with the Material for MkDocs theme: search, dark/light mode, code copy buttons, breadcrumbs, table of contents, and Mermaid diagram support are all built in via configuration — no custom JS framework required.
- Deployed automatically: every push to `main` triggers a GitHub Actions workflow that builds the site and publishes it to GitHub Pages.
- Designed for near-zero maintenance: adding content is "add a Markdown file, add one nav entry, push."

## Technology stack

| Layer | Tool |
|---|---|
| Site generator | [MkDocs](https://www.mkdocs.org/) |
| Theme | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Content format | Markdown (with Mermaid, syntax highlighting) |

No React, Vue, Node build step, or other heavy frontend framework is used.

---

## Folder structure

```text
.
├── mkdocs.yml                  # Site configuration, theme, plugins, navigation
├── requirements.txt             # Python dependencies for building the site
├── README.md
├── .github/
│   └── workflows/
│       └── deploy.yml           # Build + deploy GitHub Actions workflow
└── docs/                        # All site content lives here
    ├── index.md                 # Landing page
    ├── about.md
    ├── claude-code/              # Claude Code skill pages
    ├── mcp/                      # MCP server pages
    ├── powerbi/                  # Power BI pages
    ├── qlik/                     # Qlik pages
    ├── python/                   # Python pages
    ├── sql/                      # SQL pages
    ├── nvidia-nim/                # NVIDIA NIM pages
    ├── llm-comparisons/           # LLM comparison pages
    ├── prompts/                   # Prompt template pages
    ├── examples/                  # End-to-end worked examples
    ├── downloads/                 # Downloads page + downloadable assets
    └── assets/                    # Images, custom CSS/JS, downloadable files
```

---

## Running locally

Requires Python 3.10+.

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_GITHUB_USERNAME/ai-engineering-toolkit.git
cd ai-engineering-toolkit

# 2. Create a virtual environment (recommended)
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run the local dev server (live-reloads on save)
mkdocs serve
```

Open `http://127.0.0.1:8000` in a browser. Edits to any file in `docs/` or `mkdocs.yml` reload automatically.

To produce a static build locally (output goes to `site/`, which is git-ignored):

```bash
mkdocs build --strict
```

`--strict` fails the build on broken internal links or navigation entries pointing to missing files — the same check the CI workflow runs.

---

## Adding new content

Adding a new page requires exactly three steps:

1. **Create a Markdown file** in the relevant folder under `docs/` (e.g. `docs/claude-code/my-new-skill.md`). Use one of the templates in [Downloads](docs/downloads/index.md) or copy an existing page as a starting point, keeping the standard section structure: Overview, Problem, Solution, Example, Code snippets, Notes, References.
2. **Add one navigation entry** to the `nav:` section of `mkdocs.yml`, under the relevant section, e.g.:
   ```yaml
   - Claude Code Skills:
       - claude-code/index.md
       - My New Skill: claude-code/my-new-skill.md
   ```
3. **Commit and push** to `main`. GitHub Actions rebuilds and redeploys the site automatically — no manual steps.

To add an entirely new top-level section, create a new folder under `docs/` with its own `index.md`, then add a new top-level entry to `nav:` in `mkdocs.yml` pointing at it.

---

## Deployment

Deployment is fully automated via `.github/workflows/deploy.yml`:

1. On every push to `main`, the workflow checks out the repo and installs dependencies from `requirements.txt`.
2. It runs `mkdocs build --strict`, which fails the workflow (and surfaces an error in the Actions tab and job summary) if there are broken links or configuration errors.
3. On success, the built `site/` directory is uploaded and deployed to GitHub Pages via the official `actions/deploy-pages` action.

### One-time setup (after forking / creating this repo)

1. In the repository, go to **Settings → Pages**, and set **Source** to **GitHub Actions**.
2. Update the placeholder values in `mkdocs.yml`:
   - `site_url`
   - `repo_name` / `repo_url`
   - `extra.social` links (GitHub, LinkedIn)
3. Push to `main` — the first workflow run will publish the site.
4. Optional: add a custom domain under **Settings → Pages → Custom domain**, and add a matching `docs/CNAME` file.

### Manually triggering a rebuild

The workflow also supports `workflow_dispatch`, so it can be triggered manually from the **Actions** tab without an empty commit.

---

## Design principles

- **Low maintenance** — content is Markdown-only; there is no build step to learn beyond `mkdocs build`.
- **Consistent structure** — every content page follows the same Overview / Problem / Solution / Example / Code / Notes / References shape, making the site predictable to read and quick to extend.
- **No framework lock-in** — MkDocs + Material is plain HTML/CSS/JS output; it can be hosted anywhere that serves static files, not just GitHub Pages.

---

## License

Content and configuration in this repository are provided under the MIT License unless noted otherwise. See `LICENSE` for details.
