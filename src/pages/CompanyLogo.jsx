import React from 'react';

const CompanyLogo = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <img src="/images/coinbase.svg" alt="Coinbase Logo" style={{ width: '50px', height: 'auto' }} />
      <img src="/images/spotify.svg" alt="Spotify Logo" style={{ width: '50px', height: 'auto' }} />
      <img src="/images/slack.png" alt="Slack Logo" style={{ width: '50px', height: 'auto' }} />
      <img src="/images/dropbox.svg" alt="Dropbox Logo" style={{ width: '50px', height: 'auto' }} />
      <img src="/images/webflow.svg" alt="Webflow Logo" style={{ width: '50px', height: 'auto' }} />
      <img src="/images/zoom.svg" alt="Zoom Logo" style={{ width: '50px', height: 'auto' }} />
    </div>
  );
};

export default CompanyLogo;
