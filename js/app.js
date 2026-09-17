document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobileNav");

  const closeMenu = () => {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("open");
    document.body.classList.remove("menu-open");
  };

  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", open ? "false" : "true");
    mobileNav?.classList.toggle("open", !open);
    document.body.classList.toggle("menu-open", !open);
  });

  mobileNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMenu();
  });

  const cfg = window.JC2B_CONFIG || {};

  const applyConfigValues = (lang = document.documentElement.lang || "fr") => {
    document.querySelectorAll("[data-config='venue']").forEach(el => {
      if (cfg.conferenceVenue) el.textContent = cfg.conferenceVenue;
    });

    document.querySelectorAll("[data-config='date']").forEach(el => {
      el.textContent = cfg.conferenceDate || (lang === "fr" ? "À venir" : "To be announced");
    });

    const email = cfg.contactEmail || "jc2b.paris.saclay@gmail.com";
    document.querySelectorAll("[data-config='email-text']").forEach(el => {
      el.textContent = email;
      if (el.tagName === "A") el.href = `mailto:${email}`;
    });
    document.querySelectorAll("[data-email-link]").forEach(el => {
      if (el.tagName === "A") el.href = `mailto:${email}`;
    });
  };

  applyConfigValues();
  document.addEventListener("jc2b:languagechange", event => applyConfigValues(event.detail?.lang || "fr"));

  const registrationLinks = document.querySelectorAll("[data-registration-link]");
  registrationLinks.forEach(link => {
    if (cfg.registrationFormUrl) {
      link.href = cfg.registrationFormUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.classList.remove("is-disabled");
      link.removeAttribute("aria-disabled");
    } else {
      link.href = "registration.html";
      if (document.body.dataset.page === "registration") {
        link.href = "#registration-form";
        link.classList.add("is-disabled");
        link.setAttribute("aria-disabled", "true");
      }
    }
  });

  const embedWrap = document.getElementById("registration-form");
  if (embedWrap) {
    const iframe = embedWrap.querySelector("iframe");
    const placeholder = embedWrap.querySelector(".form-placeholder");
    if (cfg.registrationEmbedUrl && iframe) {
      iframe.src = cfg.registrationEmbedUrl;
      iframe.hidden = false;
      if (placeholder) placeholder.hidden = true;
    }
  }
});
