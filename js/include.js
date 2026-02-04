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
    document.getElementById("menu").innerHTML = data;
  })
  .catch(err => console.error("menu load failed:", err));

