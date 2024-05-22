import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./Signup.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import animation from '../../../images/animation_lmrhk1c0.json';
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { register } from "../utils/authSlice";
import { Body } from "../Body";


function Signup() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const nav=useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const sendRequest = async () => {
    try {
      const res = await axios.post(
        "https://foodhubbackend-20e8.onrender.com/api/user/add",
        {
          name: input.name,
          email: input.email,
          password: input.password,
        },
        config
      );
      const data = await res.data;
      console.log(data)
      dispatch(register(data));
      toast.success("Succesfully Registered");
      nav("/login");
      return data;
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
      nav("/signup");
    }
  };
  let user = localStorage.getItem("IsLogin");
  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest()
      .then()
      .then(() => {
        localStorage.setItem("user", input.name);
      });
  };
  const defaultTheme = createTheme();
   return (
    <>
    {user != null ? 
        <Body></Body> : 
      
        <div className="container2">
        <Lottie className="RegGif"animationData={animation}></Lottie>
        <ThemeProvider theme={defaultTheme}>
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                marginBottom:10 ,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 5,
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#FFC300" }}>
                <RestaurantIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  sx={{
                    input: {
                           color: "black",
                           borderBottom: "1px solid #FFC300",
                           },
                     }} 
                  fullWidth
                  id="name"
                  label="User Name"
                  name="name"
                  autoComplete="name"
                  onChange={handleChange}
                  autoFocus
                />
                <TextField
                  onChange={handleChange}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  sx={{
                    input: {
                           color: "black",
                           borderBottom: "1px solid #FFC300",
                           },
                     }} 
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  onChange={handleChange}
                  margin="normal"
                  required
                  fullWidth
                  sx={{
                    input: {
                           color: "black",
                           borderBottom: "1px solid #FFC300",
                           },
                     }} 
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <button
                  type="submit"
                  className="btnstyle"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Register
                </button>
                <Link to="/login">
                  <button className="btnstyle1">Already Login?</button>
                </Link>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      
      </div>
      }
      </>
)}

export default Signup;
