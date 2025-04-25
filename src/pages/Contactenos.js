import React from 'react';

const Contactenos = () => {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Contáctenos</h1>
      <h2 style={styles.subtitle}>Equipo De Trabajo</h2>
      <div style={styles.imageContainer}>
        <div style={styles.imageBox}>
          <img
            src="/images/juan.png"
            alt="imagen-1"
            style={styles.image}
          />
          <h1 style={styles.imageLabel}>Juan</h1>
          <ul style={styles.description}>
            <li>Desarrollador de Juegos</li>
            <li>Frontend</li>
            <li>Analista de Seguridad</li>
          </ul>
        </div>
        <br /> <br />
        <div style={styles.imageBox}>
          <img
            src="/images/andres.jpg"
            alt="imagen-2"
            style={styles.image}
          />
          <h1 style={styles.imageLabel}>Andres</h1>
          <ul style={styles.description}>
            <li>Base de Datos</li>
            <li>Ciberseguridad</li>
            <li>Logica de Juegos</li>
          </ul>
        </div>
        <br /> <br />
        <div style={styles.imageBox}>
          <img
            src="/images/luz.png"
            alt="imagen-3"
            style={styles.image}
          />
          <h1 style={styles.imageLabel}>Luz</h1>
          <ul style={styles.description}>
            <li>Psicologa</li>
            <li>Analista de Datos</li>
            <li>Diseño de Juegos</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

const styles = {
  main: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center'
  },
  title: {
    fontSize: '2.5rem',
    color: '#F5F5F5',
    marginBottom: '1.5rem',
  },
  subtitle: {
    color: "#F5F5F5"
  },
  image: {
    width: '250px',
    height: 'auto',
    marginButtom: '1rem'
  },
  imageLabel: {
    color: '#F5F5F5',
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#ffffff',
    textAlign: 'left',         
    listStylePosition: 'inside', 
    paddingLeft: '0',          
    margin: '0 auto',         
    maxWidth: '250px'          
  }
}

export default Contactenos;
