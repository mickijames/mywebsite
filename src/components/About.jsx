import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Segment, Image } from 'semantic-ui-react';
import farmpic from '../Assets/farmpic.jpg';

export default class About extends Component {
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
            <div id='about' className="section">
                <Segment padded="very">
                    <Image className="me" src={farmpic} size="medium" rounded floated="right" />
                    <h2>About Me</h2>
                    <div className="text">
                        <p>
                            My name is Micalyn Williams, and I'll be graduating this spring with degrees in Visual Communication Design (BA)
                            and Computer Science (BCS) with a focus in web application development. I'm a very friendly, laid-back person
                            and I believe that my combined skillsets in both the design and programming worlds makes me an adaptable candidate
                            for many projects and groups.
                        </p>
                        <p>
                            I grew up on a small <em>hobby</em> farm surrounded by cats, dogs, horses, cows, chickens, sheep, a moon-walking turkey, and even a baby turtle once.
                            As a result I love all animals, and I know what hard work is.
                            Every summer I would attend a church camp in Oregon. I have many fond memories of the weeks spent there and as a
                            result, I try my best to go back every summer as a volunteer. I have served in many different capacities over the
                            years. One year I was kayaking and basketball staff at two different camps, and for the past 3 years I have been
                            assigned the responsibility and privilege of being a dorm counselor. I have gained invaluable experience within
                            these leadership opportunities. The challenging yet rewarding jobs have allowed me to learn and practice connecting
                            with all types of personalities and ages from year to year.
                        </p>
                    </div>
                </Segment>
            </div>
        );
    }
}