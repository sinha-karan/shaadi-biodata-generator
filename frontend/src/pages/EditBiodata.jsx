import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BiodataForm } from "../components/forms/BiodataForm";

export const EditBiodata = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem("token");

    axios.get(`http://localhost:3000/api/biodata/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setData(res.data.biodata);
    })
    .catch(err => {
      console.error("Error loading biodata", err);
    });

  }, [id]);


  const handleUpdate = async (updatedData) => {

    try {

      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:3000/api/biodata/${id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );


    } catch (error) {

      console.error("Update failed", error);

    }

  };


  if (!data) {

    return <div className="p-10">Loading...</div>;

  }


  return (

    <div className="max-w-3xl mx-auto p-10 space-y-8">

      <h1 className="text-3xl font-bold text-center">
        Edit Biodata
      </h1>

      <BiodataForm
        initialData={data}
        onSubmit={handleUpdate}
      />

    </div>

  );

};