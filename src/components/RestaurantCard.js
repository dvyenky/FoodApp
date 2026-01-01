const RestaurantCard = (props) => {
  const resData = props;
  console.log(resData?.resData?.info);
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    resData?.resData?.info;
  return (
    <>
      <div>
        <div className="res-card">
          <div>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                cloudinaryImageId
              }
            />
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
