const { likeService, postService } = require('../services/index');

const { v4: uuidv4 } = require('uuid');
// someone likes a post
const likeAPost = async (req,res) => {
    // needs
    // who liked this post? req.user.id will tell us.
    // need post id, where this liked happened..
    const userId = req.user.id;
    const postId = req.params.id;
    const like = {
       id: uuidv4().toString(),
       UserId:userId,
       PostId:postId,
    }
    try {
      // check if the post exists or not.
      const post = await postService.getSinglePost(like.PostId);
      if(post.error) {
         return res.status(post.error.code).send(post.error.message);
      }
      const resp = await likeService.likeAPost(like);
      if(resp.error) {
       return res.status(resp.error.code).send(resp.error.message);
      }
      return res.status(201).send(resp);
    } catch(err) {
       console.log(err);
       return res.status(500).send("something went wrong with likeAPost");
    }
 }
 

 const getAllLkesOnAPost = async (req,res) => {
    const postId = req.params.id;
    try {
       const resp = await likeService.getAllLkesOnAPost(postId);
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
    likeAPost,
    getAllLkesOnAPost
}