const newsRouter = require('./news');
const meRouter = require('./me');
const courseRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);

    // app.get('/news', (req, res) => {
    //   res.render('news')
    // })
    app.use('/courses', courseRouter);
    app.use('/', siteRouter);
    // app.use('/search' , siteRouter)
}

module.exports = route;
