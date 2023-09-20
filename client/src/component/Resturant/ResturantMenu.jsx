import React from "react";
import ResturantSubMenu from "./ResturantSubMenu";
import './ResturantSubMenu.css'
function ResturantMenu(props) {
  return (
    <>
      <div className="container3">
        {props?.itemCards &&
          props?.itemCards.map((e, index) => {
            return (
              <ResturantSubMenu key={index} {...e.card}></ResturantSubMenu>
            );
          })}
      </div>
    </>
  );
}

export default ResturantMenu;
