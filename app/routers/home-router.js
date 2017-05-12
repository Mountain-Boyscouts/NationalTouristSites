"use strict";

module.exports = function(server, controller) {
    server.get("", controller.homePage);
};