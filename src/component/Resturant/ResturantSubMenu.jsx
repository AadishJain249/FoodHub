import React from "react";
import "./ResturantSubMenu.css";
import { Img_Link } from "../../../content";
import { FaRegStopCircle, FaRegCaretSquareUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { Typography } from "@mui/joy";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
function ResturantSubMenu(props) {
  const dispatch = useDispatch();
  const addItemInCart = (item) => {
    dispatch(addItem(item));
  };
  const themeStyle = {
    width: "100px",
    marginLeft:"10px",
    background: "#F5F5DC",
    color: "black",
    borderRadius: "20px",
    fontWeight: "bolder",
  };
  return (
    <div className="cont1">
      <Card sx={{ backgroundColor:'#FFF0F5', width: 300, minHeight: 100, borderRadius: 4 ,":hover":{  boxShadow: 20,}}}>
        
     
        {/* <CardMedia
          sx={{ height: 200 }}
          image={Img_Link + props.info.imageId}
          title="green iguana"
        /> */}
        
         <CardActions>
         <img className="card-img1" src={Img_Link + props.info.imageId} alt={name} />
            <button
              style={themeStyle}
              onClick={() => addItemInCart(props.info)}
            >
              Add To Cart
            </button>
            </CardActions>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.info.name}
          </Typography>
          <Typography fontWeight="900" variant="body2" color="text.secondary">
            {props.info.description}
          </Typography>
            <Typography
              fontWeight="900"
              variant="body2"
              color="text.secondary"
              marginTop="30"
            >
              ₹{props.info.price}
            </Typography>
            
          <Typography variant="body2" color="text.secondary">
            {props.info.itemAttribute?.vegClassifier === "NONVEG" ? (
              <FaRegCaretSquareUp className="nonveg" size="1.25rem" />
            ) : (
              <FaRegStopCircle className="veg" size="1.25rem" />
            )}
          </Typography>
        </CardContent>

        {/* <hr align="center" width="100%"></hr> */}
      </Card>
    </div>
  );
}
export default ResturantSubMenu;
