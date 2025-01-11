const Job = require("../models/job.model");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Define the applyForJob function
const applyForJob = async (req, res) => {
  const { name, phone, email, experience } = req.body;
  const jobId = req.params.jobId;

  try {
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    // Check if a file was uploaded
    if (req.file) {
      job.applicants.push({
        name,
        phone,
        email,
        experience,
        resume: req.file.path, // Save the file path
      });
    } else {
      return res.status(400).json({ message: "Resume file is required" });
    }

    await job.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createJob = async (req, res) => {
  const job = new Job({
    company: req.body.company,
    post: req.body.post,
    salary: req.body.salary,
    workingHours: req.body.workingHours,
    isNew: req.body.isNew,
  });

  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getJobs, createJob, applyForJob, upload };
