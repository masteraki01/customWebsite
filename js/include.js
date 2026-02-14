

fetch("components/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch(err => console.error("Navbar load failed:", err));

fetch("components/menumain.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("menumain").innerHTML = data;
  })
  .catch(err => console.error("menumain load failed:", err));


fetch("components/menu.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("menu-list").innerHTML = data;
  })
  .catch(err => console.error("menu-list load failed:", err));

  fetch("components/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(err => console.error("footer load failed:", err));
  

  
// ===== THEME SYSTEM =====
const themes = [
  "theme-primary",
  "theme-dark",
  "theme-fairy",
  "theme-ocean"
];

function applyTheme(theme) {
  document.documentElement.classList.remove(...themes);
  document.documentElement.classList.add(theme);
  localStorage.setItem("site-theme", theme);
}

// Load saved theme immediately
const savedTheme = localStorage.getItem("site-theme");
if (savedTheme && themes.includes(savedTheme)) {
  document.documentElement.classList.add(savedTheme);
} else {
  document.documentElement.classList.add(themes[0]);
}

// Handle button click (works with injected navbar)
document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "themeToggle") {
    const current = localStorage.getItem("site-theme") || themes[0];
    const index = themes.indexOf(current);
    const next = themes[(index + 1) % themes.length];
    applyTheme(next);
  }
});

// Sync across tabs
window.addEventListener("storage", function (e) {
  if (e.key === "site-theme" && themes.includes(e.newValue)) {
    document.documentElement.classList.remove(...themes);
    document.documentElement.classList.add(e.newValue);
  }
});
