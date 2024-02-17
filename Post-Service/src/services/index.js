const userService = require('./user');
const authService = require('./auth');
const mailService = require('./mail');
const postService = require('./userPosts');
const commentService = require('./userComments');
const likeService = require('./userLikes');
const postImageService = require('./userPostImage');



module.exports = {
    userService,
    authService,
    mailService,
    postService,
    commentService,
    likeService,
    postImageService
}