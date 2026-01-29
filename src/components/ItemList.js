import { useState } from "react";
import { CDN_URL } from "../utils/constant";

const ItemList = ({ itemMenu }) => {
  const [count, setCount] = useState({});
  const resItem = itemMenu?.card?.card?.itemCards;
  // console.log(resItem);
  const increment = (itemId) => {
    setCount((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };
  const decrement = (itemId) => {
    setCount((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };
  return (
    <div className="bg-[#F8F8F8]">
      {resItem.map((item) => {
        const itemId = item.card.info.id;
        const counts = count[itemId] || 0;

        return (
          <div key={itemId} className="border-b flex items-center">
            <div className="w-9/12">
              <h3>{item.card.info.name}</h3>
              <h4>₹ {item.card.info.price / 100}</h4>
              <h4 className="truncate">{item.card.info.description}</h4>
            </div>

            <div className="w-3/12 relative">
              <img
                width={"100%"}
                height={"70%"}
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />

              <div className="mx-[55]">
                <button onClick={() => decrement(itemId)}>-</button>
                <span>{counts}</span>
                <button onClick={() => increment(itemId)}>+</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
