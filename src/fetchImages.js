import axios from 'axios';

const key = '34322240-24f2606f1746f3f062e0e7b7b';
const BASE_URL = 'https://pixabay.com/api/';
let PAGE = 1;

export const fetchImages = async input => {
  PAGE = 1;
  const requestParams = `?key=${key}&q=${input}&image_type=photo&orientation=horizontal&safesearch=true&page=${PAGE}&per_page=8`;
  PAGE += 1;
  return await axios.get(`${BASE_URL}${requestParams}`);
};

export const fetchMoreImages = async localValue => {
  const requestParams = `?key=${key}&q=${localValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${PAGE}&per_page=8`;
  PAGE += 1;
  return await axios.get(`${BASE_URL}${requestParams}`);
};
// export const fetchImages = async input => {
//   PAGE = 1;
//   const requestParams = `?key=${key}&q=${input}&image_type=photo&orientation=horizontal&safesearch=true&page=${PAGE}&per_page=100`;
//   const r = await fetch(`${BASE_URL}${requestParams}`);
//   PAGE += 1;
//   return await r.json();
// };
