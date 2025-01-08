import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}><Link href="/">Home</Link></li>
        <li style={styles.li}><Link href="/projects">Projects</Link></li>
        <li style={styles.li}><Link href="/experiences">Experiences</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#0070f3',
    padding: '10px',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  li: {
    color: 'white',
  },
};
