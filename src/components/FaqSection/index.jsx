import React, { useState } from 'react';
import './FaqSection.css';

const FAQS = [
  'Does Apollo.io provide a large and rich B2B contact and company database?',
  'Can Apollo.io enable highly precise lead targeting via advanced filtering?',
  'Does Apollo.io automate outreach sequences and follow-ups?',
  'Does Apollo.io integrate smoothly with CRMs and existing sales tools?',
  'Does Apollo.io offer strong analytics and reporting on outreach performance?',
  'Is Apollo.io good value for its cost, especially for growing sales teams?',
  'Does Apollo.io support users with helpful educational resources and onboarding?',
  'Can Apollo.io help reduce time spent on manual prospecting?',
  'Does Apollo.io improve the quality of sales pipelines?',
  'Can Apollo.io scale with a business as sales needs grow?'
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-section">
      <div className="faq-card">
        <div className="faq-left">
          <h3 className="faq-heading">Frequently asked
            <span className="faq-heading-sub">questions</span>
          </h3>
        </div>

        <div className="faq-right">
          <ul className="faq-list">
            {FAQS.map((q, i) => (
              <li key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
                <button className="faq-btn" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                  <span className="faq-question">{q}</span>
                  <span className="faq-plus" aria-hidden>{openIndex === i ? '−' : '+'}</span>
                </button>

                <div className="faq-answer" style={{display: openIndex === i ? 'block' : 'none'}}>
                  <p>Yes — Apollo provides that capability. Contact lists, filtering, and outreach automation are core parts of the platform.</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
