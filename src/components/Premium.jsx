import "../styles/premium.css";

export function Premium() {
  return (
    <main className="premium-main">
      {/* Sección principal de introducción con fondos múltiples */}
      <div className="premium">
        <div className="premiumContent">
          <h2><strong>Upgrade your anime experience with premium</strong></h2>
          <button className="premium-btn">TRY PREMIUM FREE FOR 20 DAYS</button>
          <p>
            After your free Crunchyroll Premium: Mega Fan trial, your account 
            will automatically renew at COP 14,900.00 per month. You may cancel at any time.
          </p>
        </div>
      </div>

      {/* Título de características */}
      <div>
        <h3 className="premiumAds">Get More With Premium</h3>
      </div>

      {/* Bloque de ventajas con imagen */}
      <div className="premiumAds2">
        <img src="/src/assets/premiumImage-PhotoRoom.png-PhotoRoom.png" alt="Anime Premium" />
        <ul className="lista1">
          <i className="fa-solid fa-clock"></i>
          <li>New Episodes shortly after airing in Japan</li>
          <i className="fa-sharp fa-regular fa-plus"></i>
          <li>Ad Free Anime</li>
        </ul>
        <ul className="lista2">
          <i className="fa-solid fa-plane-up"></i>
          <li>Offline Viewing</li>
          <i className="fa-solid fa-laptop"></i>
          <li>Multiple devices</li>
        </ul>
      </div>

      {/* Sección intermedia de visualización offline */}
      <div className="premiumAds3">
        <div className="premiumAds4">
          <h3><i className="fa-solid fa-plane-up"></i>Offline Viewing</h3>
          <p>Keep watching all your favourite shows on the road with Mega and Ultimate Fans and unlock Offline Viewing.</p>
        </div>
      </div>

      {/* Sección de anime sin anuncios */}
      <div className="premiumAds5">
        <img src="/src/assets/premium girl.jpeg" alt="Anime Girl" />
        <div>
          <p className="p1"><i className="fa-solid fa-play"></i>Anime Without Ads</p>
          <p className="p2">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
      </div>

      {/* Sección de Planes */}
      <div className="plans">
        <h2>Plans</h2>
   
        <div className="planContainer">
          
          {/* Plan Standard */}
          <div className="containerPlan1">
            <img src="/src/assets/crownStandard-PhotoRoom.png-PhotoRoom.png" alt="Standard Crown" />
            <div className="plan1">
              <h3>Standard Plan</h3>
              <p className="price">$5/month</p>
              <p className="taxes">+APPLICABLE TAXES</p>
              <button>START 20 DAYS FREE TRIAL</button>
              <p className="skip">SKIP FREE TRIAL</p>
              <p className="watch">Watch new episodes shortly after Japan</p>
              <p className="plus">---------PLUS----------</p>
              <p className="stream">Stream on 1 device at a time</p>
            </div>
          </div>

          {/* Plan Advance */}
          <div className="containerPlan2">
            <img src="/src/assets/crownAdvance-PhotoRoom.png-PhotoRoom.png" alt="Advance Crown" />
            <div className="plan2">
              <h3>Advance Plan</h3>
              <p className="price">$8/month</p>
              <p className="taxes">+APPLICABLE TAXES</p>
              <button>START 20 DAYS FREE TRIAL</button>
              <p className="skip">SKIP FREE TRIAL</p>
              <p className="watch">Watch new episodes shortly after Japan</p>
              <p className="plus">---------PLUS----------</p>
              <p className="stream">Stream on 4 devices at a time</p>
            </div>
          </div>

          {/* Plan Premium */}
          <div className="containerPlan3">
            <img src="/src/assets/crownPremium-PhotoRoom.png-PhotoRoom.png" alt="Premium Crown" />
            <div className="plan3">
              <h3>Premium Plan</h3>
              <p className="price">$15/year</p>
              <p className="taxes">+APPLICABLE TAXES</p>
              <button>START 20 DAYS FREE TRIAL</button>
              <p className="skip">SKIP FREE TRIAL</p>
              <p className="watch">Watch new episodes shortly after Japan</p>
              <p className="plus">---------PLUS----------</p>
              <p className="stream">Stream on 4 devices at a time</p>
              <p className="stream">Offline viewing</p>
              <p className="stream">Exclusive series each month</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}