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
      <hr></hr>
      <div className="res-description">
        <h3>{name}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

//higher order function
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    <div>
      <label>Promoted</label>
      <RestaurantCard {...props}/>
    </div>
  }
}

export default RestaurantCard;