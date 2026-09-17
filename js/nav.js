(function () {
  const page = document.body.dataset.page || "home";

  const links = [
    ["home", "index.html", "navHome", "Home"],
    ["about", "about.html", "navAbout", "About"],
    ["scope", "scope.html", "navScope", "Scientific scope"],
    ["programme", "programme.html", "navProgramme", "Programme"],
    ["abstracts", "abstracts.html", "navAbstracts", "Abstracts"],
    ["practical", "practical.html", "navPractical", "Practical info"],
    ["contact", "contact.html", "navContact", "Contact"]
  ];

  const navHtml = links.map(([key, href, i18n, label]) => `
    <a class="nav-link${page === key ? " active" : ""}" href="${href}" data-i18n="${i18n}">${label}</a>
  `).join("");

  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <div class="nav-shell container">
        <a class="site-logo" href="index.html" aria-label="JC2B 2026 home">
          <img src="images/logos/jc2b-header-mark.png" alt="JC2B 2026 — Junior Conference of Computational Biology" />
        </a>

        <nav class="desktop-nav" aria-label="Primary navigation">
          ${navHtml}
        </nav>

        <div class="nav-actions">
          <div class="lang-switch" aria-label="Language switcher">
            <button type="button" data-lang="fr">FR</button><span>/</span><button type="button" data-lang="en">EN</button>
          </div>
          <a class="btn btn-primary btn-nav" href="registration.html" data-i18n="register">Register</a>
          <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="mobileNav">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <div class="mobile-nav" id="mobileNav">
        <div class="container mobile-nav-inner">
          ${navHtml}
          <a class="btn btn-primary" href="registration.html" data-i18n="register">Register</a>
        </div>
      </div>
    `;
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="container footer-grid">
        <div class="footer-brand">
          <a class="footer-logo" href="index.html"><img src="images/logos/jc2b-2026-transparent.png" alt="JC2B 2026" /></a>
          <p data-i18n="footerText">Junior Conference of Computational Biology · Paris-Saclay.</p>
        </div>

        <div class="footer-links">
          <a href="index.html" data-i18n="navHome">Home</a>
          <a href="about.html" data-i18n="navAbout">About</a>
          <a href="scope.html" data-i18n="navScope">Scientific scope</a>
          <a href="programme.html" data-i18n="navProgramme">Programme</a>
          <a href="abstracts.html" data-i18n="navAbstracts">Abstracts</a>
        </div>

        <div class="footer-links">
          <a href="practical.html" data-i18n="navPractical">Practical info</a>
          <a href="contact.html" data-i18n="navContact">Contact</a>
          <a href="registration.html" data-i18n="register">Register</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© 2026 JC2B</span>
        <span data-i18n="footerHost">Junior Conference of Computational Biology</span>
      </div>
    `;
  }
})();
