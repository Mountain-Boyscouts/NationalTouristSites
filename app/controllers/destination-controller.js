/* globals require */
"use strict";

module.exports = function (data) {
    return {
        getDestination(req,res){
            res.render("../views/create-destination.pug",{})
        },
        addDestionation(req, res){
            let title = req.body.name;
            let description = req.body.description;
            let imagePath = req.body.imagePath;

            data.createDestination(title, description, imagePath)
                .then((destination) => {
                    res.redirect("home-page");
                })
                .catch((error) => {
                    console.log(error)
                    console.log("failed to add destionation");
                })
        },
        allDestionations(req, res){

        },
        getDestionationById(req, res){

        },
    }
}