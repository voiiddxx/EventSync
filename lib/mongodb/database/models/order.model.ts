import { Schema, model, models , Document} from "mongoose";


export interface IOrder extends Document {
     createdAt:Date,
     stripeID:string,
     totalamount:string,
     event:{
        _id:string,
        title:string
     },
     buyer:{
        _id:string,
        firstname:string,
        lastname:string 
     }
}

export type IorderItem = {
    _id:string,
    totalamount:string,
    createdAt:Date,
    eventTitle:string,
    eventID:string,
    buyer:string,
}

const orderSchema = new Schema({
    createdAt:{
        type:Date,
        default:Date.now
    },
    stripeID:{
            type:String,
            required:true,
            unique:true
    },
    totalamount:{
        type:String
    },
    event:{
        type:Schema.Types.ObjectId , ref:'Event'
    },
    buyer:{
        type:Schema.Types.ObjectId , ref:'User',
    },
});

const Order = models.Order || model('Order' , orderSchema);

export default Order;
