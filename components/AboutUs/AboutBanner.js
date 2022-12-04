import NavBar from "../../pages/Home/Navbar/NavBar";
import bannerCommon from "../../public/BannerCommon.png";
import styles from "./AboutBanner.module.css";

const AboutBanner = () => {
  return (
    <section
      style={{
        paddingTop: "70px",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${bannerCommon.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" d-flex justify-content-center align-items-center text-white text-center py-5 ">
          <h1 className={`${styles.bannerText}`}>About us</h1>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
