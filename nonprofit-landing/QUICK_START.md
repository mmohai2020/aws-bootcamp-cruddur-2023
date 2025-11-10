# 🚀 Quick Start Guide

## View the Website

### Method 1: Double-Click (Easiest)
1. Navigate to: `/home/user/aws-bootcamp-cruddur-2023/nonprofit-landing/`
2. Double-click `index.html`
3. Opens in your default browser

### Method 2: Run the Helper Script (Recommended)
```bash
cd /home/user/aws-bootcamp-cruddur-2023/nonprofit-landing
./start-server.sh
```
Then open: `http://localhost:8000`

### Method 3: Manual Python Server
```bash
cd /home/user/aws-bootcamp-cruddur-2023/nonprofit-landing
python3 -m http.server 8000
```
Then open: `http://localhost:8000`

---

## Add Your Photos & Videos

### 1️⃣ Add Files to These Folders:
```
nonprofit-landing/images/
├── gallery/    ← Your photos here
├── videos/     ← Your video files here
└── reports/    ← Your PDF reports here
```

### 2️⃣ Edit the HTML File:
Open: `nonprofit-landing/index.html`
Find: Line 283 (Search for: `id="impact"`)

### 3️⃣ Follow the Examples:
See detailed instructions in: `IMPACT_GUIDE.md`

---

## Example: Add a Photo

1. Copy your photo to: `images/gallery/community.jpg`

2. In `index.html`, find (around line 294):
```html
<div class="placeholder-box">
    <svg viewBox="0 0 300 200"...>
        ...
    </svg>
</div>
```

3. Replace with:
```html
<div class="placeholder-box">
    <img src="images/gallery/community.jpg"
         alt="Community members at program"
         style="width: 100%; height: 200px; object-fit: cover;">
</div>
```

---

## Example: Add a YouTube Video

1. Get your YouTube video ID from the URL:
   - URL: `https://youtube.com/watch?v=ABC123`
   - Video ID: `ABC123`

2. In `index.html`, find the video placeholder (around line 306)

3. Replace the SVG with:
```html
<div class="placeholder-box" style="position: relative; padding-bottom: 56.25%; height: 0;">
    <iframe
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        src="https://www.youtube.com/embed/ABC123"
        frameborder="0"
        allowfullscreen>
    </iframe>
</div>
```

---

## File Locations

| What | Where |
|------|-------|
| Main page | `nonprofit-landing/index.html` |
| Styling | `nonprofit-landing/css/styles.css` |
| JavaScript | `nonprofit-landing/js/main.js` |
| Add photos | `nonprofit-landing/images/gallery/` |
| Add videos | `nonprofit-landing/images/videos/` |
| Add reports | `nonprofit-landing/images/reports/` |

---

## Need More Help?

- **Full Documentation**: See `README.md`
- **Photo/Video Guide**: See `IMPACT_GUIDE.md`
- **Questions**: Review the code comments in `index.html`

---

## Quick Commands

```bash
# Go to project folder
cd /home/user/aws-bootcamp-cruddur-2023/nonprofit-landing

# Start web server
./start-server.sh

# List all files
ls -la

# See folder structure
tree
```

---

**That's it! You're ready to customize your nonprofit landing page!** 🎉
