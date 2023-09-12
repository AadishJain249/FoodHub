const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bycrypt = require("bcrypt");
const pass = require("password-validator");
const user = require("../model/user");
const emailValid = require("email-validator");
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let exist;
    exist = await user.findOne({ email });
    if (exist) {
      return res.status(400).send("user already exist" );
    }
    const salt = await bycrypt.genSalt();
    const hash = await bycrypt.hash(password, salt);
    const users = new user({
      name,
      email,
      password: hash,
    });
    var schema = new pass();
    schema
      .is()
      .min(8) // Minimum length 8
      .is()
      .max(100)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits(1)
      .has()
      .not()
      .spaces();
    if (!emailValid.validate(email)) {
      return res.status(400).send("Wrong Email Credentials");
    }
    if (!schema.validate(password)) {
      return res
        .status(400)
        .send(
          "Wrong Password Password must contain at least 1 uppercase lowercase digit special character and min of 8 length"
        );
    } else {
      await users.save();
      return res.status(200).send(users);
    }
  } catch (error) {}
};
const login = async (req, res) => {
  try {
    const users = await user.findOne({ email: req.body.email });
    console.log(users);
    if (!users) {
      return res.status(400).send("Email Doesn't Match");
    }
    const comparePass = await bycrypt.compare(
      req.body.password,
      users.password
    );
    if (!comparePass) {
      return res.status(400).send(" Password Doesn't Match");
    }
    const token = jwt.sign({ id: users._id }, "AadishKey");
    console.log(token);
    return res.status(200).json({ users, token });
  } catch (error) {
  }
};
module.exports = { register, login };
