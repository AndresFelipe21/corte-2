import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Contactenos from './pages/Contactenos';
import SobreNosotros from './pages/SobreNosotros';

function Home() {
  return (
    <main style={styles.main}>
      <img 
        src="/images/Marca.jpg" 
        alt="Niños jugando" 
        style={styles.image} 
      />
      <h1 style={styles.title}>¿Quienes Somos?</h1>
      <p style={styles.description}>
        <strong>Funny Mind</strong> es un proyecto dedicado a la creación de una plataforma en línea diseñada para niños con Trastornos del Desarrollo como el <strong>TEA</strong>. 
        Nuestra misión es ofrecer un entorno digital inclusivo y educativo con juegos, actividades y recursos adaptados a las necesidades de estos niños. 
        Promovemos el desarrollo de habilidades sociales, cognitivas y emocionales en un ambiente amigable.
        Además, brindamos a los padres y cuidadores información valiosa y una comunidad de apoyo.
      </p>
      <br /><br /><br />
      <img 
        src="/images/img2.PNG" 
        alt="Niños jugando" 
        style={styles.image} 
      />
      <h1 style={styles.title}>¿Qué es Funny Mind?</h1>
      <p style={styles.description}>
        El Traumatismo Craneoencefálico (TCE) es una lesión en la cabeza que afecta el cerebro, causada por un golpe, sacudida o impacto. Puede tener una amplia gama de gravedad,
        desde leves con síntomas temporales hasta graves con consecuencias a largo plazo. El TCE puede afectar la función cognitiva, emocional y física, y su tratamiento y recuperación varían según la severidad de la lesión.
      </p>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div style={styles.pageBackground}>
        <Header />
        <Switch> {/* Usar Switch en lugar de Routes */}
          <Route path="/" exact component={Home} /> {/* Usar component en lugar de element */}
          <Route path="/contactenos" component={Contactenos} /> {/* Usar component */}
          <Route path="/sobre-nosotros" component={SobreNosotros} /> {/* Usar component */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  pageBackground: {
    backgroundImage: 'url("/images/FondoRegistro.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  },
  main: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#F5F5F5',
    marginBottom: '1.5rem',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#ffffff',
    textAlign: 'justify',
  },
};

export default App;
