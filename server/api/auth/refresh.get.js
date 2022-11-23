import { sendError } from "h3"
import { getRefreshTokenByToken } from "~~/server/db/refreshTokens.js"
import { getUserById } from "~~/server/db/users"
import { decodeRefreshToken, generateTokens } from "~~/server/utils/jwt"
import {getUserById} from "../../db/users.js"
export default defineEventHandler(async(event)=>{
    const cookies = cookies(event)
    const refreshToken = cookies.refresh_token
    if(!refreshToken){
        return sendError(event,createError({
            statusCode:401,
            statusMessage:'Refresh Token is Invalid'
        }))
    }
    const rToken = await getRefreshTokenByToken(refreshToken)
    if(!refreshToken){
        return sendError(event,createError({
            statusCode:401,
            statusMessage:'Refresh Token is Invalid'
        }))
    }
    const token = decodeRefreshToken(refreshToken)
    try{
        const user= await getUserById(token,userId)
        const {accessToken} = generateAccessTokens(user)
        return {
            user
        }
    }catch(error){
        return sendError(event,createError({
            statusCode:500,
            statusMessage:'Somewthing went Wrong'
        }))
    }
    return{
        hello:rToken
    }
})