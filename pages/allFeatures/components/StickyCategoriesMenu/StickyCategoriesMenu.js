import Link from "next/link";
import React from "react";
import styles from "./StickyCategoriesMenu.module.css";

const StickyCategoriesMenu = () => {
  return (
    <section>
      <div style={{ marginTop: "170px", paddingBottom: "50px" }}></div>
      <div className={`${styles.stickyMenus}`}>
        <ul className={`${styles.stickyMenusList}`}>
          <Link href="/allFeatures/#Reporting">
            <li className={`${styles.stickyMenusListItem}`}>Reporting</li>
          </Link>
          <Link href="/allFeatures/#Collaboration">
            <li className={`${styles.stickyMenusListItem}`}>Collaboration</li>
          </Link>
          <li className={`${styles.stickyMenusListItem}`}>Docs</li>
          <li className={`${styles.stickyMenusListItem}`}>Workflows</li>
          <li className={`${styles.stickyMenusListItem}`}>Integrate</li>
        </ul>
      </div>
    </section>
  );
};

export default StickyCategoriesMenu;
