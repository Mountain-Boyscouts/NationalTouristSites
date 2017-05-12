/* globals require module Promise */
"use strict";

module.exports = function (models) {
    let {Destination} = models;

    return {
        CreateDestination(title, description, imagePath){

            let isVisited = false;

            let destination = new Destination({
                title,
                description,
                imagePath,
                isVisited
            });
        }
    }


}
