import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'express'
import userRouter from './Routes/user.js'
import productRouter from'./Routes/product.js'
import cartRouter from './Routes/cart.js'
import addressRouter from './Routes/address.js'
import cors from 'cors'

const app = express();

app.use(bodyParser.json())

app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}))
//hone testing route
app.get('/',(req,res)=>res.json({message:'This is Home Route'}));

// userRouter
app.use('/api/user',userRouter);

//product router
app.use('/api/product',productRouter);

//cart router
app.use('/api/cart',cartRouter)

//address router
app.use('/api/address',addressRouter)


// Connect to MongoDB
mongoose.connect("mongodb+srv://kumarsunkaraboina27:rpqjMy6twHu9yn0W@cluster0.zyz8u2u.mongodb.net/", {
    dbName: "MERN_ECommerce"
}).then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log(err));

// Use userRouter
app.use('/api/users', userRouter);

const port = 1000;
app.listen(port, () => console.log(`Server is running on port ${port}`));