import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({videos,onVideoSelect}) => {

    const VideoItems = videos.map(video=>{
        return <VideoItem video={video} key={video.id.videoId} onVideoSelect={onVideoSelect}/>
    });

    return (
        <div className='video-list'>
            {VideoItems}
        </div>
    );
}

export default VideoList;