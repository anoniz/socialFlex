const { postService } = require('../services/index');
const { v4: uuidv4 } = require('uuid');


// these all routes are protected and going through the auth middle where
// so the contain req.token and req.user 

const createPost = async (req,res) => {
   try {
      const postId = uuidv4().toString();
      const {post_text} = req.body;
      const post = {
        id: postId,
        post_text: post_text,
        UserId: req.user.id
      }
      const resp = await postService.createPost(post);
      if(resp.error) {
         return res.status(resp.error.code).send(resp.error.message);
      }
      return res.status(201).send(resp);
   } catch(err) {
      console.log(err);
      return res.status(500).send("something went wrong with createPost");
   }
}

const getSinglePost = async (req,res) => {
      try {
        const postId = req.params.id;
         if(!postId) {
            return res.status(403).send("give me postId");
         }
         const resp = await postService.getSinglePost(postId);
         if(resp.error) {
            return res.status(resp.error.code).send(resp.error.message);
         }
         return res.send(resp);
      } catch(err) {
        console.log(err);
        return res.status(500).send("something went wrong with getSingle post");
      }
}

// for his own posts... when user open his own profile
const getAllMyPosts = async (req,res) => {
    try {
         const resp = await postService.getAllMyPosts(req.user.id);
         if(resp.error) {
            return res.status(resp.error.code).send(resp.error.message);
         }
         return res.send(resp);
      } catch(err) {
        console.log(err);
        return res.status(500).send("something went wrong with getSingle post");
      }
}

// when someone else open anyone else's post
const getAllPosts = async (req,res) => {
   try {
      const userId = req.params.id;
      const resp = await postService.getAllMyPosts(userId);
      if(resp.error) {
         return res.status(resp.error.code).send(resp.error.message);
      }
      return res.send(resp);
   } catch(err) {
      console.log(err);
      return res.status(500).send("something went wrong with getAllPosts");
   }
}


module.exports=  {
    createPost,
    getSinglePost,
    getAllMyPosts,
    getAllPosts,
}