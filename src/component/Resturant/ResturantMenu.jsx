import React from "react";
import ResturantSubMenu from "./ResturantSubMenu";
function ResturantMenu(props) {
  return (
    <>
<<<<<<< HEAD
    
=======
>>>>>>> 2c8b8e4 (Mern Done)
    {props.itemCards && props.itemCards.map((e,index)=>{
      return <ResturantSubMenu key={index} {...e.card}></ResturantSubMenu>
    })}
    
    </>
  );
}

export default ResturantMenu;
