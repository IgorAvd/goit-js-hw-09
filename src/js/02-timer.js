import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const btnEl = document.querySelector('button');
const spanSec = document.querySelector('[data-seconds]');
const spanMin = document.querySelector('[data-minutes]');
const spanHours = document.querySelector('[data-hours]');
const spanDays = document.querySelector('[data-days]');
let selectedDate;
let intervalId = null;
let isActive = false;

btnEl.addEventListener('click', onStartClick);
btnEl.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notify.failure('Please choose a date in the future');
    } else {
      btnEl.removeAttribute('disabled');
      selectedDate = selectedDates[0].getTime();
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function updateTimer() {
  const currentTime = Date.now();
  const remainingTime = selectedDate - currentTime;
  if (remainingTime <= 0) {
    clearInterval(intervalId);
    return;
  }
  const timeValues = convertMs(remainingTime);
  spanSec.textContent = timeValues.seconds;
  spanMin.textContent = timeValues.minutes;
  spanHours.textContent = timeValues.hours;
  spanDays.textContent = timeValues.days;
}

function onStartClick() {
  if (isActive) {
    return;
  }
  isActive = true;
  updateTimer();
  intervalId = setInterval(updateTimer, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
