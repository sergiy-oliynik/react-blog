export const reducer = (state = {articles: null, query: "", users: null, comments: null, currentArticle: null}, action) => {

    switch (action.type) {
        case 'LOADED_ARTICLES':
            state.articles = action.data;
            break;
        case "LOADED_USER":
            if (!state.users) {
                state.users = {};
            }

            state.users[action.userId] = action.data;
            state.users = Object.assign({}, state.users);
            break;
        case 'LOADED_COMMENTS':
            if (!state.comments) {
                state.comments = {};
            }

            state.comments[action.articleId] = action.data;
            state.comments = Object.assign({}, state.comments);
            break;
        case 'GET_ARTICLE':
        case 'LOAD_ARTICLE':
            getArticle(state, action.articleId);
            break;
        case "SEARCH":
            state.query = action.query;
            break;
    }

    return Object.assign({}, state);
};

const getArticle = (state, id) => {
    const articles = state.articles;

    if (articles && articles.length) {
        const result = articles.filter(article => article.id == id);

        if (result.length) {
            state['currentArticle'] = result[0];
        }
    }
};