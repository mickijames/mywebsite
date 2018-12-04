import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Segment, Image} from 'semantic-ui-react';
import tetris from '../Assets/tetris.png';
import ashman from '../Assets/ashman_play_cropped.png';
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
                            <ProjVideo path={ashman} size="medium" name="Ashman Game" desc="I created this pacman-like game for my final project in my android class." />
                            <ProjVideo path={tetris} size="large" name="Tetris Game" desc="This is a tetris game created with the C#, WPF framework. Ethan Holman and I worked on it together as a final project." />
                            </Segment.Group>
                        <Segment.Group horizontal padded="very">
                            <ProjVideo path={plannerApp} size="medium" name="Good Morning Planner" desc="I designed this app as a one-stop shop for planning your day. It combines the weather, to-do/reminder apps, calendar, and alarm into a single app for better organization." />
                            <ProjVideo path={shoppingCart} size="large" name="Shopping Cart Website" desc="I created a data-driven website with C# ASP.NET and Bootstrap." />
                        </Segment.Group>
                    </Segment>
                </Segment.Group>
            </div>
        );
    }
}

function ProjVideo(props) {
    return (
        <Segment padded="very">
            <Image src={props.path} size={props.size} ui rounded />
            <div className="text">
                <h4>{props.name}</h4>
                <p>{props.desc}</p>
            </div>
        </Segment>
    );
}