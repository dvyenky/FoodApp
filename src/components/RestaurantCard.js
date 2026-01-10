import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const resData = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    resData?.resData;
  return (
    <>
      <div>
        <div className="res-card">
          <div>
            <img src={CDN_URL + cloudinaryImageId} />
          </div>
          <br />
          <div className="res-text">
            <h3>{name}</h3>
            <h5>{avgRating}</h5>
            <div>{cuisines.join(",")}</div>
            <div>{areaName}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
