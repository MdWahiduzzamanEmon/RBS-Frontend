import React from "react";
import { useForm } from "react-hook-form";
import { contactUsDemo } from "../../public/JSON/contactus/contactus";
import WavesSvg from "../../svgComponents/wavesSvg";
import styles from "./ContactSupport.module.css";

export const getStaticProps = async () => {
  return {
    props: {
      contactSupportData: contactUsDemo,
    },
  };
};

const ContactSupport = ({ contactSupportData }) => {
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
          {contactSupportData?.contactSupport?.title}
        </h3>
        <p className={`${styles.textWrapperDescription}`}>
          {contactSupportData?.training?.description}
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
              {/* <div className={`${styles.formContentTop1}`}>
                <label>Company Name</label>
                <input
                  {...register("companyName")}
                  placeholder="Enter your company's name"
                />
              </div> */}
              <div className={`${styles.formContentTop2}`}>
                <label>Email</label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Enter your company's email"
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
                <label>How can we help you?</label>
                <select {...register("helpYou")}>
                  <option value="Need assistance with technical issue">
                    Need assistance with technical issue
                  </option>
                  <option value="Questions about data privacy">
                    Questions about data privacy
                  </option>
                  <option value="Require more information about the process">
                    Require more information about the process
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>
              {/* <div className={`${styles.formContentTop1}`}>
                <label>Company Name</label>
                <input {...register("companyName")} />
              </div>
              <div className={`${styles.formContentTop2}`}>
                <label>Email</label>
                <input type="email" {...register("email")} />
              </div> */}
              <div className={`${styles.formContentMiddle2}`}>
                <label>Tell us about you</label>
                <select {...register("teamSize")}>
                  <option value="1">{`I'm user 1`}</option>
                  <option value="2-5">{`I'm user 2`}</option>
                  <option value="5-10">{`I'm user 3`}</option>
                  <option value="10-50">{`I'm user 4`}</option>
                </select>
              </div>
            </div>
            <div className={`${styles.textArea}`}>
              <label>Description</label>
              <textarea
                {...register("help")}
                placeholder="Let us know some more details"
              />
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
