const express= require('express');
const { createbrand, fetchBrands } = require('../controller/Brand');

const router = express.Router();

router.get('/', fetchBrands).post('/', createbrand);

exports.router = router;