import { baseURL } from '../utils/types';

export const fetchCharacterDetails = (id) => (
  fetch(`${baseURL}/${id}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch(err => console.error(err))
);
