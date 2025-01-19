import React, { useState } from 'react';
import './styles/frequentAskQuestion.css';

const FrequentAskQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'Can I recover deleted files from my desktop with this software?',
      answer: 'Yes, this software allows you to recover files deleted from your desktop, provided they have not been overwritten.',
    },
    {
      question: 'Is the software compatible with Mac and Windows?',
      answer: 'Yes, our software is compatible with both Mac and Windows operating systems.',
    },
    {
      question: 'How long does the recovery process take?',
      answer: 'The recovery time depends on the size of the disk and the number of files being recovered.',
    },
    {
      question: 'Can I recover files from external drives?',
      answer: 'Yes, the software supports recovery from external drives such as USBs and external hard drives.',
    },
    {
      question: 'Is technical support available?',
      answer: 'Yes, our support team is available 24/7 to assist you with any issues.',
    },
  ];

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
        <h3 className='title'>FAQ</h3>
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleDropdown(index)}
            >
              {item.question}
              <span className="faq-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className="bottom5">
                <button>See All</button>
            </div>
    </div>
  );
};

export default FrequentAskQuestion;
