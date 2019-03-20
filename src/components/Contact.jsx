import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Segment } from 'semantic-ui-react';

export default class Contact extends Component {
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
            <div id='contact' className="page-height section fp-auto-height">
                <Segment padded="very" className="text">
                    <h2>Contact</h2>
                    <p>Please feel free to email me if you have any questions!</p>
                    <p>My email is <span>micalynjeanette@hotmail.com</span>.</p>
                    <p>Here's my <a href="https://docs.google.com/document/d/1BApRMs2futAOme9hKF-AN3AJfxGh4j98dF3zp4C6Re8/edit?usp=sharing" target="_blank">Resume</a> if you're interested.</p>
                </Segment>
            </div>
        );
    }
}