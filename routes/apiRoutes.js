const express = require("express");
const apiController = require("../controllers/apiController");

const router = express.Router();

// API Routes
router.post("/", apiController.createApi);
router.get("/", apiController.getAllApis);
router.get("/:id", apiController.getApiById);
router.put("/:id", apiController.updateApi);
router.delete("/:id", apiController.deleteApi);

module.exports = router;
