const {Sequelize, DataTypes } = require('sequelize');
const db = require('../../db/sequelize');

const PostVideo = db.define('PostVideo', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fileKey : {
        type: DataTypes.STRING,
        allowNull: false
    },
    fileName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    originalFileName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fileSize: {
       type: DataTypes.BIGINT,
       allowNull: false 
    },
    duration: {
        type: DataTypes.INTEGER,    // total minutes.
        allowNull: true
    },

}, {
    schema: "post_schema"
})

module.exports = PostVideo;
