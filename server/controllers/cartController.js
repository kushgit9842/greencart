import User from "../models/User.js"


export const updateCart = async (req , res) => {
    try {
        
        const {userId , cartItems} = req.body
        const user = await User.findByIdAndUpdate(userId , {cartItems} , {new:true})
        res.json({success : true , message : "Cart Updated" , user})

    } catch (error) {
        res.json({success : false , message : error.message})
    }
}