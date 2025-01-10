const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");
const { upload } = jobController;

router.get("/get-jobs", jobController.getJobs);
router.post("/create-jobs", jobController.createJob);
router.post(
  "/apply/:jobId",
  upload.single("resume"),
  jobController.applyForJob
);

module.exports = router;
