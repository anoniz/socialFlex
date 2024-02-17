const { PostLike, CommentLike, UserPost } = require('../models/index');

const likeAPost = async (like) => {
    try {
       // first let's see if a like already exits
       console.log(like.UserId);
       const exitingLike = await PostLike.findOne({where: {UserId: like.UserId}});
       console.log(exitingLike)
       if(exitingLike) {
         return {error:{message:"user has already liked this post",code:409}}
       }

        // need userId and PostId to create a like on a post.
        const createdLike = await PostLike.create(like);
        if(!createdLike) {
          return {error:{message:"something went wrong try again", code: 500}};
        }
        // now if like is created, we also need to update the post and return updated post
       const updatedPost = await UserPost.increment('total_likes', {where: {id:like.PostId}});
       if(!updatedPost) {  // liked but post updation failed.
        // if post is not updated than we have to remove the like, that just created.
          await createdLike.destroy();
          return {error:{message:"something went wrong try again", code: 500}};
       }
       console.log(updatedPost)
       return {likedPost:updatedPost}

    } catch(err) {
      console.log(err);
      return {error:{message:"something went wrong try again",code:500}}
    }
}

const getAllLkesOnAPost = async (postId) => {
    try {
       const likes = await PostLike.findAll({where: {PostId:postId}});
       return {likes};
    } catch(err) {
     console.log(err);
     return {error:{message:"something went wrong try again",code:500}}
    }
 }
 

module.exports = {
    likeAPost,
    getAllLkesOnAPost

}