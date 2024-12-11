'use strict';

const logo = document.querySelector('.logo');

// eslint-disable-next-line no-new
new Promise((resolve) => {
  resolve(
    logo.insertAdjacentHTML(
      'beforeend',
      '<div class="message">Promise was resolved!</>',
    ),
  );
});

// eslint-disable-next-line promise/param-names, no-new
new Promise((regect) => {
  setTimeout(() => {
    regect(
      logo.insertAdjacentHTML(
        'beforeend',
        '<div class="message error-message">Promise was rejected!</>',
      ),
    );
  }, 3000);
});
