/* globals require */
"use strict";
module.exports = function() {
    return {
        homePage(req, res) {
            const username = req.user.username;
            res.render("home-page", { username: username });
        }
    };
};