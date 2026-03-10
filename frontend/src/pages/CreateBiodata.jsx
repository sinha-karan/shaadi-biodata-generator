import { useNavigate } from "react-router-dom";
import { createBiodata } from "../services/biodataApi";
import { BiodataForm } from "../components/forms/BiodataForm"; 
export const CreateBiodata = () => {

  const navigate = useNavigate();

  const handleCreate = async (data) => {

    try {

      const res = await createBiodata(data);

      const id = res.data.Biodata._id;

      navigate(`/preview/${id}`);

    } catch (error) {

      console.error("Create biodata failed", error);

    }

  };

  return (

    <div className="max-w-3xl mx-auto p-10 space-y-8">

      <h1 className="text-3xl font-bold text-center">
        Create Biodata
      </h1>

      <BiodataForm onSubmit={handleCreate} />

    </div>

  );

};