import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise

const teaSchema = new Schema(
    {
        title: String,
        description: String,
        Type: String,
        available: Boolean,
        placement: Number
    }
);

const Tea = mongoose.models.Tea || mongoose.model("Tea", teaSchema)


export default Tea
