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
        allDestinations(req, res){
            data.showAllDestinations()
                .then((destinations)=>{

                    res.render("../views/all-destinations.pug",{destinations})
                })
        },
        getDestinationById(req, res){
            console.log(req.params);
            let id = req.params.id;
            data.findDestinationById(id)
                .then((destination)=>{
                    console.log(destination)
                    res.render("../views/single-destination.pug",{destination})
                })
        },
    }
}