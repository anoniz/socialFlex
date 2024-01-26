const bucketName = process.env.AWS_BUCKET_NAME;
const folderName = process.env.AWS_IMAGE_FOLDER;

const imageDownloadService = require('../services/imageDownloadService');
const imageUplaodService = require('../services/imageUploadService');

// sharp  and compressing and other processing will be done here
// service will only upload it

const imageUplaod = async (req,res) => {
    // do something with files
    try {
        const uploadedFiles = await imageUplaodService.uploadImages(req.files,bucketName,folderName);
        console.log(uploadedFiles);

        
       return res.status(201).json({
        "message":"upload successfull",
        "result": uploadedFiles
       });
    } catch(err) {
       return res.status(500).json({
        message: "upload failed",
        result: []
       })
    }

}


module.exports = {
    imageUplaod
}


