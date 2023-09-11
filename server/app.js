const express=require('express')
const app=express()
const cors = require('cors');
app.use(cors({
    origin:["http://localhost:1234"]
}));
const mongoose=require('./db/mongo')
const UserRouter=require('./routers/user-router')
app.use(express.json())
app.use('/api/user',UserRouter)
app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(3000)