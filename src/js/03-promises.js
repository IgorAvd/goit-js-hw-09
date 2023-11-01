import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const form = document.querySelector('.form');
const delayInput = form.querySelector('input[name="delay"]');
const stepInput = form.querySelector('input[name="step"]');
const amountInput = form.querySelector('input[name="amount"]');
form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const initialDelay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);
  const promises = [];

  for (let i = 1; i <= amount; i++) {
    const delay = initialDelay + (i - 1) * step;
    promises.push(createPromise(i, delay));
  }
  Promise.all(
    promises.map(promise =>
      promise
        .then(result =>
          Notify.success(
            `✅ Fulfilled promise ${result.position} in ${result.delay}ms`
          )
        )
        .catch(error =>
          Notify.failure(
            `❌ Rejected promise ${error.position} in ${error.delay}ms`
          )
        )
    )
  );
}
