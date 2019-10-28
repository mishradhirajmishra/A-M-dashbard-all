const mongoose  = require('mongoose');

const profileSchema = mongoose.Schema({
    username:{type:String}, 
    image:[{type:String}] ,
})

module.exports = mongoose.model('profile',profileSchema);