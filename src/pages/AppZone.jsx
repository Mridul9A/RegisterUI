import React from 'react';
import Image_Mobile_pic from '../assets/ImageMobile.png';
import { FaGooglePlay, FaApple } from 'react-icons/fa'; // Import icons
import './styles/appZone.css';

const AppZone = () => {
  return (
    <div className="appzone-container">
      <div className="appzone-content">
        {/* Left Side */}
        <div className="appzone-left">
          <h1>Manage Your Services by Your Mobile Phone</h1>
          <p>
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.
          </p>
          <div className="appzone-buttons">
            <h3>Get the app</h3>
            <div className="app-buttons">
              <button className="appstore-button">
                <FaApple className="icon" /> Get it on App Store
              </button>
              <button className="googleplay-button">
                <FaGooglePlay className="icon" /> Get it on Google Play
              </button>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="appzone-right">
          <img
            src={Image_Mobile_pic}
            alt="Mobile Preview"
            className="appzone-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AppZone;
