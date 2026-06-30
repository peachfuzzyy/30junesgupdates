# SG Strategy Site

A small Next.js site summarising 2H26 Singapore equity market themes, sector calls, and alpha picks (independently written, no third-party branding or copyrighted material reproduced).

## Run locally
```
npm install
npm run dev
```

## Deploy (GitHub → Vercel)
1. Create a new GitHub repo (e.g. via github.com/new), then from this folder:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to vercel.com → New Project → Import the GitHub repo → Deploy.
   Vercel auto-detects Next.js, no config needed.
