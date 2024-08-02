const express = require('express');
const app=express();
const productRoutes = require("./routes/productRoutes");
const cartRoutes =require('./routes/cartRoutes');
const orderRoutes =require('./routes/orderRoutes');
const cors = require("cors");

const mongoose=require("mongoose")
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://sabarikrishnan373762:sabari23281@cluster0.av5q4dw.mongodb.net/")
.then(()=>{
    console.log("Connected to MongoDB")
})

app.set('view engine',"ejs");
app.use("/",productRoutes)
app.use('/api/cart',cartRoutes)
app.use('/order/cart',orderRoutes)
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})