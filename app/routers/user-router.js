"use strict";
let passport = require("passport");

module.exports = function(server, userController) {
    server.get("/login", userController.login);

    server.get('/register', userController.register);
};