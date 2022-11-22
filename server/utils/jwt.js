import jwt from "jsonwebtoken"
const generateAccessTokens=(user)=>{
    const config=useRuntimeConfig()
    return jwt.sign({userId:user.id},config.jwtAccessSecret,{
        expiresIn:'10m'
    })
}
const generateRefreshTokens=(user)=>{
    const config=useRuntimeConfig()
    return jwt.sign({userId:user.id},config.jwtRefreshSecret,{
        expiresIn:'4h'
    })

}
const generateToken=(user)=>{

}
export const generateTokens = (user) =>{
    const accessToken=generateAccessTokens(user)
    const refreshToken=generateRefreshTokens(user)
    // const accessToken=generateAccessTokens(user)


    return {
        accessToken,
        refreshToken
    }
}
export const sendRefreshToken = (event, token) => {
    setCookie(event, "refresh_token", token,{
        httpOnly: true,
        sameSite: true
    })
}