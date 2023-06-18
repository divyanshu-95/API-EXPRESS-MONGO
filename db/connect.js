const mongoose=require('mongoose');

const uri="mongodb://localhost:27017/newAPI_DIVYANSHU_Products"
const connectDB=()=>{
    console.log('db connect');
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
}

module.exports=connectDB