import mongoose from "mongoose";

import uniqueValidator from 'mongoose-unique-validator'

const userSchema = new mongoose.Schema({
  fname:String,
  lname:String,
  email:{
    type:String,
    unique:true,
    validate:{
      validator:function(v){
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v)
      },
      message:'{VALUE} is not a valid email address'
    }
  },
  pHash:String,
  categories:[{type:String}]
})
userSchema.plugin(uniqueValidator,{message:'Error, {PATH} already in use.'})
const User = mongoose.model('User',userSchema)

export default User