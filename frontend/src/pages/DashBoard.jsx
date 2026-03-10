import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

export const Dashboard = () => {

  const [biodataList, setBiodataList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");

    axios.get("http://localhost:3000/api/biodata", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setBiodataList(res.data.biodata);
    })
    .catch(err => {
      console.error("Error fetching biodata", err);
    });

  }, []);

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  const handleDelete = (id) => {

    const token = localStorage.getItem("token");

    axios.delete(`http://localhost:3000/api/biodata/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(() => {
      setBiodataList(prev => prev.filter(item => item._id !== id));
    })
    .catch(err => {
      console.error("Delete failed", err);
    });
  };

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          My Biodata
        </h1>

        <button
          onClick={() => navigate("/create")}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Create Biodata
        </button>

      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {biodataList.map((item) => (

          <div
            key={item._id}
            className="bg-white shadow-md rounded-lg p-6"
          >

            <h2 className="text-xl font-semibold mb-2">
              {item.personalInfo?.name}
            </h2>

            <p className="text-gray-600 mb-4">
              Template: {item.templateId}
            </p>

            <div className="flex gap-2">

              <button
                onClick={() => navigate(`/preview/${item._id}`)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Preview
              </button>

              <button
                onClick={() => navigate(`/edit/${item._id}`)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>

              <button
                onClick={logout}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Logout
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};