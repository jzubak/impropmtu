//this will belong to search results?
module.exports = function (sequalize, Sequelize) {
    // const sequalize = require("sequelize");
    // const Sequelize = require("Sequelize");
    // const bcrypt = require("bcrypt");
    const User = sequalize.define("User", {
        userID: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        username: {
            type: Sequelize.TEXT
        },

        about: {
            type: Sequelize.TEXT
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        last_login: {
            type: Sequelize.DATE
        },

        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }


    });
    User.associate = function (models) {

        User.hasMany(models.SearchResults, {
            onDelete: "cascade"
        });
    };

    return User;

}