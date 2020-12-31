const passport = require("passport") ;
const passportlocal= require("passport-local") ; 
const passportlocalmongoose = require("passport-local-mongoose") ;  
const mongoose = require("mongoose") ;

mongoose.connect("mongodb://localhost:27017/userDB") ; 

const userschema = new mongoose.Schema ({
    
    email:String ,
    password:String
})

userschema.plugin(passportlocalmongoose) ; 

const User= mongoose.model('user' , userschema) ; 
const first = new User({
    name:"Aditya" , 
    email:"kushwahaaditya251@gmail.com" , 
    password :"12345678" 
})
module.exports={
    User  , passport , passportlocal , passportlocalmongoose , userschema
}