import React, { Component } from 'react';
import './Article.css';

export default class ArticlePreview extends Component {
    render() {
        const article = this.props.article;
        const url = "#/article/" + article.id;

        return (
            <div ref="preview" className="article-preview">
                <div className="article-preview-title-wrapper">
                    <a href={url}>{article.title}</a>
                </div>
            </div>
        );
    }
}