const express = require('express')
const dbOps = require('./../config/db').dbOps
let router = express.Router()


router.post('/interests',(req,res)=>{
        let userInfo = req.body
        console.log('recieved a post request to info endpoint with payload: ',userInfo)
        dbOps.infoOps.addInterests(userInfo).then((data)=>{
        res.status(200).send({status:200,data:{success:true},message:'succesfully added user interests '})
    }).catch((err)=>{
        res.status(400).send({status:400,data:{success:false},message:err})
        })
})


router.get('/',(req,res)=>{
        let userId = req.query.id
        console.log('recieved a get request to info endpoint with parameter id : ',userId)
        dbOps.infoOps.userInfo(userId).then((data)=>{
        res.status(200).send({status:200,data:data,message:'succesfully retrieved user info '})
    }).catch((err)=>{
        res.status(400).send({status:400,data:{success:false},message:err})
        })
})

router.put('/',(req,res)=>{
    let userInfo = req.body
    console.log('recieved a post request to info endpoint with payload: ',userInfo)
    dbOps.infoOps.updateInfo(userInfo).then((data)=>{
    res.status(200).send({status:200,data:{success:true},message:'succesfully updated user info '})
}).catch((err)=>{
    res.status(400).send({status:400,data:{success:false},message:err})
    })
})

router.put('/interests',(req,res)=>{
    let userInfo = req.body
    console.log('recieved a post request to info endpoint with payload: ',userInfo)
    dbOps.infoOps.updateInterests(userInfo).then((data)=>{
    res.status(200).send({status:200,data:{success:true},message:'succesfully updated user interests '})
}).catch((err)=>{
    res.status(400).send({status:400,data:{success:false},message:err})
    })
})

router.delete('/',(req,res)=>{
    let userId = req.query.id
    console.log('recieved a delete request to info endpoint with parameter id : ',userId)
    dbOps.infoOps.removeUser(userId).then((data)=>{
    res.status(200).send({status:200,data:data,message:'succesfully removed user  '})
}).catch((err)=>{
    res.status(400).send({status:400,data:{success:false},message:err})
    })
})
router.delete('/interests',(req,res)=>{
    let userId = req.query.id
    console.log('recieved a delete request to info endpoint with parameter id : ',userId)
    dbOps.infoOps.removeInterests(userId).then((data)=>{
    res.status(200).send({status:200,data:data,message:'succesfully removed user interests '})
}).catch((err)=>{
    res.status(400).send({status:400,data:{success:false},message:err})
    })
})




module.exports = router