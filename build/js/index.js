"use strict";

let toggleSection = document.querySelectorAll(".info__title");

if (toggleSection) {
  toggleSection.forEach(elem => elem.addEventListener("click", toggleHandler));
}

function toggleHandler(e) {
  e.preventDefault();
  let section = e.target.parentNode.querySelector(".info-wrapper");

  section.classList.toggle("info-wrapper--hide");
}

const writeUsBtn = document.querySelector(".js-write-us");

if (writeUsBtn) {
  writeUsBtn.addEventListener("click", openWriteUsModal);
}

function openWriteUsModal(e) {
  e.preventDefault();
  const modal = document.querySelector(".write-us-modal");
  if (modal) modal.classList.remove("visually-hidden");
}

let modals = document.querySelectorAll(".modal");

modals.forEach(elem => elem.addEventListener("click", closeModalHandler));

function closeModalHandler(e) {
  e.preventDefault();
  const tg = e.target;
  const closeButton = this.querySelector(".modal__close");
  const overlay = this.querySelector(".modal__overlay");

  if (tg === closeButton || tg === overlay)
    this.classList.add("visually-hidden");
}
