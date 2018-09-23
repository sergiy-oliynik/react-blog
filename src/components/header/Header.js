import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#/">Blog</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}