const mongoose=require('mongoose');

const productschema=mongoose.Schema({
  image:String,
  name:String,
  price:String,
  duscount:{
    type:Number,
    default:0
  },
  bgcolor:String,
  panelcolor:String,
  textcolor:String
});

module.exports=mongoose.model("product",productschema);