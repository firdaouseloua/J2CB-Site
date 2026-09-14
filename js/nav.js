document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  if (header) {
    header.innerHTML = `
      <div class="shell navbar">
        <a href="index.html" class="brand" aria-label="JC2B 2026 home">
          <strong>JC2B</strong><span>2026</span>
        </a>

        <nav class="nav-panel" id="primary-navigation" aria-label="Primary navigation">
          <a href="index.html#about" data-i18n="navAbout">About</a>
          <a href="program.html" data-i18n="navProgramme">Programme</a>
          <a href="index.html#contributions" data-i18n="navContributions">Contributions</a>
          <a href="practical.html" data-i18n="navPractical">Practical info</a>
          <a href="index.html#organisation" data-i18n="navOrganisation">Organisation</a>
          <a href="contact.html" data-i18n="navContact">Contact</a>

          <div class="mobile-only mobile-nav-actions">
            <div class="language-switcher" aria-label="Language selector">
              <button class="lang-btn" type="button" data-lang="fr">FR</button>
              <span class="lang-divider">/</span>
              <button class="lang-btn" type="button" data-lang="en">EN</button>
            </div>
            <a href="registration.html" class="nav-register" data-i18n="register">Register</a>
          </div>
        </nav>

        <div class="nav-actions">
          <div class="language-switcher" aria-label="Language selector">
            <button class="lang-btn" type="button" data-lang="fr">FR</button>
            <span class="lang-divider">/</span>
            <button class="lang-btn" type="button" data-lang="en">EN</button>
          </div>
          <a href="registration.html" class="nav-register" data-i18n="register">Register</a>
        </div>

        <button class="menu-toggle" type="button" aria-label="Open menu" aria-controls="primary-navigation" aria-expanded="false">
          <span></span><span></span>
        </button>
      </div>
      <div class="nav-backdrop" aria-hidden="true"></div>
    `;

    const toggle = header.querySelector(".menu-toggle");
    const panel = header.querySelector(".nav-panel");
    const backdrop = header.querySelector(".nav-backdrop");

    const closeMenu = () => {
      toggle?.setAttribute("aria-expanded", "false");
      panel?.classList.remove("open");
      backdrop?.classList.remove("show");
      document.body.classList.remove("menu-open");
    };

    const openMenu = () => {
      toggle?.setAttribute("aria-expanded", "true");
      panel?.classList.add("open");
      backdrop?.classList.add("show");
      document.body.classList.add("menu-open");
    };

    toggle?.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeMenu() : openMenu();
    });

    backdrop?.addEventListener("click", closeMenu);
    panel?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="shell footer-main">
        <div class="footer-brand">
          <strong>JC2B 2026</strong>
          <p data-i18n="footerText">Junior Conference of Computational Biology — organised by students of the Master BIBS-IA at Université Paris-Saclay.</p>
        </div>
        <div class="footer-col">
          <h3 data-i18n="footerExplore">Explore</h3>
          <a href="program.html" data-i18n="navProgramme">Programme</a>
          <a href="index.html#contributions" data-i18n="navContributions">Contributions</a>
          <a href="practical.html" data-i18n="navPractical">Practical info</a>
        </div>
        <div class="footer-col">
          <h3 data-i18n="footerContact">Contact</h3>
          <a href="contact.html" data-i18n="navContact">Contact</a>
          <a href="index.html#organisation" data-i18n="navOrganisation">Organisation</a>
        </div>
      </div>
      <div class="shell footer-bottom">
        <span>© 2026 JC2B · Université Paris-Saclay</span>
        <img class="footer-ups-logo" src="https://www.universite-paris-saclay.fr/sites/default/files/styles/max_325x325/public/media/2020-01/logotype_upsaclay_rvb.png?itok=_qNmNCV6" alt="Université Paris-Saclay" />
      </div>
    `;
  }
});
