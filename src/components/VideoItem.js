import React from 'react';
import './VideoItem.css';

const VideoItem = ({video,onVideoSelect})=>{
    
    return (
        <div className='video-item' onClick={ e => onVideoSelect(video)}>
            <img  src={video.snippet.thumbnails.medium.url}/>
            <p>{video.snippet.title}</p>
        </div>
    );
};

export default VideoItem;