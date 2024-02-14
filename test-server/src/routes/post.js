const express = require('express');
const router = express.Router();
const  auth = require('../middleware/auth');
const uploadMiddleware = require('../middleware/index').upload;
 const { postController } = require('../controllers/index');


router.get('/test',auth,(req,res) => {
    console.log(req.files);
    return res.status(200).json({"message":"working"});
})
router.post('/test',auth,uploadMiddleware,(req,res) => {
    if(req.files)
    req.files.forEach(file => {
       console.log(file.originalname)
    });
    console.log(req.body.post_text);
    console.log("text = ", JSON.parse(req.body.post_text));
    return res.status(200).json({"message":"working"});
})

router.post('/create',auth,uploadMiddleware,postController.createPost);

// router.post('/api/posts',auth, postController.createPost);
// Update a Post: PUT /api/posts/:postId
// Delete a Post: DELETE /api/posts/:postId

// router.get('/api/posts/me',auth,postController.getAllMyPosts);
// router.get('/api/post/:id',auth,postController.getSinglePost);
// router.get('/api/posts/:id',auth,postController.getAllPosts);
// Unlike a Post: DELETE /api/posts/:postId/likes/:likeId

// router.post('/api/posts/:id/comments',auth,commentController.commentOnAPost);

// router.get('/api/posts/:id/comments',auth,commentController.getAllCommentsOnAPost);
// Update a Comment: PUT /api/posts/:postId/comments/:commentId
// Delete a Comment: DELETE /api/posts/:postId/comments/:commentId


module.exports = router;