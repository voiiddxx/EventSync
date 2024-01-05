import { Schema, model, models } from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new Schema({
        clerkId:{
            type:String,
            required:true,
            unique:true, 
        },
        email:{
            type:String,
            required:true,
            unique:true, 
        },
        firstname:{
            type:String,
            required:true,
            unique:true, 
        },
        lastname:{
            type:String,
            required:true,
            unique:true, 
        },
        avatar:{
            type:String,
            required:true,
        },
});

const User = models.User || model("User" , UserSchema);

export default User;