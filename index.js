const express = require('express')
const server = express()
const mongoose = require('mongoose');
const cors = require('cors');

const { createproduct } = require('./controller/Product');
const productsRouter = require('./routes/Products');
const brandsRouter = require('./routes/Brands');
const categorysRouter = require('./routes/Categorys');
const usersRouter = require('./routes/Users');
const authRouter = require('./routes/Auth');
const cartRouter = require('./routes/Cart');
const ordersRouter = require('./routes/Order');


//middlewares
server.use(cors({
    exposedHeaders:['X-Total-Count']
}));
server.use(express.json()); // to parse the req.body
server.use('/products', productsRouter.router); // mount the products router
server.use('/brands', brandsRouter.router); // mount the brands router
server.use('/categorys', categorysRouter.router); // mount the categorys router
server.use('/users', usersRouter.router); // mount the users router
server.use('/auth', authRouter.router); // mount the auth router
server.use('/cart', cartRouter.router); // mount the cart router
server.use('/orders', ordersRouter.router); // mount the order router


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