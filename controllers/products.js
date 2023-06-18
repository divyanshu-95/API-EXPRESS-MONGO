const Product=require('../models/product');
const getAllProducts=async(req,res)=>{
    const {company}=req.query;
    const {name,select}=req.query;  
    const queryObj={};//13
    let apiData=Product.find(queryObj);
    if(company){
        queryObj.company=company;
    }
    if(name){
        // queryObj.name=name;
        // using regex for showing if only name is matched not for company
        queryObj.name={$regex:name,$options:'i'};//i>case insensitive
    }
    if(select){
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
    }

    let page=Number(req.query.page)||1;
    let limit=Number(req.query.limit)||1;
    let skip=(page-1)*limit;
    apiData=apiData.skip(skip).limit(limit);
    console.log(queryObj);
    // const myData=await Product.find({});
    // const myData=await Product.find(queryObj);
    const myData=await apiData;
    res.status(200).json({myData,nbHits:myData.length})
    // res.status(200).json({msg:"Get all products"});
    res.status(200).json({myData});
}

const getAllProductsTesting=async(req,res)=>{
    const myData=await Product.find(req.query).sort("name");//agar pehle - lagaoge to desc otherweise asc  // agar do cheez s sort to space sath m(name price
    const myData1=await Product.find(req.query).select1("name");//agar pehle - lagaoge to desc otherweise asc  // agar do cheez s sort to space sath m(name price

    // res.status(200).json({msg:"Get all products"});
    res.status(200).json(myData);//after ? put searching
}
module.exports={getAllProducts,getAllProductsTesting};