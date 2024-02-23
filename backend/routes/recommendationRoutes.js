const express = require("express");
const router = express.Router();
const fertilizerController = require("../controllers/fertilizerController");
const cropController = require('../controllers/cropController')

router.post(
  "/fertilizer-recommendation",
  fertilizerController.fertilizerRecommendation
);

router.post(
  "/crop-recommendation",
  cropController.cropRecommendation
);

module.exports = router;
