import React from "react";
import ResturantSubMenu from "./ResturantSubMenu";
function ResturantMenu(props) {
  console.log(props);
  return (
    <>
    {props.itemCards && props.itemCards.map((e)=>{
      return <ResturantSubMenu {...e.card}></ResturantSubMenu>
    })}
    
    </>
  );
}

export default ResturantMenu;
