module.exports = function (sequelize, DataTypes) {
    var exam = sequelize.define("exam", {
<<<<<<< HEAD

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
=======
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
>>>>>>> 4f3ba8ca5d61decb081688bfeb163703c98be3d3

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