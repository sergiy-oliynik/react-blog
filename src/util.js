export const filterArticles = (articles, query) => {
    if (!articles) {
        return null;
    }

    const result = [];

    articles.forEach((article) => {
        const title = article.title.toLowerCase();
        const body = article.body.toLowerCase();

        if (title.includes(query) || body.includes(query)) {
            result.push(article);
        }
    });

    return result;
};

