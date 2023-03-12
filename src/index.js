import './css/styles.css';
import { listMarkUp } from './markUp';
import { fetchImages, fetchMoreImages } from './fetchImages';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({
  fontSize: '20px',
  width: '450px',
  position: 'right-top',
});

const formEl = document.querySelector('#search-form');
const loadMoreBtnEl = document.querySelector('.load-more');
const galleryEl = document.querySelector('.gallery');

formEl.addEventListener('submit', submitInputData);
loadMoreBtnEl.addEventListener('click', loadMoreData);

function submitInputData(e) {
  e.preventDefault();
  const input = formEl[0].value.trim();
  const localValue = localStorage.getItem('search-word');
  if (input === '') {
    return;
  } else if (input !== localValue) {
    localStorage.setItem('search-word', input);
    fetchImages(input)
      .then(data => {
        renderingData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

function renderingData(obj) {
  if (obj.data.totalHits === 0) {
    Notify.failure(
      '❌ Sorry, there are no images matching your search query. Please try again.'
    );
    galleryEl.innerHTML = '';
    hideBtn();
  } else {
    Notify.success(`Hooray! We found ${obj.data.totalHits} images.`);
    galleryEl.innerHTML = '';
    hideBtn();
    const markUpData = listMarkUp(obj);
    galleryEl.insertAdjacentHTML('afterbegin', markUpData);
    showBtn();
  }
}

function loadMoreData() {
  const localValue = localStorage.getItem('search-word');
  fetchMoreImages(localValue)
    .then(data => {
      moreRenderingData(data);
    })
    .catch(error => {
      console.log(error);
    });
}

function moreRenderingData(obj) {
  const markUpData = listMarkUp(obj);
  galleryEl.insertAdjacentHTML('beforeend', markUpData);
  const galleryLength = galleryEl.children.length;
  if (obj.data.totalHits - galleryLength === 0) {
    Notify.info(`We're sorry, but you've reached the end of search results.`);
    hideBtn();
  }
}
const hideBtn = () => {
  loadMoreBtnEl.classList.add('is-hidden');
};
const showBtn = () => {
  loadMoreBtnEl.classList.remove('is-hidden');
};
