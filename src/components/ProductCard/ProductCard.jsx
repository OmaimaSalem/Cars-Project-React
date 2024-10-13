import productStyle from "./ProductCard.module.css";
import carImg from "../../assets/images/card/car1.png";
import starIc from "../../assets/images/card/star.png";
import userIc from "../../assets/images/card/user.png";
import frameIc from "../../assets/images/card/frame.png";
import airIc from "../../assets/images/card/d8wxke_2_.png";
import doorIc from "../../assets/images/card/doors.png";
import arrowIc from "../../assets/images/card/arrow-right.png";
import { Link } from "react-router-dom";


export default function ProductCard(props) {

  let {productInfo}=props;
  return (
    <>
           <div className="col-md-3 col-sm-6 my-md-5 mt-0 mb-3">
             <div className={`card mx-md-0 mx-3 ${productStyle.card}`}>
               <div className="d-flex justify-content-center m-4">
                 <img alt="Card image cap" className="card-img-top" src={carImg} />
               </div>
               <div className="card-body">
                 <h5 className={productStyle.cardTitle}>{productInfo.car}</h5>
                 <div className="d-flex align-items-baseline">
                   <img src={starIc} alt="star icon" />
                   <h6 className="mx-1">4.6</h6>
                   <small className={productStyle.textMuted}>(1345 reviews)</small>
                 </div>
                 <div className="d-flex justify-content-between">
                   <div className="d-flex justify-content-between flex-column">
                     <p className="card-text text-nowrap d-flex align-items-start">
                       <img src={userIc} alt="user icon" />
                       <small className={productStyle.textMuted}> 2 Passanger</small>
                     </p>
    
                     <p className="card-text text-nowrap d-flex align-items-start">
                       <img src={airIc} alt="air icon" />
                       <small className={productStyle.textMuted}>
                         {" "}
                         Air conditioning{" "}
                       </small>
                     </p>
                   </div>
                   <div className="d-flex justify-content-between flex-column">
                     <p className="card-text text-nowrap d-flex align-items-start me-3">
                       <img src={frameIc} alt="frame icon" />
                       <small className={productStyle.textMuted}> Auto </small>
                     </p>
                     <p className="card-text text-nowrap d-flex align-items-start">
                       <img src={doorIc} alt="door icon" />
                       <small className={productStyle.textMuted}> 2 Doors</small>
                     </p>
                   </div>
                 </div>
                 <hr />
                 <div className="d-flex justify-content-between">
                   <p className={productStyle.textMuted}>Price</p>
                   <div className="d-flex">
                     <h6 className="{productStyle.price}">$ {productInfo.price}</h6>
                     <p className={productStyle.textMuted}> / day</p>
                   </div>
                 </div>
                 <div>
                   <Link to={`/car/${productInfo.id}`} className="btn btn-primary w-100">
                     Rent Now
                     <img src={arrowIc} className="ms-2" />
                   </Link>
                 </div>
               </div>
             </div>
           </div>
         </>
  )
}



