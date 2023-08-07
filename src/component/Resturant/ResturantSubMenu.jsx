import React from "react";
import "./ResturantSubMenu.css";
import { Img_Link } from "../../../content";
import { FaRegStopCircle, FaRegCaretSquareUp } from "react-icons/fa";
function ResturantSubMenu(props) {
  const theme = {
    backgroundColor:
      props.info.itemAttribute.vegClassifier === "NONVEG"
        ? "red"
        : "lightgreen",
  };
  console.log(theme);
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResturantSubMenu;
