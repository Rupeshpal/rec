import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";

const AutoLogout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      const token = Cookies.get("authToken");
      if (!token && location.pathname !== "/Login") {
        console.log("Token expired or removed, redirecting to login...");
        localStorage.removeItem("authtoken");
        localStorage.removeItem("email");
        navigate("/Login");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [navigate, location]);

  return null;
};

export default AutoLogout;
