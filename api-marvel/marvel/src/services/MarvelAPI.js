import axios from 'axios';

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/';
const apiKey = '9e7e311ed71ce7eee9d2c883aa28f81d';

export default {
  getAllComics: (limit, callback) => {
    const urlComics = urlBaseMarvel + 'comics?apikey=' + apiKey + '&limit=' + limit;
    console.log(urlComics)
    axios.get(urlComics).then((comics) => {
      if (callback) {
        callback(comics);
      }
    })
  }
}
