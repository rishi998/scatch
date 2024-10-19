const mongoose=require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const ownerschema=mongoose.Schema({
  fullname:String,
  email:String,
  password:String,
  products:{
    type:Array,
    default:[]
  },
  picture:String,
  gstin:String
});

module.exports=mongoose.model("owner",ownerschema);