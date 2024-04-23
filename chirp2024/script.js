const nav = document.querySelector(".nav-items");

function expandNav() {
  nav.ariaExpanded = true;
  document.body.style.overflowY = "hidden";
}

function closeNav() {
  nav.ariaExpanded = false;
  document.body.style.overflowY = "auto";
}
