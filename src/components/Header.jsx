import React from 'react';
import { Link } from 'react-router-dom';  // Importar Link de react-router-dom

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src="/images/Logo.PNG" alt="Logo" style={styles.logoImage} />
        {/* Usar Link para redirigir al inicio */}
        <Link to="/" style={styles.logoText}>Funny Mind</Link> 
      </div>
      <nav style={styles.nav}>
        <Link to="/sobre-nosotros" style={styles.button}>Sobre Nosotros</Link>  {/* Usar Link en lugar de <a> */}
        <Link to="/contactenos" style={styles.button}>Contáctenos</Link>  {/* Usar Link en lugar de <a> */}
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#20B2AA', // azul agua marina
    color: '#fff',
    padding: '1rem 2rem',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '40px', // Ajusta el tamaño del logo
    height: '40px', // Mantén la proporción del logo
    marginRight: '10px', // Espacio entre el logo y el texto
  },
  logoText: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    textDecoration: 'none',  // Eliminar subrayado del texto
    color: '#fff',  // Asegúrate de que el texto sea blanco
  },
  nav: {
    display: 'flex',
    gap: '1.5rem', // más separación entre los botones
  },
  button: {
    display: 'inline-block',
    padding: '0.7rem 1.2rem',
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    fontSize: '1rem',
  },
};

export default Header;
