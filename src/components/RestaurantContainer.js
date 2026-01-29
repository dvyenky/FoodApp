import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WrapComponent } from "./RestaurantCard";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listRestauants, setListRestaurants] = useState([]);
  const HighRatedComponent = WrapComponent(RestaurantCard);
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
  // console.log(listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);
  const status_data = useOnlineStatus();
  if (!status_data)
    return <h1>You are offline please check the internet connection</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <Search resList={listOfRestaurants} setFilterList={setListRestaurants} />
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-[30px] p-[20px]">
        {listRestauants.map((item) => (
          <Link
            className="no-underline text-[#000000]"
            key={item.id}
            to={"/restaurant/" + item.id}
            state={{restaurantName : item.name}}
          >
            {item.avgRating >= 4.3 ? (
              <HighRatedComponent resData={item} />
            ) : (
              <RestaurantCard resData={item} />
            )}
            {/* <RestaurantCard resData={item} /> */}
          </Link>
        ))} 
      </div>
    </>
  );
};
export default RestaurantContainer;
