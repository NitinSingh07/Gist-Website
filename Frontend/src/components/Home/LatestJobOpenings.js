import React, { useEffect, useState } from "react";
import axios from "axios";

const LatestJobOpenings = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:4000/job/get-jobs");
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
                <strong>Speciality</strong>
              </div>
              <div className="job-country">
                <strong>Trust</strong>
              </div>
              <div className="job-apply" style={{ marginRight: 20 }}>
                <strong>Apply</strong>
              </div>
            </div>
            <div className="careers-list">
              {jobListings.map((job) => (
                <div className="job-band" key={job.id}>
                  <div className="job-country">{job.company}</div>
                  <div className="job-post">{job.post}</div>
                  <div className="job-salary">{job.salary}</div>
                  <div className="job-workingHours">{job.workingHours}</div>
                  <div className="job-apply">
                    <a href="careers" className="apply-btn">
                      Apply
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <a href="careers" className="check-btn">
              Check All Job Openings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestJobOpenings;
