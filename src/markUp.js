const galleryEl = document.querySelector('.gallery');
const loadMoreBtnEl = document.querySelector('.load-more');

export function listMarkUp(obj) {
  loadMoreBtnEl.classList.add('is-hidden');
  galleryEl.innerHTML = '';
  const images = obj.hits;
  const markUpData = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<div class="photo-card">
            <img src=${webformatURL} alt="${tags}" loading="lazy" width="480"/>
            <div class="info">
                <p class="info-item">
                    <b>Likes</b><br>${likes}                   
                </p>
                <p class="info-item">
                    <b>Views</b><br>${views}                 
                </p>
                <p class="info-item">
                    <b>Comments</b><br>${comments}
                </p>
                <p class="info-item">
                    <b>Downloads</b><br>${downloads}
                </p>
            </div>
        </div>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('afterbegin', markUpData);
  btnTimeOut();
}
// export function clearAllMarkUp() {
//   countryEl.innerHTML = '';
//   listEl.innerHTML = '';
// }
const btnTimeOut = () => {
  setTimeout(() => {
    loadMoreBtnEl.classList.remove('is-hidden');
  }, 1200);
};
