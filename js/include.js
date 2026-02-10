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
