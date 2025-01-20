import React from 'react';
import './styles/email.css';

const MailArea = () => {
  return (
    <div className='email_container'>
    <h3 className='title1'>1% OF THE INDUSTRY</h3>
    <h1 className="title2">Welcome to your new digital reality. Now</h1>
    <div className="email_submit">
        <input type="email" placeholder='Enter Your Email' /><button>Submit</button>
    </div>
    <div><span>✔️Instance results</span> <span>✔️User-Friendly interface</span> <span>✔️Personalized customised</span></div>
</div>
  )
}

export default MailArea;
