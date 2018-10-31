/* eslint-disable */
import axios from 'axios';

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/';
const apiKey = 'KEY-HERE';

export default {
/* eslint-disable */
  getAllComics: (limit, callback) => {
    const urlComics = urlBaseMarvel + 'comics?apikey=' + apiKey + '&limit=' + limit;
    axios.get(urlComics).then((comics) => {
      if (callback) {
        callback(comics);
      }
    })
  }
}
