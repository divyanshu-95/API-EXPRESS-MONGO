const connectDB=require('./db/connect');
const product=require('./models/product');
const uri="mongodb://localhost:27017/newAPI_DIVYANSHU_Products"
const ProductJSON=require('./products.json');
const start=async ()=>{
    try {
        await connectDB(uri);
        await product.deleteMany();
        await product.create(ProductJSON);
        console.log('suucess post');
    } catch (error) {
        console.log(error);
    }
}
start();