import { CDN_URL } from '../Utils/constants';

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,areaName,avgRating} = resData?.info;
    const cdn_url = CDN_URL + resData.info?.cloudinaryImageId;
    return (
        <div className="res-card"> 
            <img className="rounded-lg" alt="res-logo" src={cdn_url}/>
            <h4>{name}</h4>
            <h4>{areaName}</h4>
            <h4>{avgRating}</h4>
        </div>
    );
}

export default RestaurantCard;