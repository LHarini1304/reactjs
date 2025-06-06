import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { resdata } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resdata?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
