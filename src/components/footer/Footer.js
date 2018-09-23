import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div ref="preview" className="container-fluid footer">
                <Col sm={2} smOffset={5}>
                    <p>Ⓒ Made with React - 2018</p>
                </Col>
            </div>
        );
    }
}