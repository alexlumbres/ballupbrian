# BallUpBrian — NYC Content Studio (marketing site)

Static one-page marketing site for **BallUpBrian** (Brian Ramos). The whole site is
a single self-contained file: **`index.html`** (plus the `images/` folder).

## Preview locally
Just open `index.html` in a browser. No build, no install.

## Deploy to Cloudflare Pages

**Option A — Direct Upload (fastest, no GitHub needed)**
1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Drag in this folder's contents (`index.html` + `images/`).
3. Deploy. Done.

**Option B — Connect this Git repo (auto-deploys on every push)**
1. Push to GitHub (see below).
2. Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → pick the repo.
3. Build settings:
   - **Framework preset:** `None`
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
4. Save & Deploy. (The `app/`, `components/`, `lib/` Next.js scaffold is unused and is
   ignored by these settings — it's kept only for a future rebuild.)

## Push to GitHub
This folder is already a git repo with a first commit. On your machine:

```bash
# easiest, with GitHub CLI:
gh repo create BallUpBrian --public --source=. --remote=origin --push

# or manually: create an empty repo named BallUpBrian on github.com, then:
git remote add origin https://github.com/<your-username>/BallUpBrian.git
git branch -M main
git push -u origin main
```

## Add real assets (drop-in slots)
- `images/sky.png` — the sky mural backdrop
- `images/work/01.jpg … 08.jpg` — Brian's 8 posts (the work grid)
- `images/brands/*.png` — the 15 brand logos (see `images/brands/README.txt`)

## Before launch (edit in `index.html`)
- `BOOKING_URL` and `EMAIL` (near the bottom `<script>`) — currently placeholders.
- Package prices — currently `$—`.

## Editing the intro timing
- Sequence (ms): the three `setTimeout(... "cin-logoout" / "cin-open" / "cin-done" ...)` lines.
- Durations: `@keyframes logoin` / `.intrologo` (logo), `.cbar` transition (bar slide).
