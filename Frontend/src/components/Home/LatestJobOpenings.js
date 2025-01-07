const LatestJobOpenings = () => {
  const jobListings = [
    {
      id: 1,
      name: "All specialties",
      country: "Health Care System in Ohio, USA",
      isNew: true,
    },
    {
      id: 2,
      name: "Mental Health",
      country: "Health And Social Care, Northern Ireland",
      isNew: false,
    },
    {
      id: 3,
      name: "Theatre",
      country: "Children’s Health Ireland",
      isNew: false,
    },
  ];

  return (
    <div className="jobs-container">
      <div className="jobs-section">
        <div className="container">
          <div>
            <hr className="horizontal-line"/>
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
              <div className="job-apply" style={{marginRight: 20}}>
                <strong>Apply</strong>
              </div>
            </div>
            <div className="careers-list">
              {jobListings.map((job) => (
                <div className="job-band" key={job.id}>
                  <div className="job-name">{job.name}</div>
                  <div className="job-country">{job.country}</div>
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
