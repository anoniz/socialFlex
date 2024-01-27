const { UserComment, UserPost} = require('../models/index');


const commentOnAPost = async (comment) => {
    try {
        // need userId and PostId to create a like on a post.
        const createdComment = await UserComment.create(comment);
        if(!createdComment) {
          return {error:{message:"something went wrong try again", code: 500}};
        }
        // now if comment is created on some post,
        // we also need to update that post and return updated post,
       const updatedPost = await UserPost.increment('total_comments', {where: {id:comment.PostId}});
       if(!updatedPost) {   // commented but post updation failed.
        // if post is not updated than we have to remove the comment, that just created.
        await createdComment.destroy(); 
        return {error:{message:"something went wrong try again", code: 500}};
       }
       console.log(updatedPost)
       return {commentedOnPost:updatedPost}
  
    } catch(err) {
      console.log(err);
      return {error:{message:"something went wrong try again",code:500}}
    }
  }
  
  const getAllComments = async(postId) => {
    try {
      const comments = await UserComment.findAll({where: {PostId:postId}});
      return {comments};
   } catch(err) {
    console.log(err);
    return {error:{message:"something went wrong try again",code:500}}
   }
  }
  
  
module.exports = {
    commentOnAPost,
    getAllComments
}  