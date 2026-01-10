import { useParams } from "react-router-dom";
import restaurantMenu from "../utils/mockRestaurantMenus";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = restaurantMenu?.[resId];

  if (!menu)
    return (
      <h2 style={{ textAlign: "center" }}>
        No Menu Data We Still Working on it ......
      </h2>
    );

  return (
    <div>
      <h1>{menu.name}</h1>

      <ul>
        {menu.menu.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
