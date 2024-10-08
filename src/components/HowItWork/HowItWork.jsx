import howItWorkStyles from "./HowItWork.module.css";
import locationImg from "../../assets/images/home/location.png";
import calImg from "../../assets/images/home/calender.png";
import carImg from "../../assets/images/home/car-icon.png";
const HowItWork = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <div>
              <div
                className={`d-flex justify-content-center m-4 ${howItWorkStyles.popularText}`}
              >
                HOW IT WORK
              </div>
            </div>
          </div>
          <h1 className={`text-center ${howItWorkStyles.carsTitle}`}>
            Rent with following 3 working steps
          </h1>
        </div>
        <div className="col-12 mt-4">
          <div className="d-flex justify-content-center flex-wrap">
            <div className={`d-flex flex-column align-items-center px-4  ${howItWorkStyles.cardSec} my-2`}>
              <div>
                <img src={locationImg} />
              </div>
              <h5 >Choose location</h5>
              <p className="mb-0  text-center">
                Choose your and find your best car
              </p>
            </div>
            <div className={`d-flex flex-column align-items-center px-4 mx-4 ${howItWorkStyles.cardSec} my-2`}>
              <div>
                <img src={calImg} />
              </div>
              <h5 >Pick-up date</h5>
              <p className="mb-0  text-center">
                Select your pick up date and time to book your car
              </p>
            </div>
            <div className={`d-flex flex-column align-items-center px-4 mx-4 ${howItWorkStyles.cardSec} my-2`}>
              <div>
                <img src={carImg} />
              </div>
              <h5 >Book your car</h5>
              <p className="mb-0 text-center">
                Book your car and we will deliver it directly to you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
