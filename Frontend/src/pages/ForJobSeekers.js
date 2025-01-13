import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/pages/_forjobseekers.scss";
import { useNavigate } from "react-router-dom";

const ForJobSeekers = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/job/get-jobs`
        );
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };

    const eventSource = new EventSource(
      `${process.env.REACT_APP_BACKEND_URL}/job/stream`
    );
    eventSource.onmessage = (event) => {
      const newJob = JSON.parse(event.data);
      setJobs((prevJobs) => [...prevJobs, newJob]);
    };

    fetchJobs();

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="job-container-wrapper">
      <div className="job-container">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h3 className="job-title">
              <i className="fas fa-briefcase"></i>
              {job.name}
            </h3>
            <p className="job-info">
              <i className="fas fa-building"></i> Company: {job.company}
            </p>
            <p className="job-info">
              <i className="fas fa-user-tie"></i> Post: {job.post}
            </p>
            <p className="job-info">
              <i className="fas fa-dollar-sign"></i> Salary: {job.salary}
            </p>
            <p className="job-info">
              <i className="fas fa-clock"></i> Working Hours: {job.workingHours}
            </p>
            <span className={`job-status ${job.isNew ? "new" : "old"}`}>
              {job.isNew ? "New" : "Old"}
            </span>
            <button onClick={() => navigate(`/apply/${job._id}`)}>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForJobSeekers;
