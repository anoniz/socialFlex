const userController = require('./user');
const postController = require('./userPosts');
const commentController = require('./userComments');
const likeController = require('./userLike');




module.exports = {
    userController,
    postController,
    commentController,
    likeController
}
