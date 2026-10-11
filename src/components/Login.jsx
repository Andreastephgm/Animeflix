import "../styles/login.css";

export function Login({setCurrentView}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentView("home")
  };
  return (
    <main className="login-fullscreen-wrapper">
      
      <div className="login-background-image-layer">
        <img 
          src="/src/assets/chainsaw-man-5-1670073306-PhotoRoom.png-PhotoRoom.png" 
          alt="Denji and Pochita" 
        />
      </div>

      <div className="login-form-container-box">
        <h2>LOG IN</h2>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="correo@ejemplo.com" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Contraseña" />
          </div>

          <button type="submit" className="login-btn">ENTER</button>
        </form>
      </div>

    </main>
  );
}