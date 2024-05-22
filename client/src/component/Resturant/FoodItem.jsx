import { Img_Link } from "../../../content";
import "./ResturantMenu.css"
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { Typography } from "@mui/joy";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
const FoodItem = (props) => {
  const dispatch=useDispatch()
  const remove=()=>{
  dispatch(removeItem())
  }
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
    <>
   <div className="cont1">
      <Card
        sx={{
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
              {props?.name}
            </Typography>

            <Typography
              variant="body2"
              fontSize="12px"
              color="text.secondary"
              marginTop="30"
            >
              ₹{props?.price / 100}
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
              src={Img_Link + props?.imageId}
              alt={name}
            />
            <button
              style={themeStyle}
              onClick={() => remove()}
            >
              Remove
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
    </>
  );
};
export default FoodItem;
