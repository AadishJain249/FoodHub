import { Img_Link } from "../../content";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AiFillStar } from "react-icons/ai";
import useResturant from "./utils/useResturant";
const RestaurantCard = (props) => {
  const buttonStyle = {
    backgroundColor:
      props.avgRating == "--"
        ? "#fff"
        : parseFloat(props.avgRating) < 4.0
        ? "#db7c38"
        : "#48c479",
    color: isNaN(props.avgRating) ? "#535665" : "#fff",
  };
  return (
    <div className="main">
      <Card sx={{ backgroundColor:'#F5F5F5',minWidth: 280, minHeight: 250, borderRadius: 4,":hover":{  boxShadow: 20}}}>
      <img className="card-img" src={Img_Link + props.cloudinaryImageId} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            {props.name}
          </Typography>
          <Typography
            style={buttonStyle}
            width="45px"
            fontWeight="900"
            variant="body2"
            color="text.secondary"
          >
            <div className="rating" style={buttonStyle}>
              <AiFillStar />
              <span>{props.avgRating}</span>
            </div>
          </Typography>
          <Typography
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
            variant="body2"
            color="text.secondary"
          >
            <br></br>
            {props.cuisines.join(", ")}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default RestaurantCard;
