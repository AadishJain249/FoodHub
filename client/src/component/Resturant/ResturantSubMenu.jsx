import React from "react";
import "./ResturantSubMenu.css";
import { Img_Link } from "../../../content";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { Typography } from "@mui/joy";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
function ResturantSubMenu(props) {
  const dispatch = useDispatch();
  const addItemInCart = (item) => {
    dispatch(addItem(item));
  };
  const themeStyle = {
    width: "94px",
    height:"34px",
    marginLeft: "5px",
    background: "#F5F5F5",
    color: "green",
    borderRadius: "8px",
    fontWeight: "900",
  };
  return (
    <div className="cont1">
      <Card
        sx={{
          // backgroundColor: "#F5F5F5",
          width: 800,
          height: 140,
          marginBottom:4,
          borderRadius: 4,
          ":hover": { boxShadow: 20 },
        }}
      >
        <CardContent>
          <div className="body_card">
            <Typography 
              fontSize="16px"
              fontWeight="900"
              gutterBottom component="div">
              {props?.info?.name}
            </Typography>

            <Typography
              // fontWeight="900"
              variant="body2"
              
              fontSize="12px"
              color="text.secondary"
              marginTop="30"
            >
              ₹{props?.info?.price / 100}
            </Typography>

            <Typography
              paddingBottom="20"
              fontSize="12px"
              variant="body2"
              color="text.secondary"
            >
              {props?.info?.itemAttribute?.vegClassifier === "NONVEG"
                ? "Non Veg 🔺"
                : "Veg  🌿 "}
            </Typography>
          </div>
          <div className="action_card">
            <img
              className="card-img1"
              src={Img_Link + props?.info?.imageId}
              alt={name}
            />
            <button
              style={themeStyle}
              onClick={() => addItemInCart(props?.info)}
            >
              Add
            </button>
          </div>
        </CardContent>

        {/* <hr align="center" width="100%"></hr> */}
      </Card>
    </div>
  );
}
export default ResturantSubMenu;
