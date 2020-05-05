var header = document.querySelector(".page-header");

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");
header.classList.add("page-header--menu-hide");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    header.classList.remove("page-header--menu-hide");
    header.classList.add("page-header--menu-show");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    header.classList.add("page-header--menu-hide");
    header.classList.remove("page-header--menu-show");
  }
})
