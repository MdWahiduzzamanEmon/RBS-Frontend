import Link from "next/link";
import React from "react";
import { paymentTerms } from "../../public/JSON/paymentTerms/paymentTerms";
import styles from "./PaymentTerms.module.css";

export const getStaticProps = async () => {
  return {
    props: {
      paymentTermsData: paymentTerms,
    },
  };
};
const PaymentTerms = ({ paymentTermsData }) => {
  return (
    <section>
      <div className={`${styles.paymentTermsWrapper} container-xl`}>
        <div>
          <h3 className={`${styles.paymentTermsTitle}`}>
            {paymentTermsData.title}
          </h3>
          <p className={`${styles.paymentTermsAlert1}`}>
            {paymentTermsData.alert1}
          </p>
          <p>{paymentTermsData.alert2}</p>
          <p>{paymentTermsData.alert3}</p>
          <p>{paymentTermsData.text1}</p>
          <p>{paymentTermsData.text2}</p>
          <p>{paymentTermsData.text3}</p>
          <p>{paymentTermsData.text4}</p>
        </div>
        {/* subscription */}
        <div>
          <h3>{paymentTermsData.subscription.title}</h3>
          <p>{paymentTermsData.subscription.text1}</p>
          <p>{paymentTermsData.subscription.text2}</p>
          <p>{paymentTermsData.subscription.text3}</p>
          <p>{paymentTermsData.subscription.text4}</p>
        </div>
        {/* free trial */}
        <div>
          <h3>{paymentTermsData.freeTrial.title}</h3>
          <p>{paymentTermsData.freeTrial.text1}</p>
          <p>{paymentTermsData.freeTrial.text2}</p>
          <p>{paymentTermsData.freeTrial.text3}</p>
          <p>{paymentTermsData.freeTrial.text4}</p>
        </div>
        {/* fees */}
        <div>
          <h3>{paymentTermsData.fees.title}</h3>
          <p>{paymentTermsData.fees.text1}</p>
          <p>{paymentTermsData.fees.text2}</p>
          <p>{paymentTermsData.fees.text3}</p>
          <p>{paymentTermsData.fees.text4}</p>
        </div>

        {/* accounts */}
        <div>
          <h3>{paymentTermsData.accounts.title}</h3>
          <p>{paymentTermsData.accounts.text1}</p>
          <p>{paymentTermsData.accounts.text2}</p>
          <p>{paymentTermsData.accounts.text3}</p>
          <p>{paymentTermsData.accounts.text4}</p>
        </div>

        {/* copyright policy */}
        <div>
          <h3>{paymentTermsData.copyrightPolicy.title}</h3>
          <p>{paymentTermsData.copyrightPolicy.text1}</p>
          <p>{paymentTermsData.copyrightPolicy.text2}</p>
          <p>{paymentTermsData.copyrightPolicy.text3}</p>
        </div>

        {/* intellectual property */}
        <div>
          <h3>{paymentTermsData.intellectualProperty.title}</h3>
          <p>{paymentTermsData.intellectualProperty.text1}</p>
        </div>

        {/* links to other websites */}
        <div>
          <h3>{paymentTermsData.linksToOtherWebSites.title}</h3>
          <p>{paymentTermsData.linksToOtherWebSites.text1}</p>
          <p>{paymentTermsData.linksToOtherWebSites.text2}</p>
          <p>{paymentTermsData.linksToOtherWebSites.text3}</p>
        </div>

        {/* termination */}
        <div>
          <h3>{paymentTermsData.termination.title}</h3>
          <p>{paymentTermsData.termination.text1}</p>
          <h5>{paymentTermsData.termination.secondaryTitle1}</h5>
          <p>{paymentTermsData.termination.text2}</p>
          <h5>{paymentTermsData.termination.secondaryTitle2}</h5>
          <p>
            <span className={`${styles.tertiaryTitle}`}>
              {paymentTermsData.termination.tertiaryTitle1}
            </span>
            <span>{paymentTermsData.termination.tertiaryTitleText1}</span>
          </p>
          <p>
            <span className={`${styles.tertiaryTitle}`}>
              {paymentTermsData.termination.tertiaryTitle2}
            </span>
            <span>{paymentTermsData.termination.tertiaryTitleText2}</span>
          </p>
          <p>
            <span className={`${styles.tertiaryTitle}`}>
              {paymentTermsData.termination.tertiaryTitle3}
            </span>
            <span>{paymentTermsData.termination.tertiaryTitleText3}</span>
          </p>
        </div>

        {/* limitation of liability */}
        <div>
          <h3>{paymentTermsData.limitationOfLiability.title}</h3>
          <p>{paymentTermsData.limitationOfLiability.text1}</p>
        </div>

        {/* disclaimer */}
        <div>
          <h3>{paymentTermsData.disclaimer.title}</h3>
          <p>{paymentTermsData.disclaimer.text1}</p>
          <p>{paymentTermsData.disclaimer.text2}</p>
        </div>

        {/* governing law */}
        <div>
          <h3>{paymentTermsData.governingLaw.title}</h3>
          <p>{paymentTermsData.governingLaw.text1}</p>
          <p>{paymentTermsData.governingLaw.text2}</p>
        </div>

        {/* changes */}
        <div>
          <h3>{paymentTermsData.changes.title}</h3>
          <p>{paymentTermsData.changes.text1}</p>
          <p>{paymentTermsData.changes.text2}</p>
        </div>

        {/* contact us */}

        <div>
          <h3>{paymentTermsData.contactUs.title}</h3>
          <p>
            {paymentTermsData.contactUs.text1}
            <Link href="/contactUs">
              <span className={`${styles.highLightedLink}`}>
                {paymentTermsData.contactUs.highLightText}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentTerms;
