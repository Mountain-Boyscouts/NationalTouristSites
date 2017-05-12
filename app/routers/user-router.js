"use strict";
let passport = require("passport");

module.exports = function(server, userController) {
    server.get('/login', userController.login);
    server.post('/login', userController.loginUser);

    server.get('/register', userController.register);
    server.post('/register', userController.registerUser);

    server.get('/logout', userController.logoutUser)
};