import React, { useState } from "react";
import axios from "axios";

const ForCompanies = () => {
  const [job, setJob] = useState({
    name: "",
    company: "",
    post: "",
    salary: "",
    workingHours: "",
    isNew: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({
      ...job,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/job/create-jobs", job);
      alert("Job posted successfully!");
      setJob({
        name: "",
        company: "",
        post: "",
        salary: "",
        workingHours: "",
        isNew: false,
      });
    } catch (error) {
      alert("There was an error posting the job!");
      console.error("There was an error posting the job!", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Name:</label>
          <input
            type="text"
            name="name"
            value={job.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            name="company"
            value={job.company}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Post:</label>
          <input
            type="text"
            name="post"
            value={job.post}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={job.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Working Hours:</label>
          <input
            type="text"
            name="workingHours"
            value={job.workingHours}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Is New:</label>
          <input
            type="checkbox"
            name="isNew"
            checked={job.isNew}
            onChange={() => setJob({ ...job, isNew: !job.isNew })}
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default ForCompanies;
