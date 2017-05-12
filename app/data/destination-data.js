/* globals require module Promise */
"use strict";

module.exports = function(models) {
    let { Destination } = models;

    return {
        createDestination(title, description, imagePath) {

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
        showAllDestinations() {
            return new Promise((resolve, reject) => {
                Destination.find((error, destinations) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(destinations);
                })
            })
        },

        findDestinationById(id) {
            return new Promise((resolve, reject) => {
                Destination.findOne({ _id: id }, (error, destination) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(destination);
                });
            })
        },

        searchDestinations(title) {
            let query = { "title": new RegExp(`${title}`, "i") };
            return new Promise((resolve, reject) => {
                Destination.find(query)
                    .exec((err, projects) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(projects);
                    });
            });
        },
    }
}