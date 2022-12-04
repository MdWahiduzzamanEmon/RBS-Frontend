import React from "react";
import { termsAndConditionsData } from "../../public/JSON/termsAndConditions/termsAndConditions";
import styles from "./TermsAndConditions.module.css";

export const getStaticProps = async () => {
  return {
    props: {
      termsData: termsAndConditionsData,
    },
  };
};

const TermsAndConditions = ({ termsData }) => {
  return (
    <section style={{ fontFamily: "Poppins" }}>
      <div className={`${styles.termsWrapper} container-xl`}>
        {/* terms */}
        <div>
          <h3 className="text-center mb-5" style={{ fontSize: "40px" }}>
            {termsData.terms.title}
          </h3>
          <p>{termsData.terms.text1}</p>
          <p>{termsData.terms.text2}</p>
          <p>{termsData.terms.text3}</p>
          <p>{termsData.terms.text4}</p>
        </div>
        {/* cookies */}
        <div>
          <h3>{termsData.cookies.title}</h3>
          <p>{termsData.cookies.text1}</p>
          <p>{termsData.cookies.text2}</p>
        </div>
        {/* license */}
        <div>
          <h3>{termsData.license.title}</h3>
          <p>{termsData.license.text1}</p>
          <p>{termsData.license.text2}</p>
          <ul>
            {termsData.license.listText1.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{termsData.license.text3}</p>
          <p>{termsData.license.text4}</p>
          <p>{termsData.license.text5}</p>
          <p>{termsData.license.text6}</p>
          <ul>
            {termsData.license.listText2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{termsData.license.text7}</p>
        </div>
        {/* hyperlinks */}
        <div>
          <h3>{termsData.hyperlinks.title}</h3>
          <p>{termsData.hyperlinks.text1}</p>
          <ul>
            {termsData.hyperlinks.listText1.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{termsData.hyperlinks.text2}</p>
          <p>{termsData.hyperlinks.text3}</p>
          <ul>
            {termsData.hyperlinks.listText2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{termsData.hyperlinks.text4}</p>
          <p>{termsData.hyperlinks.text5}</p>
          <p>{termsData.hyperlinks.text6}</p>
          <p>{termsData.hyperlinks.text7}</p>
          <ul>
            {termsData.hyperlinks.listText3.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{termsData.hyperlinks.text8}</p>
        </div>
        {/* iFrames */}
        <div>
          <h3>{termsData.iFrames.title}</h3>
          <p>{termsData.iFrames.text1}</p>
        </div>
        {/* content liability */}
        <div>
          <h3>{termsData.contentLiability.title}</h3>
          <p>{termsData.contentLiability.text1}</p>
        </div>
        {/* reservation of rights */}
        <div>
          <h3>{termsData.reservation.title}</h3>
          <p>{termsData.reservation.text1}</p>
        </div>
        {/* removal */}
        <div>
          <h3>{termsData.removal.title}</h3>
          <p>{termsData.removal.text1}</p>
          <p>{termsData.removal.text2}</p>
        </div>
        {/* disclaimer */}
        <div>
          <h3>{termsData.disclaimer.title}</h3>
          <p>{termsData.disclaimer.text1}</p>
          <ul>
            {termsData.disclaimer.listText.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{termsData.disclaimer.text2}</p>
          <p>{termsData.disclaimer.text3}</p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
