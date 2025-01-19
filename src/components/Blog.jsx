import React from 'react';
import './style/blog.css';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image3.png';
import Image4 from '../assets/Image4.png';
import Image5 from '../assets/Image5.png';
import Image6 from '../assets/Image6.png';

const Blog = () => {
    return (
        <div className="blog-container">
            <h3>EXPLORE OUR BLOG</h3>
            <h1>Accelerate Digital Transformation</h1>
            <div className="blog-item">
                <article className="blog-card">
                    <img src={Image1} alt="Small Business & Startup" />
                    <div className="blog-content">
                        <p className="blog-meta">Prabash Mishra · 1 Jan 2023 · Today</p>
                        <h1>Small Business & Startup</h1>
                        <p>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning dynasty?</p>
                    </div>
                    <div>
                        <span>Tax and Audit</span> <span>Management</span>
                    </div>
                </article>
                <article className="blog-card">
                    <img src={Image2} alt="Scale-Up Company Offer" />
                    <div className="blog-content">
                        <p className="blog-meta">Mukesh Kumar · 1 Jan 2023</p>
                        <h1>Scale-Up Company Offer</h1>
                        <p>Mental models are simple expressions of complex processes or relationships.</p>
                    </div>
                    <div>
                        <span>Tax</span> <span>Management</span> <span>Compliance</span>
                    </div>
                </article>
                <article className="blog-card">
                    <img src={Image3} alt="Growing Business Package" />
                    <div className="blog-content">
                        <p className="blog-meta">Rakhi Verma · 1 Jan 2023</p>
                        <h1>Growing Business Package</h1>
                        <p>Introduction to wireframe and its principles. Learn from the best in the industry.</p>
                    </div>
                    <div>
                        <span>Audit</span> <span>Money Back</span>
                    </div>
                </article>
                <article className="blog-card">
                    <img src={Image4} alt="Scale-Up Company Offer" />
                    <div className="blog-content">
                        <p className="blog-meta">Karan Kumar · 1 Jan 2023</p>
                        <h1>Scale-Up Company Offer</h1>
                        <p>Brief description of Blog 4...</p>
                    </div>
                    <div>
                        <span>Money</span> <span>Management</span>
                    </div>
                </article>
                <article className="blog-card">
                    <img src={Image5} alt="Scale-Up Company Offer" />
                    <div className="blog-content">
                        <p className="blog-meta">Richa Singh · 1 Jan 2023</p>
                        <h1>Scale-Up Company Offer</h1>
                        <p>Brief description of Blog 5...</p>
                    </div>
                    <div>
                        <span>Tax Return</span> <span>News</span> <span>Audit</span>
                    </div>
                </article>
                <article className="blog-card">
                    <img src={Image6} alt="Scale-Up Company Offer" />
                    <div className="blog-content">
                        <p className="blog-meta">Miss Nora · 1 Jan 2023</p>
                        <h1>Scale-Up Company Offer</h1>
                        <p>Brief description of Blog 6...</p>
                    </div>
                    <div>
                        <span>Private Limited Company</span> <span>Customer Success</span>
                    </div>
                </article>
            </div>
            <div className="bottom4">
                <button aria-label="Show More Blogs">Show More Blog &#8594;</button>
            </div>
        </div>
    );
};

export default Blog;
