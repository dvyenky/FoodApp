import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listRestauants, setListRestaurants] = useState([]);
  const fetchData = async () => {
    const api_data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0845338&lng=72.9104776"
    );
    const result = await api_data.json();
    setListOfRestaurants(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (res) => res.info
      )
    );
    setListRestaurants(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (res) => res.info
      )
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <Search resList={listOfRestaurants} setFilterList={setListRestaurants} />
      <div className="res-container">
        {listRestauants.map((item) => (
          <Link className="link-button" key={item.id} to={"/restaurant/" + item.id}>
            <RestaurantCard resData={item} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default RestaurantContainer;
