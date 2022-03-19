const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    product_type: {
        type: String,
        require: true,
    },
    product_description: {
        type: String,
        required: true,
    },
    product_price: {
        type: Number,
        required: true,
    },
    product_stock: {
        type: Number,
        required: true,
    },
})

const Product = mongoose.model('product', productSchema);

module.exports = Product;