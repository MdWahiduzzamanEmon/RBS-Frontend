import NavBar from "../../../pages/Home/Navbar/NavBar";
import bannerCommon2 from "../../../public/BannerCommon.png";
import styles from "./contactBanner.module.css";

const ContactBanner = () => {
  return (
    <section
      style={{
        paddingTop: "70px",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${bannerCommon2.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // fontFamily: "Poppins",
        }}
      >
        <div className="text-white d-flex justify-content-center align-items-center py-5">
          <h1 className={`${styles.bannerText} `}>Contact Us</h1>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
