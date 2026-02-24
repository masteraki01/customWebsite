

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
  

  
<!--theme stuff-->
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


const savedTheme = localStorage.getItem("site-theme");
if (savedTheme && themes.includes(savedTheme)) {
  document.documentElement.classList.add(savedTheme);
} else {
  document.documentElement.classList.add(themes[0]);
}


document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "themeToggle") {
    const current = localStorage.getItem("site-theme") || themes[0];
    const index = themes.indexOf(current);
    const next = themes[(index + 1) % themes.length];
    applyTheme(next);
  }
});


window.addEventListener("storage", function (e) {
  if (e.key === "site-theme" && themes.includes(e.newValue)) {
    document.documentElement.classList.remove(...themes);
    document.documentElement.classList.add(e.newValue);
  }
});


<!--testimonials carasoul-->
  const slides = document.querySelectorAll("#carousel .slide");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let index = 0;
  const intervalTime = 5000; // Change timing here

  function showSlide(i) {
    slides.forEach(slide => slide.classList.add("hidden"));
    slides[i].classList.remove("hidden");
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  setInterval(nextSlide, intervalTime);

  <!--generate highlight for navbar for each page-->

  document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar-links");
  const currentPath = window.location.pathname;

  links.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active-link");
    }
  });
});