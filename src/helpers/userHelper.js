const fs = require('fs');
const path = require('path');
const userFilePath = path.resolve(__dirname, '../data/user.json');

module.exports = {
    getAllUsers: () => {
        const jsonUsers = fs.readFileSync(userFilePath, 'utf-8');
        const usersParsed = JSON.parse(jsonUsers);
        return usersParsed;
    },

    writeUser: (newUser => {
        const users = this.getAllUsers();
        const userJson = JSON.stringify([...users, newUser], null, " ");
        fs.writeFileSync(userFilePath, userJson);
    }),

    generateNewId: () => {
        const users = this.getAllUsers();
        return users.length == 0 ? 1 : users.pop().id + 1
    }
}