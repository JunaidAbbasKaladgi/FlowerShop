import User from "../model/user.model.js"
import bcryptjs from "bcryptjs"

export const signup=async (req,res)=>{
     try {
        const {name,email,address,password}=req.body
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({messege:"user already exists"})
        }
        const hashPassword=await bcryptjs.hash(password,10)
        const createdUser=new User({
            name:name,
            email:email,
            address:address,
            password:hashPassword,
        })
        await createdUser.save()
        res.status(201).json({messege:"user created successfully",user:{
            _id:createdUser._id,
            name:createdUser.name,
            email:createdUser.email,
        }})
     } catch (error) {
        console.log("error: "+error.messege)
        res.status(500).json({messege:"Internal server error"})
     }
}
export const login=async(req,res)=>{
        try {
            const {email,password}=req.body
            const user=await User.findOne({email})
            const isMatch=await bcryptjs.compare(password,user.password)
            if(!user || !isMatch){
                return res.status(500).json({messege:"Invalid email or password"})
            }
            else{
                res.status(201).json({messege:"Login successful",user:{
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                }})
            }
        } catch (error) {
            console.log("error :"+error.messege)
            res.status(500).json({messege:"Internal server error"})
        }
}