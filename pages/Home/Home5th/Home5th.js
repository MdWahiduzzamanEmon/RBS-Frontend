import Aos from "aos";
import React from "react";
import Iframe from "react-iframe";
import home5thStyles from "./Home5th.module.css";

const Home5th = ({ home5thData }) => {
  React.useEffect(() => {
    Aos.init({
      duration: 1400,
      easing: "ease-in-out-quart",
    });
  }, []);
  return (
    <div
      style={{
        // fontFamily: "open sans",
        display: home5thData?.isShow ? "block" : "none",
        // backgroundImage:
        //   "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",
        padding: "50px 0 130px",
      }}
      className=""
    >
      {home5thData?.titleData?.map((data, index) => (
        <div
          key={data?.id}
          style={{ display: data?.isShow ? "block" : "none" }}
          data-aos="fade-down"
        >
          <h1 className="text-center fs-2 fw-bold ">{data?.title}</h1>
          <p
            className={`${home5thStyles.headingDescription} fs-6  text-center mb-5 px-2`}
          >
            {data?.description}
          </p>
        </div>
      ))}
      {home5thData?.videos?.map((data, index) => (
        <div
          key={data?.id}
          style={{ display: data?.isShow ? "block" : "none" }}
          data-aos="fade-up"
        >
          <div className="d-flex d-items-center container">
            <Iframe
              url={data?.video}
              width="100%"
              height="450px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home5th;
