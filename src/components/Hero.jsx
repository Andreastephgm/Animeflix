import '../styles/indexStyles.css';

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>¡El mejor anime en un solo lugar!</h1>
        <p>Explora, descubre y disfruta de tus historias favoritas al instante.</p>
        <a href="#catalogo" className="btn-hero">Ver Catálogo</a>
      </div>
    </section>
  );
}