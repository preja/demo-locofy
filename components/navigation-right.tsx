import type { NextPage } from "next";
import styles from "./navigation-right.module.css";
const NavigationRight: NextPage = () => {
  return (
    <div className={styles.navigationRight}>
      <div className={styles.navigationMenu}>
        <div className={styles.explore}>Explore</div>
        <div className={styles.search}>Search</div>
        <div className={styles.hotels}>Hotels</div>
        <div className={styles.offers}>Offers</div>
      </div>
      <div className={styles.accountSection}>
        <img
          className={styles.hamburgerMenuIcon}
          alt=""
          src="/notification.svg"
        />
        <img
          className={styles.notificationBellIcon}
          alt=""
          src="/notification1.svg"
        />
        <img
          className={styles.unsplashd1upkifd04aIcon}
          alt=""
          src="/top_avatar@2x.png"
        />
      </div>
    </div>
  );
};

export default NavigationRight;
