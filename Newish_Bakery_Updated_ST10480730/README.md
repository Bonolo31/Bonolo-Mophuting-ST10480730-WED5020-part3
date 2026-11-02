# Newish Bakery | WEDE5020 Website Portfolio

**Student:** Bonolo Mophuting  
**Student number:** ST10480730  
**Institution:** Rosebank College / The Independent Institute of Education  
**Module:** Web Development (Introduction) – WEDE5020  
**Project:** Newish Bakery  
**Updated:** 2 November 2026  
**Editor:** Visual Studio Code  
**Project status:** Updated website package ready for client review; publication and business details still require confirmation.

## 1. Project overview

Newish Bakery is a bakery website concept that introduces bread, cakes and pastries to local customers. The idea came from the project proposal included in the `Proposal` folder. The proposal focuses on a welcoming design, product photographs, easy navigation and a way to enquire about special orders.

I developed this version as a **six-page website** instead of copying the same long HTML page into five files. The new structure helps visitors find the information they want without scrolling past every section. The website keeps the original bakery logo, the brown and cream theme and the supplied bakery photos.

The site is a student portfolio project. It does not claim that the products, opening hours, trading address, email ownership or prices have been independently confirmed by the client.

## 2. Website pages

| Page | File | What visitors can do |
|---|---|---|
| Home | `index.html` | View the bakery introduction and featured items |
| About | `about.html` | Read the bakery concept, mission, vision and values |
| Menu | `services.html` | Browse six example product listings, search, filter and sort |
| Gallery | `gallery.html` | View the supplied photos and open them larger |
| Special Orders | `enquiry.html` | Describe a cake or bakery order and prepare an email enquiry |
| Contact | `contact.html` | Find contact information and prepare a general email enquiry |

Navigation on every page links to the actual HTML filenames. The logo returns to `index.html`, and the footer provides useful links.

## 3. Feedback from Formative Part 2 and how I addressed it

I reviewed the supplied lecturer rubric screenshots before updating the project. The following scores and comments are from those screenshots, **not new marks**.

| Criterion | Previous mark shown | Feedback / improvement in this version |
|---|---:|---|
| Knowledge: Feedback for Part 1 | 7/10 | Recorded the earlier problems and the changes more clearly here and in the changelog |
| External stylesheet on each page | 10/10 | Every page now links to the **same** `CSS/style.css`; the large internal stylesheet was removed |
| Default style code | 5/5 | Kept consistent base styles, colour variables, spacing and box sizing |
| Typography styles | 5/5 | Kept readable body text, contrasting headings and a clear hierarchy |
| CSS layout structure | 2/5 | Reworked page sections with Flexbox/Grid and consistent containers and gaps |
| Decoration and colour | 4/5 | Used the same cream, brown and peach palette across pages |
| Pseudo-classes | 10/10 | Included `:link`, `:visited`, `:hover`, `:active` and `:focus-visible` for navigation and controls |
| Media queries / breakpoints | 10/10 | Used breakpoints for desktop/tablet/mobile layouts |
| Responsive layout adjustment | 4/5 | Improved card columns, image sizes, form columns and spacing at smaller widths |
| Responsive navigation menu | 2/5 | Rebuilt the menu as a mobile button with visible/open states and keyboard support |
| Responsive images | 4/5 | Added image size rules and `object-fit`, plus local, compressed image files |
| Descriptive GitHub commits | 3/5 | Provided example Git commands below; **actual commits must be made in GitHub** |
| README completeness | 2/5 | Expanded this README with objectives, pages, structure, features, testing, limitations and references |

The external stylesheet was already an assessment strength, but the supplied HTML files still contained a large internal `<style>` section. This version removes that inconsistency so the external stylesheet is really the one used by all pages.

## 4. Lecturer content applied

The supplied WEDE5020 **Week 6 CSS slides** cover the box model, background and text styles, pseudo-classes and CSS links. I used those topics for margins, padding, borders, typography and navigation styling.

The supplied WEDE5020 **Week 7 slides** discuss responsive/adaptive design, mobile-first ideas, media queries, breakpoints and relative values. I used percentage widths, `max-width`, flexible grids and media queries to change the layout when the screen is narrower (The IIE, 2026a; 2026b).

There are media queries in `CSS/style.css` at **1040px, 820px, 620px and 390px**. These sizes are based on places where the page elements need to rearrange, not on one particular phone model.

## 5. Technologies and files

