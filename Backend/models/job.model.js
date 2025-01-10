const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  workingHours: {
    type: String,
    required: true,
  },
  isNew: {
    type: Boolean,
    default: false,
  },
  applicants: [
    {
      name: String,
      phone: String,
      email: String,
      experience: Number,
      resume: String, // URL or path to the uploaded resume
    },
  ],
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
