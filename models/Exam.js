module.exports = function (sequelize, DataTypes) {
    var Exam = sequelize.define("Exam", {
        User_ID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        question_1: {
            type: DataTypes.STRING,
            // answersForUser [ akj, kj, kj, kj ]
            // correctAnswer: a
            allowNull: false,
        },
        answer_1: {
            type: DataTypes.STRING,
            
            allowNull: false
        },
        question_2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer_2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        question_3: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer_3: {
            type: DataTypes.STRING,
            allowNull: false
        },
        question_4: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer_4: {
            type: DataTypes.STRING,
            allowNull: false
        },
        question_5: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer_5: {
            type: DataTypes.STRING,
            allowNull: false
        },
        question_6: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer_6: {
            type: DataTypes.STRING,
            allowNull: false
        },
        question_7: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer_7: {
            type: DataTypes.STRING,
            allowNull: false
        },
        question_8: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer_8: {
            type: DataTypes.STRING,
            allowNull: false
        },
        question_9: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer_9: {
            type: DataTypes.STRING,
            allowNull: false
        },
        question_10: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer_10: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Exam;
};