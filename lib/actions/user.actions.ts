'use server'

import { createUserParams, updateUserparams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../mongodb/database"
import User from "../mongodb/database/models/user.model"

export const createuser =  async(user : createUserParams)=>{
    try {
        await connectToDatabase();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));

    } catch (error) {
        handleError(error);
    }
}

// UPDATE USER ACTION

export const UpdateUser = async( clerkID:String, user: updateUserparams)=>{
    try {
        await connectToDatabase();
        const updateuser = await User.findOneAndUpdate({clerkID} , user , {new:true});
        if(!updateuser){
            throw new Error('user updation failed');
        }
        return JSON.parse(JSON.stringify(updateuser));
    } catch (error) {
        handleError(error);
    }
}