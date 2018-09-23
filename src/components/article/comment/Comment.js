import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Comment extends Component {
    render() {
        const comment = this.props.comment;

        return (
            <div className="comment-wrapper">
                <Row>
                    <Col md={4}>
                        <div>{comment.name}</div>
                        <div>{comment.email}</div>
                    </Col>
                    <Col className="comment-body-wrapper" md={8}>
                        <div>{comment.body}</div>
                    </Col>
                </Row>
                <hr/>
            </div>
        );
    }
}