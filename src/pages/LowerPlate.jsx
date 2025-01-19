import React from 'react';
import './styles/lowerPlate.css';

const LowerPlate = () => {
  return (
    <div className="lower-plate">
      <div>
        <i className="fas fa-file-alt"></i>
        Fill up application form
      </div>
      <div>
        <i className="fas fa-credit-card"></i>
        Make Online Payment
      </div>
      <div>
        <i className="fas fa-cogs"></i>
        Executive will Process Application
      </div>
      <div>
        <i className="fas fa-envelope"></i>
        Get Confirm mail
      </div>
    </div>
  );
};

export default LowerPlate;
