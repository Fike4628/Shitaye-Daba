# Shitaye Daba — Personal Portfolio Website

A modern, responsive personal portfolio website for **Shitaye Daba**, a front-end developer and third-year Computer Science student at Wolaita Sodo University. Built with **pure HTML, CSS, and JavaScript** — no frameworks, no libraries.

## ✨ Features

- **Two-language support** — English and Amharic (አማርኛ), switchable via a dropdown without reloading the page; the choice is saved in `localStorage`.
- **Dark & light mode** — one-click theme toggle, respects the OS preference on first visit, and persists the choice.
- **Fully responsive** — looks great on mobile, tablet, and desktop.
- **Skill cards** showcasing key strengths and specialties.
- **Smooth scrolling** navigation with active-link highlighting.
- **Mobile hamburger menu** with slide-in navigation.
- **Scroll progress bar** and back-to-top button.
- **Contact form** with full JavaScript validation (name, email, subject, message).
- **Professional blue-and-white theme** inspired by clean developer portfolios.
- **Proper Ethiopic font support** via Google Fonts (Noto Sans Ethiopic).

## 📁 Project Structure

```
shitaye-portfolio/
│
├── index.html          # Website structure & content
│
├── css/
│   └── style.css       # All styling, theme, responsive, animations
│
├── js/
│   └── script.js       # Language switching, theme, nav, animations, validation
│
├── images/
│   ├── profile.svg     # Profile illustration
│   ├── project1.svg     # Business landing page mockup
│   ├── project2.svg     # Weather app mockup
│   └── project3.svg      # Portfolio/code editor mockup
│
└── README.md
```

## 🌐 Website Sections

| Section   | Content                                      |
| --------- | -------------------------------------------- |
| Home      | Hero with name, title, intro, and CTAs       |
| About     | Personal background, bio, and quick info     |
| Skills    | Skill cards showcasing expertise              |
| Services  | Web design, front-end dev, responsive, maintenance |
| Projects  | Future projects showcase with tags           |
| Education | Timeline: Wolaita Sodo University & more      |
| Contact   | Validated contact form + social links         |

## 🚀 Getting Started

No build step required — it's a static site.

1. Open this folder in your editor.
2. Right-click `index.html` → **Open with Live Server**, or simply double-click `index.html` to open it in your browser.

That's it. There are no dependencies to install.

## 🌍 How Language Switching Works

All translatable text elements carry a `data-i18n="key"` attribute (or `data-i18n-placeholder` for form inputs). The JavaScript stores a translations object for both languages. When a visitor picks a language from the dropdown:

1. The script looks up every `data-i18n` element and replaces its text with the translated string.
2. The `<html lang>` attribute and a body class update so the correct font loads (Poppins for English, Noto Sans Ethiopic for Amharic).
3. The selection is saved to `localStorage` and restored on the next visit.

## 🎨 How the Theme Toggle Works

The site uses CSS custom properties (variables). The theme toggle sets a `data-theme="dark"` attribute on `<html>`, and a second set of variables takes over. The preference is also saved to `localStorage` and defaults to the visitor's OS color-scheme on first visit.

## 🛠️ Customization

- **Your details** — Replace the name, email, bio text, and social links in `index.html`.
- **Translations** — Edit the `translations` object in `js/script.js` (the `en` and `am` dictionaries).
- **Profile image** — Replace `images/profile.svg` with your photo (`profile.jpg`). Update the `<img src>` in `index.html`.
- **Project details** — Edit the project card titles and descriptions in `index.html` and their translations in `js/script.js`.
- **Colors** — Edit the CSS variables at the top of `css/style.css` (`--color-primary`, etc.).

## 📝 Tech Notes

- No external libraries. Only Google Fonts loaded via CDN for typography.
- Images use inline SVG placeholders so the site has zero binary asset dependencies during development. Swap them for real screenshots when ready.
- The contact form validates client-side only. Connect it to a backend or service (e.g., Formspree, EmailJS) to actually receive messages.

---

Built with care by Shitaye Daba 💙
