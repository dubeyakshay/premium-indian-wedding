# Local Development Setup Guide

Run this Indian Wedding Invitation template locally on your machine.

---

## Super Quick Start (No Database)

If you just want to **preview and customize the design**, you don't need PostgreSQL!

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open **http://localhost:3000** — that's it! 🎉

> **Note:** RSVP and Wishes will work in "demo mode" (data stored in memory, resets on restart). Perfect for previewing and customizing.

---

## Full Setup (With Database)

Only needed if you want persistent RSVP/Wishes storage.

### Step 1: Install PostgreSQL

**Option A: Docker (Easiest)**
```bash
docker run --name wedding-db \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=wedding_db \
  -p 5432:5432 \
  -d postgres:15
```

**Option B: Direct Install**
- **macOS**: `brew install postgresql@15 && brew services start postgresql@15`
- **Windows**: [Download installer](https://www.postgresql.org/download/windows/)
- **Ubuntu**: `sudo apt install postgresql postgresql-contrib`

### Step 2: Create `.env` file
```bash
echo "DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/wedding_db" > .env
```

### Step 3: Create database & push schema
```bash
# If using Docker, database already exists
# If direct install:
createdb wedding_db

# Push schema
npx drizzle-kit push
```

### Step 4: Run
```bash
npm run dev
```

---

## VS Code Setup

### Install Recommended Extensions
When you open the project, VS Code will prompt to install recommended extensions. Click **"Install All"**.

Or run:
```bash
code --install-extension dbaeumer.vscode-eslint
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
```

---

## Customizing for Customers

Edit files in the `customer/` folder — **no code changes needed!**

| File | What to Edit |
|------|--------------|
| `customer/wedding.json` | Couple names, wedding date, events, venues |
| `customer/family.json` | Family members |
| `customer/gallery.json` | Photo URLs |
| `customer/theme.json` | Colors, fonts |
| `customer/settings.json` | Enable/disable sections, music |
| `customer/music/bg-music.mp3` | Background music file |

### Example: Change Names
Edit `customer/wedding.json`:
```json
{
  "bride": {
    "firstName": "Priya",
    "lastName": "Kapoor"
  },
  "groom": {
    "firstName": "Rahul", 
    "lastName": "Mehta"
  }
}
```
Save → Browser refreshes automatically!

### Example: Change Colors
Edit `customer/theme.json`:
```json
{
  "colors": {
    "primary": "#1E3A5F",
    "accent": "#C9A227"
  }
}
```

### Example: Disable RSVP Section
Edit `customer/settings.json`:
```json
{
  "sections": {
    "rsvp": false
  }
}
```

---

## Useful Commands

```bash
npm run dev          # Start dev server (hot reload)
npm run build        # Production build
npm run start        # Start production server
npm run typecheck    # Check TypeScript types
npx drizzle-kit push # Push database schema
```

---

## Preview on Mobile

1. Find your computer's IP address:
   - **Mac**: `ipconfig getifaddr en0`
   - **Windows**: `ipconfig` (look for IPv4)
   - **Linux**: `hostname -I`

2. On your phone (same WiFi), open: `http://YOUR_IP:3000`

---

## Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules .next
npm install
```

### Port 3000 in use
```bash
npm run dev -- -p 3001
```

### Music not playing
- Click "Open Invitation" first (browser requires user interaction)
- Check file exists: `ls customer/music/bg-music.mp3`

---

## Project Structure

```
├── customer/                 # ✏️ EDIT THESE for each customer
│   ├── wedding.json
│   ├── family.json
│   ├── gallery.json
│   ├── theme.json
│   ├── settings.json
│   └── music/bg-music.mp3
│
├── src/
│   ├── app/                  # Pages & API routes
│   ├── components/           # React components
│   └── data/                 # Config loader
│
├── .env                      # Database URL (optional)
└── LOCAL_SETUP.md            # This file
```

---

Happy customizing! 🎊
