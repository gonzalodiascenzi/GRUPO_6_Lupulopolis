const db = require("../../database/models")

const userApiController = {
    list: async (req, res) => {

        let allUsers = await db.User.findAll({ attributes: ['id', 'first_name', 'email'] });

        let users = allUsers.map(user => {
            return (
                user.dataValues.detail = "http://localhost:3000/api/users/" + user.id,
                user
            )
        })

        res.json({
            meta: {
                status: 200,
                count: users.length
            },
            data: {
                users
            }
        })
    },
    find: async (req, res) => {
        let { id } = req.params;

        let user = await db.User.findOne({
            attributes: ['first_name', "last_name", 'email', "image"],

        },
            {
            where: { id }
        })

        res.json({
            meta: {
                status: 200,
            },
            data: {
                user
            }
        })

    }
    
}

module.exports = userApiController;