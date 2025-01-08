export default function Footer() {
    return (
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f5f5f5',
    },
  };
  