const express = require('express')
const dbOps = require('./../config/db').dbOps
let router = express.Router()


router.post('/',(req,res)=>{
        let userInfo = req.body
        console.log('recieved a post request to register endpoint with payload: ',userInfo)
        dbOps.registerOps.register(userInfo).then((data)=>{
            // console.log('')
        res.status(200).send({status:200,data:{success:true,id:data.id},message:'succesfully registered user '})
    }).catch((err)=>{
        console.log(err)
        res.status(400).send({status:400,data:{success:false},message:err})
        })
})


module.exports = router