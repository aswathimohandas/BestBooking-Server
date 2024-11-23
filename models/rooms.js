const mongoose=require('mongoose')

const roomSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    maxCount:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    rentperday:{
        type:String,
        required:true
    },
    imageurls:[],
    currentBookings:[],
    type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

    
})

const rooms=mongoose.model('rooms',roomSchema)

module.exports=rooms