import { CldUploadButton } from 'next-cloudinary';
 
<CldUploadButton
  className={styles.button}
  onUpload={(error, result, widget) => {
    console.log(result.info.secure_url);  // { public_id, secure_url, etc }
    widget.close();
  }}
  signatureEndpoint="cloudinary://131918122653961:fVNqZBOdeSsFJaGCJl2S3-Vw39o@dyub3k0fr"
  uploadPreset="ieeehack-signed"
>
  Upload to Cloudinary
</CldUploadButton>