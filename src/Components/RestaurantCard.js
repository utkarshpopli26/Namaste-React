const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card"> 
            <h4>{resData.data.name}</h4>
            <h4>{resData.data.areaName}</h4>
            <h4>{resData.data.avgRating}</h4>
        </div>
    );
}

export default RestaurantCard;