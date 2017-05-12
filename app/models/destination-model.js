/* mongoose global */
"use strict";

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;


let DestinationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imagePath:{
        type: String,
        required: true
    },
    location:{
        type:String,
    },
    isVisited:{
        type: Boolean,
        default: false
    },
    workingTime:{
        type: String,
        required:false,
    }

}


let Destionation;
mongoose.model("Destionation", DestinationSchema);
Destionation = mongoose.model("Destionation");
module.exports = Destionation;