import React, { Component, useState, createRef } from "react";
import "./videoplayer.scss";

import {
    Playlist,
    goToNextVideo,
    goToPreviousVideo
} from "./playlist/Playlist";

function PlayVideo() {

const videoList = [
        {
            thumbnail: "https://via.placeholder.com/500/FFA500/FFFFFF",
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            imgAlt: "Image 1 not found"
        },
        {
            thumbnail: "https://via.placeholder.com/500/FF0000/FFFFFF",
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            imgAlt: "Image 2 not found"
        },
]


const [currentVideo, setCurrentVideo] = useState(0);
const vidRef = createRef(null);

const params = {
    videos: videoList,
    autoPlay: true,
    showQueue: true,
    playForward: true,
    currentVideo: currentVideo,
    setCurrentVideo: setCurrentVideo,
    vidRef: vidRef
};

return (
    <div>
        <h3 id="title">
            <span/>
        </h3>
        <div>
            <Playlist playlistParams={params}/>
        </div>
    </div>
);
}

export default PlayVideo;