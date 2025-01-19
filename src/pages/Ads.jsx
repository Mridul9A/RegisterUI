import React from 'react';
import './styles/ads.css';

const Ads = () => {
  return (
    <div className="ads-container">
        <h1>Trusted by Over 100+ Startups and Freelance Businesses</h1>
        <div className="logos">
            <img src="https://upload.wikimedia.org/wikipedia/commons/archive/5/50/20170810045745%21Oracle_logo.svg" alt="Oracle Logo" className="logo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Morpheus_logo_stacked_original.svg" alt="Morpheus Logo" className="logo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" alt="Samsung Logo" className="logo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Monday_logo.svg" alt="Monday.com Logo" className="logo" />
            <img src="https://media.licdn.com/dms/image/v2/D4E0BAQHy-kB8kYsU5Q/company-logo_200_200/company-logo_200_200/0/1693247621202/segment_io_logo?e=1745452800&v=beta&t=E-ql24Iprl99rUZPEW8s-k5G7W7zf5eI3jEbenQlWF0" alt="Segment Logo" className="logo" />
        </div>
    </div>
  );
}

export default Ads;
