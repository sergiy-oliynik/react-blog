import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import ArticlePreview from './ArticlePreview';
import Search from "../header/Search";

export default class Articles extends Component {
    componentDidMount() {
        const articles = this.props.articles;

        if (!articles) {
            this.props.loadArticles();
        }
    }

    render() {
        const articles = this.props.articles;

        return articles ? (
            <div ref="preview" className="container">
                <Row>
                    <Search search={this.props.search}/>
                </Row>

                <Row className="articles-row-wrapper">
                    {
                        this.props.articles.map((article) => {
                            return (<ArticlePreview key={article.id} article={article} />);
                        })
                    }
                </Row>
            </div>
        ) : (<div>Loading</div>);
    }
}