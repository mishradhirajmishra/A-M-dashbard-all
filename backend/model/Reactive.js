const mongoose  = require('mongoose');

const reactiveUserSchema = mongoose.Schema({
    username:{type:String,required:true}, 
    email:{type:String,required:true} ,
    password:{type:String,required:true} ,  
    cpassword:{type:String,required:true} , 
    dob:{type:String,required:true} ,     
    gender:{type:String,required:true} ,     
    about:{type:String,required:true},
    category:{type:String,required:true},
    color:{type:String,required:true} ,   
    range:{type:String,required:true} ,   
    url:{type:String,required:true} ,     
    hobby:{
        reading_book:String,
        watching_moove:String,
        swimming:String
    } ,
    time:[{
         minTime:String,
        maxTime:String
    }]

});

module.exports = mongoose.model('reactive',reactiveUserSchema);