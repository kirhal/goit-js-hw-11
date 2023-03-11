const key = '34322240-24f2606f1746f3f062e0e7b7b';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async input => {
  const requestParams = `?key=${key}&q=${input}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=8`;
  const r = await fetch(`${BASE_URL}${requestParams}`);
  return await r.json();
};

// export const fetchCountries = name => {
//   return fetch(`${url}${name}${urlOpt}`).then(r => {
//     return r.json();
//   });
// };
