import React from "react";
import ResturantSubMenu from "./ResturantSubMenu";
function ResturantMenu(props) {
  return (
    <>
      {props.itemCards && props.itemCards.map((e,index)=>{
      return <ResturantSubMenu key={index} {...e.card}></ResturantSubMenu>
    })}
    
    </>
  );
}

export default ResturantMenu;
