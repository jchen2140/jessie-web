import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  // Step 1: Create the state for night mode
  const [isNightMode, setIsNightMode] = useState(false);

  // Step 2: Check localStorage for saved mode preference on initial load
  useEffect(() => {
    const savedMode = localStorage.getItem('nightMode');
    if (savedMode) {
      setIsNightMode(savedMode === 'true');
    }
  }, []);

  // Step 3: Toggle night mode and save the preference
  const toggleNightMode = () => {
    setIsNightMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('nightMode', newMode);
      return newMode;
    });
  };

  // Apply night mode class to the body element
  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  }, [isNightMode]);

  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>
        <h6>Welcome to My Little Corner of the Web</h6>
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}><Link href="/">Home</Link></li>
        <li style={styles.navItem}><Link href="/projects">Projects</Link></li>
        <li style={styles.navItem}><Link href="/experiences">Experiences</Link></li>
        <li style={styles.navItem}><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Night Mode Button with Icons */}
      <button onClick={toggleNightMode} style={styles.nightModeButton}>
        {isNightMode ? '🌞' : '🌙'}
      </button>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: '#8E4585', // Plum background color
    color: 'white',
    fontFamily: 'Roboto, sans-serif', // Roboto font
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for a professional look
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  brand: {
    fontSize: '1.8rem',
    fontWeight: '700',
    letterSpacing: '1px',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '30px', // Space between navigation items
    margin: 0,
    padding: 0,
  },
  navItem: {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease, transform 0.3s ease', // Hover effects and smooth transition
    padding: '5px 0',
  },
  nightModeButton: {
    padding: '8px 15px',
    backgroundColor: 'transparent',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.5rem',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    marginLeft: '20px', // Adds space between nav items and night mode button
  },
};
