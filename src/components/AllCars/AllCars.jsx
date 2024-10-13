import ProductCard from "../ProductCard/ProductCard";
import carStyles from "./AllCars.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../Search/Search";
import ReactPaginate from "react-paginate";

export default function AllCars() {
  let [cars, setCars] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  let getCars = async () => {
    try {
      let response = await axios.get("https://freetestapi.com/api/v1/cars");
      setCars(response.data);
      setFilterdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCars();
  }, []);

  /*paginate */

  let fetchCars = async () => {
    try {
      let response = await axios.get(`https://myfakeapi.com/api/cars?page=${currentPage}&limit=${itemsPerPage}`);
      setCars(response.data.cars);
      console.log(response.data.cars);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCars();
  },[currentPage, itemsPerPage]);


  // const totalPages = Math.ceil(cars.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = cars.slice(startIndex, endIndex);

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    console.log(currentPage);
    // const carsPage = await setCurrentPage(currentPage);
    // const carsLimit = await setItemsPerPage(itemsPerPage );
    // console.log(carsPage);
    // console.log(carsLimit);
  };



  /*search function */
  const handlesearch = (event) => {
    const getSearch = event.target.value;
    if (getSearch.length > 0) {
      const searchdata = cars.filter((item) =>
        item.car.toLowerCase().includes(getSearch)
      );
      setCars(searchdata);
    } else {
      setCars(filterdata);
    }
    setQuery(getSearch);
  };



  return (
    <div className="container">
      <div className="row pt-5">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="link-opacity-100-hover pointer" to="/">
                Home
              </Link>
            </li>
            <li aria-current="page" className="breadcrumb-item active">
              Cars
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <div>
              <div
                className={`d-flex justify-content-center m-4 ${carStyles.popularText}`}
              >
                POPULAR RENTAL DEALS
              </div>
            </div>
          </div>
          <h1 className={`text-center mb-4 ${carStyles.carsTitle}`}>
            Most popular cars rental deals
          </h1>
        </div>
      </div>
      <Search handlesearch={handlesearch} query={query} />
      <div className="row d-flex justify-content-center mt-md-0 mt-4">
        {currentItems.map((car) => {
          return <ProductCard key={car.id} productInfo={car} />;
        })}
      
      </div>
    <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={3}
        marginPagesDisplayed={4}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      /> 
    </div>
  );
}
