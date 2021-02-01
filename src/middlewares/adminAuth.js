const db = require("../database/models");

module.exports = async (req, res, next) => {
    if (req.session.user) {
        const userCategory = await db.User.findOne({ where: { id: req.session.user.id } });
        if (userCategory.category_id == "1") {
            return next();
        }
        return res.redirect('/');
    }

    return res.redirect('/');
}