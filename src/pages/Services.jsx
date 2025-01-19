import React from 'react';
import './styles/services.css';

const Services = () => {
    return (
        <div className="services-container">
            <h3>WELCOME TO REGISTRATION.IN</h3>
            <h1>Explore Our Services</h1>
            <div className='row-1'>
                <div className="container">
                    <div className="service-item">
                        <div className="icon">
                            <i className="fas fa-desktop"></i>
                        </div>
                        <h2>Company Foundation</h2>
                        <p>Build web-based solutions that enhance customer experience.</p>
                        <a href="">Learn more &#8594;</a>
                    </div>
                </div>

                <div className="container">
                    <div className="service-item">
                        <div className="icon">
                            <i className="fas fa-wrench"></i>
                        </div>
                        <h2>Company Secretarial Services</h2>
                        <p>Make data-driven deciions and utilize technology to reach bussiness goals.</p>
                        <a href="">Learn more &#8594;</a>
                    </div>
                </div>

                <div className="container">
                    <div className="service-item">
                        <div className="icon">
                            <i className="fas fa-address-book"></i>
                        </div>
                        <h2>Virtual Office Address</h2>
                        <p>Foster customer relationships by effectivey serving your market.</p>
                        <a href="">Learn more &#8594;</a>
                    </div>
                </div>
            </div>

            <div className='row-2'>
                <div className="container">
                    <div className="service-item">
                        <div className="icon">
                            <i className="fas fa-building"></i>
                        </div>
                        <h2>Company Foundation</h2>
                        <p>Build web-based solutions that enhance customer experience.</p>
                        <a href="">Learn more &#8594;</a>
                    </div>
                </div>

                <div className="container">
                    <div className="service-item">
                        <div className="icon">
                            <i className="fas fa-building"></i>
                        </div>
                        <h2>Company Foundation</h2>
                        <p>Build web-based solutions that enhance customer experience.</p>
                        <a href="">Learn more &#8594;</a>
                    </div>
                </div>

                <div className="container">
                    <div className="service-item">
                        <div className="icon">
                            <i className="fas fa-building"></i>
                        </div>
                        <h2>Company Foundation</h2>
                        <p>Build web-based solutions that enhance customer experience.</p>
                        <a href="">Learn more &#8594;</a>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <button>See All</button>
            </div>

        </div>
    );
}

export default Services;
