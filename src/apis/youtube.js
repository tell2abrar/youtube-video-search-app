import axios from 'axios';
// const ACCESS_KEY = 'AIzaSyAQB9FTcoZqzhZxT78M_SWiPBUZE_y96gs';
const ACCESS_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:ACCESS_KEY,
        type: 'video'
    }
});