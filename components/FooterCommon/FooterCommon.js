import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import footerCommonStyles from "./Footer.module.css";

const FooterCommon = ({ footerDetails }) => {
  const router = useRouter();
  console.log(footerDetails);
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
                    width="120px"
                    height="120px"
                    alt="logo"
                    className="img-fluid rounded-circle "
                  />
                )}
              </div>
              {/* {data?.description && <p>{data?.description}</p>} */}
              <h1 className="fs-6 fw-bold" style={{ color: "#fff" }}>
                {data.title}
              </h1>
              <ul className={`${footerCommonStyles.textContainer} ms-0 ps-0`}>
                {data?.lists?.map((itemData, index) => (
                  // <Link
                  //   href={{
                  //     pathname: "/features/[slug]",
                  //     query: { slug: itemData.item },
                  //   }}
                  //   key={index}
                  // >
                  <li
                    key={index}
                    className={`${footerCommonStyles.text}`}
                    style={{ listStyle: "none", cursor: "pointer" }}
                    onClick={() => {
                      router.push(itemData.url);
                      // router.push({
                      //   pathname: "/features",
                      //   query: { title: itemData.item },
                      // });
                    }}
                  >
                    {itemData.item}
                  </li>
                  // </Link>
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
