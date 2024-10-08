import contactStyles from "./Contact.module.css";
import andImg from "../../assets/images/home/andriod.png";
import iosImg from "../../assets/images/home/ios.png";
import iphoneImg from "../../assets/images/home/sec-7/iPhone-14.png";
const Contact = () => {
  return (
    <section className={contactStyles.contact}>
      <div className="container  d-flex mt-md-5 mt-3 justify-content-around">
        <div>
          <article className="mx-md-5 mx-3">
            <h1 className={contactStyles.contactTitle}>
              Download Rentcars App for
              <span className="text-primary"> FREE </span>
            </h1>
            <div className={contactStyles.contactTxt}>For faster, easier booking and exclusive deals.</div>
            <div className="mt-4 mb-5 col-md-7 d-flex justify-content-center">
              <img src={andImg} className="me-2" />
              <img src={iosImg} />
            </div>
            <form className="d-flex flex-column col-md-7 ">
              <input
                type="text"
                placeholder="Name"
                className={contactStyles.inp}
              />
              <input
                type="text"
                placeholder="Phone Number"
                className={contactStyles.inp}
              />
              <input
                type="text"
                placeholder="Email"
                className={contactStyles.inp}
              />
              <div className="d-flex justify-content-center mt-2 mb-md-4 mb-2">
                <button type="submit" className={`btn btn-primary my-3 ${contactStyles.contactbtn}`} >
                  Send
                </button>
              </div>
            </form>
          </article>
        </div>
        <div className="d-flex justify-content-center align-items-end">
          <img src={iphoneImg} alt="" className={contactStyles.mobileImg} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
