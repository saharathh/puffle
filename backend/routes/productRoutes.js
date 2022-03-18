const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../controller/productControllers');

//GET all products from DB (GET/api/products)
router.get('/', getProducts);

router.get('/:id', getProductById);

module.exports = router;