- **HTML5:** Six pages with headings, semantic sections, navigation, image descriptions, labels and forms (MDN Web Docs, s.a.-a).
- **CSS3:** One external stylesheet using Flexbox, Grid, pseudo-classes, spacing, colours and media queries (MDN Web Docs, s.a.-b).
- **JavaScript:** External `JS/script.js` for navigation, search, sorting, gallery images and form checks (MDN Web Docs, s.a.-c).
- **Images:** Five genuine bakery image files extracted from the uploaded project and saved under clear filenames in `images/`. Unrelated network diagrams from the source ZIP were deliberately not used.
- **Git/GitHub:** Recommended for version control and publishing, but no new repository or online deployment is included in this ZIP.

### Main folder structure

```text
Newish_Bakery_Updated_ST10480730/
├── index.html
├── about.html
├── services.html
├── gallery.html
├── enquiry.html
├── contact.html
├── CSS/
│   └── style.css
├── JS/
│   └── script.js
├── images/
│   ├── newish-logo.jpg
│   ├── fresh-pastries.jpg
│   ├── artisan-bread.jpg
│   ├── chocolate-cake.jpg
│   └── berry-pastry.jpg
├── Proposal/
│   └── Newish Bakery proposal - original.pdf
├── robots.txt
├── sitemap-template.xml
├── CHANGELOG.md
├── TESTING.md
└── README.md
```

Keep the same folder names and capital letters. For example, the code uses `CSS/style.css`, not `css/style.css`.

## 6. JavaScript features

### Mobile menu

The navigation button opens the menu on mobile screens. JavaScript uses `addEventListener()` and `classList.toggle()` to change the menu state, and `aria-expanded` tells assistive technology whether the menu is open. The menu closes after selecting a link or pressing Escape.

### Search, category filter and sorting

The Menu page has six example product cards. Visitors can search for words such as "cake" and filter by bread, cakes or pastries. The sort control arranges items alphabetically. JavaScript updates the visible results and result count; the HTML cards remain visible if JavaScript is disabled.

### Gallery lightbox

The Gallery page uses a `<dialog>` element to show an enlarged local photograph when selected. The close button and Escape key can close the dialog. The enlarged image reuses the matching file from the `images` folder.

### Form validation and email drafts

The Special Orders and Contact forms use required fields, email format checks, `.trim()`, `if` statements, `addEventListener()` and messages beside incorrect fields. They check input before preparing a `mailto:` email message (MDN Web Docs, s.a.-d).

**Important:** The forms open a draft in the visitor's email application. They **do not** send an order automatically, write to a database or produce a confirmed booking. The visitor must review the draft and press Send. The source project supplied `info@newishbakery.co.za` as the destination; the bakery must **confirm it is the correct working address before publication**. If a browser/device has no configured email app, the email draft may not open.

To receive real form submissions without requiring an email application, the client must choose a suitable form backend or verified hosting form service and test it with actual submissions.

## 7. Design choices

The original bakery proposal requested a welcoming colour scheme, easy navigation, a product gallery, mobile-friendly pages and enquiry functionality. This version uses warm brown, cream, peach and white; simple Georgia headings; and a clean sans-serif body font to keep a familiar bakery feel.

I kept the photographs from the provided project rather than replacing them with unrelated online images. Some example product cards reuse the same supplied photograph because the client has not yet provided a full set of individual product photos. **The menu is illustrative; it is not a confirmed inventory.**

The original logo was retained. A separate `images` folder makes all image links relative, so the photos can work offline and after upload to GitHub Pages or another static host.

### Interactive map (Contact page)

The Contact page now includes a **Leaflet and OpenStreetMap** interactive map. It opens at a country-level view of **South Africa** because the client's physical address has not yet been verified. It is **not** a pin marking Newish Bakery's location. Visitors can drag and zoom, and use the **Open full map** link. The map needs an internet connection and may not load when using `file://` or if the tile service blocks requests; the page then shows a clear fallback message. Use VS Code Live Server or a published HTTPS website for the best test.

Before public launch, the client should confirm the exact street address or agreed collection point. The map can then be centred on that approved place and a genuine location marker added. Never use the current illustrative centre coordinates as a business address (Leaflet, s.a.; OpenStreetMap contributors, s.a.).

## 8. Testing

See `TESTING.md` for the checks performed on the updated files and what still needs testing after deployment. The package was reviewed using a local HTML/CSS/JavaScript browser preview with inlined assets and file-path checks. This is **not** a claim that the site is already live on GitHub Pages or that an email was delivered.

