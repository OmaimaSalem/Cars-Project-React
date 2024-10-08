import notFoundImg from "../../assets/images/not-found/404-not-found.png"
export default function NotFound() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-12 d-flex justify-content-center ">
        <img src={notFoundImg} alt="not found image" className=" img-fluid" />
      </div>
    </div>
    </div>
  )
}
