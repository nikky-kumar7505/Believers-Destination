import './BootcampHighlights.css';

const BootcampHighlights = () => {
  return (
    <div className="bootcamp-highlights-sections">
      <section className="bootcamp-highlights">
        {/* Image Block 1 */}
        <div className="bootcamp-highlights-image">
          <img
            alt="coreBTR BootCamp Class 2026 - Top"
            src="https://cdn.dribbble.com/userupload/47178593/file/1bfaa70f0c6507317a6cb8d3c9100c74.png"
          />
          <p className="bootcamp-highlights-subtitle-top">
            Learn The BTR Way :{' '}
            <span className="bootcamp-highlights-yellow">
              19 Subjects | System-Wise | High-Yield
            </span>
          </p>
        </div>

        {/* Content Block 1 */}
        <div className="bootcamp-highlights-content">
          <h2 className="bootcamp-highlights-title">
            Concepts. Clarity. Confidence.
          </h2>
          <p className="bootcamp-highlights-description">
            With <strong>Dr. Zainab Vora</strong>, learning is not about
            memorizing more—it's about understanding better. Complex topics are
            simplified with integrated, system-wise learning across all 19 subjects.
          </p>
          <ul className="bootcamp-highlights-points">
            <li>High-yield focus for NEET PG, INI-CET &amp; FMGE</li>
            <li>System-wise structured preparation</li>
            <li>Built for retention, recall &amp; real exam pressure</li>
          </ul>
          <p className="bootcamp-highlights-tagline">
            This is not just teaching. <span>This is the BTR approach.</span>
          </p>
        </div>

        {/* Image Block 2 */}
        <div className="bootcamp-highlights-image">
          <img
            alt="coreBTR BootCamp Class 2026 - Bottom"
            src="https://cdn.dribbble.com/userupload/47178594/file/67a6d44caf08a8edf187a3f80c9938cb.png"
          />
          <p className="bootcamp-highlights-subtitle-top">
            <span className="bootcamp-highlights-yellow">
              Real Exam Environment. Real Preparation.
            </span>
          </p>
        </div>

        {/* Content Block 2 */}
        <div className="bootcamp-highlights-content">
          <h2 className="bootcamp-highlights-title">
            Consistent Testing. Real Progress.
          </h2>
          <p className="bootcamp-highlights-description">
            <strong>After completing each subject,</strong> you'll take structured
            tests to assess your understanding and identify gaps. On non-class
            days, daily mini tests ensure you stay in the habit of solving MCQs
          </p>
          <p className="bootcamp-highlights-tagline">
            So practice becomes consistent,
            <span> not occasional.</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default BootcampHighlights;