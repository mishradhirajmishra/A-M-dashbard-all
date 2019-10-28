const mongoose  = require('mongoose');

const dynamicUserSchema = mongoose.Schema({
    username:{type:String,required:true}, 
    email:{type:String,required:true} ,
    password:{type:String,required:true} ,  
    cpassword:{type:String,required:true} , 
    time:[{
         minTime:String,
        maxTime:String
    }]

});

module.exports = mongoose.model('duser',dynamicUserSchema);