const express=require('express')
const app=express()
const cors = require('cors');
const bodyParser = require('body-parser');
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ["*"]);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.append("Access-Control-Allow-Headers", "Content-Type,Authorization");
    res.append("Access-Control-Allow-Credentials", "true");
    next();
});
app.use(bodyParser());
app.use(cors({
    origin:["http://localhost:3000"]
}));
const mongoose=require('./db/mongo')
const UserRouter=require('./routers/user-router')
app.use(express.json())
app.use('/api/user',UserRouter)
app.get('/',(req,res)=>{
    res.send("hello")
})
app.listen(3000)