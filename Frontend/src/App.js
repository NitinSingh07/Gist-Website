import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header"; // Import the Header component
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Expertise from "./pages/Expertise";
import Resources from "./pages/Resources";
import Jobs from "./pages/Jobs";
import Recruiters from "./pages/Recruiters";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router> {/* Wrap everything inside Router */}
      <div className="App">
        <Header /> {/* Place the Header component inside the Router */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/recruiters" element={<Recruiters />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
