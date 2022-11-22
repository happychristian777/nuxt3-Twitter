import { getUserByUsername } from "~~/server/db/users"
import bcrypt from "bcrypt"
import {generateTokens, sendRefreshToken} from "../../utils/jwt.js"
import { userTransformer } from "~~/server/transformers/user.js"
import { createRefreshToken } from "~~/server/db/refreshTokens.js"
export default defineEventHandler(async(event)=>{
    const body = await readBody(event)
    const {username, password}=body
    if(!username || !password){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage:'Invalid Params'
        }))
    }
    //Is the user registered
    const user=await getUserByUsername(username)
    if(!user){
        return sendError(event, createError({
        statusCode: 400,
        statusMessage:'Invalid Params'
    }))

    }
    //compare passwords
    const doesThePasswordMatch = await bcrypt.compare(password, user.password)
    if(!doesThePasswordMatch){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage:'Invalid Password'
        }))
    }
    //Generate Tokens
    //Access Tokens
    //Refresh Tokens
    const {accessToken, refreshToken}=generateTokens(user)



    //Save it inside db
    await createRefreshToken({
        token:refreshToken,
        userId:user.id
    })
    //Add http only cookie
    sendRefreshToken(event, refreshToken)

    return{
        access_token:accessToken, user:userTransformer(user)
    }
})
export const sendRefreshToken= (event)