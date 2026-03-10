import { useDropzone } from "react-dropzone";
import axios from "axios";

export const ImageUploader = ({ setImage }) => {

  const uploadImage = async (file) => {

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "biodata_upload");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dcqetjnbi/image/upload",
      formData
    );

    setImage(res.data.secure_url);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      uploadImage(acceptedFiles[0]);
    }
  });

  return (

    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-400 p-6 text-center cursor-pointer"
    >

      <input {...getInputProps()} />

      <p>Drag & drop photo here or click to upload</p>

    </div>

  );
};