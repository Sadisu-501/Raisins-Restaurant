const menuBtn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const sideMenu = document.getElementById("menu");
const links = document.getElementsByClassName("menu-link");

function openMenu() {
  overlay.style.opacity = "1";
  overlay.style.visibility = "visible";

  // Delay
  setTimeout(function () {
    sideMenu.classList.add("open");
  }, 300);
}

function closeMenu() {
  sideMenu.classList.remove("open");

  // Delay
  setTimeout(function () {
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
  }, 300);
}

// Add Event Listeners
menuBtn.addEventListener("click", openMenu);
overlay.addEventListener("click", closeMenu);
Array.from(links).forEach((link) => {
  link.addEventListener("click", closeMenu);
});
