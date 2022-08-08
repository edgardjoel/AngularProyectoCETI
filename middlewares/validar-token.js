const { response } = require("express");
const jwt = require("jsonwebtoken");

const validarJWT = (req,res=response,next)=>{
  
  // const token = req.header('x-token');
  const {token } = req.body;

  console.log('El token esta '+token)

  if(!token){

    return res.status(401).json({
      ok:false,
      msg:"Error en el token"
    })
  }

  try {


    const {uid}=jwt.verify(token,process.env.SECRET_JWT_SEED)
    


  } catch (error) {
    console.log('ERRORRR')
    console.log(error)
    return res.status(401).json({
      ok:false,
      msg:'Token no válido!!!'
    })
  }
  

  //TODO OK!
  next();
}


module.exports={
  validarJWT
}