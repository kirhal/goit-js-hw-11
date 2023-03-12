const key = '34322240-24f2606f1746f3f062e0e7b7b';
const BASE_URL = 'https://pixabay.com/api/';
let PAGE = 1;

export const fetchImages = async input => {
  console.log(PAGE);
  const requestParams = `?key=${key}&q=${input}&image_type=photo&orientation=horizontal&safesearch=true&${PAGE}=1&per_page=8`;
  const r = await fetch(`${BASE_URL}${requestParams}`);
  PAGE += 1;
  console.log(PAGE);
  return await r.json();
};

export const fetchMoreImages = async () => {};
