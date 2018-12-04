import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Segment, Image } from 'semantic-ui-react';
import ReactModal from 'react-modal';
import tetris from '../Assets/tetris.png';
import ashman from '../Assets/ashman_play_cropped.png';
import shoppingCart from '../Assets/shop_home.png';
import plannerApp from '../Assets/home.png';

ReactModal.setAppElement('#root');

export default class Projects extends Component {
    constructor () {
        super();
        this.state = {
            showModal: false
        };
    }
    
    handleOpenModal = (e) => {
        this.setState({ showModal: true });
        console.log(e);
    }
    
    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    getParent() {
        return document.querySelector('#projects');
    }

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
                            <Project onClick={this.handleOpenModal} path={ashman} size="medium" name="Ashman Game" desc="I created this pacman-like game for my final project in my android class." />
                            <Project onClick={this.handleOpenModal} path={tetris} size="large" name="Tetris Game" desc="This is a tetris game created with the C#, WPF framework. Ethan Holman and I worked on it together as a final project." />
                            </Segment.Group>
                        <Segment.Group horizontal padded="very">
                            <Project onClick={this.handleOpenModal} path={plannerApp} size="medium" name="Good Morning Planner" desc="I designed this app as a one-stop shop for planning your day. It combines the weather, to-do/reminder apps, calendar, and alarm into a single app for better organization." />
                            <Project onClick={this.handleOpenModal} path={shoppingCart} size="large" name="Shopping Cart Website" desc="I created a data-driven website with C# ASP.NET and Bootstrap." />
                        </Segment.Group>
                    </Segment>
                </Segment.Group>
                <ReactModal 
                    isOpen={this.state.showModal}
                    contentLabel="project modal"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                    parentSelector={this.getParent}
                >
                    <ProjectModal />
                </ReactModal>
            </div>
        );
    }
}

function Project(props) {
    return (
        <Segment padded="very" onClick={props.onClick} >
            <Image src={props.path} size={props.size} ui rounded />
            <div className="text">
                <h4>{props.name}</h4>
                <p>{props.desc}</p>
            </div>
        </Segment>
    );
}

function ProjectModal(props) {
    return(
        <h3>Modal {props.name}</h3>
    );
}