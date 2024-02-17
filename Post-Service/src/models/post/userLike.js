const { Sequelize,DataTypes, Model } = require('sequelize');
const db = require('../../db/sequelize');

const PostLike = db.define('PostLike', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    }
}, {
    // Other model options go here
    schema: "post_schema"
});

const CommentLike = db.define('CommentLike', {
   id: {
       type: DataTypes.STRING,
       primaryKey: true
   }
}, {
    // Other model options go here
    schema: "post_schema"
});



module.exports = {
    PostLike,
    CommentLike
}

