import type { NextPage } from "next";
import styles from "./flight-main-container.module.css";
const FlightMainContainer: NextPage = () => {
  return (
    <div className={styles.flightMainContainer}>
      <div className={styles.toAndFrom}>
        <div className={styles.fromDetails}>
          <b className={styles.sin}>SIN</b>
          <div className={styles.singapore}>Singapore</div>
        </div>
        <div className={styles.duration}>
          <b className={styles.h55m}>15H 55M</b>
          <img className={styles.durationChild} alt="" src="/group-171.svg" />
        </div>
        <div className={styles.toDetails}>
          <b className={styles.lax}>LAX</b>
          <div className={styles.losAngeles}>Los Angeles</div>
        </div>
      </div>
      <div className={styles.horizontalLine} />
      <div className={styles.departureDetails}>
        <div className={styles.departsOn1}>Departs on: 1 May, 08:00 AM</div>
        <div className={styles.daysToGoContainer}>
          <b>4 days</b>
          <span> to go</span>
        </div>
      </div>
    </div>
  );
};

export default FlightMainContainer;
