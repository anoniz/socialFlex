const { PostImage } = require('../models/associations');

const createPostImages = async (images) => {
    try {
        const createdImages = await PostImage.bulkCreate(images);
        if(!createdImages) {
            return {error:{message:"something went wrong try again",code:500}}
        }
        return {createdImages: createdImages};
    } catch(err) {
        console.log(err);
        return {error:{message:"something went wrong try again",code:500}}
    }
}

module.exports = {
    createPostImages
}