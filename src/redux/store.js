import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import {reducer} from "./reducer";

const loader = ({ getState }) => {
    return next => action => {
        switch (action.type) {
            case "LOAD_ARTICLES":
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then((json) => {
                        store.dispatch({type: "LOADED_ARTICLES", data: json});
                    });
                break;
            case "GET_ARTICLE":
                const state = getState();
                const articles = state.articles;
                const result = articles ? articles.filter(article => article.id == action.articleId) : [];

                if (!result.length) {
                    store.dispatch({type: "LOAD_ARTICLES", articleId: action.articleId});
                }
                break;
            case "GET_USER":
                fetch(`https://jsonplaceholder.typicode.com/users/${action.userId}`)
                    .then(response => response.json())
                    .then((json) => {
                        store.dispatch({type: "LOADED_USER", userId: action.userId, data: json});
                    });
                break;
            case "GET_COMMENTS":
                fetch(`https://jsonplaceholder.typicode.com/posts/${action.articleId}/comments`)
                    .then(response => response.json())
                    .then((json) => {
                        store.dispatch({type: "LOADED_COMMENTS", articleId: action.articleId, data: json});
                    });
                break;
        }

        return next(action);
    }
};

export const store = createStore(
    reducer,
    applyMiddleware(reduxThunk, loader)
);