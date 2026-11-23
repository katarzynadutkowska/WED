# Water Emission Database (WED) — website

The website of the Water Emission Database, at **wed.kmdutkowska.com**.
Built with [Astro](https://astro.build), in the same style as kmdutkowska.com,
and hosted on Cloudflare.

## Branches in this repository

| Branch | What it is |
|---|---|
| `main` | **The new website.** Cloudflare builds and publishes this branch. |
| `gh-pages` | The old Jekyll site, still served by GitHub Pages at `katarzynadutkowska.github.io/WED/`. |
| `gh-pages-redirect` | A prepared update for `gh-pages`: the old pages forward visitors to the new address. The CSV files stay where they are, so direct download links keep working. |

---

## Editing

| File | What it controls |
|---|---|
| [`content/site.yaml`](content/site.yaml) | Title, contact email, citation, "last updated" date |
| [`content/index.md`](content/index.md) | Home page text + the status box at the top |
| [`content/content.md`](content/content.md) | "Content of the database" page |
| [`content/access.md`](content/access.md) | "Access" page text + the list of downloadable files |
| [`content/projects.md`](content/projects.md) | "Projects" page |
| `public/Database/` | The CSV files people download |
| `public/Images/` | Images (logo, favicon, figures) |

**Adding a new data file:** put the CSV in `public/Database/`, then add an entry
under `files:` in `content/access.md` (copy the existing one). With
`preview: true` the file is also shown as a searchable table on the Access page.

Edit on github.com (pencil icon → Commit), or locally with a live preview:

```bash
npm install     # first time only
npm run dev     # preview at http://localhost:4321
```

---

## One-time setup

### 1. Put the new site on GitHub
1. GitHub Desktop → **File → Add local repository** → choose this `WED` folder.
2. Make sure the current branch (top bar) is **main**.
3. Commit the changes (summary e.g. `New WED website`), then click
   **Publish branch**.

### 2. Connect it to Cloudflare
1. Cloudflare → **Workers & Pages → Create → Import a repository** → **WED**.
2. Set the **production branch to `main`** (not `gh-pages`).
   Build command `npm run build`, deploy command `npx wrangler deploy`.
3. Deploy, then open the test `….workers.dev` address and check it.
4. **Domains → Connect domain → kmdutkowska.com**, subdomain **`wed`**,
   enable for Production → **Add domain**.

### 3. Forward the old address (only once wed.kmdutkowska.com works)
1. GitHub Desktop → switch to branch **gh-pages**.
2. **Branch → Merge into current branch… → gh-pages-redirect** → Merge.
3. **Push origin**. A minute later, `katarzynadutkowska.github.io/WED/` forwards
   to `wed.kmdutkowska.com`, while `…/WED/Database/WED_988.csv` still downloads.

### 4. (Optional) Make `main` the default branch
GitHub → repository **Settings → General → Default branch** → `main`.
GitHub Pages keeps serving `gh-pages`, so the forwarding keeps working.
