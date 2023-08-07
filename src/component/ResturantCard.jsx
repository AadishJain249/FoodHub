import  {Img_Link} from "../../content";
import {AiFillStar}  from "react-icons/ai";
const RestaurantCard = (props) => {
  const buttonStyle = {
    backgroundColor:
      props.avgRating == "--"
        ? "#fff"
        : parseFloat(props.avgRating) < 4.0
        ? "#db7c38"
        : "#48c479",
    color: isNaN(props.avgRating) ? "#535665" : "#fff",
  };

  return (
    <div className="card">
      <img className="card-img" src={Img_Link + props.cloudinaryImageId} alt={name} />
      <div className="card-body">
        <h6 className="card-title">{props.name}</h6>
        <p className="card-tags">{props.cuisines.join(", ")}</p>
        <div className="card-details">
          <div className="rating" style={buttonStyle}>
            <AiFillStar />
            <span>{props.avgRating}</span>
          </div>
          <div>•</div>
          <div>{props.sla?.lastMileTravelString }</div>
          <div>•</div>
          <div>{props.costForTwo}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
