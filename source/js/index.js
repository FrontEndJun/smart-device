'use strict';

(function () {
  var ESC = 27;
  var toggleSection = document.querySelectorAll('.info__title');
  var body = document.querySelector('html');
  var telInputs = document.querySelectorAll('input[type="tel"]');
  telInputs.forEach(function (input) {
    return new window.IMask(input, {
      mask: '+{7}(000)000-00-00'
    });
  });
  var promoButton = document.querySelector('.promo__button');
  promoButton.addEventListener('click', function (e) {
    var writeUsSection = document.querySelector('.write-us');
    e.preventDefault();
    scrollTo(writeUsSection);
  });
  document.querySelector('.promo__hint').addEventListener('click', function () {
    var section = document.querySelector('.advantages');
    scrollTo(section);
  });

  if (toggleSection) {
    toggleSection.forEach(function (sect) {
      return sect.addEventListener('click', toggleHandler);
    });
  }

  function toggleHandler(e) {
    e.preventDefault();
    toggleSection.forEach(function (elm) {
      var section = elm.parentNode;
      if (elm === e.target) {
        section.classList.toggle('hide');
      } else {
        section.classList.add('hide');
      }
    });
  }

  var writeUsBtn = document.querySelector('.js-write-us');

  if (writeUsBtn) {
    writeUsBtn.addEventListener('click', openWriteUsModal);
  }

  function openWriteUsModal(e) {
    e.preventDefault();
    body.style.overflow = 'hidden';
    var modal = document.querySelector('.write-us-modal');

    if (modal) {
      var inputs = [].slice.apply(modal.querySelector('form').elements).filter(function (elm) {
        return (!(elm.type === 'checkbox') && (elm.tagName === 'INPUT' || elm.tagName === 'TEXTAREA'));
      });

      inputs.forEach(function (elm) {
        elm.addEventListener('input', function () {
          localStorage.setItem(elm.name, elm.value);
        });
      });

      inputs[0].focus();
      modal.classList.remove('visually-hidden');
      modal.addEventListener('click', closeModalHandler);
      document.addEventListener('keydown', onEscModalCloseHandler);
    }
  }

  function onEscModalCloseHandler(e) {
    if (e.keyCode === ESC) {
      var modals = document.querySelectorAll('.modal');
      modals.forEach(function (modal) {
        if (!modal.classList.contains('visually-hidden')) {
          modal.classList.add('visually-hidden');
        }
      });
      document.removeEventListener('keydown', onEscModalCloseHandler);
      body.style.overflow = '';
    }
  }

  function closeModalHandler(e) {
    var current = e.currentTarget;
    var tg = e.target;
    var closeButton = current.querySelector('.modal__close');
    var overlay = current.querySelector('.modal__overlay');

    if (tg === closeButton || tg === overlay) {
      current.classList.add('visually-hidden');
      current.querySelector('#modal-form').reset();
      body.style.overflow = '';
      document.removeEventListener('keydown', onEscModalCloseHandler);
    }
  }

  function scrollTo(targetBox) {
    var to = targetBox.getBoundingClientRect().top + window.pageYOffset;
    var duration = 1500;
    var start = performance.now();
    var dir = to - window.pageYOffset > 0 ? 1 : -1;
    window.requestAnimationFrame(animatedScroll);

    function animatedScroll(time) {
      var timeFraction = Math.pow((time - start) / duration, 2);
      if (timeFraction > 1) {
        return;
      }
      if (window.pageYOffset > to) {
        window.scrollBy(0, to - pageYOffset);
        return;
      } else {
        var step = Math.abs(to - window.pageYOffset) * timeFraction;
        window.scrollBy(0, step * dir);
      }

      window.requestAnimationFrame(animatedScroll);
    }
  }

  function adaptive() {
    var licenceNode = document.querySelector('.footer__licence');
    if (document.documentElement.clientWidth < 678) {
      promoButton.textContent = 'бесплатная консультация';
    } else {
      promoButton.textContent = 'Получить бесплатную консультацию';
    }
    if (document.documentElement.clientWidth > 1023) {
      document.querySelector('.footer__rights').after(licenceNode);
    } else {
      document.querySelector('.footer__logo').after(licenceNode);
    }
  }

  adaptive();

  window.addEventListener('resize', debounce(adaptive, 300));

  function debounce(fn, time) {
    var isDelayed = false;
    return function () {
      if (isDelayed) {
        return;
      }
      isDelayed = true;
      fn();
      setTimeout(function () {
        isDelayed = false;
      }, time);
    };
  }
})();
