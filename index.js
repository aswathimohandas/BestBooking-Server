require('dotenv').config()

const express=require('express')
const cors=require('cors')
const roomsRoute=require('./Routes/route')
const hotelServer=express()
require('./connection/db')



hotelServer.use(cors())
hotelServer.use(express.json())
hotelServer.use('/api/rooms',roomsRoute)



const PORT=3000 || Process.env.PORT

hotelServer.listen(PORT,()=>{
    console.log(`server running at :${PORT}`);
    
})