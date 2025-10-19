// We wrap all our code in a DOMContentLoaded event listener.
// This ensures the HTML is fully loaded before we try to find elements.
document.addEventListener("DOMContentLoaded", () => {
  // --- Hamburger Menu Logic ---
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      // Toggle 'active' class on both hamburger and nav links
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Close mobile menu if a link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          hamburger.classList.remove("active");
        }
      });
    });
  }

  // --- Theme Toggle Logic ---
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  if (themeToggle && body) {
    // Function to apply the saved theme
    function applyTheme(theme) {
      if (theme === "dark") {
        body.classList.add("dark-mode");
      } else {
        body.classList.remove("dark-mode");
      }
    }

    // Check for saved theme in localStorage
    // We use '|| "light"' as a fallback to default to light mode
    let savedTheme = localStorage.getItem("theme") || "light";

    // (Optional) Check for system preference if no theme is saved
    if (!localStorage.getItem("theme")) {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (systemPrefersDark) {
        savedTheme = "dark";
      }
    }

    applyTheme(savedTheme);

    // Event listener for the toggle button
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      // Save the new theme preference
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }
});
