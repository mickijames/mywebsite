import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Segment, Button, Form, TextArea, Icon } from 'semantic-ui-react';

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
                <Segment padded="very">
                    <h2>Contact</h2>
                    <Form>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='First Lastname' />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email' />
                        </Form.Field>
                        <Form.Field control={TextArea} label="Message" placeholder="Your message goes here...">
                        </Form.Field>
                        <Button icon type='submit'>
                            <Icon name="mail" />
                        </Button>
                    </Form>
                </Segment>
            </div>
        );
    }
}