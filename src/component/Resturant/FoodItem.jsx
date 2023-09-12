import { Img_Link } from "../../../content";
import { FaRegStopCircle, FaRegCaretSquareUp } from "react-icons/fa";
import "./FoodItem.css"
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { Typography } from "@mui/joy";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
const FoodItem = (props) => {
  const dispatch=useDispatch()
  const remove=()=>{
  dispatch(removeItem())
  }
  const themeStyle = {
    width: "150px",
    padding:"5px",
    marginLeft:"10px",
    background: "#F5F5DC",
    color: "black",
    borderRadius:"20px",
    fontWeight: "bolder",
  };
  return (
    <>
    
    <div className="cont1">
      <Card sx={{ backgroundColor:'#FFF0F5',width: 300, minHeight: 100, borderRadius: 4 ,":hover":{  boxShadow: 20,}}}>
         <CardActions>
         <img className="card-img2" src={Img_Link + props.imageId} alt={name} />
            <button
              style={themeStyle}
              onClick={() => remove()}
            >
              Remove From Cart
            </button></CardActions>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography fontWeight="900" variant="body2" color="text.secondary">
            {props.description}
          </Typography>
            <Typography
              fontWeight="900"
              variant="body2"
              color="text.secondary"
              marginTop="30"
            >
              ₹{props.price}
            </Typography>
            
          <Typography variant="body2" color="text.secondary">
            {props.itemAttribute?.vegClassifier === "NONVEG" ? (
              <FaRegCaretSquareUp className="nonveg" size="1.25rem" />
            ) : (
              <FaRegStopCircle className="veg" size="1.25rem" />
            )}
          </Typography>
        </CardContent>
      </Card>
    </div>
    </>
  );
};
export default FoodItem;
