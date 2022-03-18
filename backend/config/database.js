require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewurlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB Connection SUCCESS')
    } catch (error) {
        console.log('MongoDB Connection FAILED')
        process.exit(1)
    }
}

module.exports = connectDB; 