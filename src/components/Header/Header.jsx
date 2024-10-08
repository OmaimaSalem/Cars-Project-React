import imgHeader from "../../assets/images/car1.png";
import headerStyles from "./Header.module.css";
import andImg from "../../assets/images/home/andriod.png";
import iosImg from "../../assets/images/home/ios.png";
const Header = () => {
  return (
    <>
      <div className={`d-flex justify-content-between align-items-center ${headerStyles.headerSection}`}>
        <div className={headerStyles.headerContent}>
          <h1 className={headerStyles.headerTitle}>
            Find, book and rent a car <span>Easily </span>
          </h1>
          <p>
            Get a car wherever and whenever you need it with your IOS and
            Android device.
          </p>
          <div className="mt-4 mb-5 d-flex ">
              <img src={andImg} className="me-2" />
              <img src={iosImg} />
            </div>
        </div>
        <img
          className={headerStyles.imgHeader}
          src={imgHeader}
          alt="header image"
        />
      </div>
    </>
  );
};

export default Header;
