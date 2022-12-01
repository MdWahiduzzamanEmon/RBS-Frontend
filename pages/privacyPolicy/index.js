import React from "react";
import { privacyPolicy } from "../../public/JSON/privacyPolicy/privacyPolicy";
import styles from "./PrivacyPolicy.module.css";

export const getStaticProps = async () => {
  return {
    props: {
      privacyPolicyData: privacyPolicy,
    },
  };
};

const PrivacyPolicy = ({ privacyPolicyData }) => {
  return (
    <section>
      <div className={`${styles.policyWrapper} container-xl`}>
        {/* policy */}
        <div>
          <h3 className="text-center mb-5" style={{ fontSize: "40px" }}>
            {privacyPolicyData.policies.title}
          </h3>
          <p>{privacyPolicyData.policies.text1}</p>
          <p>{privacyPolicyData.policies.text2}</p>
          <p>{privacyPolicyData.policies.text3}</p>
        </div>
        {/* consent */}
        <div>
          <h3>{privacyPolicyData.consent.title}</h3>
          <p>{privacyPolicyData.consent.text1}</p>
        </div>
        {/* information */}
        <div>
          <h3>{privacyPolicyData.information.title}</h3>
          <p>{privacyPolicyData.information.text1}</p>
          <p>{privacyPolicyData.information.text2}</p>
          <p>{privacyPolicyData.information.text3}</p>
        </div>
        {/* use Information */}
        <div>
          <h3>{privacyPolicyData.useInformation.title}</h3>
          <p>{privacyPolicyData.useInformation.text1}</p>
          <ul>
            {privacyPolicyData.useInformation.listText1.map((item, index) => (
              <li key={item.id}>{item}</li>
            ))}
          </ul>
        </div>
        {/* log files */}
        <div>
          <h3>{privacyPolicyData.logFiles.title}</h3>
          <p>{privacyPolicyData.logFiles.text1}</p>
        </div>
        {/* cookies and web beacons */}
        <div>
          <h3>{privacyPolicyData.cookiesAndWebBeacons.title}</h3>
          <p>{privacyPolicyData.cookiesAndWebBeacons.text1}</p>
        </div>
        {/* cookies double click dart */}
        <div>
          <h3>{privacyPolicyData.googleDoubleClickDartCookie.title}</h3>
          <p>{privacyPolicyData.googleDoubleClickDartCookie.text1}</p>
        </div>
        {/* google ad sense */}
        <div>
          <h3>{privacyPolicyData.ourAdvertisingPartner.title}</h3>
          <p>{privacyPolicyData.ourAdvertisingPartner.text1}</p>
          <ul>
            {privacyPolicyData.ourAdvertisingPartner.listText1.map(
              (item, index) => (
                <li key={item.id}>{item}</li>
              )
            )}
          </ul>
          <p className={`${styles.policyWrapperParagraph} `}>
            {privacyPolicyData.ourAdvertisingPartner.text2}
          </p>
          <p>{privacyPolicyData.ourAdvertisingPartner.text3}</p>
          <p>{privacyPolicyData.ourAdvertisingPartner.text4}</p>
          <p>{privacyPolicyData.ourAdvertisingPartner.text5}</p>
        </div>
        {/* Third Party Privacy Policies */}
        <div>
          <h3>{privacyPolicyData.thirdPartyPrivacyPolicies.title}</h3>
          <p>{privacyPolicyData.thirdPartyPrivacyPolicies.text1}</p>
          <p>{privacyPolicyData.thirdPartyPrivacyPolicies.text2}</p>
        </div>
        {/* CCPA Privacy Rights */}
        <div>
          <h3>{privacyPolicyData.cCpaPrivacyRights.title}</h3>
          <p>{privacyPolicyData.cCpaPrivacyRights.text1}</p>
          <p>{privacyPolicyData.cCpaPrivacyRights.text2}</p>
          <p>{privacyPolicyData.cCpaPrivacyRights.text3}</p>
          <p>{privacyPolicyData.cCpaPrivacyRights.text4}</p>
          <p>{privacyPolicyData.cCpaPrivacyRights.text5}</p>
        </div>
        {/* GDPR */}
        <div>
          <h3>{privacyPolicyData.gdprDataProtectionRights.title}</h3>
          <p>{privacyPolicyData.gdprDataProtectionRights.text1}</p>
          <p>{privacyPolicyData.gdprDataProtectionRights.text2}</p>
          <p>{privacyPolicyData.gdprDataProtectionRights.text3}</p>
          <p>{privacyPolicyData.gdprDataProtectionRights.text4}</p>
          <p>{privacyPolicyData.gdprDataProtectionRights.text5}</p>
          <p>{privacyPolicyData.gdprDataProtectionRights.text6}</p>
          <p>{privacyPolicyData.gdprDataProtectionRights.text7}</p>
          <p>{privacyPolicyData.gdprDataProtectionRights.text8}</p>
        </div>
        {/* children information */}
        <div>
          <h3>{privacyPolicyData.childrenInformation.title}</h3>
          <p>{privacyPolicyData.childrenInformation.text1}</p>
          <p>{privacyPolicyData.childrenInformation.text2}</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
