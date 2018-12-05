import React, { Component } from 'react';
import ScrollEvent from 'react-onscroll';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import {
    Button,
    Container,
    Header,
    Icon,
    Image,
    Menu
} from 'semantic-ui-react';
import $ from 'jquery';

import Video from './components/Video';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import logo from './logo.svg';
import Footer from './components/Footer';
import beachy from './Assets/beach.jpg';

export default class App extends Component {
    state = {
        activeItem: 'home',
        sections: ['home', 'about', 'projects', 'contact'],
        curSection: 0
    };

    aboutPos;
    projPos;
    contactPos;
    componentDidMount() {
        this.aboutPos = this.aPos.myPos();
        this.projPos = this.pPos.myPos();
        this.contactPos = this.cPos.myPos();
    }

    onScroll = () => {
        let win = $(window);
        let top = win.scrollTop();
        let bottom = top + win.height();
        if (this.contactPos < bottom - 1200) this.setState({ activeItem: this.state.sections[3] });
        else if (this.projPos < bottom - 600) this.setState({ activeItem: this.state.sections[2] });
        else if (this.aboutPos < bottom - 400) this.setState({ activeItem: this.state.sections[1] });
        else this.setState({ activeItem: this.state.sections[0] });
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        $('html, body').animate({
            scrollTop: $('#' + name).offset().top - 100
        }, 400
        );
    }

    render() {
        const { activeItem } = this.state;
        return (
            <div>
                <ScrollEvent handleScrollCallback={this.onScroll} />
                <Header id='home' className="bg-image top shade">
                    <Container>
                        <Menu inverted pointing secondary fixed="top" className="top shade">
                            <Menu.Item>
                                <img src={logo} id="App-logo" alt="logo" />
                            </Menu.Item>
                            <Menu.Item
                                name="home"
                                active={activeItem === "home"}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name="about"
                                active={activeItem === "about"}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name="projects"
                                active={activeItem === "projects"}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name="contact"
                                active={activeItem === "contact"}
                                onClick={this.handleItemClick}
                            />
                        </Menu>
                    </Container>
                </Header>
                <Container className="main">
                    <div>
                        <Video />
                        <Container text className="header">
                            <Image src={beachy} size="medium" rounded />
                            <h1 className="ui inverted header">Hello, my name is <span className="highlight">Micalyn Williams</span>. <br />I'm a web developer.</h1>
                            <Button icon inverted className="huge basic yellow" name="about" onClick={this.handleItemClick}>
                                <Icon className="down arrow" />
                            </Button>
                        </Container>
                    </div>
                    <About ref={aPos => { this.aPos = aPos; }} />
                    <hr />
                    <Projects ref={pPos => { this.pPos = pPos; }} />
                    <hr />
                    <Contact ref={cPos => { this.cPos = cPos; }} />
                    <hr />
                    <Footer />
                </Container>
            </div>
        );
    }
}