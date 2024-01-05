import { Schema, model, models , Document } from "mongoose";


export interface IEvent extends Document {
    _id:string,
    title:string,
    detail:string,
    location:string,
    createdat:Date,
    poster:string,
    startDate:Date,
    endDate:Date,
    price?:Date,
    isFree:boolean,
    url?:string,
    category:{_id:string , name:string},
    organizer:{_id:string , firstname:string , lastname:string}
}

const EventSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    detail:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    },
    poster:{
        type:String,
        required:true,
    },
    startDate:{
        type:Date,
        default:Date.now
    },
    endDate:{
        type:Date,
        default:Date.now
    },
    price:{
        type:String,
    },
    isFree:{
        type:Boolean,
        default:false,
    },
    url:{
        type:String,

    },
    category:{
        type:Schema.Types.ObjectId , ref:'Category',

    },
    organizer:{
        type:Schema.Types.ObjectId , ref:'User'
    }
});

const Event = models.Event || model("Event" , EventSchema);

export default Event;