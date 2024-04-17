const express= require('express');
const { createcategory, fetchCategorys } = require('../controller/Category');

const router = express.Router();

router.get('/', fetchCategorys).post('/', createcategory);

exports.router = router;