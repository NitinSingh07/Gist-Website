import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import "../styles/pages/_applyjob.scss";

const ApplyJob = () => {
  const { jobId } = useParams();
  const [applicant, setApplicant] = useState({
    name: "",
    phone: "",
    state: "",
    email: "",
    experience: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplicant({
      ...applicant,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setApplicant({
      ...applicant,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", applicant.name);
    formData.append("phone", applicant.phone);
    formData.append("state", applicant.state);
    formData.append("email", applicant.email);
    formData.append("experience", applicant.experience);
    formData.append("resume", applicant.resume);
    formData.append("jobId", jobId);

    try {
      const token = localStorage.getItem("token");
      await axios.post(`http://localhost:4000/job/apply/${jobId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Application submitted successfully!");
      setApplicant({
        name: "",
        phone: "",
        state: "",
        email: "",
        experience: "",
        resume: null,
      });
    } catch (error) {
      alert("There was an error submitting your application!");
      console.error("There was an error submitting your application!", error);
    }
  };

  return (
    <div className="apply-job-container">
      <h1 className="apply-job-heading">Apply for Job</h1>
      <form className="apply-job-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={applicant.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={applicant.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={applicant.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={applicant.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience (in years):</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={applicant.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Upload Resume (PDF):</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept="application/pdf"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;
