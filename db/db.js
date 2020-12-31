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

const orderschema = new mongoose.Schema ({
      
    type:String , 
    way:String , 
    weight:String ,
    pickupinfo:[{
        pickuppin:Number , 
        pickupnumber:Number , 
        pickup:String , 
        

    }]  ,
    destinationinfo:[
        {
            deliverpin:Number , 
            deliverynumber:Number ,
          deliver:String , 
      

        }
    ]   , 
    paymenttype:String
    
})
const order= mongoose.model("order" , orderschema) ; 

module.exports={
    User  , order ,  passport , passportlocal , passportlocalmongoose , userschema
}

 

