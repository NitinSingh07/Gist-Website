import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header"; // Import the Header component
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForJobSeekers from "./pages/ForJobSeekers";
import ForCompanies from "./pages/ForCompanies";
import ApplyJob from "./pages/ApplyJob";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/companies" element={<ForCompanies />} />
          <Route path="/job-seekers" element={<ForJobSeekers />} />
          <Route path="/apply/:jobId" element={<ApplyJob />} />
          {/* <Route path="/notification" element={<Notifications />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
