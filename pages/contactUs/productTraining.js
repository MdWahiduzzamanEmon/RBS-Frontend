import React from "react";
import styles from "./contactSales.module.css";
import WavesSvg from "../../svgComponents/wavesSvg";
import { contactUsDemo } from "../../public/JSON/contactus/contactus";
import { useForm } from "react-hook-form";

export const getStaticProps = async () => {
  return {
    props: {
      contactUsData: contactUsDemo,
    },
  };
};

const ProductTraining = ({ contactUsData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <section style={{ paddingTop: "70px" }} className={`${styles.wrapper}`}>
      <div className={`${styles.svgWrapper}`}>
        <WavesSvg />
      </div>
      <div className={`${styles.textWrapper}`}>
        <h3 className={`${styles.textWrapperTitle}`}>
          {contactUsData?.training?.title}
        </h3>
        <p className={`${styles.textWrapperDescription}`}>
          {contactUsData?.training?.description}
        </p>
      </div>
      <div className={`${styles.contactWrapper}  container-xl`}>
        <div className={`${styles.formWrapper}`}>
          <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
            <div className={`${styles.formContentsTop}`}>
              <div className={`${styles.formContentTop1}`}>
                <label>Full Name</label>
                <input
                  {...register("fullName")}
                  placeholder="Please enter your full name"
                />
              </div>
              <div className={`${styles.formContentTop1}`}>
                <label>Company Name</label>
                <input
                  {...register("companyName")}
                  placeholder="Enter your company's name"
                />
              </div>
              <div className={`${styles.formContentTop2}`}>
                <label>Email</label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Enter your company's email"
                />
              </div>
              {/* <div className={`${styles.formContentTop3}`}>
                <label>Phone Number</label>
                <input {...register("phoneNumber")} />
              </div> */}
            </div>
            <div className={`${styles.formContentsMiddle}`}>
              {/* <div className={`${styles.formContentMiddle1}`}>
                <label>Job Title</label>
                <select {...register("jobTitle")}>
                  <option value="CEO">CEO</option>
                  <option value="projectManager">Project Manager</option>
                  <option value="student">Student</option>
                  <option value="other">Other</option>
                </select>
              </div> */}
              {/* <div className={`${styles.formContentTop1}`}>
                <label>Company Name</label>
                <input {...register("companyName")} />
              </div>
              <div className={`${styles.formContentTop2}`}>
                <label>Email</label>
                <input type="email" {...register("email")} />
              </div> */}
              <div className={`${styles.formContentMiddle2}`}>
                <label>Team Size</label>
                <select {...register("teamSize")}>
                  <option value="1">Solo</option>
                  <option value="2-5">2-5</option>
                  <option value="5-10">5-10</option>
                  <option value="10-50">10-50</option>
                </select>
              </div>
            </div>
            <div className={`${styles.textArea}`}>
              <label>Do you have comment? (Optional)</label>
              <textarea {...register("help")} />
            </div>
            <div className={`${styles.checkboxWrapper}`}>
              <input type="checkbox" />
              <label>
                I have read and agree to Vitlous Terms of service and Privacy
                policy.
              </label>
            </div>
            <div className={`${styles.requestWrapper}`}>
              <button type="submit" className={`${styles.request}`}>
                Request Training
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductTraining;
