import React, { useEffect, useState } from "react";
import axios from "axios";

const ForJobSeekers = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:4000/job/get-jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };

    const eventSource = new EventSource("http://localhost:4000/job/stream");
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
    <div>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.name}</h3>
          <p>Company: {job.company}</p>
          <p>Post: {job.post}</p>
          <p>Salary: {job.salary}</p>
          <p>Working Hours: {job.workingHours}</p>
          <p>{job.isNew ? "New" : "Old"}</p>
        </div>
      ))}
    </div>
  );
};

export default ForJobSeekers;
