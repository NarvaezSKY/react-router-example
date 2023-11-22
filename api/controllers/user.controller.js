import User from '../models/user.model.js'

export const getAllUsers=async(req,res)=>{
    const users=await User.find()
    res.json(users)
}

export const uploadUsers=async(req,res)=>{    
    const {name, permissions, roles}= req.body

    const user=new User({
        name,
        permissions,
        roles
    })

    const userSaved=await user.save()

    res.json(user)
}