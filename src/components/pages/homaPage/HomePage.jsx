import scss from "./HomePage.module.scss";
import videoFile from "../../../assets/show.mp4";

const HomePage = () => {
  return (
    <div className={scss.HomePage}>
      <div className="container">
        <div className={scss.Content}>
          <video autoPlay loop muted className={scss.VideoBackground}>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
