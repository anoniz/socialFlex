const bucketName = process.env.AWS_BUCKET_NAME;
const folderName = process.env.AWS_IMAGE_FOLDER;
const imageDownloadService = require('../services/imageDownloadService');
const imageUplaodService = require('../services/imageUploadService');

const imageUplaod = async (req,res) => {
    // do something with files
    try {
        console.log("req file", req.files);
        const uploadedFiles = await imageUplaodService.uploadImages(req.files,bucketName,folderName);
        return res.status(201).json({
        message:"upload successfull",
        result: uploadedFiles
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


