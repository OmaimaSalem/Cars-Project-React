import carImage from "../../assets/images/home/sec-5/Audi.png";
import userImage from "../../assets/images/card/user.png";
import dImage from "../../assets/images/card/d8wxke_2_.png";
import frameImage from "../../assets/images/card/frame.png";
import doorImage from "../../assets/images/card/doors.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import detailsStyles from "./ProductDetails.module.css"
import { Link } from "react-router-dom";
export default function ProductDetails() {
  let { id } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`https://freetestapi.com/api/v1/cars/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  return (
    <>
    <section className="container">
    <div className="row pt-5">
        <nav>
          <ol className="breadcrumb">
          
            <li className="breadcrumb-item">
              <Link className="link-opacity-100-hover pointer" to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link className="link-opacity-100-hover pointer" to="home/all-cars">All Cars</Link>
            </li>
            <li className="breadcrumb-item active">
            Car Details
            </li>
            <li aria-current="page" className="breadcrumb-item active">
            {product.make}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  <section className="container-fluid">
  
      <div className="row ">
        <div className={`d-flex align-items-center col-lg-6 ${detailsStyles.detailsImage}`}>
          <img src={carImage} alt="" className={detailsStyles.carImg} />
        </div>
        <div className={`col-lg-6 ${detailsStyles.detailsData}`}>
          <div>
            <div className={detailsStyles.popularText}>
              WHY CHOOSE US
            </div>
            <h2 className={detailsStyles.popularTitle}>
            We offer the best experience with our rental deals

            </h2>
          
          </div>
          <p className="text-nowrap d-flex align-items-start">
            <img src={dImage} alt="" />
            <div className={detailsStyles.textMuted}> Air conditioning </div>
          </p>
          <p className="text-nowrap d-flex align-items-start">
            <img src={userImage} alt="" />
            <div className={detailsStyles.textMuted}> 2 Passanger</div>
          </p>
        
          <p className="text-nowrap d-flex align-items-start">
            <img src={frameImage} alt="" />
            <div className={detailsStyles.textMuted}> Auto </div>
          </p>
          <p className="text-nowrap d-flex align-items-start">
            <img src={doorImage} alt="" />
            <div className={detailsStyles.textMuted}> Doors</div>
          </p>
        </div>
      </div>
    </section>
    </>
  
  );
}
