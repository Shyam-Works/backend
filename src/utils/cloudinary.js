// this file has function to upload file into cloud and config


import {v2 as cloudinary} from "cloudinary";
import fs from "fs" // file system default library.

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});


// here we will use this function with some variable value of image or video and upload them all into cloud from our local server.
const uploadOnCloudinary = async(localFilePath) =>{
    try{
        // if no file 
        if(!localFilePath){
            return null
        }
        // upload the file on cloudinary
        // syntax from documentation
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has uploaded successfully
        // console.log("file upload successfully!!!", response.url);
        fs.unlinkSync(localFilePath)
        return response;
        // console.log(response);
        
    }catch(error){
        fs.unlinkSync(localFilePath) // remove the locally saved file as the upload operation got fail
        return null;
    }
}

export {uploadOnCloudinary};