import { Img_Link } from "../../../content";
import { FaRegStopCircle, FaRegCaretSquareUp } from "react-icons/fa";
import "./FoodItem.css"
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
>>>>>>> 2c8b8e4 (Mern Done)
const FoodItem = (props) => {
  const dispatch=useDispatch()
  const remove=()=>{
  dispatch(removeItem())
  }
  const themeStyle = {
    width: "100px",
    background: "#FFC300",
    color: "black",
    fontWeight: "bolder",
  };
  return (
    <>
    
    <div className="restaurant1-menu">
      <div className="restaurant1-summary">
        <img
          className="restaurant1-img"
          src={Img_Link + props.imageId}
          alt={props.name}
        />
        <div className="restaurant1-summary-details">
          <h2 className="restaurant1-title">{props.name}</h2>
          <div className="restaurant1-details">
            <p>{props.description}</p>
          </div>
          <div className="restaurant1-details">
            <p className="price">₹{props.defaultPrice}</p>
            <p className="symbol">
              {props.itemAttribute?.vegClassifier === "NONVEG" ? (
                <FaRegCaretSquareUp className="nonveg" size="1.25rem" />
              ) : (
                <FaRegStopCircle className="veg" size="1.25rem" />
              )}
            </p>
            <button style={themeStyle}onClick={remove}>Remove</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default FoodItem;
