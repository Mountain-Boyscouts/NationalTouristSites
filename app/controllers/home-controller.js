/* globals require */
"use strict";
module.exports = function() {
    return {
        homePage(req, res, isAuthenticated) {
            const options = { isAuthenticated };
            res.render("home-page", { options });
        }
    };
};