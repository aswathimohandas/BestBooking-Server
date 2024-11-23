const express=require('express')
const router=express.Router()
const Room=require('../models/rooms')
const jwt=require('../middlewares/jwtMiddleware')
const userController=require('../controllers/userController')


router.post('/log',userController.userlogin)
router.post('/reg',userController.userRegistration)




router.get('/getallrooms',async(req,res)=>{
    try{
        const rooms=await Room.find({})
        res.send(rooms)
    }
    catch{
        return res.status(400).json({message:error})
    }
   
})

router.post('/getroombyid',async(req,res)=>{
    const roomid=req.body.roomid
    try{
        const room=await Room.findOne({_id:roomid})
        res.send(room)
    }
    catch{
        return res.status(400).json({message:error})
    }
   
})


module.exports=router