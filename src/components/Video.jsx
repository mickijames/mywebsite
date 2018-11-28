import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import video from '../assets/video.mp4';

export default class Video extends Component {
    render() {
        return (
            <div className='fullscreen-bg'>
                <ReactPlayer loop muted playing
                    className='react-player'
                    url={[
                        { src: video, type: "video/mp4" }
                    ]}
                    width=''
                    height='100vh'
                />
            </div>
        );
    }
}