const { Sequelize, DataTypes } = require ('sequelize');
const User = require('./user/userProfile');
const UserPost = require('./post/userPost');
const UserComment = require('./post/userComment');
const {PostLike,CommentLike} = require('./post/userLike');
const PostImage = require('./post/postImage');
const PostVideo = require('./post/postVideo');


User.hasMany(UserPost, {
    onDelete: 'CASCADE',
    foreignKey: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
UserPost.belongsTo(User);

// a comment have 2 relations. 1 who made the comment(user) and where (post)
User.hasMany(UserComment, {
    onDelete: 'CASCADE',
    foreignKey: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
UserComment.belongsTo(User);

UserPost.hasMany(UserComment, {
    onDelete: 'CASCADE',
    foreignKey: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
UserComment.belongsTo(UserPost);


User.hasMany(PostLike, {
    onDelete: 'CASCADE',
    foreignKey: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
PostLike.belongsTo(User);

UserPost.hasMany(PostLike, {
    onDelete:'CASCADE',
    foreignKey: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
PostLike.belongsTo(UserPost);

User.hasMany(CommentLike, {
    onDelete: 'CASCADE',
    foreignKey: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
CommentLike.belongsTo(User);

UserComment.hasMany(CommentLike, {
    onDelete: 'CASCADE',
    foreignKey: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
CommentLike.belongsTo(UserComment);

UserPost.hasMany(PostImage, {
   onDelete: 'CASCADE',
   foreignKey: {
    type: DataTypes.STRING,
    allowNull:false
   }  
});
PostImage.belongsTo(UserPost);

UserPost.hasMany(PostVideo, {
    onDelete: 'CASCADE',
    foreignKey: {
        type: DataTypes.STRING,
        allowNull:false
    }
});
PostVideo.belongsTo(UserPost);


module.exports = {
    User,
    UserPost,
    UserComment,
    PostLike,
    CommentLike,
    PostImage,
    PostVideo,
}

