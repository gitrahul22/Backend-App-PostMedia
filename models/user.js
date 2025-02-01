const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/miniproj");


const userSchema=mongoose.Schema({
    userName: String,
    name:String,
    age:Number,
    email:String,
    password:String,
    posts:[{ type:mongoose.Schema.Types.ObjectId,ref:"post"}]
});


module.exports=mongoose.model('user',userSchema);