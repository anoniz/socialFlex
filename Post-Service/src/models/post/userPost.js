const { Sequelize, DataTypes, Model, DatabaseError } = require('sequelize');
const db = require('../../db/sequelize');

const Post = db.define('Post', {
      id: {
          type: DataTypes.STRING,  
          primaryKey: true
      }, 
      post_text: {
         type: DataTypes.TEXT,
         allowNull: false
      },
      // post images and videos are stored in seperate service.
      total_likes: {
         type: DataTypes.INTEGER,
         defaultValue: 0
      },
      total_comments: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      total_shares: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
}, {
   schema: "post_schema"
});


module.exports = Post;