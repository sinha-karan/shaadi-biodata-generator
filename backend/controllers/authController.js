import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userSignup = async (req,res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !name || !password) {
      return res.status(400).send("All fields are required")
    } 
    const userExist = await User.findOne({email: email});

      if (!userExist) {
        const hashedPassword = await bcrypt.hash(password, 10);

        const userDB = await User.create({
          name: name,
          email: email,
          password: hashedPassword
        })

        const jwtToken = jwt.sign({id: userDB._id, role: userDB.role}, process.env.JWT_SECRET, {expiresIn: '1d'})

        res.json({
          message: "User created successfully",
          userId: userDB._id,
          email: userDB.email,
          name: userDB.name,
          token: jwtToken
        })

      } else {
        return res.status(409).json({
          msg: "User already exist"
        })
      }
  
  } catch (error) {
      console.error("An error occurred", error);
      return res.status(500).send("Internal error")
  }
  
}



export const userLogin = async (req,res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("All fields are required")
    }

    const findUser = await User.findOne({
      email: email
    })

    if (!findUser) {
      return res.status(404).send("No User Found")
    }

    const correctPassword = await bcrypt.compare(password, findUser.password);

    if (!correctPassword) {
      return res.status(401).send("Password is incorrect");
    }

    const jwtToken = jwt.sign({id: findUser._id, role: findUser.role},  process.env.JWT_SECRET, {expiresIn: '1d'});

    res.json({
      message: "User Logged in",
      name: findUser.name,
      user: findUser.email,
      role: findUser.role,
      token: jwtToken
    })
    
  } catch (error) {
    console.error("An error occurred", error);
    return res.status(500).send("Internal error")
  }
}