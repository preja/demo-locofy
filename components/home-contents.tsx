import type { NextPage } from "next";
import FlightMainContainer from "./flight-main-container";
import styles from "./home-contents.module.css";
const HomeContents: NextPage = () => {
  return (
    <div className={styles.homeContents}>
      <div className={styles.upcomingFlightSection}>
        <b className={styles.upcomingFlight}>Upcoming Flight</b>
        <div className={styles.flightDetails}>
          <FlightMainContainer />
          <div className={styles.lineSeparator} />
          <div className={styles.prepareMenu}>
            <div className={styles.prepareForYour}>Prepare for your trip</div>
            <div className={styles.tripMenus}>
              <button className={styles.hotel}>
                <img className={styles.hotelChild} alt="" src="/group-21.svg" />
                <div className={styles.hotel1}>Hotel</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.hotelChild}>
                  <div className={styles.groupChild} />
                  <img className={styles.groupIcon} alt="" src="/group.svg" />
                </div>
                <div className={styles.attractions1}>Attractions</div>
              </button>
              <button className={styles.hotel}>
                <img
                  className={styles.hotelChild}
                  alt=""
                  src="/group-211.svg"
                />
                <div className={styles.eats1}>Eats</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.hotelChild}>
                  <div className={styles.groupItem} />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
                <div className={styles.commute1}>Commute</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.groupInner} />
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className={styles.taxi1}>Taxi</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.hotelChild}>
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
                <div className={styles.movies1}>Movies</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.popDestinationsMain}>
        <div className={styles.destinationsTitles}>
          <div className={styles.titleContainer}>
            <b className={styles.prepareForYour}>Plan your next trip</b>
            <b className={styles.mostPopularDestinations}>
              Most Popular Destinations
            </b>
          </div>
          <a className={styles.viewAllTop} href="#">
            <div className={styles.viewAllDestinations}>
              View all destinations
            </div>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="/arrowright.svg"
            />
          </a>
        </div>
        <div className={styles.cardsContainer}>
          <button className={styles.card1}>
            <div className={styles.unsplashnnzkznywhauParent}>
              <img
                className={styles.unsplashnnzkznywhauIcon}
                alt=""
                src="/unsplashnnzkznywhau@2x.png"
              />
              <div className={styles.destinationDetails}>
                <b className={styles.paris}>Paris</b>
                <div className={styles.parent}>
                  <div className={styles.div}>$699</div>
                  <div className={styles.from}>from</div>
                </div>
              </div>
            </div>
          </button>
          <button className={styles.card1}>
            <div className={styles.unsplashnnzkznywhauParent}>
              <img
                className={styles.unsplashnnzkznywhauIcon}
                alt=""
                src="/unsplashyc8qqp50bda@2x.png"
              />
              <div className={styles.destinationDetails}>
                <b className={styles.paris}>Greece</b>
                <div className={styles.group}>
                  <div className={styles.div1}>$1079</div>
                  <div className={styles.from1}>from</div>
                </div>
              </div>
            </div>
          </button>
          <button className={styles.card1}>
            <div className={styles.unsplashnnzkznywhauParent}>
              <img
                className={styles.unsplashnnzkznywhauIcon}
                alt=""
                src="/unsplashltnpejwdsay@2x.png"
              />
              <div className={styles.destinationDetails}>
                <b className={styles.paris}>Norway</b>
                <div className={styles.parent}>
                  <div className={styles.div}>$895</div>
                  <div className={styles.from}>from</div>
                </div>
              </div>
            </div>
          </button>
          <button className={styles.card1}>
            <div className={styles.unsplashnnzkznywhauParent}>
              <img
                className={styles.unsplashnnzkznywhauIcon}
                alt=""
                src="/unsplashm0oiyn5u8zm@2x.png"
              />
              <div className={styles.destinationDetails}>
                <b className={styles.paris}>Tuscany</b>
                <div className={styles.parent1}>
                  <div className={styles.div3}>$1245</div>
                  <div className={styles.from3}>from</div>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className={styles.viewAllBottom}>
          <div className={styles.viewAllDestinations1}>
            View all destinations
          </div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright1.svg"
          />
        </div>
      </div>
      <div className={styles.recommendedHolidaysContainer}>
        <div className={styles.recTitle}>
          <b className={styles.recommendedHolidays}>Recommended Holidays</b>
          <a className={styles.viewAllHolidaysParent} href="#">
            <div className={styles.viewAllHolidays}>View all holidays</div>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="/arrowright2.svg"
            />
          </a>
        </div>
        <div className={styles.recCardsContainer}>
          <button className={styles.recCard1}>
            <img
              className={styles.unsplash5mv818tzxeoIcon}
              alt=""
              src="/unsplash5mv818tzxeo@2x.png"
            />
            <div className={styles.holidayDetails}>
              <div className={styles.recTitle}>
                <div className={styles.baliParent}>
                  <div className={styles.bali}>Bali</div>
                  <div className={styles.d3n}>4D3N</div>
                </div>
                <div className={styles.div4}>$899</div>
              </div>
            </div>
          </button>
          <button className={styles.recCard1}>
            <img
              className={styles.unsplash5mv818tzxeoIcon}
              alt=""
              src="/unsplashj82dskoxvy8@2x.png"
            />
            <div className={styles.holidayDetails}>
              <div className={styles.recTitle}>
                <div className={styles.baliParent}>
                  <div className={styles.bali}>Switzerland</div>
                  <div className={styles.d3n}>6D5N</div>
                </div>
                <div className={styles.div5}>$900</div>
              </div>
            </div>
          </button>
          <button className={styles.recCard3}>
            <img
              className={styles.unsplash5mv818tzxeoIcon}
              alt=""
              src="/unsplash4ezkckxolre@2x.png"
            />
            <div className={styles.holidayDetails}>
              <div className={styles.recTitle}>
                <div className={styles.baliParent}>
                  <div className={styles.bali}>Boracay</div>
                  <div className={styles.d3n}>5D4N</div>
                </div>
                <div className={styles.div4}>$699</div>
              </div>
            </div>
          </button>
          <button className={styles.recCard4}>
            <img
              className={styles.unsplash5mv818tzxeoIcon}
              alt=""
              src="/unsplashuyqmxhjr3ne@2x.png"
            />
            <div className={styles.holidayDetails}>
              <div className={styles.recTitle}>
                <div className={styles.baliParent}>
                  <div className={styles.bali}>Palawan</div>
                  <div className={styles.d3n}>4D3N</div>
                </div>
                <div className={styles.div7}>$789</div>
              </div>
            </div>
          </button>
        </div>
        <div className={styles.viewAllBottom1}>
          <div className={styles.viewAllHolidays1}>View all holidays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright3.svg"
          />
        </div>
      </div>
      <form className={styles.popularStays}>
        <div className={styles.popularStaysHeader}>
          <div className={styles.popularStaysTitle}>
            <b className={styles.popularStays1}>Popular Stays</b>
          </div>
          <a className={styles.viewAllStaysParent} href="#">
            <div className={styles.viewAllStays}>View all stays</div>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="/arrowright4.svg"
            />
          </a>
        </div>
        <div className={styles.hotelCards}>
          <div className={styles.hotelCard1}>
            <a className={styles.hotelCard} href="#">
              <img
                className={styles.unsplashhhrfsdwxxusIcon}
                alt=""
                src="/unsplashrlwe8f8anoc@2x.png"
              />
              <div className={styles.stayDetails}>
                <div className={styles.entireBungalowParent}>
                  <div className={styles.entireBungalow}>Entire bungalow</div>
                  <b className={styles.matterhornSuites}>Matterhorn Suites</b>
                  <div className={styles.night}>$575/night</div>
                </div>
                <img className={styles.videoIcon} alt="" src="/video.svg" />
              </div>
              <div className={styles.rating}>
                <div className={styles.reviews}>(60 reviews)</div>
                <div className={styles.parent2}>
                  <div className={styles.div8}>4.9</div>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector3.svg"
                  />
                </div>
              </div>
              <button className={styles.moreDetailsButton}>
                <div className={styles.button}>More details</div>
              </button>
            </a>
          </div>
          <div className={styles.hotelCard1}>
            <a className={styles.hotelCard} href="#">
              <img
                className={styles.unsplashhhrfsdwxxusIcon}
                alt=""
                src="/unsplashtsn8bpopveo@2x.png"
              />
              <div className={styles.stayDetails1}>
                <div className={styles.entireBungalowParent}>
                  <div className={styles.entireBungalow}>
                    2-Story beachfront suite
                  </div>
                  <b className={styles.matterhornSuites}>Discovery Shores</b>
                  <div className={styles.night}>$360/night</div>
                </div>
              </div>
              <div className={styles.rating}>
                <div className={styles.reviews}>(116 reviews)</div>
                <div className={styles.parent2}>
                  <div className={styles.div8}>4.8</div>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector4.svg"
                  />
                </div>
              </div>
              <button className={styles.moreDetailsButton}>
                <div className={styles.button}>More details</div>
              </button>
            </a>
          </div>
          <div className={styles.hotelCard1}>
            <a className={styles.hotelCard4} href="#">
              <img
                className={styles.unsplashhhrfsdwxxusIcon}
                alt=""
                src="/unsplashrlwe8f8anoc1@2x.png"
              />
              <div className={styles.stayDetails1}>
                <div className={styles.entireBungalowParent}>
                  <div className={styles.entireBungalow}>Single deluxe hut</div>
                  <b className={styles.arcticHut}>{`Arctic Hut `}</b>
                  <div className={styles.night}>$420/night</div>
                </div>
              </div>
              <div className={styles.rating}>
                <div className={styles.reviews2}>(78 reviews)</div>
                <div className={styles.parent4}>
                  <div className={styles.div10}>4.7</div>
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="/vector5.svg"
                  />
                </div>
              </div>
              <button className={styles.moreDetailsButton}>
                <div className={styles.button}>More details</div>
              </button>
            </a>
          </div>
          <div className={styles.hotelCard41}>
            <a className={styles.hotelCard5} href="#">
              <img
                className={styles.unsplashhhrfsdwxxusIcon}
                alt=""
                src="/unsplashyqrybvxug5q@2x.png"
              />
              <div className={styles.stayDetails}>
                <div className={styles.entireBungalowParent}>
                  <div className={styles.entireBungalow}>Deluxe King Room</div>
                  <b className={styles.arcticHut}>Lake Louise Inn</b>
                  <div className={styles.night}>$244/night</div>
                </div>
                <img className={styles.videoIcon} alt="" src="/video1.svg" />
              </div>
              <div className={styles.rating}>
                <div className={styles.reviews}>(63 reviews)</div>
                <div className={styles.parent2}>
                  <div className={styles.div8}>4.6</div>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector6.svg"
                  />
                </div>
              </div>
              <button className={styles.moreDetailsButton}>
                <div className={styles.button}>More details</div>
              </button>
            </a>
          </div>
        </div>
        <div className={styles.viewAllStaysGroup}>
          <div className={styles.viewAllStays1}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright5.svg"
          />
        </div>
      </form>
    </div>
  );
};

export default HomeContents;
