const express=require('express')
const app=express();
const path =require('path');
const mongoose =require('mongoose');//obj
const seedDB= require('./seed')
const productRoutes=require('./routes/product')
//const reviewRoutes=require('./routes/reviewRoutes')
const ejsMate=require('ejs-mate');
const methodOverride=require('method-override');



app.engine('ejs',ejsMate);
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(productRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')//change db
.then(()=>{console.log("DB CONNECTED")}) //resolve
.catch((err)=>{console.log("CONNECTION Error",err)})//rejectm

//seedDB();


let PORT=8080;
app.listen(PORT,()=>{
    console.log(`server connected at ${PORT}`);
})




