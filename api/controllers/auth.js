import { db } from "../db.js";
import bcrypt from "bcryptjs";

db.query;

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
export const login = (req, res) => {};
export const logout = (req, res) => {};
