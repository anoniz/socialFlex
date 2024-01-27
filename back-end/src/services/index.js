const userService = require('./user');
const authService = require('./auth');
const mailService = require('./mail');
const postService = require('./userPosts');
const commentService = require('./userComments');
const likeService = require('./userLikes');



module.exports = {
    userService,
    authService,
    mailService,
    postService,
    commentService,
    likeService
}