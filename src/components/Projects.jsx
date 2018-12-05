import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import { Segment, Image } from 'semantic-ui-react';
import tetris from '../Assets/tetris.png';
import tetrisVideo from '../Assets/tetris.mp4';
import ashman from '../Assets/ashman_play_cropped.png';
import ashmanVideo from '../Assets/ashman.mp4';
import shoppingCart from '../Assets/shop_home.png';
import plannerApp from '../Assets/home.png';

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
                            <Project 
                                name="Good Morning Planner" 
                                path={plannerApp}
                                size="medium" 
                                desc="I designed this app as a one-stop shop for planning your day. It combines the weather, to-do/reminder apps, calendar, and alarm into a single app for better organization." 
                                type="View my prototype" 
                                link="https://invis.io/7APCOPCP9Q8" 
                            />
                            <Project 
                                name="Ashman Game" 
                                path={ashman} 
                                size="medium" 
                                desc="I created this pacman-like game for my final project in my android class." 
                            />
                        </Segment.Group>
                        <Segment.Group horizontal padded="very">
                            <Project 
                                name="Tetris Game" 
                                path={tetris} 
                                size="large" 
                                desc="This is a tetris game created with the C#, WPF framework. Ethan Holman and I worked on it together as a final project." 
                            />
                            <Project 
                                name="Shopping Cart Website" 
                                path={shoppingCart} 
                                size="large" 
                                desc="I created a data-driven website with C# ASP.NET and Bootstrap." 
                                type="View my website" 
                                link="http://micalynjeanette.com/shoppingcart/" 
                                
                            />
                        </Segment.Group>
                    </Segment>
                </Segment.Group>
            </div>
        );
    }
}

function Project(props) {
    return (
        <Segment padded="very" onClick={props.onClick} >
            <Media name={props.name} link={props.link} path={props.path} size={props.size} />
            <div className="text">
                <a target="_blank" rel="noopener noreferrer" href={props.link}>{props.type}</a>
                <h4>{props.name}</h4>
                <p>{props.desc}</p>
                </div>
        </Segment>
    );
}

function Media(props) {
    const name = props.name;
    if (name === "Ashman Game") return <Player video={ashmanVideo} />;
    else if (name === "Tetris Game") return <Player video={tetrisVideo} />;
    else return <Img link={props.link} path={props.path} size={props.size} />;
}

class Img extends Component {
    imageClick = () => {
        window.open(this.props.link, "_blank")
    }

    render() {
        return(
            <Image onClick={this.imageClick} src={this.props.path} size={this.props.size} ui rounded />
        );
    }
}

function Player(props) {
    const vid = props.video;
    return(
        <ReactPlayer controls muted
            className='react-player'
            url={[
                { src: vid, type: "video/mp4" }
            ]}
            width='100%'
            height=''
        />
    );
}