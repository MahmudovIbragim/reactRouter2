import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PrivatRoute = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const login = localStorage.getItem("isAuth");
  const loginBoolean = !!login;

  useEffect(() => {
    if (pathname === "/login" || pathname === "/registration") {
      if (loginBoolean) {
        navigate("/userPage");
      }
    } else if (pathname === "/userPage") {
      if (!loginBoolean) {
        navigate("/login");
      }
    }
  }, [pathname, loginBoolean]);

  return children;
};

export default PrivatRoute;
