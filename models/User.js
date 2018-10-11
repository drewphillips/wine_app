module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {
        user:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emailaddress:
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