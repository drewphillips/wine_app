module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {
        user:
        DataTypes.STRING,
        allowNull: false,
        emailaddress:
        DataTypes.STRING,
        allowJull: false,
    });
    return user;
};