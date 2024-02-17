const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db/sequelize');

const Comment = db.define('Comment', {
   id: {
       type: DataTypes.STRING,
       primaryKey: true
   },
    comment_text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    total_likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    // Other model options go here
    schema: "post_schema"
});

module.exports = Comment;