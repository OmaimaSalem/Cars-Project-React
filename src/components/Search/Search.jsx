import searchStyles from "./Search.module.css";

export default function Search({ query, handlesearch }) {
  return (
    <div>
      <div className={`container ${searchStyles.serachContent}`}>
        <div className="row">
          <div className="col-12 d-flex position-relative">
            <i className="fas fa-location-dot "></i>
            <input
              className="form-control "
              type="search"
              placeholder="Search By Name"
              value={query}
              onChange={(e) => handlesearch(e)}
            />
            <button className={`btn ${searchStyles.btnSearch}`} type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
