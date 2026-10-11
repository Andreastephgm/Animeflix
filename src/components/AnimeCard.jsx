import '../styles/indexStyles.css';

export function AnimeCard({ titulo, imagen, genero }) {
  return (
    <div className="anime-card">
      <img src={imagen} alt={titulo} />
      <div className="anime-card-content">
        <h3>{titulo}</h3>
        <span>{genero}</span>
      </div>
    </div>
  );
}