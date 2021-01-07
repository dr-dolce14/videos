import axios from 'axios';

const KEY = 'AIzaSyB6_7bfKXyJnYizpijjf2rbBN3rxoY_tiI';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})