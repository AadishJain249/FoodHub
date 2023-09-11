import React from "react";
import "./ResturantSubMenu.css";
import { Img_Link } from "../../../content";
import { FaRegStopCircle, FaRegCaretSquareUp } from "react-icons/fa";
<<<<<<< HEAD
import { useDispatch } from "react-redux";
=======
import { useDispatch ,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
>>>>>>> 2c8b8e4 (Mern Done)
import { addItem } from "../utils/cartSlice";
function ResturantSubMenu(props) {
  const dispatch = useDispatch();
  const addItemInCart = (item) => {
    dispatch(addItem(item));
  };
  const themeStyle = {
    width: "100px",
    background: "#FFC300",
    color: "black",
    fontWeight: "bolder",
  };
<<<<<<< HEAD
=======
  // const {users,token,flag}=useSelector((state)=>state.auth)
  // const naviagte=useNavigate()
>>>>>>> 2c8b8e4 (Mern Done)
  return (
    <div className="restaurant1-menu">
      <div className="restaurant1-summary">
        <img
          className="restaurant1-img"
          src={Img_Link + props.info.imageId}
          alt={props.info.name}
        />
        <div className="restaurant1-summary-details">
          <h2 className="restaurant1-title">{props.info.name}</h2>
          <div className="restaurant1-details">
            <p>{props.info.description}</p>
          </div>
          <div className="restaurant1-details">
            <p className="price">₹{props.info.price}</p>
            <p className="symbol">
              {props.info.itemAttribute?.vegClassifier === "NONVEG" ? (
                <FaRegCaretSquareUp className="nonveg" size="1.25rem" />
              ) : (
                <FaRegStopCircle className="veg" size="1.25rem" />
              )}
            </p>
<<<<<<< HEAD
            <button style={themeStyle}onClick={() => addItemInCart(props.info)}>Add To Cart</button>
=======
         <button style={themeStyle}onClick={() => addItemInCart(props.info)}>Add To Cart</button>
>>>>>>> 2c8b8e4 (Mern Done)
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResturantSubMenu;
