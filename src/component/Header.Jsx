import logo from "../../images/logo-main.png";
import cart from "../../images/cart.png";
import profile from "../../images/profile.png";
import home from "../../images/home.png";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect, useState } from "react";

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

export const NavComponent = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>
          {" "}
          <ImgComponent item={home} itemname={"home"} />{" "}
        </li>
        <li>
          {" "}
          <ImgComponent item={cart} itemname={"cart"} />{" "}
        </li>
        <li>
          {" "}
          <ImgComponent item={profile} itemname={"profile"} />{" "}
        </li>
      </ul>
    </div>
  );
};

export const Header = () => {
  const themeStyle = {
    maxWidth: "100px",
    maxHeight: "40px",
    margin: "15px",
    background: "#FFC300",
    color: "black",
    fontWeight: "bolder",
  };
  const [logged, Islogged] = useState(false);
  console.log("render");
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return (
    <div className="header">
      <Title />
      <NavComponent />
      {logged ? (
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
      )}
    </div>
  );
};

export default Header;
