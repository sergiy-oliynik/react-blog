import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';
import {loadArticles, getArticle, getUser, getComments, search} from "../../redux/action";

import Articles from "../article/Articles";
import Article from "../article/Article";
import {filterArticles} from "../../util";

class Wrapper extends Component {
    render() {
        const articles = filterArticles(this.props.articles, this.props.query);
        const article = this.props.currentArticle;
        const users = this.props.users;
        const comments = this.props.comments;

        let commentsForArticle = null;
        let authorForArticle = null;

        if (article) {
            if (comments && comments.hasOwnProperty(article.id)) {
                commentsForArticle = comments[article.id];
            }

            if (users && users.hasOwnProperty(article.userId)) {
                authorForArticle = users[article.userId];
            }
        }

        return (
            <div className="router">
                <Route exact path="/" component={() =>
                    <Articles loadArticles = { this.props.loadArticles } search={this.props.search} articles={articles} />}
                />

                <Route path="/article/:articleId" component={
                    () => <Article
                        article = {this.props.currentArticle}
                        author = {authorForArticle}
                        comments = {commentsForArticle}
                        getArticle = {this.getArticle.bind(this)}
                        getUser = {this.getUser.bind(this)}
                        getComments = {this.getComments.bind(this)}/> } />
            </div>
        );
    }

    getArticle(id) {
        this.props.getArticle(id);
    }

    getUser(userId) {
        this.props.getUser(userId);
    }

    getComments(id) {
        this.props.getComments(id);
    }
}

const mapStateToProps = state => {
    const { articles, query, users, comments, currentArticle } = state;

    return {
        articles: articles,
        query: query,
        users: users,
        comments: comments,
        currentArticle: currentArticle
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        loadArticles: bindActionCreators(loadArticles, dispatch),
        getUser: bindActionCreators(getUser, dispatch),
        getArticle: bindActionCreators(getArticle, dispatch),
        getComments: bindActionCreators(getComments, dispatch),
        search: bindActionCreators(search, dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wrapper));
