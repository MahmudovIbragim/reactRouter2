import scss from "./LoginPage.module.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const link = import.meta.env.VITE_BACKEND_URL;

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getFunc = async () => {
    try {
      const response = await axios.get(link);
      const responseData = response.data;
      const finedData = responseData.find(
        (item) => item.name === name && item.password === password
      );
      if (finedData) {
        localStorage.setItem("isAuth", finedData._id);
        navigate("/profile");
      } else {
        alert("Не правильно");
      }
      setName("");
      setPassword("");
    } catch (e) {
      console.error(e);
    }
  };

  const navigatePage = () => {
    navigate("/registration");
  };

  return (
    <div className={scss.LoginPage}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.formInputs}>
            <h1>Login</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />

            <div className={scss.formButtons}>
              <button onClick={getFunc}>Войти</button>
              <button onClick={navigatePage}>Регистрация</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
