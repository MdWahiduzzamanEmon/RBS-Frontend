import React from "react";
import styles from "./CircularMotion.module.css";

const CircularMotion = () => {
  return (
    <section className={`${styles.body}`}>
      <div className={`${styles.primaryCircle}`}>
        {/* round 1 */}
        <div>
          <div
            className={`${styles.pCircle1} d-flex align-items-center justify-content-center `}
          >
            Approachable
          </div>
          <div
            className={`${styles.pCircle2} d-flex align-items-center justify-content-center `}
          >
            Caring
          </div>
          <div
            className={`${styles.pCircle3} d-flex align-items-center justify-content-center `}
          >
            Transparent
          </div>
          <div
            className={`${styles.pCircle4} d-flex align-items-center justify-content-center `}
          >
            Leader
          </div>
        </div>
        {/* round 2 */}
        <div className={`${styles.secondaryCircle}`}>
          <div>
            <div
              className={`${styles.sCircle1} d-flex align-items-center justify-content-center `}
            >
              Passionate
            </div>
            <div
              className={`${styles.sCircle2} d-flex align-items-center justify-content-center `}
            >
              Motivating
            </div>
            <div
              className={`${styles.sCircle3} d-flex align-items-center justify-content-center `}
            >
              Authentic
            </div>
          </div>
          {/* round 3 */}
          <div className={`${styles.tertiaryCircle}`}>
            <div>
              <div
                className={`${styles.tCircle1} d-flex align-items-center justify-content-center `}
              >
                Coach
              </div>
              <div
                className={`${styles.tCircle2} d-flex align-items-center justify-content-center `}
              >
                Mentor
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularMotion;
