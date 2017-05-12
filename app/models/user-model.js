/* globals require module */

const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    username: {
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


schema.query.byName = function(name) {
    let query = { "username": new RegExp(name, "i") };
    return this.find(query);
};

schema.methods.comparePassword = function(password) {
    return this.password === password;
};

mongoose.model("User", schema);

module.exports = mongoose.model("User");