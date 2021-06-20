const express = require("express");
const cors = require("cors");
const authRoutes = require("./Routes/auth");
const wastingDataRoutes = require("./Routes/wastingData");
const app = express();

app.use(express.json());
app.use(cors());


app.use(wastingDataRoutes);
app.use(authRoutes);

app.listen(5000, () => {
  console.log("Server started");
});
