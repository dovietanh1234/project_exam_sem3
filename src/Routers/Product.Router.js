const express =  require('express');
const route = express.Router();

const multer = require('multer');
const P = require('../Controllers/Product.controller')

//route.get('/get', );

route.get('/get', P.GetProduct);
route.get('/form', P.formGet);
route.post('/form', P.formPost)

route.get('/delete/:id', P.deleteProduct);


module.exports = route;