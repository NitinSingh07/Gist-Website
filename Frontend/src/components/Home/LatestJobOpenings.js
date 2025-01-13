import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LatestJobOpenings = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/job/get-jobs`
        );
        setJobListings(response.data);
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="jobs-container">
      <div className="jobs-section">
        <div className="container">
          <div>
            <hr className="horizontal-line" />
            <h2 className="job-title">Latest Jobs</h2>
          </div>
          <div>
            <div className="job-band first">
              <div className="job-name">
                <strong>Company</strong>
              </div>
              <div className="job-country">
                <strong>Position</strong>
              </div>
              <div className="job-country">
                <strong>Salary</strong>
              </div>
              <div className="job-country">
                <strong> Work Hours</strong>
              </div>
              <div className="job-apply" style={{ marginRight: 20 }}>
                <strong>Apply</strong>
              </div>
            </div>
            <div className="careers-list">
              {jobListings.map((job) => (
                <div className="job-band" key={job.id}>
                  <div className="job-country ">{job.company}</div>
                  <div className="job-post">{job.post}</div>
                  <div className="job-salary">{job.salary} per annum</div>
                  <div className="job-workingHours">
                    {job.workingHours} hours/day
                  </div>
                  <div className="job-apply">
                    <Link to="/job-seekers" className="apply-btn">
                      Apply
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Link to="/job-seekers" className="check-btn">
              Check All Job Openings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestJobOpenings;
