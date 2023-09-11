const express=require('express')
const router=new express.Router()
const { register,login} = require('../controller/user-controller')
router.post('/add',register)
router.post('/login',login)
module.exports=router