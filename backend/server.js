require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "/client/build")));

    app.get('*', (request, response) => {
        response.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
} else {
    app.get('/', (request, response) => {
        response.send("API is running");
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));