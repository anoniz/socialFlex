const s3 = require('../config/s3-config');
const { Readable } = require('stream');

const uploadImages = async (files,bucketName,folderName) => {
    // returns the url array of images url. 
    // create file urls on s3 and save that to db.
     const uploadedFiles = [];
        try {
          for (const file of files) {
             // Append current date to the original file name
          const currentDate = new Date().toISOString(); 
          const newFileName = `${currentDate}_${file.originalname}`;

          const params = {
              Bucket: bucketName,
              Key: `${folderName}/${newFileName}`, // Set the S3 key including the folder structure
              Body: Readable.from(file.buffer),
              ContentType: file.mimetype,
            };
      
          const uploadResult = await s3.upload(params).promise();
          uploadedFiles.push({
            url: uploadResult.Location,
            key: uploadResult.Key
          });
      
          console.log(`File ${file.originalname} processed and uploaded successfully to ${folderName} folder.`);
          
        }
        return uploadedFiles;

    } catch (error) {
          console.error('Error processing and uploading files:', error);
          throw error;
        }
      
}

module.exports = {
    uploadImages,
}