/**
 * Common JavaScript functionality for zFernand0.github.io
 * Contains shared functions for theme management, navigation, and utilities
 */

// Global variables
const navbar = document.querySelector(".navbar");
const htmlElement = document.documentElement;

/**
 * Toggle the mobile navigation menu
 */
function toggleMenu() {
  if (navbar) {
    navbar.classList.toggle("hidden");
    navbar.classList.toggle("open");
  }
}

/**
 * Hide the mobile navigation menu
 */
function hideMenu() {
  if (navbar && navbar.classList.contains("open")) {
    navbar.classList.add("hidden");
    navbar.classList.remove("open");
  }
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
  if (htmlElement.classList.contains("dark")) {
    // If currently dark, switch to light
    htmlElement.classList.remove("dark");
    htmlElement.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    // If currently light, switch to dark
    htmlElement.classList.remove("light");
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

/**
 * Initialize theme on page load based on local storage or system preference
 */
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    htmlElement.classList.add(savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    // If no saved theme, check system preference
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.add("light");
  }
}

/**
 * Handle window resize events
 */
function handleResize() {
  if (window.innerWidth >= 768) {
    // Tailwind's 'md' breakpoint is 768px
    hideMenu();
  }
}

/**
 * Initialize all common functionality
 */
function initializeCommon() {
  // Initialize theme
  initializeTheme();

  // Add event listeners
  window.addEventListener("resize", handleResize);

  // Add click event listeners for navigation links
  document.addEventListener("click", e => {
    if (e.target.tagName === "A" && e.target.getAttribute("href") && !e.target.getAttribute("href").startsWith("#")) {
      hideMenu();
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeCommon);

// Export functions for use in other scripts
window.CommonUtils = {
  toggleMenu,
  hideMenu,
  toggleTheme,
  initializeTheme,
};
