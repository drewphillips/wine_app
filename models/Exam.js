module.exports = function (sequelize, DataTypes) {
    var exam = sequelize.define("exam", [

        {
            uid: DataTypes.STRING,
            allowNull: false
        },

        {
            q1: DataTypes.STRING,
            allowNull: false
        },

        {
            q2: DataTypes.STRING,
            allowNull: false
        },

        {
            q3: DataTypes.STRING,
            allowNull: false
        },

        {
            q4: DataTypes.STRING,
            allowNull: false
        },

        {
            q5: DataTypes.STRING,
            allowNull: false
        },

        {
            q6: DataTypes.STRING,
            allowNull: false
        },

        {
            q7: DataTypes.STRING,
            allowNull: false
        },

        {
            q8: DataTypes.STRING,
            allowNull: false
        },

        {
            q9: DataTypes.STRING,
            allowNull: false
        },

        {
            q10: DataTypes.STRING,
            allowNull: false
        }

    ]);
    return exam;
};