import './Programs.css';

const Programs = () => {
  const CheckIcon = () => (
    <svg
      className="check-icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#1a56db" />
      <path
        d="M7 12l3.5 3.5L17 9"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const programs = [
    {
      id: 1,
      title: 'Program 1',
      subtitle: 'Live Classes + Personal Cubicle with Desktop for CBT / self study',
      features: [
        'Subject wise computer based test followed by live discussion',
        'Grand Tests (every 15 days) followed by live discussion',
        'Weekly doubt solving sessions',
        'Daily Mini Tests on CBT Desktop',
        'Personal Desktop access for self study',
      ],
      fees: 'Rs 37,000',
      variant: 'program1',
    },
    {
      id: 2,
      title: 'Program 2',
      subtitle: 'Relay Classes + Personal Cubicle for self study (No desktop)',
      features: [
        'Subject wise computer based test on Desktop followed by discussion through relay',
        'GT (every 15 days) followed by discussion through relay',
        'Weekly doubt solving sessions through relay',
        'Daily Mini Tests on own device',
        <>Personal cubicle space for self study <b>(No desktop)</b></>,
      ],
      fees: 'Rs 32,000',
      variant: 'program2',
    },
  ];

  return (
    <section className="corebtr-programs-container">
      {/* Header */}
      <div className="corebtr-programs-header">
        <h2>
          Core<span>BTR</span> NEET PG T&D Bootcamp at Vidya Jeevan
        </h2>
        <h3>Starts From 28th May till 30th Aug 2026</h3>
        <h3>3 Months offline Test &amp; Discussion Program</h3>
        <p className="corebtr-programs-lead">
          An intensive, high-impact offline program for serious
          <b> NEET PG Aspirants.<br /> Designed for focused learning,</b>{' '}
          disciplined preparation, and a completely distraction-free environment.
        </p>
      </div>

      {/* Program Cards */}
      <div className="corebtr-programs-grid">
        {programs.map((program) => (
          <div
            key={program.id}
            className={`corebtr-programs-card ${program.variant}`}
          >
            <h3 className="corebtr-programs-title">{program.title}</h3>
            <p className="corebtr-programs-subtitle">{program.subtitle}</p>

            <ul className="corebtr-programs-list">
              {program.features.map((feature, index) => (
                <li key={index}>
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="corebtr-programs-fees">
              <div className="corebtr-programs-fees-label">
                Fees:{' '}
                <span className="corebtr-programs-fees-amount">
                  {program.fees}
                </span>
              </div>
            </div>

            <a className={`corebtr-programs-enroll-btn ${program.variant}-btn`} href="/corebtr-bootcamp">
            Registration Closed
            </a>
          </div>
        ))}
      </div>

      {/* Registration Notice Box */}
      <div className="corebtr-programs-registration-box">
        <h3>Registrations will be on First come-first serve basis</h3>
        <div className="corebtr-programs-registration-time">
          Registration may close anytime without prior notice
          <br />
          No refund / No transfer after registration
        </div>
      </div>
    </section>
  );
};

export default Programs;