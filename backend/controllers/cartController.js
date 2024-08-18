import userModel from "../models/userModel.js"

// add item to user cart
const addToCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"เพิ่มสำเร็จ"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"เกิดข้อผิดพลาด"})
    }
}



// remove item from user cart
const removeFromCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"ลบสำเร็จ"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"เกิดข้อผิดพลาด"})
    }
}


//fetch user cart data
const getCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"เกิดข้อผิดพลาด"})
    }
}


export {addToCart,removeFromCart,getCart}