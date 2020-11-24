exports.home = (req, res) => res.render('home');

exports.about = (req, res) => res.render('about');

exports.notFound = (req, res) => {
    res.status(404);
    res.render('404');
};

exports.serverError = (err, req, res, next) => res.render('500');