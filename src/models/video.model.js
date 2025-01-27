import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema =  new mongoose.Schema(
    {
        videoFile:{
            type: String,
            required: true
        },
        thumbnail: {
            type: String, // clodinary
            required:true
        },
        title: {
            type: String, 
            required:true
        },
        description: {
            type: String, 
            required:true
        },
        duration: {
            type: Number,
            required:true
        },
        views: {
            type: Number, // clodinary
            default: true
        },
        isPublished: {
            type: Boolean,
            default: false
        },
        owner:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }   
    },
    {timestamps: true}
)
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)