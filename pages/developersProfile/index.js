import Image from "next/image";
import React from "react";
import { developersData } from "../../public/JSON/developers/developersData";
import styles from "./DevelopersProfile.module.css";

const DeveloperProfile = () => {
  return (
    <section>
      <div className={`${styles.container} container-xl`}>
        <h3 className={`${styles.containerTitle}`}>Meet The Team</h3>
        <div className={`${styles.profileWrapper}`}>
          {developersData.teams.map((team) => (
            <div className={`${styles.card}`} key={team.id}>
              <div className={`${styles.blankWrapper}`}></div>
              <div className={`${styles.text}`}>
                <div className={`${styles.profileImageContainer}`}>
                  <Image
                    src={team.image}
                    alt="developer image"
                    layout="responsive"
                    objectFit="contain"
                    // objectPosition="left center"
                  ></Image>
                </div>
                <h3 className={`${styles.textTitle}`}>{team.name}</h3>
                <p>{team.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperProfile;
