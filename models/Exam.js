module.exports = function (sequelize, DataTypes) {
    var exam = sequelize.define("exam", {
<<<<<<< HEAD
        q1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        q2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        q3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        q4: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        q5: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        q6: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        q7: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        q8: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        q9: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        q10: {
            type: DataTypes.STRING,
            allowNull: false,
        }       
=======


        uid:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
        q1:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
        q2:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
        q3:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
        q4:
            {

                type: DataTypes.STRING,
                allowNull: false
            },
        q5:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
        q6:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
        q7:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
        q8:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
        q9:
            {
                type: DataTypes.STRING,
                allowNull: false
            },

        q10:
            {
                type: DataTypes.STRING,
                allowNull: false
            }
>>>>>>> master

    });

    exam.associate = function(models) {
        exam.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return exam;
};