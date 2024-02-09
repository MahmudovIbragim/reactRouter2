import { useState } from "react";
import scss from "./ProfilePage.module.scss";
import axios from "axios";
import { useEffect } from "react";

const link = import.meta.env.VITE_BACKEND_URL;

const ProfilePage = () => {
  const [data, setData] = useState([]);

  const getFunc = async () => {
    try {
      const response = await axios.get(link);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFunc();
  }, []);

  const deleteUsersDate = async (id) => {
    const response = await axios.delete(`${link}/${id}`);
    setData(response.data);
  };

  return (
    <div className={scss.ProfilePage}>
      <div className="container">
        <div className={scss.Content}>
          {data.map((item, index) => (
            <div className={scss.box} key={index}>
              <h1>User</h1>
              <h2> Login:{item.name}</h2>
              <h3> Password: {item.password}</h3>
              <button onClick={() => deleteUsersDate(item._id)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
