module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("users", {
        
            name:{
                type: DataTypes.STRING,
            allowNull: false
        },

        
            emailaddress:{
                type:DataTypes.STRING,
            allowNull: false
        },

        
            password:{
               type:DataTypes.STRING,
            allowNull: false
        }
});
    return user;
};