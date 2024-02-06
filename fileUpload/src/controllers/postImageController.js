const bucketName = process.env.AWS_BUCKET_NAME;
const folderName = process.env.AWS_IMAGE_FOLDER;
const { PostImage } = require('../../../back-end/src/models/index');

const imageDownloadService = require('../services/imageDownloadService');
const imageUplaodService = require('../services/imageUploadService');
const sequelize = require('../db/sequelize');
const { v4: uuidv4 } = require('uuid');
const QueryTypes = require('sequelize').QueryTypes;
// sharp  and compressing and other processing will be done here
// service will only upload it

const imageUplaod = async (req,res) => {
    // do something with files
    try {
        const uploadedFiles = await imageUplaodService.uploadImages(req.files,bucketName,folderName);
       // console.log(uploadedFiles);
       for (file of uploadedFiles) {

        const newFile = {
            id: uuidv4().toString(),
            fileName: file.fileName,
            PostId: 'post0',
            fileKey: file.key,
        }
        console.log("obj ", newFile)
        const resp = await PostImage.create(newFile);
        console.log(resp);
    
    //    const [resp] = await sequelize.query(`INSERT INTO post_schema."PostImages"(
    //      id,  "fileName", "PostId",key)
    //      VALUES (:id, :fileName, :PostId,:key) RETURNING *`, {
    //         replacements: newFile,
    //         type: QueryTypes.INSERT,
    //         raw: true, // Ensure raw data without Sequelize-added metadata
    //         attributes: { exclude: ['createdAt', 'updatedAt'] }, // Exclude timestamps
    //      });

    //    console.log(resp[0]); 
}
       return res.status(201).json({
        "message":"upload successfull",
        "result": uploadedFiles
       });
    } catch(err) {
        console.log(err);
       return res.status(500).json({
        message: "upload failed",
        result: []
       })
    }

}

module.exports = { 
    imageUplaod
}


