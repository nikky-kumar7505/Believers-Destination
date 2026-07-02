import './ImportantNotice.css';

const ImportantNotice = () => {
  const notices = [
    'Seats cannot be cancelled or transferred to anyone, including friends.',
    'Seats cannot be shifted to any online plans.',
    "Registrations made using someone else's account will not be accepted.",
    'Registration will be accepted only your own account and name',
  ];

  return (
    <section className="corebtr-programs-registration-imp">
      <h3>Important Notice</h3>
      <ul>
        {notices.map((notice, index) => (
          <li key={index}>{notice}</li>
        ))}
      </ul>
    </section>
  );
};

export default ImportantNotice;