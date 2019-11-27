'use strict';

(function () {
  var toggleSection = document.querySelectorAll('.info__title');
  var modals = document.querySelectorAll('.modal');

  if (toggleSection) {
    toggleSection.forEach(function (elem) {
      elem.addEventListener('click', toggleHandler);
    });
  }

  function toggleHandler(e) {
    e.preventDefault();
    var section = e.target.parentNode.querySelector('.info-wrapper');

    section.classList.toggle('info-wrapper--hide');
  }

  var writeUsBtn = document.querySelector('.js-write-us');

  if (writeUsBtn) {
    writeUsBtn.addEventListener('click', openWriteUsModal);
  }

  function openWriteUsModal(e) {
    e.preventDefault();
    var modal = document.querySelector('.write-us-modal');
    if (modal) {
      modal.classList.remove('visually-hidden');
    }
  }

  modals.forEach(function (elem) {
    elem.addEventListener('click', closeModalHandler);
  });

  function closeModalHandler(e) {
    e.preventDefault();
    var current = e.currentTarget;
    var tg = e.target;
    var closeButton = current.querySelector('.modal__close');
    var overlay = current.querySelector('.modal__overlay');

    if (tg === closeButton || tg === overlay) {
      current.classList.add('visually-hidden');
      current.querySelector("#modal-form").reset();
    }
  }
})();
