/* globals require module */

const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    destinations: [{}],
    comments: [{}]
});
mongoose.model("User", schema);

module.exports = mongoose.model("User");