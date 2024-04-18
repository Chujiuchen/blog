import express from "express";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // 或者指定域名 "http://example.com"
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
