import logo from "../../images/logo-main.png";
import cart from "../../images/cart.png";
import profile from "../../images/profile.png";
import home from "../../images/home.png";
<<<<<<< HEAD
// import { Button } from "@mui/material";
// import { useContext } from "react";
// import userContext from "./utils/useContext";
import { useSelector } from "react-redux";
// import LoginIcon from "@mui/icons-material/Login";
// import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import store from "./utils/store";

export const ImgComponent = ({ item, itemname }) => {
  return (
    <a href="/">
      {" "}
      <img className={itemname} alt={itemname} src={item} />{" "}
    </a>
  );
};

export const Title = () => {
  return <ImgComponent item={logo} itemname={"logo"} />;
};

=======
import { useDispatch } from "react-redux";
import {
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "./utils/authSlice";
export const ImgComponent = ({ item, itemname }) => {
  return (
    <Link to="/cart">
      <img className={itemname} alt={itemname} src={item} />
    </Link>
  );
};
export const Title = () => {
  return <ImgComponent item={logo} itemname={"logo"} />;
};
>>>>>>> 2c8b8e4 (Mern Done)
export const NavComponent = () => {
  const theme = {
    width: "50px",
    height: "50px",
  };
<<<<<<< HEAD
  const cart_items = useSelector((store) => store.cart.items);
=======
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  console.log("aadsddfdfs");
  const {items} = useSelector((store) => store.cart);
  console.log(items);
  const {users} = useSelector((store) => store.auth);
  console.log(users);
  const handleLogout = () => {
    dispatch(logout());
    Navigate("/login");
  };
>>>>>>> 2c8b8e4 (Mern Done)
  return (
    <div className="nav-items">
      <ul>
        <li>
          {" "}
<<<<<<< HEAD
          <Link to="/about">
=======
          <Link to="/cart">
>>>>>>> 2c8b8e4 (Mern Done)
            {" "}
            <img style={theme} src={home}></img>
          </Link>
        </li>
<<<<<<< HEAD
        <li>
          {" "}
=======
        <li className="carts1">
          <p className="carts">{items.length}</p>{" "}
>>>>>>> 2c8b8e4 (Mern Done)
          <Link to="/cartItems">
            <img style={theme} src={cart} />
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/">
            <img style={theme} src={profile} />
          </Link>
        </li>
<<<<<<< HEAD
        {/* <li>
          {" "}
          <Link to="/insta">
            <img style={theme} src={profile} />
          </Link>
        </li> */}
=======
        <li>
          <FormControl variant="standard" value={users ? users.name : ""}>
            <Select
              value={users ? users.name : ""}
              sx={{
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {},
              }}
              input={<InputBase />}
            >
              <MenuItem value={users ? users.name : ""}>
                <Typography>{users ? users.name : ""}</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </li>
>>>>>>> 2c8b8e4 (Mern Done)
      </ul>
    </div>
  );
};

export const Header = () => {
<<<<<<< HEAD
//   const themeStyle = {
//     maxWidth: "100px",
//     maxHeight: "40px",
//     margin: "15px",
//     background: "#FFC300",
//     color: "black",
//     fontWeight: "bolder",
//   };
  const [logged, Islogged] = useState(false);
  useEffect(() => {}, []);
  return (
    <div className="header">
      <Title />
      <NavComponent />
      {/* {logged ? (
        <Button
          style={themeStyle}
          variant="outlined"
          startIcon={<LoginIcon />}
          onClick={() => Islogged(false)}
        >
          Login
        </Button>
      ) : (
        <Button
          style={themeStyle}
          variant="outlined"
          startIcon={<LogoutIcon />}
          onClick={() => Islogged(true)}
        >
          Logout
        </Button>
      )} */}
    </div>
=======
  const {flag}  = useSelector((store) => store.auth);
  // const {flag
  //   =useSelector((store)=>store.auth)
  console.log(flag);
  return (
    <>
      {flag ? (
        <div className="header">
          <Title />
          <NavComponent />
        </div>
      ) : (
        ""
      )}
    </>
>>>>>>> 2c8b8e4 (Mern Done)
  );
};

export default Header;
