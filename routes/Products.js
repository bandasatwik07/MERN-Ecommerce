const express= require('express');
const { createproduct, fetchAllProducts, fetchProductById, updateProduct } = require('../controller/Product');

const router = express.Router();

router.post('/', createproduct)
      .get('/', fetchAllProducts)
      .get('/:id', fetchProductById)
      .patch('/:id', updateProduct);

exports.router = router;