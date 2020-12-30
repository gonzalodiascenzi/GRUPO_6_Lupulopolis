const db = require('../database/models');

module.exports = (req, res, next) => {
    if (req.session.user) {
        return next();
    } else if (req.cookies.userLog) {
        const userExist = db.User.findOne({ where: { id: req.cookies.userLog } });
        
        if (userExist) {
            req.session.user = userExist;
        }

        return next();
    }
    return next();
}


