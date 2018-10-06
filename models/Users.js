module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {
        name: 
        DataTypes.STRING,
        allowNull: false,
        emailaddress: DataTypes.STRING
    });
    return user;
};