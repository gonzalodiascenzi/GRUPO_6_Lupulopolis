function auth(req,res,next){
    if (req.session.userLogged || req.cookies.userEmail) {
        req.userEmail = req.session.userLogged ? req.session.userLogged : req.cookies.userEmail;
        next();
    } else {
        res.redirect('/view/login');
    }
};

module.exports = auth;