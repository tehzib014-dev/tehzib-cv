# Tehzib Imran - Web Developer Portfolio

A clean, responsive, accessible, and SEO-optimized web developer portfolio website built for Tehzib Imran. This project highlights an entry-level web developer transitioning from an IT Operations background into full-stack web development.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Hosting and Deployment](#hosting-and-deployment)
- [Customization Guide](#customization-guide)
- [Accessibility and Compliance](#accessibility-and-compliance)
- [Contact Information](#contact-information)

---

## Overview

This portfolio is built as a single-page modern web application designed to showcase technical skills, projects, professional experience, and educational background. It includes a specialized ATS-friendly plain-text resume view that allows recruiters and hiring managers to easily view or print a clean version of the resume.

---

## Key Features

- Fully responsive design optimized for mobile, tablet, and desktop screens.
- Accessible UI complying with WCAG 2.1 AA standards (keyboard navigation, skip links, ARIA attributes, semantic HTML tags).
- Built-in Dark Mode and Light Mode theme switcher with dynamic local storage persistence.
- Interactive category filtering for technical skills (Frontend, Backend, Database, Tools, and Learning).
- Built-in ATS-friendly Resume Modal with native print capabilities (`window.print()`).
- On-page SEO optimization with meta descriptions, structured heading hierarchy, and Open Graph readiness.

---

## Technologies Used

- HTML5 (Semantic Structure)
- CSS3 & Tailwind CSS (Utility-first framework via CDN)
- JavaScript (ES6+ Vanilla JS for UI interactivity and state handling)
- Font Awesome (Icon library via CDN)
- Google Fonts (Plus Jakarta Sans & Space Mono)

---

## Project Structure

```text
/
├── index.html       # Page structure and Tailwind configuration
├── style.css        # Custom focus and print styles
├── script.js        # UI behavior and profile data binding
├── constants.js     # Centralized public profile/contact configuration
└── README.md        # Project documentation and setup instructions
```

---

## Getting Started

Because this project is built using semantic HTML5, standard Tailwind CSS, and plain JavaScript, it requires no complex build tools or NPM dependencies to run locally.

### Local Execution

1. Clone or download this repository to your local machine:
   ```bash
   git clone https://github.com/tehzib014-dev/portfolio.git
   ```

2. Navigate into the project directory:
   ```bash
   cd portfolio
   ```

3. Open the `index.html` file directly in any web browser:
   - On Windows: Double click `index.html` or run `start index.html` in your terminal.
   - On macOS: Run `open index.html` in your terminal.
   - On Linux: Run `xdg-open index.html` in your terminal.

---

## Hosting and Deployment

This website can be hosted for free on various static site hosting platforms:

### 1. GitHub Pages (Recommended)

1. Push the code to your GitHub repository (`github.com/tehzib014-dev/portfolio`).
2. Navigate to repository **Settings** > **Pages**.
3. Under **Build and deployment**, set the Branch to `main` (or `master`) and folder to `/ (root)`.
4. Click **Save**. The website will be live in a few moments.

### 2. Vercel / Netlify

1. Connect your GitHub account to Vercel or Netlify.
2. Select the `portfolio` repository.
3. Keep the build command empty and output directory as `./`.
4. Click **Deploy**.

---

## Customization Guide

### Updating Personal Information

Profile and contact configuration is centralized in `constants.js`:

- **Contact Info & Social Links:** Update the `profile` object in `constants.js`. The values are applied to the hero, footer, and ATS resume view by `script.js`.
- **Projects:** Modify project titles, descriptions, and repository URLs inside the `#projects` section.
- **Skills:** Add or remove technical skills in the `#skills` section. Ensure `data-category` attributes match the filter categories if adding new skill cards.
- **ATS Resume Content:** Update the printable plain text content inside `#ats-printable-area` to mirror any changes made to your primary resume.

> Note: `constants.js` is loaded in the browser, so it is suitable for public configuration only. Never place passwords, API keys, or other private secrets in it.

---

## Accessibility and Compliance

- **Keyboard Navigation:** Users can navigate using `Tab` and `Shift + Tab`. Visible focus indicators (`:focus-visible`) are configured across all interactive elements.
- **Screen Reader Support:** Semantic tags (`header`, `nav`, `main`, `section`, `footer`) and proper ARIA labels are implemented.
- **Contrast Ratios:** Text colors adhere to WCAG standards across both light and dark themes.

---

## Contact Information

- **Name:** Tehzib Imran
- **Role:** Entry-Level Web Developer / IT Operator
- **Email:** tehzibimran0@gmail.com
- **Phone:** 03259324667
- **GitHub:** [https://github.com/tehzib014-dev](https://github.com/tehzib014-dev)
- **LinkedIn:** [https://linkedin.com/in/tehzib-imran/](https://linkedin.com/in/tehzib-imran/)