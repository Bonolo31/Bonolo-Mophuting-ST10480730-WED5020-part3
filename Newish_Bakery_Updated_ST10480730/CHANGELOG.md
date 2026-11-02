# Newish Bakery – Development changelog

**2 November 2026 — Updated client review package**

## Original project review

- Found five HTML files containing exactly the same one-page website.
- Found an internal `<style>` block in those HTML files, although the project also had an external stylesheet.
- Found embedded base64 photographs that made every HTML file unnecessarily large.
- Reviewed the Part 2 feedback about layout alignment, responsive navigation, image adjustments, README detail and Git commits.
- Used the provided bakery proposal to guide website pages and product categories.

## HTML and navigation

- Created separate pages for Home, About, Menu, Gallery, Special Orders and Contact.
- Added descriptive page titles, meta descriptions and clear section headings.
- Added working relative links in the desktop/mobile navigation and footer.

## CSS and responsive layout

- Created one external stylesheet shared by all six HTML pages.
- Used Flexbox and CSS Grid for layout, and media queries at 1040px, 820px, 620px and 390px.
- Improved mobile menu placement, card spacing, images, forms and text hierarchy.
- Added CSS pseudo-classes for navigation and keyboard-visible focus.

## Images and interactive features

- Extracted the supplied bakery photographs and the brand logo into named local files.
- Removed unrelated network images from the website output.
- Added menu search/category filtering/sorting and a gallery lightbox.
- Added form validation and an email-draft workflow for special orders and general questions.

## Documentation

- Expanded the README with a rubric-feedback table, file structure, test guidance and references.
- Added `TESTING.md`, a basic `robots.txt` and a sitemap template for later publication.
- Retained the original proposal PDF separately, without changing its contents.

**Note:** This changelog documents updates in the supplied package. It is not a substitute for the actual Git commit history, which must be created when publishing the project.

## 2 November 2026 — Contact map added

- Added a Leaflet/OpenStreetMap interactive map to `contact.html`, with responsive styling in `CSS/style.css` and map initialization in `JS/script.js`.
- Used a general South Africa view because the client's street address is not confirmed; no fake shop pin or directions were added.
- Provided a fallback explanation and link to the full map for offline, blocked or failed tile loading.
- Updated the README and testing notes to explain map limitations and final location verification.
