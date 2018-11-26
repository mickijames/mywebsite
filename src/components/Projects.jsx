import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import { Segment, Image } from 'semantic-ui-react';
import tetris from '../Assets/tetris.mp4';
import ashman from '../Assets/ashman.mp4';

const src = 'https://placeimg.com/640/480/any';

export default class Projects extends Component {
    pos;
    componentDidMount() {
        let n = ReactDOM.findDOMNode(this);
        this.pos = n.offsetTop;
    }

    myPos() {
        return this.pos;
    }

    render() {
        return (
            <div id='projects' className="page-height section">
                <Segment.Group padded="very">
                    <Segment padded="very">
                        <h2>Projects</h2>
                        <Segment.Group horizontal padded="very">
                            <Segment padded="very">
                                <ReactPlayer loop muted playing
                                    className='react-player'
                                    url={[
                                        { src: tetris, type: "video/mp4" }
                                    ]}
                                    width='inherit'
                                    height=''
                                />
                                <div className="text">
                                    <h4>Tetris Game</h4>
                                    <p>This is a tetris game created with the C#, WPF framework. Ethan Holman and I worked on it together as a final project.</p>
                                </div>
                            </Segment>
                            <Segment padded="very">
                                <ReactPlayer loop muted playing
                                    className='react-player'
                                    url={[
                                        { src: ashman, type: "video/mp4" }
                                    ]}
                                    width='inherit'
                                    height=''
                                />
                                <div className="text">
                                    <h4>Ashman Game</h4>
                                    <p>I created this pacman-like game for my final project in my android class.</p>
                                </div>
                            </Segment>
                            <Segment padded="very">
                                <Image src={src} size="medium" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis ut numquam labore impedit expedita aliquid dolorem eum iure libero qui est, explicabo harum fugit et modi? Sunt, harum vero!</p>
                            </Segment>
                        </Segment.Group>
                    </Segment>
                </Segment.Group>
            </div>
        );
    }
}