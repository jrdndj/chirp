const nav = document.querySelector(".nav-items");

const headerOffset = document.querySelector(".navbar").offsetHeight;

const navLinks = document.querySelectorAll(".nav-items a:not(.external)");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    window.history.pushState(null, null, `#${targetId}`);
    const yOffset = headerOffset; // Use the header offset here
    const y =
      targetElement.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    closeNav();
  });
});

function expandNav() {
  nav.ariaExpanded = true;
  document.body.style.overflowY = "hidden";
}

function closeNav() {
  nav.ariaExpanded = false;
  document.body.style.overflowY = "auto";
}
