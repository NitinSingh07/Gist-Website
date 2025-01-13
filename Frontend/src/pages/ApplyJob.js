import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ApplyJob = () => {
  const { jobId } = useParams();
  const [applicant, setApplicant] = useState({
    name: "",
    phone: "",
    state: "",
    email: "",
    experience: "",
    resumeURL: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplicant({
      ...applicant,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jsonData = {
      name: applicant.name,
      phone: applicant.phone,
      state: applicant.state,
      email: applicant.email,
      experience: applicant.experience,
      resumeURL: applicant.resumeURL, // Include the resume URL in the submission
    };

    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.REACT_APP_FORMSPREE_CODE}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        }
      );

      if (response.ok) {
        setSuccessMessage("Application submitted successfully!");
        setApplicant({
          name: "",
          phone: "",
          state: "",
          email: "",
          experience: "",
          resumeURL: "",
        });
      } else {
        console.error("Error Response:", response);
        alert(
          "Failed to submit the application. Please check the input fields."
        );
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("There was an error submitting your application.");
    }
  };

  return (
    <div className="apply-job-container">
      <h1 className="apply-job-heading">Apply for Job</h1>
      {successMessage && <p className="success-message">{successMessage}</p>}
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
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={applicant.address}
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
          <label htmlFor="resumeURL">Resume URL:</label>
          <input
            type="url"
            id="resumeURL"
            name="resumeURL"
            value={applicant.resumeURL}
            onChange={handleChange}
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
