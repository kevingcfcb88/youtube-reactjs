import axios from 'axios';

const KEY = 'AIzaSyChX8oEQy9ncgOY7REOBeCAAmysM1u2gx8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: `${KEY}`
  }
});

