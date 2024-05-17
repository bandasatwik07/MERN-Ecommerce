const { Category } = require('../model/Category');

exports.fetchCategorys = async (req, res) => {
    try{
        const categorys = await Category.find().exec();
        res.status(200).json(categorys);
    }
    catch(err){
        res.status(400).json(err)
    }
}

exports.createcategory= async(req,res)=>{
    const category = new Category(req.body);
    try{
        const doc= await category.save();
        res.status(201).json(doc);
    }catch(err){
        res.status(400).json(err);
    }
}