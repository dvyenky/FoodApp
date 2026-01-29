import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { restaurantMenu } from "../utils/mockdata";
import ItemList from "./ItemList";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  const [showMenu, setShowMenu] = useState(null);
  const location = useLocation();
  const restaurant_name = location?.state?.restaurantName;

  useEffect(() => {
    setResMenu(
      restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) =>
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  }, []);

  const handleMenu = (categoryId) => {
    setShowMenu(showMenu === categoryId ? null : categoryId);
  };
  return (
    <div className="mx-auto w-6/12 my-4">
      <h1 className="text-center">{restaurant_name}</h1>
      <div>
        {resMenu.map((item) => (
          <div key={item?.card?.card?.categoryId}>
            <div
              onClick={() => handleMenu(item?.card?.card?.categoryId)}
              className="flex item-center justify-between cursor-pointer bg-[#F0F0F0] drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]"
            >
              <h2>
                {item?.card?.card?.title} - (
                {item?.card?.card?.itemCards.length})
              </h2>
              <span className="my-[15px]">⬇️</span>
            </div>
            {showMenu === item?.card?.card?.categoryId && <ItemList itemMenu = {item}/>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
