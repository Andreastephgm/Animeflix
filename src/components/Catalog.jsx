import { AnimeCard } from "./AnimeCard";
import '../styles/indexStyles.css';


const animesList = [
  { id: 1, titulo: "Naruto", genero: "Acción / Shonen", imagen: "src/assets/naruto.jpeg" },
  { id: 2, titulo: "Attack on Titan", genero: "Suspenso / Acción", imagen: "src/assets/attackOnTitan.jpeg" },
  { id: 3, titulo: "Demon Slayer", genero: "Fantasía / Artes Marciales", imagen: "src/assets/demonSlayer.avif" },
];

export function Catalog() {
  return (
    <section id="catalogo">
      <h2 style={{ fontFamily: "var(--titleFont)", fontSize: "32px", marginBottom: "10px" }}>
        Catálogo Popular
      </h2>
      <div className="catalog-grid">
        {animesList.map((anime) => (
          <AnimeCard 
            key={anime.id} 
            titulo={anime.titulo} 
            imagen={anime.imagen} 
            genero={anime.genero} 
          />
        ))}
      </div>
    </section>
  );
}