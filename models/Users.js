module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("users", [
        {
            user:
                DataTypes.STRING,
            allowNull: false
        },

        {
            emailaddress:
                DataTypes.STRING,
            allowNull: false
        },

        {
            password:
                DataTypes.STRING,
            allowNull: false
        }
    ]);
    return user;
};