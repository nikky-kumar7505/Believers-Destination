import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const ArrowIcon = ({ isOpen }) => (
    <svg
      className={`arrow-icon ${isOpen ? 'arrow-icon--open' : ''}`}
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
    </svg>
  );

  const HamburgerIcon = () => (
    <svg viewBox="0 0 512 512" height="1.5em" width="1.5em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
    </svg>
  );

  const CloseIcon = () => (
    <svg viewBox="0 0 512 512" height="1.5em" width="1.5em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" />
    </svg>
  );

  const dropdownItems = {
    plans: [
      { label: 'Basic Plan', href: '/plans/basic' },
      { label: 'Premium Plan', href: '/plans/premium' },
      { label: 'Pro Plan', href: '/plans/pro' },
    ],
    schedules: [
      { label: 'Weekly Schedule', href: '/schedules/weekly' },
      { label: 'Monthly Schedule', href: '/schedules/monthly' },
    ],
    results: [
      { label: '2024 Results', href: '/results/2024' },
      { label: '2023 Results', href: '/results/2023' },
    ],
  };

  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        <a href="/" onClick={closeMobileMenu}>
          <img
            alt="CoreBTR Logo"
            src="https://cdn.dribbble.com/userupload/47577791/file/25dd269a09491e2a44c8437764fb5473.png"
          />
        </a>
      </div>

      <nav className={`web-nav ${isMobileMenuOpen ? 'web-nav--mobile-open' : ''}`}>
        <a href="/" onClick={closeMobileMenu}>Home</a>
        <a href="https://drzainabvora.com/about" target="_blank" rel="noreferrer" onClick={closeMobileMenu}>
          About Dr. ZV
        </a>
        <a href="/corebtr-offline" onClick={closeMobileMenu}>CoreBTR Offline</a>
        <a href="/corebtr-bootcamp" className="active" onClick={closeMobileMenu}>
          CoreBTR Bootcamp
        </a>
        <a href="/workbooks" onClick={closeMobileMenu}>Workbooks</a>

        {Object.entries({
          plans: 'Buy New Plans',
          schedules: 'Schedules',
          results: 'Results',
        }).map(([key, label]) => (
          <div key={key} className="dropdown-container">
            <button
              className="dropdown-trigger"
              onClick={() => toggleDropdown(key)}
              aria-expanded={openDropdown === key}
            >
              <span className="dropdown-text">{label}</span>
              <ArrowIcon isOpen={openDropdown === key} />
            </button>
            {openDropdown === key && (
              <div className="dropdown-menu">
                {dropdownItems[key].map((item) => (
                  <a key={item.href} href={item.href} onClick={closeMobileMenu}>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        <a href="/blogs" onClick={closeMobileMenu}>Blogs</a>
        <a
          className="login-signup-cta"
          href="https://portal.corebtr.com/login"
          target="_blank"
          rel="noreferrer"
        >
          Login | Signup
        </a>
      </nav>

      <div className="hamburger">
        <button
          className="hamburger-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;