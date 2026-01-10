import { useState } from "react";

const Search = ({ resList, setFilterList }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="search-bar">
        <div className="input-box">
          <input
            type="text"
            placeholder=""
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <label>What's your mind ?</label>
        </div>
        <div>
          <button
            className="search-btn"
            onClick={() => {
              const filter_searchrestaurant = resList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterList(filter_searchrestaurant);
            }}
          >
            search
          </button>
        </div>
        <div
          onClick={() => {
            let filter_data = resList.filter((item) => item.avgRating >= 4.4);
            setFilterList(filter_data);
            console.log(filter_data);
          }}
        >
          <button className="restuarant-btn">Top Restaurant</button>
        </div>
      </div>
    </>
  );
};

export default Search;
