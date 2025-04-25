import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Funny Mind. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#20B2AA',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    marginTop: 'auto', // importante para que empuje el footer al fondo
  },
};

export default Footer;
  