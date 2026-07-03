# Customer Data Directory

This directory contains ALL the data and assets needed for each wedding invitation.
**No code changes are required** — just swap the files in this folder for each new customer.

## Directory Structure

```
customer/
├── wedding.json      # Names, dates, events, venues, SEO, images
├── theme.json        # Colors, fonts, animation preferences
├── family.json       # Family members for bride & groom
├── gallery.json      # Gallery image URLs and layout hints
├── settings.json     # Feature toggles, language, music config
├── photos/           # Customer photos (referenced in wedding.json)
├── videos/           # Customer videos
├── music/            # Background music file (referenced in settings.json)
│   └── bg-music.mp3  # The background music track
└── icons/            # Custom icons or favicons
```

## How to Set Up a New Customer

1. **Edit `wedding.json`** — Update bride/groom names, dates, events, venue
2. **Edit `family.json`** — List family members for both sides
3. **Edit `gallery.json`** — Add photo URLs (or place files in `photos/`)
4. **Edit `theme.json`** — Customize colors, fonts, animations
5. **Edit `settings.json`** — Toggle sections on/off, set music preferences
6. **Drop music into `music/bg-music.mp3`** — Any MP3 file works
7. **Deploy!**

## Music

Place an MP3 file at `customer/music/bg-music.mp3`.
Music starts playing automatically when the visitor opens the invitation
(after the initial "Open Invitation" tap — required by all browsers).
Set `music.enabled: false` in `settings.json` to disable music entirely.

## Section Toggles

In `settings.json`, set any section to `false` to hide it:
```json
{
  "sections": {
    "hero": true,
    "countdown": true,
    "couple": true,
    "events": true,
    "gallery": true,
    "venue": true,
    "rsvp": false,    // ← hides RSVP section
    "wishes": true,
    "footer": true
  }
}
```
