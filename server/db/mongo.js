const mongoose =require('mongoose')
const url='mongodb+srv://aadish:aadishjain@cluster0.j2ofh20.mongodb.net/?retryWrites=true&w=majority'
mongoose.set("strictQuery", false);
mongoose.connect(url).then(function(result){
    console.log("connected");
})
.catch((err)=>
{
    console.log(err);
})
