const Schema = require("mongoose").Schema;

const CommentSchema = new Schema({
    comment: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    username: {
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    }
});

module.exports = CommentSchema;
