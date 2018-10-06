var bcrypt = require('bcrypt-nodejs');

var generateHash = function (password) {
    //This handles the encryption of the users password
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
};



module.exports = function (sequelize, DataTypes) {
<<<<<<< HEAD
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
     
=======
    var user = sequelize.define("user", {
        user:
        DataTypes.STRING,
        allowNull: false,
        emailaddress:
        DataTypes.STRING,
        allowJull: false,
>>>>>>> master
    });

    User.associate = function (models) {
        User.hasOne(models.Exam);
    }

    return User;
};
