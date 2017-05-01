import React from 'react';

const VideoDetail = ({video}) => {

    if(!video){
        return (
            <div>
                <i className="fa fa-spinner fa-pulse fa-fw"></i>
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    const videoTitle = video.snippet.title;
    const videoDescription = video.snippet.description;    
    const videoChannelTitle = video.snippet.channelTitle;
    const videoChannelId = video.snippet.channelId;
    const videoChannelUrl = `https://www.youtube.com/channel/${videoChannelId}`;


    

    return (
        <div className="video-detail col-md-8">

            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={videoUrl} className="embed-responsive-item"></iframe>
            </div>

            <div className="details">
                <div className="bold">{videoTitle}</div>
                <p className="channel-title"><a href={videoChannelUrl} target="_blank">{videoChannelTitle}</a></p>
                <div className="video-description">{videoDescription}</div>
            </div>

        </div>
    );

};

export default VideoDetail;