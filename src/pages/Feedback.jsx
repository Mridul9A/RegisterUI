import React from 'react';
import Slider from 'react-slick';
import './styles/feedback.css';

const Feedback = () => {
  const feedbackData = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Software Engineer',
      rating: 5,
      feedback: 'The service was excellent and exceeded my expectations!',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Product Manager',
      rating: 4,
      feedback: 'Great experience! I will definitely recommend it to others.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      role: 'Designer',
      rating: 5,
      feedback: 'The design team is fantastic. I love the results!',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="feedback-container">
      <div className="feedback-row">
        <h1 className="feedback-heading">What People Say About Us</h1>
        <Slider {...settings} className="feedback-slider">
          {feedbackData.map((item) => (
            <div key={item.id} className="feedback-card">
              <img
                src={item.image}
                alt={item.name}
                className="feedback-avatar"
              />
              <div className="feedback-content">
                <h2>{item.name}</h2>
                <p className="feedback-role">{item.role}</p>
                <p className="feedback-text">"{item.feedback}"</p>
                <div className="feedback-rating">
                  {'⭐'.repeat(item.rating)}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
