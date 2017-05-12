"use strict";

module.exports = function(server, controller, isAuthenticated) {
    server.get("/home", () => {
        controller.homePage(isAuthenticated);
    });

    server.get("", controller.homePage);
};