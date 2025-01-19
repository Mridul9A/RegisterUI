import React from 'react';
import './styles/upperBar.css';

const UpperBar = () => {
  return (
    <div className="upper-bar">
      <a href="mailto:contact@registeraro.in"><i className="fas fa-envelope"></i>https://www.registeraro.in</a> | 
      <a href="tel:+918709165107"><i className="fas fa-phone"></i>+918447746183</a> | 
      <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> |
      <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a> |
      <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a> |
      <a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest"></i></a>
    </div>
  );
};

export default UpperBar;
