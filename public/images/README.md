# 📁 Portfolio Image Assets

All images in this folder are served as **static public assets** by Next.js.
They are accessible via URL at `/<path>` — e.g., an image at
`public/images/gallery/aws-community-day.jpg` is reachable at
`/images/gallery/aws-community-day.jpg` in your code.

---

## 📂 Folder Structure

```
public/
└── images/
    ├── gallery/           ← Event photos used in the Gallery section
    │                        e.g. aws-community-day.jpg, devfest-2023.jpg
    │
    ├── projects/          ← Project screenshots / cover images
    │                        e.g. digifox-portal.jpg, solar-ecommerce.jpg
    │
    ├── certifications/    ← Certification badge images (optional, decorative)
    │                        e.g. aws-badge.png, google-cloud-badge.png
    │
    ├── about/             ← Profile photo and about-section images
    │                        e.g. profile.jpg, profile-bw.jpg
    │
    └── og/                ← Open Graph / social sharing images
                             e.g. og-image.png (1200×630 px recommended)
```

---

## ✅ Usage in Code

### In JSX / TSX components:
```tsx
// Gallery event image
<img src="/images/gallery/aws-community-day.jpg" alt="AWS Community Day" />

// Project cover
<img src="/images/projects/digifox-portal.jpg" alt="DigiFox Portal" />

// Profile photo
<img src="/images/about/profile.jpg" alt="Buddhi Rangana" />
```

### In CSS:
```css
background-image: url('/images/about/profile.jpg');
```

---

## 📐 Recommended Dimensions

| Folder          | Recommended Size     | Format        |
|-----------------|----------------------|---------------|
| `gallery/`      | 1200 × 800 px        | JPG / WebP    |
| `projects/`     | 1200 × 750 px (16:10)| JPG / WebP    |
| `certifications/`| 800 × 800 px        | PNG / WebP    |
| `about/`        | 800 × 1000 px        | JPG / WebP    |
| `og/`           | 1200 × 630 px        | PNG / JPG     |

---

## 💡 Tips

- Prefer **WebP** format for best compression + quality.
- Keep filenames **lowercase with hyphens**: `aws-community-day.jpg` ✅
- Avoid spaces or special characters in filenames.
- For very large images, compress them using [Squoosh](https://squoosh.app) before uploading.
