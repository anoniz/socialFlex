const auth = require('./auth');
const errorMiddleware = require('./userProfileErrors');

module.exports = {
    auth,
    errorMiddleware
}