module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {
        name:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emailaddress:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:
        {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    user.associate = function(models) {
        user.hasMany(models.exam, {
            onDelete: "cascade"
        });
    };

    return user;

};