import React, { Component } from 'react';

export default class Author extends Component {
    render() {
        const author = this.props.author;

        return author ? (
            <div>
                <p>by {author.name} ({author.username}), {author.email}</p>
                <hr/>
            </div>
        ) : (<div>Loading...</div>);
    }
}