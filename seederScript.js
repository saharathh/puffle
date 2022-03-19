require('dotenv').config();

const productData = require('./data/ProductData');
const Product = require('./models/Product');
const connectDB = require('./config/database');

const importData = async () => {
    try {
        await connectDB();
        await Product.deleteMany({});
        await Product.insertMany(productData);
        console.log('Import SUCCESS');
        process.exit();
    } catch (error) {
        console.log("ERROR with Data Import");
        process.exit(1);
    }
};

importData();