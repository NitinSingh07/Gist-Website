import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import JobSearchForm from '../components/Home/JobSearchForm';
import LatestJobOpenings from '../components/Home/LatestJobOpenings';
import TalentSection from '../components/Home/TalentSection';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <JobSearchForm/>
      <LatestJobOpenings/>
      <TalentSection/>
    </div>
  );
};

export default Home;
