import { Navigate, useLocation } from "react-router";
import { useNote } from "../Contexts/NoteContext";

const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useNote();
  const location = useLocation();

  const token = localStorage.getItem("Token");

  return token ? children :

    <Navigate to="/login" state={{ from: location }} replace />

};

export default RequireAuth;