"use strict";

const path = require("path");

module.exports = function(data) {
    return {
        uploadSingleFile(req, res) {
            let destinationImagePath = path.join("/public/uploads", req.file.filename);
            data.findDestinationById(req.params.id)
                .then((destination) => {
                    destination.imagePath = destinationImagePath;
                    destination.save();
                });

            res.redirect("/user/destinations/" + req.params.id);
        },

        showSingleFileUploadForm(req, res) {
            res.render("../views/upload-single-form.pug", { req });
        }
    }
}