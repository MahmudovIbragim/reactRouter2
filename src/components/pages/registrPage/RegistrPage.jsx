import { useState } from "react";
import axios from "axios";
import scss from "./RegistrPage.module.scss";
import { useNavigate } from "react-router-dom";

const link = import.meta.env.VITE_BACKEND_URL;
const RegistrPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAddedUsers = async () => {
    const newData = {
      name: name,
      password: password,
    };
    postFunc(newData);
    setName("");
    setPassword("");
  };

  const postFunc = async (newData) => {
    try {
      const response = await axios.post(link, newData);
      const responseData = await response.data;
      console.log(responseData);
      navigate("/login");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={scss.RegistrPage}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.formInputs}>
            <h1>Register</h1>
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
              <button onClick={handleAddedUsers}>Зарегистрироваться</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrPage;
