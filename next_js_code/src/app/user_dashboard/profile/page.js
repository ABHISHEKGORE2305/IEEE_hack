"use client"
import { adddetails } from "@/components/ui/details";
import { uploadpic } from "@/components/ui/upload";
import { CldUploadWidget } from "next-cloudinary";

const page = ()=>{
    return (
        <div>
        <div>Edit Profile</div>
        <CldUploadWidget uploadPreset="ieeehacka" onSuccess={(result, {widget})=>{
            uploadpic(result.info.secure_url)
        }}>
            {
                ({open})=>{
                    return <button onClick={()=>open()}>Upload</button>
                }
            }
        </CldUploadWidget>
        <form action={adddetails}>
            <h1>Address:</h1>
            <input type="text" name="address"></input>
            <h1>DoB:</h1>
            <input type="date" name="dob"></input>
            <h1>Address:</h1>
            <input type="tel" name="phone"></input>
            <input type="submit" value="Confirm"></input>
        </form>
        </div>
    )
}

export default page;