const { loginInfo } = require('../Controller/loginController')

const router=require('express').Router()


router.post('/verifylogin',loginInfo)

module.exports=router