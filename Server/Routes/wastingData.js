const express = require("express");
const router = express.Router();
const wasteDataControllers = require("../Controllers/wasteData");

router.post("/floor" ,wasteDataControllers.getFloorData);

module.exports = router;
