# Impact Section - Photo & Video Integration Guide

## Quick Reference: Where to Find the Impact Section
- **File**: `/nonprofit-landing/index.html`
- **Lines**: 283-330
- **Section ID**: `id="impact"`

## How to Add Photos

### Step 1: Add Your Photos to the Images Folder

Copy your photos to:
```
/nonprofit-landing/images/gallery/
```

Example files:
- `community-1.jpg`
- `education-program.jpg`
- `water-well.jpg`

### Step 2: Replace Photo Gallery Placeholder

**Find this code (lines 293-304):**
```html
<div class="impact-placeholder">
    <div class="placeholder-box">
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="200" fill="#f9f9f9"/>
            <text x="50%" y="50%" text-anchor="middle" fill="#999" font-size="14">
                Photo Gallery Coming Soon
            </text>
        </svg>
    </div>
    <h4>Photo Gallery</h4>
    <p>Visual stories from our communities</p>
</div>
```

**Replace with:**
```html
<div class="impact-placeholder">
    <div class="placeholder-box">
        <img src="images/gallery/community-1.jpg"
             alt="West African community members at education program"
             style="width: 100%; height: auto; object-fit: cover;">
    </div>
    <h4>Photo Gallery</h4>
    <p>Visual stories from our communities</p>
    <a href="#gallery" class="btn btn-primary" style="margin-top: 1rem; display: inline-block;">View Gallery</a>
</div>
```

---

## How to Add Videos

### Option 1: YouTube or Vimeo Embed

**Find the Video placeholder (lines 305-316):**
```html
<div class="impact-placeholder">
    <div class="placeholder-box">
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="200" fill="#f9f9f9"/>
            <text x="50%" y="50%" text-anchor="middle" fill="#999" font-size="14">
                Video Testimonials
            </text>
        </svg>
    </div>
    <h4>Video Stories</h4>
    <p>Hear directly from those we serve</p>
</div>
```

**Replace with YouTube Video:**
```html
<div class="impact-placeholder">
    <div class="placeholder-box" style="position: relative; padding-bottom: 56.25%; height: 0;">
        <iframe
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Community Testimonial"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>
    <h4>Video Stories</h4>
    <p>Hear directly from those we serve</p>
</div>
```

**Replace with Vimeo Video:**
```html
<div class="impact-placeholder">
    <div class="placeholder-box" style="position: relative; padding-bottom: 56.25%; height: 0;">
        <iframe
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
            title="Community Testimonial"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>
    <h4>Video Stories</h4>
    <p>Hear directly from those we serve</p>
</div>
```

### Option 2: Local Video File

If you have a video file (e.g., `interview.mp4`), add it to `/images/videos/` and use:

```html
<div class="impact-placeholder">
    <div class="placeholder-box">
        <video controls style="width: 100%; height: auto;">
            <source src="images/videos/interview.mp4" type="video/mp4">
            <source src="images/videos/interview.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>
    </div>
    <h4>Video Stories</h4>
    <p>Hear directly from those we serve</p>
</div>
```

---

## How to Add PDF Reports

**Find the Reports placeholder (lines 317-328):**
```html
<div class="impact-placeholder">
    <div class="placeholder-box">
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="200" fill="#f9f9f9"/>
            <text x="50%" y="50%" text-anchor="middle" fill="#999" font-size="14">
                Impact Reports
            </text>
        </svg>
    </div>
    <h4>Annual Reports</h4>
    <p>Detailed insights into our programs</p>
</div>
```

**Replace with:**
```html
<div class="impact-placeholder">
    <div class="placeholder-box" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; min-height: 200px;">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
    </div>
    <h4>Annual Reports</h4>
    <p>Detailed insights into our programs</p>
    <a href="images/reports/2024-annual-report.pdf"
       class="btn btn-primary"
       style="margin-top: 1rem; display: inline-block;"
       download>
        Download Report
    </a>
</div>
```

---

## Complete Example: All Three Sections Updated

Here's what the complete updated impact section would look like:

```html
<!-- Impact Section (Past Work) -->
<section class="impact-section" id="impact">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Our Impact</h2>
            <p class="section-subtitle">Stories of Transformation and Hope</p>
        </div>
        <div class="impact-content">
            <p class="impact-intro">See the real-world impact of our programs through photos, videos, and stories from the communities we serve across West Africa.</p>
            <div class="impact-grid">

                <!-- Photo Gallery -->
                <div class="impact-placeholder">
                    <div class="placeholder-box">
                        <img src="images/gallery/community-1.jpg"
                             alt="West African community members"
                             style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px;">
                    </div>
                    <h4>Photo Gallery</h4>
                    <p>Visual stories from our communities</p>
                    <a href="#gallery" class="btn btn-primary" style="margin-top: 1rem; display: inline-block; font-size: 0.9rem; padding: 0.6rem 1.5rem;">View Gallery</a>
                </div>

                <!-- Video Testimonials -->
                <div class="impact-placeholder">
                    <div class="placeholder-box" style="position: relative; padding-bottom: 56.25%; height: 0; border-radius: 10px; overflow: hidden;">
                        <iframe
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                            title="Community Testimonial"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <h4>Video Stories</h4>
                    <p>Hear directly from those we serve</p>
                </div>

                <!-- Impact Reports -->
                <div class="impact-placeholder">
                    <div class="placeholder-box" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; min-height: 200px; border-radius: 10px;">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                        </svg>
                    </div>
                    <h4>Annual Reports</h4>
                    <p>Detailed insights into our programs</p>
                    <a href="images/reports/2024-annual-report.pdf"
                       class="btn btn-primary"
                       style="margin-top: 1rem; display: inline-block; font-size: 0.9rem; padding: 0.6rem 1.5rem;"
                       download>
                        Download Report
                    </a>
                </div>

            </div>
        </div>
    </div>
</section>
```

---

## Tips for Best Results

### Photo Guidelines
- **Format**: JPG or PNG
- **Size**: Optimize to 1200px width max
- **File size**: Keep under 500KB each
- **Aspect ratio**: 3:2 or 16:9 works best
- **Alt text**: Always add descriptive alt text for accessibility

### Video Guidelines
- **YouTube**: Get the video ID from the URL (e.g., `youtube.com/watch?v=ABC123` → use `ABC123`)
- **File size**: If hosting locally, keep videos under 50MB
- **Format**: MP4 is most compatible
- **Resolution**: 720p or 1080p recommended

### Report Guidelines
- **Format**: PDF preferred
- **File size**: Keep under 10MB
- **Naming**: Use descriptive names (e.g., `2024-annual-report.pdf`)

---

## Quick File Structure

```
nonprofit-landing/
├── images/
│   ├── gallery/
│   │   ├── community-1.jpg
│   │   ├── education-2.jpg
│   │   └── water-project-3.jpg
│   ├── videos/
│   │   ├── interview.mp4
│   │   └── testimonial.webm
│   └── reports/
│       └── 2024-annual-report.pdf
└── index.html
```

---

## Need More Help?

Open `index.html` in a text editor and search for:
- Line 283: `<!-- Impact Section (Past Work) -->`
- Or search for: `id="impact"`

That's where you'll make all your changes!
