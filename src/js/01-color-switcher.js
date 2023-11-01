import { getRandomHexColor } from './helper';

const BtnStart = document.querySelector('[data-start]');
const BtnStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let intervalId = null;

BtnStart.addEventListener('click', onBtnStart);
BtnStop.addEventListener('click', onBtnStop);
BtnStop.setAttribute('disabled', 'true');

function onBtnStart() {
  BtnStart.setAttribute('disabled', 'true');
  BtnStop.removeAttribute('disabled');
  bodyEl.style.backgroundColor = getRandomHexColor();
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtnStop() {
  BtnStop.setAttribute('disabled', 'true');
  BtnStart.removeAttribute('disabled');
  clearInterval(intervalId);
}
