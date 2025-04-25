import React from "react";

const SobreNosotros = () => {
    return (
        <main style={styles.main}>
            <br />
            <h1 style={styles.title}>Sobre Nosotros</h1>
            <img
                src="/images/img1.Png"
                alt="funny-mind"
                style={styles.image} 
            />
            <h2 style={styles.subtitle}>Nuestros Servicios:</h2>
            <p style={styles.description}>
                Buscamos una mejora y poder ayudar a tus hijos para una recuperación más pronta,
                con una manera divertida y saludable para ellos.
            </p>
            <br /> <br />
            <img
                src="/images/img3.Png"
                alt="funny-mind"
                style={styles.image} 
            />
            <h2 style={styles.subtitle}>Diagnosticos:</h2>
            <p style={styles.description}>
                El control especializado y el manejo adecuado de los resultados recolectados son fundamentales para monitorear el progreso 
                de los pacientes. Esto no solo ayuda a evaluar la efectividad de los tratamientos, 
                sino que también permite ajustar las estrategias terapéuticas según sea necesario.
            </p>

        </main>
    );
};

const styles = {
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
      image: {
        width: '250px',
        height: 'auto',
        marginButtom: '1rem'
      },
      subtitle: {
        color: "#F5F5F5"
      },
      description: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: '#ffffff',
        textAlign: 'justify',
      }
}

export default SobreNosotros;