const { commentService, postService } = require('../services/index');
const { v4: uuidv4 } = require('uuid');

const commentOnAPost = async (req,res) => {
    // needs
    // who commented on post? req.user.id
    // comment content(text) 
    // and on post id , where he commented..
    const userId = req.user.id;
    const postId = req.params.id;
    const {comment_text} = req.body;     
    const comment = {
       id: uuidv4().toString(),
       comment_text: comment_text,
       UserId: userId,
       PostId: postId
    }
    try {
      // check if post exists or not
      const post = await postService.getSinglePost(postId);
      if(post.error) {
         return res.status(post.error.code).send(post.error.message);
      }
      // now proceed...
      
      const resp = await commentService.commentOnAPost(comment);
      if(resp.error) {
       return res.status(resp.error.code).send(resp.error.message);
      }
      return res.status(201).send(resp);
    } catch(err) {
       console.log(err);
       return res.status(500).send("something went wrong with likeAPost");
    }
 }
 

 const getAllCommentsOnAPost = async (req,res) => {
    const postId = req.params.id;
    try {
       const resp = await commentService.getAllComments(postId);
       if(resp.error) {
          return res.status(resp.error.code).send(resp.error.message);
         }
       return res.send(resp);
    } catch(err) {
       console.log(err);
       return res.status(500).send("something went wrong with likeAPost");
    }
 } 

 module.exports = {
    commentOnAPost,
    getAllCommentsOnAPost
 }