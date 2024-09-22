import React, { useState } from 'react';
import './Faqs.css'

const faqData = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to select countries."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you'll receive an email with the tracking details."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you'll receive an email with the tracking details."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you'll receive an email with the tracking details."
  }
];

function FAQSection() {
  // State to track the index of the currently expanded question
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle function to handle question expansion and collapse
  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Collapse if it's already expanded
  };

  return (
    <div className="faq-section">
      <p>FAQs</p>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span>{expandedIndex === index ? 'x' : '+'}</span> {/* Toggle between + and - */}
          </div>
          {expandedIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQSection;
