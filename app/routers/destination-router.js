"use strict";

module.exports = function (server, controller) {
    server.get("/destinations/create", controller.getDestination);
    server.post("/destinations/create", controller.addDestionation);
    server.get("/destinations", controller.allDestinations);
    server.get("/destinations/:id", controller.getDestinationById)


};