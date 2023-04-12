const Seqeuelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define('user', {
    id: {
        type: Seqeuelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: Seqeuelize.STRING,
    email: Seqeuelize.STRING
})

module.exports = User