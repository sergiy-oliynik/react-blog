import React, { Component } from 'react';

import Comment from "./Comment";
import "./Comments.css"

export default class Comments extends Component {
    render() {
        const comments = this.props.comments;

        return comments ? (
            <div>
                <div className="comments-title-wrapper">
                    <h4>Comments: </h4>
                </div>

                <div className="comments-body-wrapper">
                    {
                        comments.map((comment, i) => <Comment key={i} comment={comment}/>)
                    }
                </div>
            </div>
        ) : (<div>Loading</div>);
    }
}