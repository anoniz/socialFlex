const auth = require('./auth');
const errorMiddleware = require('./userProfileErrors');
const upload = require('./upload');
module.exports = {
    auth,
    upload,
    errorMiddleware
}