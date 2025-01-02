const mongoose=require('mongoose');
const { type } = require('os');
const { stringify } = require('qs');

const userschema=mongoose.Schema({
  fullname:stringify,
  email:String,
  password:String,
  cart:{
    type:Array,
    default:[]
  },
  isadmin:Boolean,
  orders:{
    type:Array,
    default:[]
  },
  contact:Number,
  picture:String,
});

module.exports=mongoose.model("user",userschema);