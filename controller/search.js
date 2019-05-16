const express = require('express')
const dbOps = require('./../config/db').dbOps
let router = express.Router()


router.get('/email',(req,res)=>{
    let name = req.query.email
    console.log('recieved a get request to search endpoint with parameter id : ',name)
    dbOps.searchOps.searchuserInfoByEmail(name).then((data)=>{
    res.status(200).send({status:200,data:data,message:'succesfully retrieved user info '})
}).catch((err)=>{
    res.status(400).send({status:400,data:{success:false},message:err})
    })
})
router.get('/name',(req,res)=>{
    let name = req.query.name
    console.log('recieved a get request to search endpoint with parameter id : ',name)
    dbOps.searchOps.searchuserInfoByName(name).then((data)=>{
    res.status(200).send({status:200,data:data,message:'succesfully retrieved user info '})
}).catch((err)=>{
    res.status(400).send({status:400,data:{success:false},message:err})
    })
})
module.exports = router