import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { UserNavbar } from "./components/UserNavbar"; // 1. Importar la nueva barra
import { Hero } from "./components/Hero";
import { Catalog } from "./components/Catalog";
import { Login } from "./components/Login";
import { Signin } from "./components/Signin";
import { Premium } from "./components/Premium";
import { Trends } from "./components/Trends";
import { Help } from "./components/Help";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { WatchView } from "./components/WatchView";

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedAnime, setSelectedAnime] = useState(null);

  // Definimos si estamos en una vista de usuario logueado
  const isUserLoggedIn = currentView === "home" || currentView === "profile";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div>
        {/* Renderiza la barra correspondiente */}
        {isUserLoggedIn ? (
          <UserNavbar setCurrentView={setCurrentView} userEmail="User" />
        ) : (
          <Navbar setCurrentView={setCurrentView} />
        )}

        {/* Vistas */}
        {currentView === "index" && (
          <>
            <Hero setCurrentView={setCurrentView} />
            <Catalog />
          </>
        )}

        {currentView === "login" && <Login setCurrentView={setCurrentView} />}
        {currentView === "signin" && <Signin setCurrentView={setCurrentView} />}
        {currentView === "trends" && <Trends />}
        {currentView === "help" && <Help />}
        {currentView === "premium" && <Premium />}
        {currentView === "home" && (
  <Home 
    userEmail="User" 
    setCurrentView={setCurrentView} 
    setSelectedAnime={setSelectedAnime} /* <-- ¡Faltaba esto aquí! */
  />
)}
        {currentView === "watch" && <WatchView anime={selectedAnime} setCurrentView={setCurrentView} />}
        
        {/* Vista rápida de Perfil si llega a hacer clic */}
        {currentView === "profile" && (
          <div style={{ padding: "60px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--titleFont)", fontSize: "40px", color: "var(--neonYellow, #ffe600)" }}>
              Mi Perfil
            </h2>
            <p style={{ marginTop: "15px", fontSize: "18px", color: "#a1a1aa" }}>
              Configuración de cuenta y preferencias de usuario próximamente.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
    
  );
  
}