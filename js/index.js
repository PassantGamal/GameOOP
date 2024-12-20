import { Game } from "./game.module.js";
new Game();
window.onscroll = function() { toggleFixedNavbar() };

function toggleFixedNavbar() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {  
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
}
