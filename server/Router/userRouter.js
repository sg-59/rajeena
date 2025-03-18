const router=require('express').Router()
const {Signup,getDatafromDatabase, getSingleDataFromdatabase, getSingledatafromqueryindatabase, deleteDatafromDatabase, deletedatabasefromquery, updatedDataFromDatabase, updatedatasinquery}=require('../Controller/userController')
const verifyJwtToken=require('../verifyToken')

router.post('/postdata',Signup)
router.get('/getData',getDatafromDatabase)
router.get('/getSingleData/:userId',verifyJwtToken,getSingleDataFromdatabase)
router.get('/getSingleDatafromquery',getSingledatafromqueryindatabase)
router.delete('/deleteDatabase/:Id',deleteDatafromDatabase)   //http://localhost:3000/api/deleteDatabase/67aea563a94886fffda464ef
router.delete('/deleteDatafromdatabasefromquery',deletedatabasefromquery) //http://localhost:3000/api/deleteDatafromdatabasefromquery?phone=854693210
router.put('/updataDatabase/:id',verifyJwtToken,updatedDataFromDatabase)  //http://localhost:3000/api/updataDatabase/67ad58d5731f032cfd8d563e
router.put('/updatedatainquery',updatedatasinquery)
module.exports=router