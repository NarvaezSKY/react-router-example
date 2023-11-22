import mongoose from "mongoose";
const URI="mongodb://127.0.0.1/"

mongoose.connect(URI).then(()=>{
    console.log('db connected')
}).catch((err)=>{
    console.error(err)
})