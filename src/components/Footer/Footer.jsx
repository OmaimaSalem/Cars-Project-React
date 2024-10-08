import footerStyles from "./Footer.module.css";
import logoFooter from "../../assets/images/footer/logo-footer.png";
import locationFooter from "../../assets/images/footer/location.png";
import callFooter from "../../assets/images/footer/call.png";
import smsFooter from "../../assets/images/footer/sms.png";
import faceFooter from "../../assets/images/footer/facebook.png";
import instaFooter from "../../assets/images/footer/instagram.png";
import youtubeFooter from "../../assets/images/footer/youtube.png";

const Footer = () => {
  return (
    <div>
      <section className={`w-100 py-5 ${footerStyles.footerSection}`}>
        <div className="text-white container">
          <div className="sec-8 col-md-12 d-flex flex-wrap mx-2 justify-content-between">
            <div className="col-md-3 me-3 mb-5">
              <img src={logoFooter} className="mb-4" />
              <div className="d-flex">
                <img src={locationFooter} className="align-self-center me-2" />
                <div className="d-flex flex-column">
                  <div className={footerStyles.footerItem}>
                    25566 Hc 1, Glenallen,
                  </div>
                  <div className={footerStyles.footerItem}>
                    Alaska, 99588, USA
                  </div>
                </div>
              </div>
              <div className="d-flex my-2">
                <img src={callFooter} className="me-2" />
                <div className={footerStyles.footerItem}>+603 4784 273 12</div>
              </div>
              <div className="d-flex">
                <img src={smsFooter} className="me-2" />
                <div className={footerStyles.footerItem}>
                  rentcars@gmail.com
                </div>
              </div>
            </div>
            <div className="col-md-2 d-flex flex-column me-3 mb-5">
              <h2 className="mb-4">Our Products</h2>
              <div>
                <a href="#" className={footerStyles.footerItem}>
                  Career
                </a>
              </div>
              <div>
                <a href="#" className={footerStyles.footerItem}>
                  Car
                </a>
              </div>
              <div>
                <a href="#" className={footerStyles.footerItem}>
                  Packages
                </a>
              </div>
              <div>
                <a href="#" className={footerStyles.footerItem}>
                  Features
                </a>
              </div>
              <div>
                
                <a href="#" className={footerStyles.footerItem}>
                  Priceline
                </a>
              </div>
            </div>
            <div className="col-md-2 d-flex flex-column me-3 mb-5">
              <h2 className="mb-4">Resources</h2>
              <div>
                
                <a href="#" className={footerStyles.footerItem}>
                  Download
                </a>
              </div>
              <div>
                
                <a href="#" className={footerStyles.footerItem}>
                  Help Centre
                </a>
              </div>
              <div>
                
                <a href="#" className={footerStyles.footerItem}>
                  Guides
                </a>
              </div>
              <div>
                
                <a href="#" className={footerStyles.footerItem}>
                  Partner Network
                </a>
              </div>
              <div>Cruises</div>
              <div>
                
                <a href="#" className={footerStyles.footerItem}>
                  Developer
                </a>
              </div>
            </div>
            <div className="col-md-2 d-flex flex-column me-3 mb-5">
              <h2 className="mb-4">About Rentcars</h2>
              <div>
                
                <a href="#" className={footerStyles.footerItem}>
                  Why choose us
                </a>
              </div>
              <div>
                
                <a href="#" className={footerStyles.footerItem}>
                  Our Story
                </a>
              </div>
              <div>
                
                <a href="#" className={footerStyles.footerItem}>
                  Investor Relations
                </a>
              </div>
              <div>
                
                <a href="#" className={footerStyles.footerItem}>
                  Press Center
                </a>
              </div>
              <div>
                
                <a href="#" className={footerStyles.footerItem}>
                  Advertise
                </a>
              </div>
            </div>
            <div className="col-md-2 d-flex flex-column mb-5">
              <h2 className="mb-4">Follow Us</h2>
              <div>
              <a href="#" className={footerStyles.footerItem}>
                <img src={faceFooter} alt="facebook" />
                </a>
                <a href="#" className={footerStyles.footerItem}>
                <img src={instaFooter} alt="instagram" className="mx-3" />
                </a>
                <a href="#" className={footerStyles.footerItem}>
                <img src={youtubeFooter} alt="youtube" />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className={footerStyles.copyright}>
              Copyright 2023 ・ Rentcars, All Rights Reserved
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
