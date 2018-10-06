var bcrypt = require('bcrypt-nodejs');

var generateHash = function (password) {
    //This handles the encryption of the users password
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
};



module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
     
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
     
    });

    User.associate = function (models) {
        User.hasOne(models.Exam);
    }

    return User;
};
