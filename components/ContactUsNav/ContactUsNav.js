import Link from "next/link";
import React from "react";
import { closeNavbar } from "../../reducers/navbarReducer/actions";
import ContactSalesSvg from "../../svgComponents/ContactSalesSvg";
import ContactSupportSvg from "../../svgComponents/ContactSupportSvg";
import TrainingSvg from "../../svgComponents/TrainingSvg";
import styles from "./ContactUsNav.module.css";

const ContactUsNav = ({ navLinks, dispatch }) => {
  return (
    <div className={`${styles.contactContainer} container-xl`}>
      {navLinks.map((navLink) => (
        <div key={navLink.id}>
          {navLink.text === "Contact us" && (
            <div className={`${styles.contactMenuItemsContainer}`}>
              {navLink.items.map((item) => (
                <Link key={item.id} href={`/contactUs/${item.pageName}`}>
                  <div
                    className={`${styles.innerContainerLeft}`}
                    onClick={() => {
                      dispatch(closeNavbar());
                      dispatch({
                        type: "MOBILE_NAVBAR_OPEN",
                        payload: {
                          mobileNavbarOpen: false,
                        },
                      });
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <div>
                        {item.title === "Contact support" && (
                          <ContactSupportSvg
                            height="32px"
                            width="32px"
                            fill="#173465"
                          />
                        )}
                        {item.title === "Contact sales" && (
                          <ContactSalesSvg
                            height="32px"
                            width="32px"
                            fill="#173465"
                            // stroke="green"
                          />
                        )}
                        {item.title === "Request training" && (
                          <TrainingSvg
                            height="32px"
                            width="32px"
                            fill="#173465"
                            // stroke="green"
                          />
                        )}
                      </div>
                      {/* {showLinkIcon && linkId === item.id && (
                          <div className={`${styles.link}`}>
                            <ExternalLinkSvg width="12px" height="12px" />
                          </div>
                        )} */}
                    </div>

                    <h4 className={`${styles.menuItemHeading}`}>
                      {item.title}
                    </h4>
                    <p className={`${styles.menuItemDescription}`}>
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactUsNav;
