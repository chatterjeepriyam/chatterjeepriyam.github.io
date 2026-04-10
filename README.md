# chatterjeepriyam.github.io

Personal academic portfolio — research, publications, and CV.
Live at **https://chatterjeepriyam.github.io**

---

## 🗂 File Structure

```
.
├── index.html          # Home page
├── research.html       # Research themes
├── publications.html   # Publication list
├── projects.html       # Project descriptions
├── cv.html             # Curriculum Vitae
├── contact.html        # Contact details
├── blog/
│   └── index.html      # Blog scaffold
├── css/
│   ├── style.css       # Main stylesheet (all pages)
│   └── nav.css         # Navigation (minimal)
├── js/
│   └── main.js         # Dark mode, mobile nav, animations
└── assets/
    ├── img/            # Profile photos, project images
    └── CV_Priyam_Chatterjee.pdf   # (add your own PDF here)
```

---

## ✏️ How to Edit Content

### Personal details (name, title, affiliation)
Open `index.html` and update the `<header class="hero">` section:
- Replace `"University of ..."` with your institution.
- Update `hero-name`, `hero-title`, and `hero-tagline` text.

### Navigation links
All pages share the same `<nav class="navbar">` block. If you add a new page, copy
the nav block from any existing page into the new file and add a matching `<li><a>` entry.

### Publications
Edit `publications.html`. Each publication is an `<article class="pub-item">` block.
Copy an existing block and update the title, authors, venue, and links.

### CV
Edit `cv.html`. Each entry is a `<div class="cv-entry">` block inside its `<div class="cv-section">`.
Add or remove entries as needed.

### Research themes
Edit `research.html` — each theme is a `<div class="research-theme">` block.

### Projects
Edit `projects.html` — each project is an `<article class="project-card">` block.

### Contact details
Edit `contact.html` — update the `href="mailto:..."`, GitHub URL, and LinkedIn URL.
Replace the `<address>` block with your actual institutional address.

### Profile photo
Place your photo in `assets/img/profile.jpg` and replace the
`<div class="hero-avatar-placeholder">` in `index.html` with:
```html
<img src="assets/img/profile.jpg" alt="Priyam Chatterjee" class="hero-avatar" />
```

### CV PDF download
Place your PDF at `assets/CV_Priyam_Chatterjee.pdf`.
The download link in `cv.html` will work automatically.

---

## 🌙 Dark Mode
A dark/light mode toggle (🌙/☀️) is shown in the top-right of the navigation bar on all pages.
The user's preference is stored in `localStorage` and also respects the system `prefers-color-scheme` setting.

---

## 🚀 GitHub Pages Deployment
1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Set Source to `Deploy from a branch`, select `main` (or `master`), root `/`.
4. The site will be live at `https://<username>.github.io`.

No build step is required — this is pure HTML/CSS/JS.

---

## 📝 Adding a Blog Post
1. Create a new file in `blog/`, e.g. `blog/my-post.html`.
2. Copy the structure from `blog/index.html`.
3. Add a link to the new post in `blog/index.html`.

---

## 🛠 Dependencies
None. The only external resource is [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter),
loaded via a `<link>` tag. The site works without it (falls back to system fonts).
