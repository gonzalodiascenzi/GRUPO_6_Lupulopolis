

const controller = {
    showLogin: (req, res) => {
        res.render('/users/login');
    },
    processLogin: (req, res) => {

    },
    showRegister: (req, res) => {
        res.render('/users/register');
    }

}

module.exports = controller;