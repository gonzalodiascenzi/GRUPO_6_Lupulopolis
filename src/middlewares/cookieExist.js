const userHelper = require("../helpers/userHelper");

module.exports = (req, res, next) => {
    if (req.session.user) {
        return next();
    } else if (req.cookies.userLog) {
        const userExist = userHelper.getUsers().find(user => user.id == req.cookies.userLog);
        
        if (userExist) {
            req.session.user = userExist;
        }

        return next();
    }
    return next();
}


