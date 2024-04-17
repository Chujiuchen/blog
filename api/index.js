import express from "express";

const app = express();

app.use(express.json());

app.listen(5174, () => {
  console.log("Server is running on port 5174");
});
