import React from 'react';
import './styles/aboutus.css';
import about_us_pic from '../assets/aboutUs.png';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Left side */}
      <div className="about-us-left">
        <h3>WELCOME TO REGISTRATION.IN</h3>
        <h1>About Register Karo</h1>
        <div className="about_register_karo">
          <p>
            We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple
            of years, and I'm extremely pleased with their performance, ability to execute, and willingness to adapt in
            our ever-changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction.
            He has built a solid team that has consistently delivered on projects, thereby exceeding everyone's expectations.
          </p>
          <p>
            I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable
            outcomes.
          </p>
        </div>
        <div className="bottom1">
          <button>Learn More &#8594;</button>
        </div>
      </div>

      {/* Right side */}
      <div className="about-us-right">
        <img src={about_us_pic} alt="About Us" className="about_us_pic" />
      </div>
    </div>
  );
};

export default AboutUs;
