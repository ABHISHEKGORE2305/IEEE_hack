"use client"

import { uploadpic } from "@/components/ui/upload";
import { CldUploadWidget } from "next-cloudinary";

const page = ()=>{
    return (
        <div>
        <div>Upload profile pic</div>
        <CldUploadWidget uploadPreset="ieeehacka" onSuccess={(result, {widget})=>{
            uploadpic(result.info.secure_url)
        }}>
            {
                ({open})=>{
                    return <button onClick={()=>open()}>Upload</button>
                }
            }
        </CldUploadWidget>
        </div>
    )
}

export default page;