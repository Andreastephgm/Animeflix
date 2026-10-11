import "../styles/trends.css";

export function Trends() {
  const trendingAnimes = [
    {
      id: 1,
      title: "Bleach: Thousand-Year Blood War",
      ranking: "01",
      genre: "Action / Supernatural",
      image: "/src/assets/BLEACH TYBW.webp",
      episodes: "Ep. 24 Available"
    },
    {
      id: 2,
      title: "Tokyo Revengers",
      ranking: "02",
      genre: "Drama / Time Travel",
      image: "/src/assets/Tokyo-Revengers.jpeg",
      episodes: "New Arc"
    },
    {
      id: 3,
      title: "My Hero Academia",
      ranking: "03",
      genre: "Superhero / Shonen",
      image: "/src/assets/boku.webp",
      episodes: "Final Season"
    },
    {
      id: 4,
      title: "Chainsaw Man",
      ranking: "04",
      genre: "Dark Fantasy / Action",
      image: "/src/assets/chainsawMan.jpeg",
      episodes: "Popular"
    }
  ];

  return (
    <main className="trends-main">
      <div className="trends-header">
        <h2>🔥 Trending Anime</h2>
        <p>The most popular shows everyone is watching right now on AnimeFlix.</p>
      </div>

      <div className="trends-grid">
        {trendingAnimes.map((anime) => (
          <div className="trend-card" key={anime.id}>
            <span className="trend-number">{anime.ranking}</span>
            <div className="trend-img-container">
              <img src={anime.image} alt={anime.title} />
            </div>
            <div className="trend-info">
              <span className="trend-genre">{anime.genre}</span>
              <h3>{anime.title}</h3>
              <p className="trend-ep">{anime.episodes}</p>
              <button className="trend-watch-btn">WATCH NOW</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}