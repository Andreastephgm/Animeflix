import "../styles/watchView.css";

export function WatchView({ anime, setCurrentView }) {
  // Mantenemos animeData con valores por defecto de respaldo
  const animeData = anime || {
    title: "Solo Leveling",
    image: "/src/assets/soloLeveling.jpg",
    genre: "Acción / Fantasía",
    rating: "9.9 / 10",
    year: "2024",
    episodes: "Ep. 24",
    description: "En un mundo donde cazadores luchan contra monstruos, el débil cazador Sung Jinwoo obtiene la habilidad única de subir de nivel sin límites.",
    trailerId: "dR7DW4ykE8k"
  };

  return (
    <main className="watch-view-main">
      {/* Botón para regresar al Home */}
      <button className="back-to-home-btn" onClick={() => setCurrentView("home")}>
        <i className="fa-solid fa-arrow-left"></i> Volver al Catálogo
      </button>

      {/* Reproductor de Video Dinámico */}
      <div className="video-player-container">
        <iframe
          className="anime-iframe-player"
          src={`https://www.youtube.com/embed/${animeData.trailerId || "dR7DW4ykE8k"}?autoplay=1&mute=0`} 
          title={animeData.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Información del Anime */}
      <div className="anime-details-section">
        <div className="anime-main-info">
          <span className="watch-genre">{animeData.genre || "Anime Series"}</span>
          <h2>{animeData.title}</h2>
          
          <div className="anime-meta-tags">
            <span className="rating-badge"><i className="fa-solid fa-star"></i> {animeData.rating || "9.5 / 10"}</span>
            <span className="year-badge">{animeData.year || "2026"}</span>
            <span className="ep-badge">{animeData.ep || animeData.episodes || "Disponible"}</span>
          </div>

          <p className="anime-synopsis">
            {animeData.description || "Sumérgete en esta gran aventura llena de emoción, batallas épicas y una historia inolvidable."}
          </p>

          <div className="watch-action-buttons">
            <button className="action-btn primary"><i className="fa-solid fa-plus"></i> Mi Lista</button>
            <button className="action-btn secondary"><i className="fa-solid fa-thumbs-up"></i> Me gusta</button>
            <button className="action-btn secondary"><i className="fa-solid fa-share-nodes"></i> Compartir</button>
          </div>
        </div>

        {/* Miniaturas de episodios */}
        <div className="anime-sidebar-episodes">
          <h3>Episodios</h3>
          <div className="episode-card-mini">
            <img src={animeData.image} alt="Ep 1" />
            <div className="ep-mini-info">
              <h4>Episodio 1: El despertar</h4>
              <p>24 min</p>
            </div>
          </div>
          <div className="episode-card-mini active">
            <img src={animeData.image} alt="Ep 2" />
            <div className="ep-mini-info">
              <h4>Episodio 2: Sombra y Acero</h4>
              <p>24 min (Reproduciendo)</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}