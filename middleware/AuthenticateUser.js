import {config} from "dotenv"
config()
import {sign,verify} from "jsonwebtoken"

function createToken(user) {
    return sign({
        emailAdd:user.emailAdd,
        userPwd:user.userPwd
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    }
    
    )
}


function verifyToken(req,res,next) {
    //retrieve a token from the browser
   const token=req.headers['authorization']
if(token){
    if(verify(token,process.env.SECRET_KEY)){
        next()
    
}else{
    res?.json({
        status:res.statusCode,
        msg:"please provide the correct credentials"
    })

}

}
}
export{
    createToken,verifyToken
}