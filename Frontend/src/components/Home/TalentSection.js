import React from "react";
import { FaRocket, FaBook, FaHandsHelping, FaStar } from "react-icons/fa";
import "../../styles/pages/_home.scss";

const TalentSection = () => (
  <div className="talent-section">
    <div className="talent-column talent">
      <div className="talent-content">
        <div className="section-header">
          <div className="header-pre">Got talent?</div>
          <h2>Why job seekers love us</h2>
        </div>
        <div className="benefits-list">
          <div className="benefit-item">
            <div className="benefit-icon">
              <FaRocket />
            </div>
            <div className="benefit-description">
              Connect directly with founders at top startups - no third party
              recruiters allowed.
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">
              <FaBook />
            </div>
            <div className="benefit-description">
              Everything you need to know, all upfront. View salary, stock
              options, and more before applying.
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">
              <FaHandsHelping />
            </div>
            <div className="benefit-description">
              Say goodbye to cover letters - your profile is all you need. One
              click to apply and you're done.
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">
              <FaStar />
            </div>
            <div className="benefit-description">
              Unique jobs at startups and tech companies you can’t find anywhere
              else.
            </div>
          </div>
        </div>
        <div className="action-buttons">
          <a href="/candidates/overview" className="btn btn-secondary">
            Learn more
          </a>
          <a
            href="/jobs/signup?source=homepage&amp;source_content=got_talent_cta"
            className="btn"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
    <div className="talent-column recruit">
      <div className="talent-content">
        <div className="section-header">
          <div className="header-pre">Need talent?</div>
          <h2>Why recruiters love us</h2>
        </div>
        <div className="benefits-list">
          <div className="benefit-item">
            <div className="benefit-icon">
              <FaRocket />
            </div>
            <div className="benefit-description">
              Tap into a community of 10M+ engaged, startup-ready candidates.
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">
              <FaBook />
            </div>
            <div className="benefit-description">
              Everything you need to kickstart your recruiting — set up job
              posts, company branding, and HR tools within 10 minutes, all for
              free.
            </div>
          </div>
          <div className="benefit-item">
            <FaHandsHelping className="benefit-icon" />
            <div className="benefit-description">
              A free applicant tracking system, or free integration with any ATS
              you may already use.
            </div>
          </div>
          <div className="benefit-item">
          <div className="benefit-icon">
              <FaStar />
            </div>
            <div className="benefit-description">
              Let us handle the heavy-lifting with RecruiterCloud. Our new
              AI-Recruiter scans 500M+ candidates, filters it down based on your
              unique calibration, and schedules your favorites on your calendar
              in a matter of days.
            </div>
          </div>
        </div>
        <div className="action-buttons">
          <a href="/recruit/overview" className="btn btn-secondary">
            Learn more
          </a>
          <a href="/onboarding/recruit/" className="btn">
            Sign up
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default TalentSection;
