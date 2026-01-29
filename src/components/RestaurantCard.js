import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } = resData;
  return (
    <>
      <div>
        <div className="border-2 border-gray-400 rounded-[5px] overflow-hidden bg-white h-[350px] cursor-pointer">
          <div>
            <img
              src={CDN_URL + cloudinaryImageId}
              className="w-full h-[150px] object-cover block"
            />
          </div>
          <br />
          <div className="text-center p-2">
            <h3 className="text-lg font-semibold">{name}</h3>
            <h5 className="text-sm font-medium mt-1">{avgRating}</h5>
            <div className="text-sm text-gray-600">{cuisines.join(",")}</div>
            <div className="text-sm text-gray-500">{areaName}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export const WrapComponent = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <div className="relative">
          <div className="absolute top-0 left-0 z-10 w-full bg-white/95 px-3 py-1 text-center text-xs font-medium text-gray-800 shadow-sm">
            High Rating Restaurant
          </div>
          <RestaurantCard {...props} />
        </div>
      </>
    );
  };
};

export default RestaurantCard;
