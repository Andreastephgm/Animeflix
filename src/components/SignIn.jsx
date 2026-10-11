import "../styles/signin.css";

export function Signin() {
  return (
    <main className="signin-fullscreen-wrapper">
      
      {/* Capa de la imagen de fondo con opacidad */}
      <div className="signin-background-image-layer">
        <img 
          src="/imagenes/watermarked_img_17463432118440390423.jpg" 
          alt="Anime Background Signin" 
        />
      </div>

      {/* Caja del formulario de Registro */}
      <div className="signin-form-container-box">
        <h2>SIGN IN</h2>
        
        <form className="signin-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Tu nombre de usuario" />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="correo@ejemplo.com" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Crea una contraseña" />
          </div>

          <button type="submit" className="signin-btn">CREATE ACCOUNT</button>
        </form>
      </div>

    </main>
  );
}
