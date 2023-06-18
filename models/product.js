const  mongoose  = require('mongoose');
const productsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:[true,"price must be there"],
        trim:true
    },
    feature:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.9,
        trim:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:["apple","mi","dell"],
            message:`{VALUE} is not supported`
        }
    },
});

const ProductList=new mongoose.model("ProductList",productsSchema);
module.exports=ProductList;
