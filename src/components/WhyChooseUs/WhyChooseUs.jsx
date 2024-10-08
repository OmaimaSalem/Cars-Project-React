
import audiImg from "../../assets/images/home/sec-5/Audi.png";
import userImage from "../../assets/images/home/sec-5/user.png";
import messageImage from "../../assets/images/home/sec-5/message.png";
import chatImage from "../../assets/images/home/sec-5/chat.png";
import chooseStyles from "./WhyChooseUs.module.css"
export default function WhyChooseUs() {
  return (
    <section className={`d-flex mt-5 py-5 ${chooseStyles.whyChooseUs}`}>
      <div className={`d-flex align-items-center w-50  ${chooseStyles.whyChooseUsImage}`}>
        <img 
        className={chooseStyles.mainImg}
          src={audiImg}
          alt=""
        />
      </div>
      <div className={chooseStyles.childTwo}>
        <div>
          <div className={chooseStyles.popularText}>
            WHY CHOOSE US
          </div>
          <h4 className={chooseStyles.popularTitle}>
            We offer the best experience with our rental deals
          </h4>
        </div>
        <div className="d-flex align-items-center">
          <img
            src={userImage}
            className="p-3 ps-0"
          />
          <div>
            <h6 className={chooseStyles.chooseTitle}>Best price guaranteed</h6>
            <div className={chooseStyles.chooseTxt}>
              Find a lower price? We’ll refund you 100% of the difference.
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <img
            src={messageImage}
            className="p-3 ps-0"
          />
          <div>
            <h6 className={chooseStyles.chooseTitle}>24 hour car delivery</h6>
            <div className={chooseStyles.chooseTxt}>
              Book your car anytime and we will deliver it directly to you.
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <img
            src={messageImage}
            className="p-3 ps-0"
          />
          <div>
            <h6 className={chooseStyles.chooseTitle}>Best price guaranteed</h6>
            <div className={chooseStyles.chooseTxt}>
              Find a lower price? We’ll refund you 100% of the difference.
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <img
            src={chatImage}
            className="p-3 ps-0"
          />
          <div>
            <h6 className={chooseStyles.chooseTitle}>24/7 technical support</h6>
            <div className={chooseStyles.chooseTxt}>
              Have a question? Contact Rentcars support any time when you have
              problem.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
