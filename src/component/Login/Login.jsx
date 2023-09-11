import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import RestaurantIcon from "@mui/icons-material/Restaurant";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { login } from "../utils/authSlice";
import { useDispatch } from "react-redux";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        FoodHub
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function Login() {
  const nav = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const dispatch=useDispatch()
  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const options = {
    'Content-Type': 'application/json'
  } 
  const sendRequest = async () => {
    const res = await axios.post("http://localhost:3000/api/user/login", {
      email: input.email,
      password: input.password,
    },options).catch((e)=>{
      if((e.status=400))
      {
        alert(e.response.data)
      }
    })
    const data = await res.data;
    dispatch(login(data))
    // navigate('/cart')
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => nav("/cart"));
  };
  const defaultTheme = createTheme();
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding:5
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#FFC300" }}>
              <RestaurantIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                id="email"
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
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Login;
