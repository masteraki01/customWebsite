// Load navbar into every page
fetch("components/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch(err => console.error("Navbar load failed:", err));

  fetch("components/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(err => console.error("footer load failed:", err));

    fetch("components/menu.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("menu-list").innerHTML = data;
  })
  .catch(err => console.error("menu-list load failed:", err));


  // Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('themeToggle');
  if (!btn) return; // in case the button isn't on this page

  // Apply saved theme from previous visits
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }

  // Toggle theme on click
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');

    // Save user preference
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});
