import jwt from "jsonwebtoken"

const authMiddleware = async (req,res,next) => {
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false,message:"ไม่ได้รับอนุญาติ กรุณาเข้าสู่ระบบใหม่อีกครั้ง"})
    } 
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"เกิดข้อผิดพลาด"})
    }
}

export default authMiddleware;