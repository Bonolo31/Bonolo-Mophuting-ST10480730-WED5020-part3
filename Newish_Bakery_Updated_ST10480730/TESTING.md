# Newish Bakery – Testing notes

**Date:** 2 November 2026  
**Scope:** Files in the updated website ZIP. This is not live-hosting or form-delivery certification.

## Checks performed

| Test | Result | Notes |
|---|---|---|
| Six HTML pages are present with different content | PASS | Each page has its own title and main heading |
| External stylesheet referenced in every HTML file | PASS | `CSS/style.css` exists using matching capital letters |
| External JavaScript referenced in every HTML file | PASS | `JS/script.js` exists using matching capital letters |
| Images exist and resolve locally | PASS | All local photos and logo were extracted into `images/` |
| Desktop visual preview | PASS | All six pages rendered in a headless Chromium HTML preview using inlined assets |
| 375px mobile layout | PASS | Tested all six; no horizontal overflow in the preview |
| Mobile menu | PASS | Menu opened and updated `aria-expanded` on all six pages |
| Menu search | PASS | Searching “cake” showed 2 of 6 example items |
| Menu category filter | PASS | Bread category showed 2 of 6 items |
| Gallery lightbox | PASS | Opens the matching photo and closes with its button |
| Invalid contact form | PASS | Empty required fields display an error |
| Contact map element and Leaflet initialization | PASS (mocked) | Confirmed South Africa coordinates and tile layer initialization with a simulated Leaflet library |
| Missing map library / blocked connection | PASS (mocked) | Fallback appears, map hides, and full-map external link remains available |
| Map layout at 375px width | PASS (preview) | No horizontal overflow |

**Test limitation:** The automated visual preview inlined CSS, JavaScript and images because this environment blocked direct localhost/file navigation in its test browser. File references were checked separately against the ZIP folder structure. A deployed website still needs a real-browser end-to-end check.

## Interactive map notes

The Contact page includes an interactive Leaflet/OpenStreetMap map with a **South Africa overview only**, not a bakery marker. The original proposal did not supply a verified street address. The map requires external map tiles and should be tested on the live HTTPS site. The fallback text is shown when the Leaflet script cannot load or when several tile requests fail. The full-map link remains available.

## Final live-site checks still to complete

- [ ] Publish the current folder on the intended hosting platform.
- [ ] Open all six public page URLs in a desktop browser.
- [ ] Click every menu link on a phone.
- [ ] Confirm photos load over the live HTTPS URL.
- [ ] Confirm CSS works on Home, About, Menu, Gallery, Special Orders and Contact.
- [ ] Confirm special-order links preselect the correct product on the hosted site.
- [ ] Check form validations and opening a mail app on the intended client device.
- [ ] Confirm the recipient's email address and verify receipt of a real message.
- [ ] Confirm actual operating hours, contact phone and collection address with the client.
- [ ] On the hosted Contact page, verify the map can pan/zoom and map tiles load; if blocked, confirm fallback and full-map link work.
- [ ] After receiving a verified address, add a business marker only at that confirmed location.
- [ ] Check permission to publish photographs and brand artwork commercially.
- [ ] Update the sitemap template with the live website URL.

## How to test locally

Keep the entire folder structure intact. Open `index.html` from a local server (for example VS Code Live Server) and navigate through the site. If the CSS is missing, check the exact uppercase `CSS` folder and if images are missing check the `images` folder.
