const mongoose = require('mongoose')

const ClothSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
	category : {
        type : String,
        required : true
    },
    size : {
        type : String,
        required : true
    },
    material : {
        type : String,
        required : true
    },
    color : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
})

const Cloth = mongoose.model('Cloth',ClothSchema)

module.exports = Cloth