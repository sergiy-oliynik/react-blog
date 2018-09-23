export const loadArticles = () => {
    return {
        type: 'LOAD_ARTICLES'
    }
};

export const getArticle = (articleId) => {
    return {
        type: 'GET_ARTICLE',
        articleId: articleId
    };
};

export const getUser = (userId) => {
    return {
        type: 'GET_USER',
        userId: userId
    };
};

export const getComments = (articleId) => {
    return {
        type: 'GET_COMMENTS',
        articleId: articleId
    };
};

export const search = (query) => {
    return {
        type: "SEARCH",
        query: query
    }
};