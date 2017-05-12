/* globals require */
"use strict";
module.exports = function() {
    return {
        homePage(req, res) {
            res.render("home-page");
        }
    };
};