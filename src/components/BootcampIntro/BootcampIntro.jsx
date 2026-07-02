import './BootcampIntro.css';

const BootcampIntro = () => {
  return (
    <section className="bootcamp-container">
      {/* Interested Floating Button */}
      <div className="interested-btn-wrap">
        <button className="interested-btn">
          Interested in CoreBTR ?
        </button>
      </div>

      <div className="bootcamp-content">
        <h1>
          Core<span>BTR</span> Bootcamp
        </h1>
        <h3>Learn with Dr. Zainab Vora. Transform with the System.</h3>
        <p>
          This is where concepts finally make sense. Where revision becomes structured
          and where your preparation starts moving in the right direction.{' '}
          <b>At coreBTR Bootcamp, </b>
          you're not just attending classes, you're learning directly under
          <b> Dr. Zainab Vora</b>, with a system designed to help you{' '}
          <b>stay consistent, focused, and exam-ready.</b> You don't just study more,
          you study better. <b>Start Learning Smarter.</b>
        </p>
      </div>
    </section>
  );
};

export default BootcampIntro;