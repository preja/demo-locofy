import type { NextPage } from "next";
import { TextField } from "@mui/material";
import NavigationRight from "../components/navigation-right";
import SearchForm from "../components/search-form";
import HomeContents from "../components/home-contents";
import styles from "./index.module.css";
const CoverFrame: NextPage = () => {
  return (
    <div className={styles.coverFrame}>
      <div className={styles.coverFrameChild} />
      <img className={styles.coverFrameItem} alt="" src="/group-16@2x.png" />
      <img className={styles.coverFrameInner} alt="" src="/group-17.svg" />
      <div className={styles.madeByTeam}>Made by Team Locofy</div>
      <div className={styles.travelWebsiteWrapper}>
        <div className={styles.travelWebsite}>Travel Website</div>
      </div>
      <div className={styles.homepage}>
        <div className={styles.heroSection}>
          <header className={styles.topHeader}>
            <div className={styles.topContainer}>
              <img
                className={styles.fickleflightLogoIcon}
                alt=""
                src="/fickleflight-logo.svg"
              />
              <NavigationRight />
            </div>
          </header>
          <div className={styles.searchSection}>
            <div className={styles.bannerGradient} />
            <img
              className={styles.bannerBackground}
              alt=""
              src="/banner--background@2x.png"
            />
            <div className={styles.searchContainer}>
              <div className={styles.title}>
                <div
                  className={styles.letsExplore}
                >{`Let’s explore & travel the world`}</div>
                <div className={styles.findTheBest}>
                  Find the best destinations and the most popular stays!
                </div>
              </div>
              <SearchForm />
            </div>
          </div>
        </div>
        <HomeContents />
        <div className={styles.footerSection}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-186@2x.png"
            />
            <div className={styles.shareYourTravelsForm}>
              <div className={styles.formHeader}>
                <b className={styles.formTitleSubtext}>
                  subscribe to our newsletter
                </b>
                <b className={styles.formTitle}>Get weekly updates</b>
              </div>
              <div className={styles.form}>
                <div className={styles.formText}>
                  <div className={styles.fillInYour}>
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className={styles.formFields}>
                  <div className={styles.formText}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Your name"
                      size="medium"
                      margin="none"
                    />
                  </div>
                  <div className={styles.formText}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Email address"
                      size="medium"
                      margin="none"
                    />
                  </div>
                </div>
                <button className={styles.button}>
                  <div className={styles.unstyledbutton}>
                    <div className={styles.button1}>submit</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <div className={styles.fickleflightBio}>
              <img
                className={styles.fickleflightLogoIcon}
                alt=""
                src="/logo.svg"
              />
              <div className={styles.fickleFlightIs}>
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className={styles.socialIcons}
                alt=""
                src="/social-icons.svg"
              />
            </div>
            <div className={styles.footerChild} />
            <div className={styles.footerLinks}>
              <div className={styles.company}>
                <a className={styles.aboutUs}>About Us</a>
                <div className={styles.company1}>Company</div>
                <div className={styles.news}>News</div>
                <div className={styles.careers}>Careers</div>
                <div className={styles.howWeWork}>How we work</div>
              </div>
              <div className={styles.company}>
                <div className={styles.account}>Account</div>
                <div className={styles.support1}>Support</div>
                <div className={styles.supportCenter}>Support Center</div>
                <div className={styles.faq}>FAQ</div>
                <div className={styles.accessibility}>Accessibility</div>
              </div>
              <div className={styles.more}>
                <div className={styles.covidAdvisory}>Covid Advisory</div>
                <div className={styles.more1}>More</div>
                <div className={styles.airlineFees}>Airline Fees</div>
                <div className={styles.tips}>Tips</div>
                <div className={styles.howWeWork}>Quarantine Rules</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CoverFrame;
