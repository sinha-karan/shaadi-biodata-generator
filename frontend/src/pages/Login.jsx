import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authApi";

export const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await loginUser(formData);

      localStorage.setItem("token", res.data.token);

      navigate("/");

    } catch (error) {

      console.error("Login failed", error);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80 space-y-4"
      >

        <h2 className="text-2xl font-bold text-center">
          Login
        </h2>

        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <button
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Login
        </button>

      </form>

    </div>

  );
};