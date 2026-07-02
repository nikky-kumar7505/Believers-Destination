import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsExpanded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`bch ${isExpanded ? 'bch--expand' : ''}`}
      aria-label="Bootcamp Hero"
    >
      <div className="bch__base"></div>

      {/* Center Image */}
      <div className="bch__img-wrap">
        <img
          alt="Dr. Zainab Vora"
          className="bch__img"
          src="https://cdn.dribbble.com/userupload/47126326/file/a48085bc495e7b166b68b527cfcd1c4b.png"
        />
        <div className="bch__img-fade bch__img-fade--top"></div>
        <div className="bch__img-fade bch__img-fade--left"></div>
        <div className="bch__img-fade bch__img-fade--right"></div>
        <div className="bch__img-fade bch__img-fade--bottom"></div>
      </div>

      {/* Desktop: Left Title */}
      <div className="bch__left-title">
        <span className="bch__left-title-text">
          CoreBTR<br />BOOTCAMP
        </span>
        <span className="bch__r-place">at Vidya Jeevan, Greater Noida</span>
      </div>

      {/* Desktop: Right Top */}
      <div className="bch__right bch__right--top">
        <span className="bch__r-by">by</span>
        <span className="bch__r-name">Dr. Zainab Vora</span>
        <span className="bch__r-cta">
          WHEN CONCEPTS CLICK <br /> EVERYTHING CHANGES
        </span>
      </div>

      {/* Desktop: Right Bottom */}
      <div className="bch__right bch__right--bottom">
        <span className="bch__r-cta2">
          REGISTRATION CLOSED FOR <br /> NEET PG BOOTCAMP
        </span>
      </div>

      {/* Tagline */}
      <p className="bch__tagline">Crack the exam. Own the rank.</p>

      {/* Scroll Indicator */}
      <div className="bch__scroll" aria-hidden="true">
        <span></span>
      </div>

      {/* Mobile Layout */}
      <div className="bch__mob-top">
        <span className="bch__mob-top-text">CoreBTR</span>
        <span className="bch__mob-top-text">BOOTCAMP</span>
      </div>

      <div className="bch__mob-bottom">
        <span className="bch__mob-bottom-name">Dr. Zainab Vora</span>
        <span className="bch__mob-bottom-sub">at Vidya Jeevan, Greater Noida</span>
        <span className="bch__mob-bottom-cta">
          When concepts click, everything changes
        </span>
        <span className="bch__mob-cta">
          REGISTRATION CLOSED FOR NEET PG BOOTCAMP
        </span>
      </div>

      {/* GET THE APP - Side Tab */}
      <button className="get-app-tab" aria-label="Get the app">
        <span className="get-app-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
        </span>
        <span className="get-app-text">GET THE APP</span>
        <span className="get-app-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </span>
      </button>
    </section>
  );
};

export default Hero;