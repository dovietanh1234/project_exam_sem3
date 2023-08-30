const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { configCollection } = require('../Config/connectDB');

const productSchema = new Schema({

    ProductCode: {
        type: String,
        lowercase: true,
        unique: false,
        required: false
    },
    ProductName:  {
        type: String,
        lowercase: true,
        unique: false,
        required: true
    },
    ProductData: {
        type: Date,
        require: false
    },
    ProductOriginPrice: {
        type: Number,
        unique: false,
        required: true
    }, 
    Quantity: {
        type: Number,
        unique: false,
        required: true
    },
    ProductStoreCode: {
        type: String,
        lowercase: true,
        unique: false,
        required: false
    }
})

module.exports = configCollection.model('ProductExam', productSchema);