const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");

router.get("/get-jobs", jobController.getJobs);
router.post("/create-jobs", jobController.createJob);

module.exports = router;
