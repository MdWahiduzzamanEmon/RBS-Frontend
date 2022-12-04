import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { contactUsDemo } from "../../public/JSON/contactus/contactus";
import image1 from "../../public/policyImage.png";
import image2 from "../../public/smoke.png";
import WavesSvg from "../../svgComponents/wavesSvg";
import styles from "./contactUsDynamic.module.css";

export const getStaticProps = async () => {
  return {
    props: {
      contactUsData: contactUsDemo,
    },
  };
};

const ContactSales = ({ contactUsData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <section style={{ paddingTop: "70px" }}>
        <div className={`${styles.svgWrapper}`}>
          <WavesSvg />
        </div>
        <div className={`${styles.textWrapper}`}>
          <h3 className={`${styles.textWrapperTitle}`}>
            {contactUsData?.contactSales?.title}
          </h3>
          <p className={`${styles.textWrapperDescription}`}>
            {contactUsData?.contactSales?.description}
          </p>
        </div>
        <div className={`${styles.contactWrapper}  container-xl`}>
          <div className={`${styles.formWrapper}`}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`${styles.form}`}
            >
              <div className={`${styles.formContentsTop}`}>
                <div className={`${styles.formContentTop1}`}>
                  <label>Full Name</label>
                  <input
                    {...register("fullName")}
                    placeholder="Please enter your name"
                  />
                </div>
                <div className={`${styles.formContentTop2}`}>
                  <label>Business email</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter your business email"
                  />
                </div>
                <div className={`${styles.formContentTop3}`}>
                  <label>Phone Number</label>
                  <input
                    {...register("phoneNumber")}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className={`${styles.formContentsMiddle}`}>
                <div className={`${styles.formContentMiddle1}`}>
                  <label>Job Title</label>
                  <select {...register("jobTitle")}>
                    <option value="CEO">CEO</option>
                    <option value="projectManager">Project Manager</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>
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
                <label>How can our team help you?</label>
                <textarea
                  {...register("help")}
                  placeholder="Write your comment here"
                />
              </div>
              <div className={`${styles.checkboxWrapper}`}>
                <input type="checkbox" />
                <label>
                  I have read and agree to Vitlous Terms of service and Privacy
                  policy.
                </label>
              </div>
              <div className={`${styles.submitWrapper}`}>
                <input type="submit" className={`${styles.submit}`} />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSales;
