function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("show");
}
function hideMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.remove("show");
}
// Toggle theme and store preference
function toggleTheme() {
  hideMenu();
  const body = document.body;
  body.classList.toggle('light-theme');

  // Save the user's preference to localStorage
  const theme = body.classList.contains('light-theme') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
}

// Apply saved theme on page load
(function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }
})();