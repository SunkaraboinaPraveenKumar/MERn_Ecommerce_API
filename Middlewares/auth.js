import jwt from 'jsonwebtoken'
import { User } from '../Models/User.js'
export const Authenticated = async  (req,res,next)=>{
    const token=req.header("Auth")

    if(!token) return res.json({message:"Login First"})
    const decoded = jwt.verify(token,"!@#$%^&*()")

    const id=decoded.userId
    // console.log(decoded)
    let user = await User.findById(id)
    if(!user) return res.json({message:"User Does not Exist"})
    req.user=user
    next()
}