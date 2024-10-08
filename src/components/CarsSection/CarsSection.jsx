import carsStyles from "./CarsSection.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import Search from "../Search/Search";

export default function CarsSection() {
  let [cars, setCars] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState("");
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

  /*search function */
  const handlesearch = (event) => {
    const getSearch = event.target.value;
    console.log(getSearch);

    if (getSearch.length > 0) {
      const searchdata = cars.filter((item) =>
        item.make.toLowerCase().includes(getSearch)
      );
      setCars(searchdata);
      console.log(searchdata);
    } else {
      setCars(filterdata);
    }
    setQuery(getSearch);
  };

  return (
    <div className="container">
      <Search handlesearch={handlesearch} query={query} />
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <div>
              <div
                className={`d-flex justify-content-center m-4 ${carsStyles.popularText}`}
              >
                POPULAR RENTAL DEALS
              </div>
            </div>
          </div>
          <h1 className={`text-center ${carsStyles.carsTitle}`}>
            Most popular cars rental deals
          </h1>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        {cars.slice(0, 4).map((car) => {
          return <ProductCard key={car.id} productInfo={car} />;
        })}
        <div className="d-flex justify-content-center my-2">
          <Link
            className={`btn btn-outline-secondary ${carsStyles.btnOutline}`}
            to="home/all-cars"
          >
            Show all vehicles
            <i className="px-2 fas fa-long-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
