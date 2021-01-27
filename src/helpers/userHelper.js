const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const userFilePath = path.resolve(__dirname, '../data/user.json');



module.exports = {
    async getUsers() {
        return await db.User.findAll();;
    },

    writeUser(newUser){
        const users = this.getUsers();
        const userJson = JSON.stringify([...users, newUser], null, 2);
        fs.writeFileSync(userFilePath, userJson);
    },

    async generateNewId(){
        const users = await db.User.findAll();
        return users.length == 0 ? 1 : users.pop().id + 1
    }
}