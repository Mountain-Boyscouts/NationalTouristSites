/* globals require module Promise */
"use strict";

module.exports = function (models) {
    let {Destination} = models;

    return {
        createDestination(title, description, imagePath){

            let isVisited = false;

            let destination = new Destination({
                title,
                description,
                imagePath,
                isVisited
            });

            return new Promise((resolve, reject) => {
                destination.save((err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(destination);
                })
            });


        },
        showAllDestinations(){
            console.log("Predi destinaciq");
            return new Promise((resolve, reject) => {
                Destination.find((error, destinations) => {
                    if (error) {
                        console.log("vulk");
                        return reject(error);
                    }
                    return resolve(destinations);
                })
            })
        }
    }
}