### Still required before handing over a live business website

- [ ] Confirm the business email and receiving account.
- [ ] Confirm the physical location, trading hours, contact phone number and collection arrangements.
- [ ] Check the interactive map on the published website; add a real marker only after the client confirms the bakery address.
- [ ] Confirm the actual menu items, prices, specials and product availability.
- [ ] Confirm rights or permission to use the photographs and branding in a commercial website.
- [ ] Test the uploaded public website on at least one phone and one desktop browser.
- [ ] Test real email/contact delivery with the client.
- [ ] Add the actual final live URL and sitemap after publishing.

## 9. SEO and hosting

Each page has a unique page title, description, descriptive image text and internal navigation. The package includes `robots.txt` with basic crawler permissions.

There is **no confirmed public URL** in the source ZIP, so I have not invented one. `sitemap-template.xml` is a clearly labelled example. Once the website is deployed, replace every `https://example.com` with the verified website address, rename the template to `sitemap.xml`, and add the sitemap URL to the root-domain `robots.txt` if you control that domain. On GitHub Pages project sites, `robots.txt` in a subfolder is not the root domain crawler policy (Google Search Central, s.a.).

### Running locally

1. Unzip the full folder; do not move only the HTML files.
2. Open the folder using Visual Studio Code.
3. Open `index.html` with the VS Code Live Server extension, or use a simple local static server.
4. Use the navigation to test the six pages.
5. The menu and photo gallery use only local files. The interactive map loads its Leaflet library and OpenStreetMap map tiles from the internet; run the project through Live Server and check the map again on the published website. Email draft buttons require a configured email application.

### Publishing to GitHub Pages

1. Create a repository or open the existing repository for this specific project.
2. Commit the website's files to the branch selected for publication.
3. Go to **Settings → Pages** and choose **Deploy from a branch**, the intended branch and `/(root)`.
4. After GitHub reports a successful deployment, open the live link and test all pages again.
5. Update the README with the verified repository URL, live URL and deployment date.

## 10. Example Git commands and descriptive commits

Only run these commands **inside the correct Newish Bakery Git repository**. New descriptive commits help show the work performed; they must reflect real changes and should not be presented as an earlier history.

```powershell
git status
git branch --show-current
git add index.html about.html services.html gallery.html enquiry.html contact.html
git commit -m "Create separate bakery pages and improve page content"
git add CSS/style.css
git commit -m "Improve desktop layout and responsive mobile navigation"
git add JS/script.js images
git commit -m "Add menu filtering gallery lightbox and local bakery images"
git add README.md CHANGELOG.md TESTING.md robots.txt sitemap-template.xml
git commit -m "Document lecturer feedback testing and project handover"
git push origin master
```

Change `master` to your actual publishing branch if necessary. Do not force-push over someone else's work.

## 11. Project limits and future development

This version is ready for a client **review**, not an automatically verified commercial launch. Suggested future work includes a confirmed bakery address, real product list and prices, an approved phone number, a properly configured form service, and additional client-owned product photos.

## 12. References (IIE Harvard-Anglia style)

Google Search Central, s.a. *SEO starter guide*. [Online]. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 2 November 2026].

MDN Web Docs, s.a.-a. *HTML: HyperText Markup Language*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed 2 November 2026].

MDN Web Docs, s.a.-b. *CSS: Cascading Style Sheets*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 2 November 2026].

MDN Web Docs, s.a.-c. *JavaScript guide*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide [Accessed 2 November 2026].

MDN Web Docs, s.a.-d. *Client-side form validation*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation [Accessed 2 November 2026].

Mophuting, B., 2026. *Newish Bakery website proposal*. [Unpublished student project proposal]. Rosebank College. Original copy included in the `Proposal` folder.

The Independent Institute of Education (The IIE), 2026a. *WEDE5020 Week 6: CSS decorative properties, typography, links and pseudo selectors*. [Lecture slides]. Rosebank College.

The Independent Institute of Education (The IIE), 2026b. *WEDE5020 Week 7: Responsive design and media queries*. [Lecture slides]. Rosebank College.

Leaflet, s.a. *Leaflet quick start guide*. [Online]. Available at: https://leafletjs.com/examples/quick-start/ [Accessed 2 November 2026].

OpenStreetMap contributors, s.a. *OpenStreetMap*. [Online]. Available at: https://www.openstreetmap.org/ [Accessed 2 November 2026].
