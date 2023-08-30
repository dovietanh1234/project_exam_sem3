const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3006;

// routers
const ProductRouter = require('./src/Routers/Product.Router');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public')); 

app.use (express.urlencoded ( { extended: false }));

app.use('/product', ProductRouter);

app.listen(port, ()=>{
    console.log(`server is running...on localhost ${port} `);
})