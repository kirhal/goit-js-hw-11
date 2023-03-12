import './css/styles.css';
import { listMarkUp } from './markUp';
import { fetchImages } from './fetchImages';
// import debounce from 'lodash.debounce';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({
  fontSize: '20px',
  width: '450px',
  position: 'right-top',
});

const formEl = document.querySelector('#search-form');

formEl.addEventListener('submit', submitInputData);

function submitInputData(e) {
  e.preventDefault();
  const input = formEl[0].value.trim();
  if (input !== '') {
    fetchImages(input)
      .then(data => {
        dataReceive(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return;
}

function dataReceive(obj) {
  if (obj.totalHits === 0) {
    Notify.failure(
      '❌ Sorry, there are no images matching your search query. Please try again.'
    );
  } else listMarkUp(obj);
}

// const DEBOUNCE_DELAY = 300;
// const inputEl = document.querySelector('#search-box');

// inputEl.addEventListener('input', debounce(onInputData, DEBOUNCE_DELAY));

// function onInputData(e) {
//   const name = e.target.value.trim();
//   if (name === '') {
//     clearAllMarkUp();
//     return;
//   }
//   fetchCountries(name)
//     .then(data => {
//       dataReceive(data);
//     })
//     .catch(error => {
//       Notify.failure('❌ Oops, there is no country with that name');
//       clearAllMarkUp();
//     });
// }
