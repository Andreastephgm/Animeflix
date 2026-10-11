export function Navbar({ setCurrentView }) {
  return (
    <header>
      <nav>
        <h2 onClick={() => setCurrentView("index")} style={{ cursor: "pointer" }}>
          ANIMEFLIX
        </h2>
        <ul>
          <li>
            <a href="#index" onClick={(e) => { e.preventDefault(); setCurrentView("index"); }}>
              Inicio
            </a>
          </li>
          <li>
            {/* Este es el enlace del menú que lleva directo al Login */}
            <a href="#signin" onClick={(e) => { e.preventDefault(); setCurrentView("login"); }}>
              Log in
            </a>
          </li>
          <li>
  <a href="#signin" onClick={(e) => { e.preventDefault(); setCurrentView("signin"); }}>
    Sign in
  </a>
</li>
          <li>
  <a href="#trends" onClick={(e) => { e.preventDefault(); setCurrentView("trends"); }}>
    Tendencias
  </a>
</li>
          <li>
  <a href="#help" onClick={(e) => { e.preventDefault(); setCurrentView("help"); }}>
    Ayuda
  </a>
</li>
          <li>
  <a href="#premium" onClick={(e) => { e.preventDefault(); setCurrentView("premium"); }}>
    Premium <i className="fa-solid fa-crown"></i>
  </a>
</li>
        </ul>
      </nav>
    </header>
  );
}