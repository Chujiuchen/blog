import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE email=? OR username=?";
  db.query(q, [req.body.email, req.body.username], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length) return res.status(409).json("User already exists!");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const q = "INSERT INTO users (username, email, password) VALUES (?,?,?)";
    db.query(q, [req.body.username, req.body.email, hash], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: err });
      }
      return res.status(200).json({ message: "User created successfully" });
    });
  });
};
// Function for user login
export const login = (req, res) => {
  // SQL query to retrieve user data by username
  const q = "SELECT * FROM users WHERE username=?";
  // Execute the SQL query with user input username
  db.query(q, [req.body.username], (err, result) => {
    // Handle any database error by returning a 500 status with the error object
    if (err) return res.status(500).json(err);
    // If no user data is returned, send a 404 status with a message
    if (!result.length) return res.status(404).json("User not found!");

    // Retrieve the user data
    const user = result[0];
    // Compare the input password with the hashed password in the database
    const isMatch = bcrypt.compareSync(req.body.password, user.password);
    // If passwords do not match, send a 400 status with a message
    if (!isMatch) return res.status(400).json("Wrong password or username!");

    // Destructure the user object to remove the password field
    const { password, ...userData } = user;
    // Create a JWT token with the user's id
    const token = jwt.sign({ id: user.id }, "jwtkey");
    // Set the JWT token as a cookie and send 200 status with user data
    // 当前实在服务器端设置的token 不允许跨域发送到客户端
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(userData);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
