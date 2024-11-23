const mongoose=require('mongoose')

const connectionString=process.env.CONNECTION_STRING


mongoose.connect(connectionString).then(res=>{
    console.log("server connected to database")
    
}).catch(err=>{
    console.log(err);
    
})