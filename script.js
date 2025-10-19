// Define your image paths at the top
// --- NEW ---
const lightImageSrc = "assests/me2.png"; // Change this
const darkImageSrc = "assests/me1.png"; // Change this

// We wrap all our code in a DOMContentLoaded event listener.
document.addEventListener("DOMContentLoaded", () => {
  // --- Hamburger Menu Logic ---
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

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
  const themeImage = document.getElementById("theme-image"); // --- NEW ---

  if (themeToggle && body) {
    // Function to apply the saved theme
    function applyTheme(theme) {
      if (theme === "dark") {
        body.classList.add("dark-mode");
        if (themeImage) themeImage.src = darkImageSrc; // --- NEW ---
      } else {
        body.classList.remove("dark-mode");
        if (themeImage) themeImage.src = lightImageSrc; // --- NEW ---
      }
    }

    // Check for saved theme in localStorage
    let savedTheme = localStorage.getItem("theme") || "light";

    // (Optional) Check for system preference
    if (!localStorage.getItem("theme")) {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (systemPrefersDark) {
        savedTheme = "dark";
      }
    }

    // Apply the theme on initial load
    applyTheme(savedTheme);

    // Event listener for the toggle button
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      // Save the new theme and change the image
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        if (themeImage) themeImage.src = darkImageSrc; // --- NEW ---
      } else {
        localStorage.setItem("theme", "light");
        if (themeImage) themeImage.src = lightImageSrc; // --- NEW ---
      }
    });
  }
});
