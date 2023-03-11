import './css/styles.css';
// import {  } from './markUp';
import { fetchImages } from './fetchImages';
// import debounce from 'lodash.debounce';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({
  fontSize: '20px',
  width: '400px',
  position: 'right-top',
});

const formEl = document.querySelector('#search-form');

formEl.addEventListener('submit', submitInputData);

function submitInputData(e) {
  e.preventDefault();
  const input = formEl[0].value.trim();
  console.log(input);
}

// {webformatURl, largeImageURL, tags, likes, views, comments, downloads}
// 'Sorry, there are no images matching your search query. Please try again.';

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
// function dataReceive(obj) {
//   if (obj.length > 10) {
//     Notify.info('Too many matches found. Please enter a more specific name.');
//   } else if (2 <= obj.length && obj.length <= 10) {
//     listMarkUp(obj);
//   } else countryMarkUp(obj[0]);
// }
