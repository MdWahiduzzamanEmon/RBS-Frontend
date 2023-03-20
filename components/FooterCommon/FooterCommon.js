import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import footerCommonStyles from "./Footer.module.css";

const FooterCommon = ({ footerDetails }) => {
  const router = useRouter();
  return (
    <>
      <div className={`${footerCommonStyles.footerCommon} px-3 pt-5`}>
        <div className=" container-lg">
          <div className="row">
            {footerDetails?.items?.map((data, index) => (
              <div key={index} className="col-12 col-md-3 col-lg-3">
                <div className="d-none d-sm-none d-md-flex d-lg-flex ">
                  {data?.logo && (
                    <Image
                      src={data?.logo}
                      width={120}
                      height={120}
                      alt="logo"
                      className="img-fluid rounded-circle "
                    />
                  )}
                </div>
                <h1 className="fs-6 fw-bold" style={{ color: "#fff" }}>
                  {data.title}
                </h1>
                <ul className={`${footerCommonStyles.textContainer} ms-0 ps-0`}>
                  {data.title === "Company" || data.title === "Resources" ? (
                    <>
                      {data?.lists?.map((itemData, index) => (
                        <li
                          key={index}
                          className={`${footerCommonStyles.text}`}
                          style={{ listStyle: "none", cursor: "pointer" }}
                          onClick={() => {
                            router.push(itemData?.url);
                          }}
                        >
                          {itemData.item}
                        </li>
                      ))}
                    </>
                  ) : (
                    <>
                      {data?.lists?.map((itemData, index) => (
                        <li
                          key={index}
                          className={`${footerCommonStyles.text}`}
                          style={{ listStyle: "none", cursor: "pointer" }}
                          onClick={() => {
                            router.push("/allFeatures/" + itemData?.name);
                          }}
                        >
                          {itemData.item}
                        </li>
                        // </Link>
                      ))}
                    </>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${footerCommonStyles.footerBottom} text-center w-100`}>
        <p>
          Copyright &copy; {new Date().getFullYear()} Vitlous, All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default FooterCommon;
