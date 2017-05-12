"use strict";

module.exports = function (server, controller) {
    server.get("/destinations/create", controller.getDestination);
    server.post("/destinations/create", controller.addDestionation);


};