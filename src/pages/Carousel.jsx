import React from 'react';
import './styles/carousel.css';
import carousel_right from '../assets/carousel_right.png';

const Carousel = () => {
    return (
        <div className="carousel-container">
            <div className="left-side">
                <p>★ Good Rating ★★★★★</p>
                <h1>Your trusted partner for compliance business needs.</h1>
                <p>______</p>
                <p>An online business compliance platform that helps entrepreneurs and other individuals with various registrations, tax filings, and other legal matters.</p>
                <p className="stats">
                    <span className="stat-item">
                        <span className="icon"><i className="fas fa-star"></i></span> 4.5
                        <span className="label">Customer Rating</span>
                    </span>
                    <span className="stat-item">
                        <span className="icon"><i className="fas fa-users"></i></span> 20,000+
                        <span className="label">Clients</span>
                    </span>
                    <span className="stat-item">
                        <span className="icon"><i className="fas fa-chart-line"></i></span> 99.8%
                        <span className="label">Financial Stability</span>
                    </span>
                </p>

                <div>
                    <button className="talk-expert-btn1">Talk To An Expert</button>
                    <span className="see-how-it-works">See how it works</span>
                </div>
            </div>

            <div className="right-side">
                <img src={carousel_right} alt="carousel_right" className="carousel_right" />
            </div>
        </div>
    );
}

export default Carousel;
