import Brands from "../Brands/Brands";
import CarsSection from "../CarsSection/CarsSection";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HowItWork from "../HowItWork/HowItWork";
import Navbar from "../Navbar/Navbar";
import Testimonial from "../Testimonial/Testimonial";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import homeStyles from "./Home.module.css";

const Home = () => {
  return (
    <div className={homeStyles.homeBg}>
      <Navbar />
      <Header />
      <CarsSection />
      <HowItWork />
      <Brands />
      <WhyChooseUs/>
      <Testimonial/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
