const Job = require("../models/job.model");

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createJob = async (req, res) => {
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
