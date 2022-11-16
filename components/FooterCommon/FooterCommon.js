import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerCommonStyles from "./Footer.module.css";

const FooterCommon = ({ footerDetails }) => {
  return (
    <>
      <div className={`${footerCommonStyles.footerCommon} px-3 pt-5`}>
        <div className="row">
          {footerDetails?.items?.map((data, index) => (
            <div key={index} className="col-12 col-md-3 col-lg-3">
              <div className="d-none d-sm-flex d-md-flex d-lg-flex justify-content-center">
                {data?.logo && (
                  <Image
                    src={data?.logo}
                    width="100px"
                    height="100px"
                    alt="logo"
                    className="img-fluid rounded-circle "
                  />
                )}
              </div>
              {/* {data?.description && <p>{data?.description}</p>} */}
              <h1 className="fs-6 fw-bold">{data.title}</h1>
              <ul className="ms-0 ps-0 fs-6">
                {data?.lists?.map((itemData, index) => (
                  <Link href={itemData?.url} key={index}>
                    <li
                      className={`${footerCommonStyles.text}`}
                      style={{ listStyle: "none", cursor: "pointer" }}
                    >
                      {itemData.item}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
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
