
const mongoose = require("mongoose") ;

mongoose.connect("mongodb://localhost:27017/orderDB" , {
    useNewUrlParser:true 
}) ; 

const orderschema = new mongoose.Schema ({
      
    delivery:String , 
    way:String , 
    weight:String ,
    pickupinfo:[{
        pickuppin:Number , 
         pickupnumber:Number , 
        pickup:String , 
       

    }]  ,
    deliverinfo:[
        {
            deliverypin:Number , 
            deliverynumber:Number ,
              delivery:String , 
         

        }
    ]   , 
    payment:String
    
})

const order= mongoose.model("order" , orderschema) ; 
module.exports={
    order
}
 
