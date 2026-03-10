import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (

    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">

      {/* Logo */}

      <h1 className="text-xl font-bold">
        Shaadi Biodata
      </h1>


      {/* Links */}

      <div className="flex gap-6 items-center">

        <Link
          to="/dashboard"
          className="hover:text-gray-300"
        >
          Dashboard
        </Link>

        <Link
          to="/create"
          className="hover:text-gray-300"
        >
          Create Biodata
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>

      </div>

    </nav>

  );
};