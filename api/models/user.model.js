import mongoose from "mongoose";

const User=new mongoose.Schema({
    name:{
        type:String,
        required: false
    },
    permissions: {
        type: [String],  
        required: false  
    },
    roles: {
        type: [String],
        required: false
    }
});

export default mongoose.model("User",  User)