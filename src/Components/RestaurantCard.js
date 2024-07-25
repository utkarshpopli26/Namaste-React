const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card"> 
            <h4>{resData.resname}</h4>
            <h4>{resData.cuisine}</h4>
        </div>
    );
}

export default RestaurantCard;