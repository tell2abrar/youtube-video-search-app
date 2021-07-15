import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({video})=>{

    if(video){
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div className = 'video-detail' >
                <iframe src={videoSrc} title={video.snippet.title}/>
                <div className = 'video_description' >
                    <h2>{video.snippet.description}</h2>
                    <p>{video.snippet.title}</p>
                </div>
            </div>
        );
    }
    return <div></div>
}

export default VideoDetail;