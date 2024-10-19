import ProductCard from "../ProductCard/ProductCard";
import carStyles from "./AllCars.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../Search/Search";
import { Pagination } from "flowbite-react";
export default function AllCars() {
  let [cars, setCars] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

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
  async function getCardetails() {
    try {
      const { data } = await axios.get(`https://myfakeapi.com/api/cars/`);
      if (Array.isArray(data.cars.splice(0, 30))) {
        setCars(data.cars.splice(0, 30));
        setTotalPages(Math.ceil(data.length / itemsPerPage));
      } else {
        setCars([]);
        setTotalPages(1);
      }
    } catch (error) {
      console.log("Error fetching car details:", error);
      setCars([]);
      setTotalPages(1);
    }
  }

  useEffect(() => {
    getCardetails();
  }, []);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cars.slice(indexOfFirstItem, indexOfLastItem);

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
        {currentItems.length === 0 ? (
          <div className="col-md--4 text-center text-danger my-5">
            No cars available with this name.
          </div>
        ) : (
          currentItems.map((car) => {
            return <ProductCard key={car.id} productInfo={car} />;
          })
        )}
      </div>
      <div className={carStyles.pagination}>
        <Pagination
          currentPage={currentPage}
          totalPages={3}
          onPageChange={onPageChange}
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
        />
      </div>
    </div>
  );
}
