const router=require('express').Router()
const {Signup}=require('../Controller/userController')

router.post('/postdata',Signup)

module.exports=router