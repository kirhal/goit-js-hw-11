export function listMarkUp(obj) {
  const images = obj.data.hits;
  return images
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
            <img src=${webformatURL} alt="${tags}" loading="lazy" width="520" height="350"/>
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
}
