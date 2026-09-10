document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  if (header) {
    header.innerHTML = `
      <header class="navbar">
        <a href="index.html" class="logo">J2CB 2026</a>
        <nav class="nav-links">
          <a href="index.html">Home</a>
          <a href="program.html">Program</a>
          <a href="practical.html">Venue & Info</a>
          <a href="registration.html" class="btn-cta">Register</a>
        </nav>
      </header>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <footer class="footer">
        <p>&copy; 2026 J2CB Organizing Committee. Hosted by [Institution Name].</p>
        <p><a href="contact.html">Contact Us</a></p>
      </footer>
    `;
  }
});