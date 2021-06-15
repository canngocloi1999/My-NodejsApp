const siteRouter = require('./site');
const newsRouter = require('./news.route')
function route(app){
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;