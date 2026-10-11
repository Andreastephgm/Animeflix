import { useRef } from "react";
import "../styles/home.css";

// 1. Añadimos setCurrentView y setSelectedAnime en las props
export function Home({ userEmail, setCurrentView, setSelectedAnime }) {
  const rowRefs = useRef([]);

  const scrollRow = (index, direction) => {
    const row = rowRefs.current[index];
    if (row) {
      const scrollAmount = direction === "left" ? -450 : 450;
      row.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const categories = [
    {
      title: "🔥 Tendencias y Nuevos Episodios",
      items: [
        { 
          id: 1, 
          title: "Solo Leveling", 
          image: "/src/assets/soloLeveling.jpg", 
          ep: "Ep. 24",
          trailerId: "dR7DW4ykE8k",
          genre: "Acción / Fantasía",
          rating: "9.9 / 10",
          year: "2024",
          description: "En un mundo donde cazadores luchan contra monstruos, el débil cazador Sung Jinwoo obtiene la habilidad única de subir de nivel sin límites."
        },
        { 
          id: 2, 
          title: "Tokyo Revengers", 
          image: "/src/assets/Tokyo-Revengers.jpeg", 
          ep: "Ep. 12",
          trailerId: "Ehl2C1V05Bw",
          genre: "Acción / Drama / Viajes en el tiempo",
          rating: "8.5 / 10",
          year: "2021",
          description: "Takemichi Hanagaki viaja 12 años al pasado para salvar a su novia de secundaria de ser asesinada por la temible pandilla Tokyo Manji."
        },
        { 
          id: 3, 
          title: "My Hero Academia", 
          image: "/src/assets/boku.webp", 
          ep: "Final",
          trailerId: "hk5ZLDFAFsc",
          genre: "Acción / Superhéroes / Shonen",
          rating: "8.8 / 10",
          year: "2024",
          description: "Izuku Midoriya nace sin poderes en un mundo donde casi todos los tienen, pero hereda la habilidad del superhéroe número uno para salvar el mundo."
        },
        { 
          id: 4, 
          title: "Chainsaw Man", 
          image: "/src/assets/Chainsaw-Man.jpg", 
          ep: "Ep. 01",
          trailerId: "K9Gnl0VeIVI",
          genre: "Acción / Demonios / Gore",
          rating: "9.1 / 10",
          year: "2022",
          description: "Denji renace como el Demonio Motosierra tras hacer un pacto con su mascota Pochita, uniasé a los Cazadores de Demonios de Seguridad Pública."
        }
      ]
    },
    {
      title: "⚔️ Acción y Shonen Épico",
      items: [
        { 
          id: 5, 
          title: "Jujutsu Kaisen", 
          image: "/src/assets/jujutsuKaisen.webp", 
          ep: "Ep. 18",
          trailerId: "aPBUUJbrAWo",
          genre: "Sobrenatural / Acción / Shonen",
          rating: "9.4 / 10",
          year: "2023",
          description: "Yuji Itadori traga un amuleto maldito altamente peligroso y se une a una organización secreta de hechiceros para erradicar las maldiciones."
        },
        { 
          id: 6, 
          title: "Demon Slayer", 
          image: "/src/assets/demonSlayer.avif", 
          ep: "Ep. 08",
          trailerId: "SKQWT0As7oc",
          genre: "Acción / Histórico / Demonios",
          rating: "9.2 / 10",
          year: "2024",
          description: "Tanjiro Kamado busca transformar a su hermana Nezuko de nuevo en humana tras ser atacados por demonios que masacraron a toda su familia."
        },
        { 
          id: 7, 
          title: "Attack on Titan", 
          image: "/src/assets/attackOnTitan.jpeg", 
          ep: "Final",
          trailerId: "MGRm4IzK1SQ",
          genre: "Acción / Misterio / Drama",
          rating: "9.7 / 10",
          year: "2023",
          description: "La humanidad vive confinada dentro de inmensas murallas para protegerse de los Titanes, hasta que un día el Muro María cae destruyendo la paz."
        },
        { 
          id: 8, 
          title: "Hunter x Hunter", 
          image: "/src/assets/hunterxhunter.jpg", 
          ep: "Ep. 148",
          trailerId: "p-AvQi63GHE",
          genre: "Aventura / Fantasía / Shonen",
          rating: "9.6 / 10",
          year: "2011",
          description: "Gon Freecss descubre que su padre es un legendario Cazador y emprende un peligroso examen mundial para encontrarlo y convertirse en uno."
        },
        { 
          id: 9, 
          title: "Assassination Classroom", 
          image: "/src/assets/assassinationClassroom.png", 
          ep: "Ep. 25",
          trailerId: "YSdFn4rHWvg",
          genre: "Comedia / Acción / Ciencia Ficción",
          rating: "8.7 / 10",
          year: "2015",
          description: "Los estudiantes de la clase 3-E tienen la misión de asesinar a su nuevo profesor, una criatura alienígena con tentáculos que amenaza con destruir la Tierra."
        }
      ]
    },
    {
      title: "🌌 Isekai y Mundos Fantásticos",
      items: [
        { 
          id: 10, 
          title: "Sword Art Online", 
          image: "/src/assets/swordArt.jpg", 
          ep: "Ep. 25",
          trailerId: "6ohYYtxfDCg",
          genre: "Fantasía / VRMMO / Romance",
          rating: "8.1 / 10",
          year: "2012",
          description: "Miles de jugadores quedan atrapados en un videojuego de realidad virtual masivo donde morir en el juego significa morir en la vida real."
        },
        { 
          id: 11, 
          title: "Re:Zero", 
          image: "/src/assets/re-zero.jpg", 
          ep: "Ep. 50",
          trailerId: "XZiakX-wvnk",
          genre: "Isekai / Suspenso / Fantasía",
          rating: "8.9 / 10",
          year: "2020",
          description: "Subaru Natsuki es transportado a un mundo de fantasía y descubre que cada vez que muere, regresa en el tiempo a un 'punto de guardado'."
        },
        { 
          id: 12, 
          title: "Overlord", 
          image: "/src/assets/overlord.jpg", 
          ep: "Ep. 13",
          trailerId: "d4bU76aJsjw",
          genre: "Isekai / Magia / Anti-héroe",
          rating: "8.6 / 10",
          year: "2022",
          description: "Un veterano jugador se queda dentro del servidor de un MMORPG cuando este cierra y decide conquistar este nuevo mundo como el poderoso Ainz Ooal Gown."
        },
        { 
          id: 13, 
          title: "Mushoku Tensei", 
          image: "/src/assets/Mushoku_Tensei.avif", 
          ep: "Ep. 22",
          trailerId: "ccFl3rUD3Dc",
          genre: "Isekai / Aventura / Magia",
          rating: "9.0 / 10",
          year: "2023",
          description: "Un hombre desempleado de 34 años muere y reencarna en un mundo mágico como Rudeus Greyrat, decidido a vivir su nueva vida sin arrepentimientos."
        },
        { 
          id: 14, 
          title: "Hell Girl", 
          image: "/src/assets/hellgirl.jpeg", 
          ep: "T2",
          trailerId: "VzJUrJbHC7U",
          genre: "Misterio / Horror / Sobrenatural",
          rating: "8.2 / 10",
          year: "2017",
          description: "A medianoche, las personas con profundos rencores pueden acceder al sitio web 'Hell Correspondence' para enviar a sus enemigos directamente al infierno."
        }
      ]
    },
    {
      title: "💖 Romance y Slice of Life",
      items: [
        { 
          id: 15, 
          title: "Horimiya", 
          image: "/src/assets/horimiya.jpg", 
          ep: "Completo",
          trailerId: "dXb6SGTGRuc",
          genre: "Romance / Comedia / Escolar",
          rating: "8.9 / 10",
          year: "2021",
          description: "Kyoko Hori y Izumi Miyamura descubren los secretos y las personalidades ocultas que ambos guardan fuera de la escuela, iniciando una hermosa amistad."
        },
        { 
          id: 16, 
          title: "Kaguya-sama", 
          image: "/src/assets/kaguyaSama.jpeg", 
          ep: "Temporada 3",
          trailerId: "8xlJjBxrleY",
          genre: "Comedia Romántica / Psicológico",
          rating: "9.3 / 10",
          year: "2022",
          description: "Dos jóvenes prodigios del consejo estudiantil, Kaguya y Miyuki, idean guerras psicológicas complejas para lograr que el otro se le declare primero."
        },
        { 
          id: 17, 
          title: "Toradora!", 
          image: "/src/assets/Toradora.webp", 
          ep: "Ep. 25",
          trailerId: "dhmhF5ty568",
          genre: "Romance / Drama / Escolar",
          rating: "8.6 / 10",
          year: "2008",
          description: "Ryuji Takasu y Taiga Aisaka forman un pacto improbable para ayudarse mutuamente a conquistar a los mejores amigos del otro."
        },
        { 
          id: 18, 
          title: "Spy x Family", 
          image: "/src/assets/spyFamily.jpg", 
          ep: "Ep. 12",
          trailerId: "44qfOGvEWAU",
          genre: "Comedia / Acción / Vida Cotidiana",
          rating: "9.1 / 10",
          year: "2023",
          description: "Un espía, una asesina a sueldo y una pequeña niña telepática forman una familia falsa sin revelar sus verdaderas identidades entre sí."
        },
        { 
          id: 19, 
          title: "Ao Haru Ride", 
          image: "/src/assets/aoHaru.jpeg", 
          ep: "T2",
          trailerId: "KWhA9FLsDRQ",
          genre: "Romance / Recuentos de la Vida",
          rating: "8.3 / 10",
          year: "2014",
          description: "Futaba Yoshioka se reencuentra en la preparatoria con su primer amor de la secundaria, Kou Tanaka, pero descubre que él ha cambiado por completo."
        }
      ]
    },
    {
      title: "🎬 Películas y Especiales",
      items: [
        { 
          id: 20, 
          title: "Your Name", 
          image: "/src/assets/yourName.jpg", 
          ep: "Película",
          trailerId: "N0nvoAv5q8M",
          genre: "Romance / Sobrenatural / Drama",
          rating: "9.8 / 10",
          year: "2016",
          description: "Dos adolescentes, uno en Tokio y otra en un pueblo rural, comienzan a intercambiar cuerpos repentinamente a través de sus sueños."
        },
        { 
          id: 21, 
          title: "Spirited Away", 
          image: "/src/assets/spiritedAway.jpg", 
          ep: "Película",
          trailerId: "5Fgq4Osh6XQ",
          genre: "Fantasía / Aventura / Ghibli",
          rating: "9.7 / 10",
          year: "2001",
          description: "Chihiro, una niña de 10 años, entra a un mundo espiritual habitado por dioses y monstruos para salvar a sus padres transformados en cerdos."
        },
        { 
          id: 22, 
          title: "Weathering with You", 
          image: "/src/assets/WeatheringWithYou.avif", 
          ep: "Película",
          trailerId: "QpDWqui-8c0",
          genre: "Romance / Fantasía / Drama",
          rating: "9.0 / 10",
          year: "2019",
          description: "Un chico de secundaria huye a Tokio y conoce a una chica huérfana con la misteriosa habilidad de despejar el cielo y detener la lluvia."
        },
        { 
          id: 23, 
          title: "A Silent Voice", 
          image: "/src/assets/aSilentVoice.jpg", 
          ep: "Película",
          trailerId: "nfK6UgLra7g",
          genre: "Drama / Escolar / Redención",
          rating: "9.6 / 10",
          year: "2016",
          description: "Un joven busca la redención enfrentando a la chica sorda a la que acosó en la escuela primaria, tratando de reparar sus errores del pasado."
        },
        { 
          id: 24, 
          title: "Chainsaw Man La Película: El Arco de Reze", 
          image: "/src/assets/chainsawmanp.webp", 
          ep: "Película",
          trailerId: "eRXMdJoXRGQ",
          genre: "Acción / Romance / Demonios",
          rating: "9.8 / 10",
          year: "2024",
          description: "Denji conoce a una misteriosa chica llamada Reze en una cafetería, desencadenando eventos intensos en el explosivo arco de Reze."
        }
      ]
    }
  ];

  return (
    <main className="user-home-main">
      {/* Banner de bienvenida */}
      <div className="user-welcome-banner">
        <div className="user-info">
          <h2>Bienvenido de nuevo, <span className="highlight-user">{userEmail || "User"}</span></h2>
          <p>¿Qué anime vas a maratonear hoy?</p>
        </div>
        <div className="user-avatar-badge">
          <i className="fa-solid fa-user-ninja"></i>
          <span>Mi Cuenta</span>
        </div>
      </div>

      {/* Carriles de categorías */}
      <div className="categories-container">
        {categories.map((cat, index) => (
          <div className="category-row-wrapper" key={index}>
            <h3>{cat.title}</h3>
            
            <div className="carousel-container">
              {/* Botón Izquierdo */}
              <button 
                className="carousel-btn left" 
                onClick={() => scrollRow(index, "left")}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>

              {/* Fila con scroll horizontal */}
              <div 
                className="category-row-track" 
                ref={(el) => (rowRefs.current[index] = el)}
              >
                {cat.items.map((anime) => (
                  <div className="home-anime-card" key={anime.id}>
                    <div className="home-anime-img">
                      <img src={anime.image} alt={anime.title} />
                      <span className="badge-ep">{anime.ep}</span>
                    </div>
                    <div className="home-anime-details">
                      <h4>{anime.title}</h4>
                      
                      {/* 2. Aquí ya funciona porque Home recibe las funciones */}
                      <button 
                        className="play-row-btn" 
                        onClick={() => { 
                          setSelectedAnime(anime); 
                          setCurrentView("watch"); 
                        }}
                      >
                        <i className="fa-solid fa-play"></i> Reproducir
                      </button>

                    </div>
                  </div>
                ))}
              </div>

              {/* Botón Derecho */}
              <button 
                className="carousel-btn right" 
                onClick={() => scrollRow(index, "right")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}