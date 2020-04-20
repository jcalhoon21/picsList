import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 782aaadebf8a566c2837397710125c34ad874c4c195d722e781689451b804c70'
  }
});


// const searchImages = (term) => {

// }