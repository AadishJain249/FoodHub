const { default: mongoose } = require("mongoose");
const mongo = require("mongoose");
const User = new mongo.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
        min:8,
    },
});
const user=mongoose.model('user',User)
module.exports=user