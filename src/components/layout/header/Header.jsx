import { useNavigate } from "react-router-dom";
import scss from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const link = import.meta.env.VITE_BACKEND_URL;

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [usersData, setUsersData] = useState([]);

  const userId = localStorage.getItem("isAuth");

  const getFunc = async () => {
    const response = await axios.get(link);
    const responseData = await response.data;

    if (userId) {
      const findUser = responseData.find((item) => item._id === +userId);
      setUsersData(findUser);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    getFunc();
  }, [pathname]);

  const deleteLocal = () => {
    localStorage.removeItem("isAuth", "1");
    setUsersData({});
    navigate("/login");
  };

  const dateUsers = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Profile",
      href: "/profile",
    },
  ];
  console.log(usersData);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.Content}>
          <nav>
            <ul>
              {dateUsers.map((item) => (
                <li key={item.name}>
                  <Link to={item.href}>{item.name}</Link>
                </li>
              ))}
              <li className={scss.box}>
                {userId ? (
                  <div className={scss.card}>
                    <h1>Logged in: {usersData?.name}</h1>
                    <button onClick={deleteLocal}>выход</button>
                  </div>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/registration">registration</Link>
                  </>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
