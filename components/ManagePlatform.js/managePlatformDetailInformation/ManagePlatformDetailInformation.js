import Image from "next/image";
import React from "react";
import styles from "./ManagePlatformDetailInformation.module.css";

const ManagePlatformDetailInformation = ({ platformInformation }) => {
  return (
    <section>
      <div className={`${styles.container}`}>
        <div className={`${styles.imageContainer}`}>
          <Image
            src={platformInformation.image}
            alt="image"
            width={500}
            height={300}
            layout="responsive"
            objectFit="cover"
          ></Image>
        </div>
        <div className={`${styles.dataContainer}`}>
          {/* <p>{platformInformation?.description?.}</p> */}
          <p className={`${styles.description}`}>
            {platformInformation?.description?.title}
          </p>

          {platformInformation?.description?.items?.map((item, index) => (
            <p key={item.id} className="ps-5">
              - {item.title}
            </p>
          ))}
          {/* <p className={`${styles.secondaryDescription}`}>
            {platformInformation?.secondaryDescription?.title}
          </p>
          {platformInformation?.secondaryDescription?.items?.map(
            (item, index) => (
              <p
                key={item.id}
                className="ps-5"
                // style={{
                //   overflowWrap: "break-word",
                //   wordWrap: "break-word",
                //   wordBreak: "break-word",
                // }}
              >
                - {item.title}
              </p>
            )
          )} */}
        </div>
      </div>
    </section>
  );
};

export default ManagePlatformDetailInformation;
