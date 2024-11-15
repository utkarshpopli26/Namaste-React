import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div
      data-testid="resCard"
      className="res-card"
    >
      <div>
        <img
          className="res-img"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="res-description">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;