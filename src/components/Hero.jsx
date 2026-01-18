import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <span className="hero__badge">NEW: LEARN AI TOGETHER</span>
            <h1 className="hero__title">
              Learn AI <br />
              <span className="marker-underline">together,</span> <br />
              side by side.
            </h1>
            <p className="hero__description">
              Experience the future of distraction-free learning with uLesson. 
              Build skills and exchange ideas through peer-powered curiosity.
            </p>
            <div className="hero__actions">
              <a href="#cta" className="btn btn-primary">Try for free now</a>
              <span className="hero__subaction">No credit card required</span>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-container">
              {/* Artwork 1: Static Star/Decoration */}
              <div className="hero__artwork hero__artwork--1">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M30 5L35 25L55 30L35 35L30 55L25 35L5 30L25 25L30 5Z" stroke="var(--accent-soul)" strokeWidth="2" fill="none"/>
                </svg>
              </div>

              <div className="hero__image-wrapper clip-jagged-2">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop" 
                  alt="Students learning together" 
                  className="hero__image clip-jagged-1"
                />
              </div>

              {/* Artwork 2: Dashed Circle */}
              <div className="hero__artwork hero__artwork--2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="var(--soft-soul)" strokeWidth="2" strokeDasharray="4 4"/>
                </svg>
              </div>

              {/* Artwork 3: Rating Card */}
              <div className="hero__artwork hero__artwork--3">
                 <div className="hero__floating-card">
                    {/* 5 Identical Hand-drawn Stars in a line */}
                    <svg width="125" height="25" viewBox="0 0 125 25" fill="none">
                      {[0, 25, 50, 75, 100].map((x, i) => (
                        <path 
                          key={i}
                          d={`M${x + 12} 2 L${x + 15} 10 L${x + 23} 12 L${x + 16} 14 L${x + 18} 22 L${x + 12} 17 L${x + 6} 22 L${x + 8} 14 L${x + 1} 12 L${x + 9} 10 L${x + 12} 2Z`} 
                          fill={i % 2 === 0 ? "var(--accent-soul)" : "var(--soft-soul)"} 
                          stroke={i % 2 === 0 ? "var(--accent-soul)" : "var(--soft-soul)"} 
                          strokeWidth="1" 
                        />
                      ))}
                    </svg>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
