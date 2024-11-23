const users=require('../models/userModel') 
const jwt=require('jsonwebtoken')

 
 
 
 exports.userRegistration=async (req,res)=>{
    console.log(req.body);
    
    // res.send('<h3>Request for user registration is hit</h3>')
    const {email,username,password}=req.body
    if(!email || !username || !password){
        res.status(400).json("invalid data")
    }
    else{

      const newUser=new users({
         email,username,password
      })
        await newUser.save()
        res.status(200).json(newUser)
    }
 }

 exports.userlogin=async (req,res)=>{
   try{
      const {email,password}=req.body
   const existing= await users.findOne({email,password})
   if(existing){
      const token=jwt.sign({userid:existing._id},process.env.SECRET_KEY)

      res.status(200).json({token,username:existing.username})
   }
   else{
      res.status(404).json("invalid email/password")

   }

   }
   catch(err){
      console.log(err)
      res.status(404).json(err)

   }
      
}