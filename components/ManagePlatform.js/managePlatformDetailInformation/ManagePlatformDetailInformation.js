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
          <p className="">{platformInformation?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ManagePlatformDetailInformation;
