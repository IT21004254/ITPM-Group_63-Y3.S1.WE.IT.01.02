const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RequestSchema = new Schema({

    city: {
        type: String,
    },
    disaster: {
        type: String,

    },
    date: {
        type: String,
    },
    description: {
        type: String,

    },
    camps: {
        type: String,
    },

});

const machineData = mongoose.model("RequestsThree", RequestSchema);
module.exports = machineData;