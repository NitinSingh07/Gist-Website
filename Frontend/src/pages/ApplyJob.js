import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ApplyJob = () => {
  const { jobId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    experience: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    console.log("Job ID:", jobId);
    console.log("Form Data:", formDataToSend);

    try {
      await axios.post(
        `http://localhost:4000/job/apply/${jobId}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Application submitted successfully");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Error submitting application");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" required />
      <input
        name="phone"
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="experience"
        onChange={handleChange}
        placeholder="Experience (years)"
        required
      />
      <input type="file" onChange={handleFileChange} required />
      <button type="submit">Apply for Job</button>
    </form>
  );
};

export default ApplyJob;
