const express = require('express')
const server = express()
const mongoose = require('mongoose');
const { createproduct } = require('./controller/Product');
const productsRouter = require('./routes/Products');
const brandsRouter = require('./routes/Brands');
const categorysRouter = require('./routes/Categorys');
const cors = require('cors');



//middlewares
server.use(cors({
    exposedHeaders:['X-Total-Count']
}));
server.use(express.json()); // to parse the req.body
server.use('/products', productsRouter.router); // mount the products router
server.use('/brands', brandsRouter.router); // mount the products router
server.use('/categorys', categorysRouter.router); // mount the products router


main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log('Connected to MongoDB')
}


server.get('/', (req, res) => {
    res.json({ status: 'success' })
})


server.listen(8080, () => {
    console.log('Server is running')
})