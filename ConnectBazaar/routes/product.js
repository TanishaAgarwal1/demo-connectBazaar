const express=require('express');
const Product = require('../models/Product');
const router=express.Router();

router.get('/home',async(req,res)=>{
   
    res.render('products/index');
});

//toshow all products
router.get('/products/Electronic',async(req,res)=>{
    let products=await Product.find({}); //products.find  promise return krta h toh then or catch ka better way is to use await bcoz then nd catch mai timelgta h response generate hone mai
    res.render('products/electronics',{products});
});


module.exports=router;