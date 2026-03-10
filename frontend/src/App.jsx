import { Routes, Route, useLocation } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { PreviewPage } from "./components/preview/PreviewPage";
import { EditBiodata } from "./pages/EditBiodata";
import { CreateBiodata } from "./pages/CreateBiodata";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute"; 
import { Navbar } from "./components/Navbar";

function App() {

  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
    {!hideNavbar && <Navbar />}

    <Routes>

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />


      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/create"
        element={
          <ProtectedRoute>
            <CreateBiodata />
          </ProtectedRoute>
        }
      />

      <Route
        path="/preview/:id"
        element={
          <ProtectedRoute>
            <PreviewPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit/:id"
        element={
          <ProtectedRoute>
            <EditBiodata />
          </ProtectedRoute>
        }
      />

    </Routes>

    </>

  );

}

export default App;