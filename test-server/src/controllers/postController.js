const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const fileUploadServiceUrl = 'http://localhost:5001/api/image';
const postCreationService = 'http://localhost:5000/api/posts'
const createPost = async (req,res) => {
    console.log("i am here");
    console.log(req.files);
    const requestConfig = {
        url: postCreationService,
        method: 'POST',
        data: {user:req.user},
        files: {}, // Add your custom property here
         ...req.body,
         
      };
      try {
      const formData = new FormData();
      files.forEach(file => {
        formData.append('files', fs.createReadStream(file.path), { filename: file.originalname });
      });
      const uploadedFiles = await axios.post(fileUploadServiceUrl, formData, {
        headers: {
            ...formData.getHeaders(), // Get headers from FormData object
            // You may need to include additional headers if required by the server
          }
      })
      if(uploadedFiles.status != 201) {
        return res.status(500).send("something went wrong with file upload");
      }
      requestConfig.files.images = uploadedFiles.data;
       
      const createdPost = await axios(requestConfig);
      if(createdPost.status != 201) {
        return res.status(500).send("something went wrong with post creation");
      }
      } catch(err) {
        console.log(err.response);
        return res.status(500).send("something went wrong");
      }
}

const getAllPosts = async (req,res) => {

}

const getSinglePost = async (req,res) => {

}


module.exports = {
    createPost,
    getAllPosts,
    getSinglePost
}