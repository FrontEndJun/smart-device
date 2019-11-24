"use strict";

let toggleSection = document.querySelector(".info__title");

toggleSection.addEventListener("click", toggleHandler);

function toggleHandler(e) {
  e.preventDefault();
  let section = e.target.parentNode.querySelector(".info-wrapper");
  section.classList.add("info-wrapper--hide");
}
