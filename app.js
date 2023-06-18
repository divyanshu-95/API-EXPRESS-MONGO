const express=require('express');
const app=express();
const connectDB=require('./db/connect')
const port=process.env.PORT||5000;
app.get('/',(req,res)=>{
    res.send('live')
});
const prod_routes=require('./routes/products')
//middleware set router
app.use("/api/products",prod_routes);
const start =async()=>{
    try {
        await connectDB();  
        app.listen(port,()=>{
            console.log('connected');
        })
    } catch (error) {
        console.log(error)
    }
}
start();