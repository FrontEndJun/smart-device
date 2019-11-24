"use strict";
(() => {
  let toggleSection = document.querySelectorAll(".info__title");

  toggleSection.forEach(elem => elem.addEventListener("click", toggleHandler));

  function toggleHandler(e) {
    e.preventDefault();
    let section = e.target.parentNode.querySelector(".info-wrapper");
    if (section.classList.contains("info-wrapper--hide")) {
      section.classList.remove("info-wrapper--hide");
    } else {
      section.classList.add("info-wrapper--hide");
    }
  }
})();
