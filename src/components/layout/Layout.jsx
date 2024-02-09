import { Routes, Route } from "react-router-dom";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import HomePage from "../pages/homaPage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import RegistrPage from "../pages/registrPage/RegistrPage";
import ProfilePage from "../pages/profilPage/ProfilePage";

const Layout = () => {
  return (
    <div className={scss.Layout}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
