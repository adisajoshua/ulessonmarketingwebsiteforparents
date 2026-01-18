import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
  const steps = [
    {
      id: 'spark',
      anchor: 'spark',
      text: 'We turn "I have to" into "I want to." Our media-rich lessons are designed to spark genuine curiosity, making study time the highlight of your child’s day—not a battle.',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="20" fill="white" stroke="#ea7052" strokeWidth="2" strokeDasharray="4 4"/>
          <path d="M60 20V40M60 80V100M20 60H40M80 60H100M88 32L74 46M46 74L32 88M88 88L74 74M46 46L32 32" stroke="#301446" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="60" cy="60" r="10" fill="#ea7052"/>
        </svg>
      )
    },
    {
      id: 'guide',
      anchor: 'guide',
      text: 'Africa’s best teachers, available 24/7. Complex concepts are broken down into simple, memorable stories that stick, giving your child the unfair advantage in every exam.',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M20 50L60 30L100 50L60 70L20 50Z" stroke="#301446" strokeWidth="4" strokeLinejoin="round"/>
          <path d="M30 55V75C30 75 45 85 60 85C75 85 90 75 90 75V55" stroke="#301446" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="60" cy="45" r="8" fill="#68bc98" opacity="0.6"/>
          <path d="M100 50V75" stroke="#301446" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      ),
      isAlt: true
    },
    {
      id: 'shield',
      anchor: 'shield',
      text: 'Our dedicated hardware provides a secure ecosystem. No social media, no YouTube distractions. Just 100% focused, distraction-free learning environment for your genius.',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M60 20C40 20 25 25 25 25V60C25 80 60 95 60 95C60 95 95 80 95 60V25C95 25 80 20 60 20Z" stroke="#68bc98" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M45 55L55 65L75 45" stroke="#68bc98" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="60" cy="50" r="30" stroke="#301446" strokeWidth="1" strokeDasharray="6 6" opacity="0.3"/>
        </svg>
      )
    },
    {
      id: 'rise',
      anchor: 'rise',
      text: 'The result? A confident, self-led learner ready to conquer exams and lead the future. We bridge the gap between where they are and their full potential.',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M20 90L45 65L65 75L100 35" stroke="#ea7052" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M100 35H80M100 35V55" stroke="#ea7052" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="100" cy="35" r="6" fill="#68bc98"/>
        </svg>
      ),
      isAlt: true
    }
  ];

  return (
    <section className="philosophy">
      {/* Concave Inward Curve (Smile Shape) */}
      <div className="philosophy__divider">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            /* This fills the AREA BELOW THE SMILE with orange color. The top remains transparent (Hero background) */
            d="M0,150 L1440,150 L1440,0 C960,150 480,150 0,0 Z" 
            fill="var(--cta-soul)" 
          />
        </svg>
      </div>

      <div className="philosophy__body">
        <div className="container">
          <header className="philosophy__header">
            <h2 className="philosophy__title">the uLesson way</h2>
          </header>

          <div className="philosophy__list">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className={`philosophy-wide-card ${step.isAlt ? 'philosophy-wide-card--alt' : ''}`}
              >
                <div className="philosophy-card__side philosophy-card__side--icon">
                  <div className="philosophy-card__illustration">
                    {step.icon}
                  </div>
                </div>
                
                <div className="philosophy-card__anchor">
                  {step.anchor}
                </div>
                
                <div className="philosophy-card__side philosophy-card__side--text">
                  {step.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
