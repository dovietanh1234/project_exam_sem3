const Product = require('../Model/Product.model');

module.exports = {
    GetProduct: async (req, res, next)=>{
        const p = await Product.find();

        if(!p){
            return res.render('product', {info: "fail to take data from DB *-*"});
        }else{
            return res.render('product', {name: p});
        }
    },
    formGet: async (req, res, next)=>{
        return res.render('form');
    },
    formPost: async(req, res, next)=>{
        try{
            const data = req.body;
            const p = new Product(data);

            await p.save();

            return res.render('product', {info: "success"});

        }catch(error){
            return res.render('product', {info: "fail to create"});
        }
    },
    deleteProduct: async(req, res, next)=>{
        try{

            const id = req.params.id;

        const c = await Product.deleteMany({_id: id})

        // const a = await Product.deleteMany({_id: id})
        return !c ? res.send('fail to delete') : res.send('delete successfully');

        }catch(error){
            return res.render('product', {info: "fail to delete"});
        }
    }
}