import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import Author from "./Author";
import Comments from "./comment/Comments";

class Article extends Component {
    componentDidMount() {
        const articleId = this.props.match.params["articleId"];
        const article = this.props.article;
        const author = this.props.author;
        const comments = this.props.comments;

        if (!article || article.id != articleId) {
            this.props.getArticle(articleId);
        } else if (!author|| author.id != article.userId) {
            console.log(author ? author.id : null, "!=", article.userId);
            this.props.getUser(article.userId);
        } else if (!comments) {
            this.props.getComments(articleId);
        }
    }

    render() {
        const article = this.props.article;

        if (article) {
            const author = this.props.author;
            const comments = this.props.comments;

            return (
                <div className="container">
                    <Row>
                        <Col s={12}>
                            <div className="article-back-wrapper">
                                <a href="#/">Back</a>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col s={12}>
                            <div className="article-title-wrapper">
                                <h1>{article.title}</h1>
                                <Author author={author}/>
                            </div>
                        </Col>
                    </Row>

                    <div className="article-text-wrapper">
                        <p>{article.body}</p>
                        <hr/>
                    </div>

                    <Comments comments={comments}/>
                </div>
            );
        } else {
            return (<div>Loading...</div>);
        }
    }
}

export default withRouter(Article);