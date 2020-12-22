const userHelper = require("../helpers/userHelper");

module.exports = (req, res, next) => {
    if (req.session.user) {
        const userCategory = userHelper.getUsers().find(user => user.id == req.session.user.id);
        if (userCategory.category == "admin") {
            return next();
        }
        return res.redirect('/');
    }

    return res.redirect('/');
}