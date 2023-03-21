const mongoose = require('mongoose')

const ClothesSchema = new mongoose.Schema({
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

const Clothes = mongoose.model('Clothes',ClothesSchema)

module.exports = Clothes