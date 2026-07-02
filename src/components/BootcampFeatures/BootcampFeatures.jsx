import { useState } from 'react';
import './BootcampFeatures.css';

const BootcampFeatures = () => {
  const [activePointer, setActivePointer] = useState(2);

  // ============= DATA =============
  const pointers = [
    {
      num: '01',
      title: 'A System That Keeps You on Track',
      body: "Even the best teaching needs the right structure to deliver results. That's where the bootcamp system supports you.",
      image: 'https://cdn.dribbble.com/userupload/47178228/file/e1c7ff641f9c14e673d2ac4662ab7e95.jpg',
    },
    {
      num: '02',
      title: 'An Environment Built for Focus',
      body: 'At the Vidya Jeevan Experience Centre, everything is designed to help you stay distraction-free, consistent, and fully focused on your goal.',
      image: 'https://cdn.dribbble.com/userupload/47178228/file/e1c7ff641f9c14e673d2ac4662ab7e95.jpg',
    },
    {
      num: '03',
      title: 'Structured, Disciplined Preparation',
      body: 'A clear plan, regular testing, and continuous feedback—so you always know where you stand and what to improve.',
      image: 'https://cdn.dribbble.com/userupload/47178228/file/e1c7ff641f9c14e673d2ac4662ab7e95.jpg',
    },
  ];

  const mentors = [
    {
      name: 'Dr. Zainab Vora',
      desc: 'Mentor who guides students with clear concepts, smart strategy, and constant support to help them stay focused and succeed.',
      img: 'https://cdn.dribbble.com/userupload/47178187/file/97918da2ccaa81da8481b22b60b4d074.jpg',
      accent: '#1767be',
      accentLight: '#e8f0fb',
      delay: '0s',
    },
    {
      name: 'Dr. Ravi Sharma',
      desc: 'Bringing calm, discipline, and mental strength to keep you grounded under pressure.',
      img: 'https://cdn.dribbble.com/userupload/47178186/file/69fa3c9175036c06e72074ba55f6e82d.jpg',
      accent: '#1d204b',
      accentLight: '#eeeffe',
      delay: '0.12s',
    },
    {
      name: 'Dr. Apurv Mehra',
      desc: "Guiding you with resilience, focus, and real-world perspective. Because preparation isn't just academic—it's mental.",
      img: 'https://cdn.dribbble.com/userupload/47177977/file/93930f214f7f5feffa36f87aa9d58bd2.jpg',
      accent: '#c47d00',
      accentLight: '#fff6e0',
      delay: '0.24s',
      isActive: true,
    },
  ];

  const differentCards = [
    {
      num: '01',
      tag: 'Not Just Lectures',
      title: 'A Complete System',
      desc: 'Bootcamp Ensures Daily Testing + Analysis + Revision',
      color: 'wd2-blue',
    },
    {
      num: '02',
      tag: 'Specific Focus',
      title: 'Exam-Specific Focus',
      desc: 'Designed Exclusively for NEET PG, INI-CET and FMGE, Not a Generic Crash Course',
      color: 'wd2-gold',
    },
    {
      num: '03',
      tag: 'Structured Day-by-Day Schedule',
      title: 'Accountability & Discipline',
      desc: 'Keeps Procrastination away & Ensures Course Completion',
      color: 'wd2-blue',
    },
    {
      num: '04',
      tag: 'Unlike Traditional Classes',
      title: 'Mentorship-Driven Learning',
      desc: 'This Program Emphasizes Strategy, Consistency & Mental Conditioning along with Academics',
      color: 'wd2-gold',
    },
    {
      num: '05',
      tag: 'From Concepts to Practice',
      title: 'End-to-End Prep',
      desc: 'From Concepts -> Practice -> PYQs -> GTs -> Rapid Revision, Everything is Covered under One Roof',
      color: 'wd2-blue',
    },
  ];

  return (
    <>
      {/* ============= WHAT'S INSIDE / WHY STUDENTS PREFER ============= */}
      <div className="bootcamp-features-container">
        <section className="bootcamp-features-sections">
          <div className="bootcamp-features-what-you-get">
            {/* Header */}
            <div className="bfc-header bfc-visible">
              <div className="bootcamp-features-eyebrow">
                <span className="bootcamp-features-eyebrow-line"></span>
                <span className="bootcamp-features-eyebrow-text">WHAT'S INSIDE</span>
              </div>
              <h2 className="bootcamp-features-section-heading">
                Why Students Prefer Core<span>BTR</span> Bootcamp
              </h2>
              <p className="bootcamp-features-lead">
                Great preparation is built on both the right learning and the right environment.{' '}
                <b>At coreBTR Bootcamp, structured teaching goes hand in hand with discipline, guidance, and a system designed to keep you consistent.</b> That's what makes the experience at Vidya Jeevan Experience Centre different—<b>it's not just a venue</b> but <b>a thoughtfully built ecosystem shaped by the journeys of thousands of students.</b>
              </p>
            </div>

            {/* Split Panel */}
            <div className="bfc-split-panel bfc-visible">
              {/* Pointers */}
              <div className="bfc-pointers">
                {pointers.map((p, i) => (
                  <button
                    key={i}
                    className={`bfc-pointer-item ${activePointer === i ? 'bfc-pointer-active' : ''}`}
                    onClick={() => setActivePointer(i)}
                    aria-label={`View ${p.title}`}
                  >
                    <div className="bfc-pointer-chip">
                      <span className="bfc-pointer-num">{p.num}</span>
                    </div>
                    <div className="bfc-pointer-content">
                      <div className="bfc-pointer-title-row">
                        <h3 className="bfc-pointer-title">{p.title}</h3>
                        <span className={`bfc-pointer-arrow ${activePointer === i ? 'bfc-arrow-active' : ''}`}>
                          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                            <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                      <p className="bfc-pointer-body">{p.body}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Image Panel */}
              <div className="bfc-image-panel">
                <div className="bfc-image-inner">
                  <img
                    alt={pointers[activePointer].title}
                    className="bfc-fade-img"
                    src={pointers[activePointer].image}
                  />
                  <div className="bfc-image-overlay"></div>
                  <div className="bfc-image-badge">
                    <span className="bfc-badge-num">{pointers[activePointer].num}</span>
                    <span className="bfc-badge-label">{pointers[activePointer].title}</span>
                  </div>
                </div>
                <div className="bfc-dots">
                  {pointers.map((_, i) => (
                    <button
                      key={i}
                      className={`bfc-dot ${activePointer === i ? 'bfc-dot-active' : ''}`}
                      onClick={() => setActivePointer(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ============= MEET YOUR MENTORS ============= */}
      <section className="ms-section">
        <div className="ms-container">
          <div className="ms-header ms-visible">
            <div className="ms-eyebrow">
              <span className="ms-eyebrow-line"></span>
              <span className="ms-eyebrow-text">MEET YOUR MENTORS</span>
              <span className="ms-eyebrow-line"></span>
            </div>
            <h1 className="ms-h1">
              Mentorship That Keeps<br />
              You <span className="ms-h1-accent">Steady</span>
            </h1>
            <p className="ms-subhead">
              Guided by Dr. Zainab Vora along with Dr.Ravi Sharma &amp; Dr.Apurv Mehra, you stay consistent, focused, and steady through every phase.
            </p>
          </div>

          <div className="ms-grid ms-visible">
            {mentors.map((m, i) => (
              <div
                key={i}
                className={`ms-card ${m.isActive ? 'ms-card--active' : ''}`}
                style={{
                  '--accent': m.accent,
                  '--accent-light': m.accentLight,
                  '--delay': m.delay,
                }}
              >
                <div className="ms-img-wrap">
                  <img alt={m.name} className="ms-img" src={m.img} />
                </div>
                <div className="ms-card-body">
                  <div className="ms-card-bar"></div>
                  <h3 className="ms-card-name">{m.name}</h3>
                  <p className="ms-card-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= FOOTER NOTE - Why Students Choose ============= */}
      <div className="bfc-footer-note bfc-visible">
        <div className="bfc-footer-inner">
          <div className="bfc-footer-left">
            <div className="bfc-footer-accent"></div>
            <h3 className="bfc-footer-title">Why Students Choose coreBTR Bootcamp</h3>
          </div>
          <div className="bfc-footer-right">
            <p className="bfc-footer-intro">Because they get what they need:</p>
            <ul className="bfc-footer-bullets">
              <li className="bfc-footer-bullet"><span className="bfc-bullet-dot"></span>The right teacher</li>
              <li className="bfc-footer-bullet"><span className="bfc-bullet-dot"></span>The right system</li>
              <li className="bfc-footer-bullet"><span className="bfc-bullet-dot"></span>The right environment</li>
            </ul>
            <p className="bfc-footer-closing">And at CoreBTR Bootcamp, they get all three.</p>
          </div>
        </div>
      </div>

      {/* ============= WHAT MAKES IT DIFFERENT ============= */}
      <section className="wd2-section">
        <div className="wd2-inner">
          <div className="wd2-header">
            <div className="wd2-eyebrow">
              <div className="wd2-eyebrow-line"></div>
              <span className="wd2-eyebrow-text">WHAT'S INSIDE</span>
            </div>
            <h2 className="wd2-heading">
              What Makes It <span className="wd2-heading-accent">Different</span><br />
              From Other Offline Classes
            </h2>
          </div>

          <div className="wd2-grid">
            {differentCards.map((c, i) => (
              <div key={i} className={`wd2-card ${c.color} wd2-in`} style={{ '--i': i }}>
                <div className="wd2-card-num">{c.num}</div>
                <div className="wd2-card-body">
                  <span className="wd2-card-tag">{c.tag}</span>
                  <h3 className="wd2-card-title">{c.title}</h3>
                  <p className="wd2-card-desc">{c.desc}</p>
                </div>
              </div>
            ))}
            <div className="wd2-banner wd2-in" style={{ '--i': 5 }}>
              <p className="wd2-banner-quote">
                At CoreBTR Bootcamp - <strong>We guide you all the way until you achieve your goal</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= PARKING NOTICE ============= */}
      <section className="parking-notice">
        <div className="parking-notice-card">
          <div className="parking-icon">⚠️</div>
          <h3>Parking Information</h3>
          <div className="parking-item">
            <h4>No On-Campus Parking</h4>
            <p>Parking facilities are not available within the Vidya Jeevan premises.</p>
          </div>
          <div className="parking-item">
            <h4>Parking at Your Own Risk</h4>
            <p>
              Vehicles parked outside the premises are solely the responsibility of their owners. Vidya Jeevan, its management, and staff shall not be liable for any loss, theft, damage, or other incidents involving parked vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* ============= JOIN THE BOOTCAMP CTA ============= */}
      <div className="bootcamp-cta-container">
        <section className="bootcamp-cta-info">
          <div className="bootcamp-cta-info-label">Join the Bootcamp</div>
          <p className="bootcamp-cta-info-CTA">
            If you're ready to stop feeling lost and start seeing progress - this is where it begins.
          </p>
          <p className="bootcamp-cta-info-CTA">
            Start Your Transformation with CoreBTR Bootcamp
          </p>
          <a className="active" href="/corebtr-bootcamp">Join the Bootcamp</a>
        </section>
      </div>
    </>
  );
};

export default BootcampFeatures;