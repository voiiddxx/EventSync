import { Schema, model, models , Document } from "mongoose";


export interface ICategory extends Document {
    _id:string,
    name:string

}

const categorySchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
});

const Category = models.category || model('Category' , categorySchema);
export default Category;
