class NewsController {
    index(req, res) {
    res.send('News page');
    }

    show(req, res) {
        res.send('show');
    }
}

module.exports = new NewsController;