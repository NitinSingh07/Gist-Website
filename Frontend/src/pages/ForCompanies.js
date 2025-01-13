import React, { useState } from "react";
import axios from "axios";
import "../styles/pages/_forcompanies.scss";

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
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/job/create-jobs`,
        job
      );
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
    <div className="form-container">
      <h1 className="form-heading">Post a New Job</h1>
      <form className="job-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="company">Company Name:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={job.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="post">Post:</label>
          <input
            type="text"
            id="post"
            name="post"
            value={job.post}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={job.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="workingHours">Working Hours:</label>
          <input
            type="text"
            id="workingHours"
            name="workingHours"
            value={job.workingHours}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group form-checkbox">
          <label htmlFor="isNew">
            <input
              type="checkbox"
              id="isNew"
              name="isNew"
              checked={job.isNew}
              onChange={() => setJob({ ...job, isNew: !job.isNew })}
            />
            Is New
          </label>
        </div>
        <button type="submit" className="submit-button">
          Post
        </button>
      </form>
    </div>
  );
};

export default ForCompanies;
