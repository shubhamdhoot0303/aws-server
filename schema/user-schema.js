import mongoose from 'mongoose';
//define schema 
const userSchema = new mongoose.Schema({
    name:{type:String, required:true , trim:true },
    email:{type:String, required:true },
    password:{type:Number,required:true},
})
//use as a plugin

//model

const user = mongoose.model( "user" , userSchema )

export default user;