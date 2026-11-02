/* NEWISH BAKERY | WEDE5020 PART 3
   Basic JavaScript: events, DOM updates, arrays, if statements and form checks.
*/
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation (the same menu is used across all six pages).
  const menuButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.querySelector("span").textContent = isOpen ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.querySelector("span").textContent = "☰";
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.querySelector("span").textContent = "☰";
      }
    });
  }

  // Search, filter and sort menu cards. HTML remains readable without JS.
  const menuGrid = document.getElementById("menu-grid");
  if (menuGrid) {
    const search = document.getElementById("menu-search");
    const category = document.getElementById("menu-filter");
    const sort = document.getElementById("menu-sort");
    const count = document.getElementById("menu-count");
    const empty = document.getElementById("menu-empty");
    const cards = Array.from(menuGrid.querySelectorAll(".menu-card"));
    function updateMenu() {
      const searchText = search.value.trim().toLowerCase();
      const selected = category.value;
      let shown = 0;
      cards.forEach(function (card) {
        const matchesText = card.textContent.toLowerCase().includes(searchText);
        const matchesCategory = selected === "all" || card.dataset.category === selected;
        card.hidden = !(matchesText && matchesCategory);
        if (!card.hidden) shown += 1;
      });
      const ordered = cards.slice();
      if (sort.value === "az") ordered.sort((a,b) => a.dataset.name.localeCompare(b.dataset.name));
      if (sort.value === "za") ordered.sort((a,b) => b.dataset.name.localeCompare(a.dataset.name));
      ordered.forEach(function (card) { menuGrid.appendChild(card); });
      count.textContent = "Showing " + shown + " of " + cards.length + " items";
      empty.hidden = shown !== 0;
    }
    [search, category, sort].forEach(function (control) {
      control.addEventListener(control === search ? "input" : "change", updateMenu);
    });
    updateMenu();
  }

  // Photo lightbox using the existing local image file paths.
  const lightbox = document.getElementById("lightbox");
  if (lightbox && typeof lightbox.showModal === "function") {
    const enlarged = document.getElementById("lightbox-image");
    const caption = document.getElementById("lightbox-caption");
    document.querySelectorAll(".gallery-open").forEach(function (button) {
      button.addEventListener("click", function () {
        const small = button.querySelector("img");
        enlarged.src = button.dataset.full;
        enlarged.alt = small.alt;
        caption.textContent = button.dataset.caption;
        lightbox.showModal();
      });
    });
    document.getElementById("lightbox-close").addEventListener("click", function () {
      lightbox.close();
    });
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) lightbox.close();
    });
  }

  // Contact map: show South Africa until a real bakery address is confirmed.
  // Requires internet access for Leaflet and OpenStreetMap tiles.
  const mapNode = document.getElementById("bakery-map");
  if (mapNode) {
    const mapFallback = document.getElementById("map-fallback");
    function showMapFallback() {
      mapNode.hidden = true;
      if (mapFallback) mapFallback.hidden = false;
    }
    if (typeof window.L === "undefined") {
      showMapFallback();
    } else {
      try {
        // Country-level overview only. Not a confirmed bakery location.
        const map = L.map(mapNode, {scrollWheelZoom: false}).setView([-28.6, 24.5], 5);
        const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>'
        });
        let failedTiles = 0;
        tiles.on("tileerror", function () {
          failedTiles += 1;
          if (failedTiles >= 3) showMapFallback();
        });
        tiles.addTo(map);
      } catch (error) {
        console.error("Map could not load:", error);
        showMapFallback();
      }
    }
  }

  // Optional menu item from an enquiry link (e.g. ?item=Artisan%20Bread).
  const orderItem = document.getElementById("order-item");
  if (orderItem) {
    const requested = new URLSearchParams(window.location.search).get("item");
    if (requested && Array.from(orderItem.options).some(opt => opt.value === requested)) {
      orderItem.value = requested;
    }
    const dateField = document.getElementById("order-date");
    if (dateField) dateField.min = new Date().toLocaleDateString("en-CA");
  }

  // Basic client-side checks and email draft preparation.
  // This does NOT submit to a server. The customer must send the email themselves.
  const CONTACT_EMAIL = "info@newishbakery.co.za"; // Supplied in original website; client must verify.
  function fieldMessage(field) {
    const val = field.value.trim();
    if (field.required && !val) return "Please complete this field.";
    if (field.type === "email" && val && !field.checkValidity()) return "Please enter a valid email address.";
    if (field.minLength > 0 && val.length < field.minLength) return "Please enter at least " + field.minLength + " characters.";
    return "";
  }
  function checkField(field) {
    const msg = fieldMessage(field);
    const error = document.getElementById(field.id + "-error");
    if (error) error.textContent = msg;
    field.setAttribute("aria-invalid", String(Boolean(msg)));
    return msg === "";
  }
  document.querySelectorAll(".contact-form").forEach(function (form) {
    const requiredFields = Array.from(form.querySelectorAll("[required]"));
    requiredFields.forEach(function (field) {
      field.addEventListener("blur", function () { checkField(field); });
      field.addEventListener("input", function () {
        if (field.getAttribute("aria-invalid") === "true") checkField(field);
      });
    });
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let isValid = true;
      requiredFields.forEach(function (field) {
        if (!checkField(field)) isValid = false;
      });
      const status = form.querySelector(".form-status");
      status.classList.remove("error");
      if (!isValid) {
        status.textContent = "Please correct the highlighted fields.";
        status.classList.add("error");
        const invalid = form.querySelector('[aria-invalid="true"]');
        if (invalid) invalid.focus();
        return;
      }
      const formData = new FormData(form);
      const kind = form.dataset.formKind;
      const subject = kind === "order" ? "Newish Bakery special order enquiry" : "Newish Bakery general enquiry";
      const parts = ["Hello Newish Bakery,", "", "Name: " + formData.get("name"), "Email: " + formData.get("email")];
      if (kind === "order") {
        parts.push("Product: " + formData.get("item"));
        parts.push("Preferred date: " + (formData.get("date") || "Not specified"));
      } else {
        parts.push("Question type: " + formData.get("topic"));
      }
      parts.push("", "Message:", formData.get("message"), "", "Sent using the Newish Bakery website email-draft form.");
      const mailto = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(parts.join("\n"));
      status.textContent = "Your email draft is ready. If your email app opens, review it and press Send. No message has been sent automatically.";
      window.location.href = mailto;
    });
  });
});
