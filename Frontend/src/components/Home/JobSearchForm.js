import React, { useState } from 'react';
import "../../styles/pages/_home.scss"

const JobSearchForm = () => {
  const [keyword, setKeyword] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [jobLocation, setJobLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search logic here
    console.log('Searching...');
  };

  return (
    <form action="https://kcr.ie/job-listing" className="job-search-form" onSubmit={handleSearch}>
      <h2 className="form-title">I AM LOOKING FOR A JOB IN</h2>
      <div className="form-holder-wrap">
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Keywords"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <strong className="sub-title-note">(Example: Job Title)</strong>
          </div>
          <div className="form-group">
            <select
              className="fake-select"
              value={jobCategory}
              onChange={(e) => setJobCategory(e.target.value)}
            >
              <option value="">Select Job Categories</option>
              <option value="allied-health">Allied Health</option>
              <option value="mental-health">Mental Health</option>
              {/* Add other options */}
            </select>
            <strong className="sub-title-note">(Example: Nursing, Mental Health)</strong>
          </div>
          <div className="form-group">
            <select
              className="fake-select"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
            >
              <option value="">Select Job Locations</option>
              <option value="international">International</option>
              <option value="uk">UK</option>
              {/* Add other options */}
            </select>
            <strong className="sub-title-note">(Example: London, Dublin)</strong>
          </div>
        </div>
        <div className="form-btn-wrap">
          <button type="submit" className="btn btn-default">Search Jobs</button>
          <a href="javascript:void(0)" className="more-filters-opener">More Search Options</a>
        </div>
      </div>
    </form>
  );
};

export default JobSearchForm;
