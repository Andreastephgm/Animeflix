import "../styles/userNavbar.css";

export function UserNavbar({ setCurrentView, userEmail }) {
  return (
    <header className="user-navbar">
      {/* Logotipo de la plataforma */}
      <div className="user-nav-brand" onClick={() => setCurrentView("home")}>
        <h1>ANIME<span>FLIX</span></h1>
      </div>

      {/* Opciones de la barra de usuario: Perfil y Logout */}
      <div className="user-nav-actions">
        <button 
          className="user-profile-btn" 
          onClick={() => setCurrentView("profile")}
        >
          <i className="fa-solid fa-user-circle"></i>
          <span>{userEmail || "Mi Perfil"}</span>
        </button>

        <button 
          className="logout-btn" 
          onClick={() => setCurrentView("login")}
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </header>
  );
}