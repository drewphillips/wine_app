module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {
        name: 
        DataTypes.STRING,
        allowNull: false,
        emailaddress
    });
    return user;
};