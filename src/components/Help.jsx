import "../styles/help.css";

export function Help() {
  const faqList = [
    {
      question: "¿Cómo puedo activar mi prueba gratuita de 20 días?",
      answer: "Al registrarte en cualquiera de nuestros planes (Standard, Advance o Premium), tu prueba de 20 días se activará automáticamente de manera inmediata antes de realizar cualquier cobro."
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer: "Sí, puedes cancelar tu suscripción cuando lo desees desde la configuración de tu cuenta sin ningún tipo de penalización o cargo oculto."
    },
    {
      question: "¿En cuántos dispositivos puedo transmitir simultáneamente?",
      answer: "Depende de tu plan: el Plan Standard permite 1 dispositivo a la vez, mientras que los planes Advance y Premium permiten hasta 4 dispositivos en simultáneo."
    },
    {
      question: "¿Cómo funciona la visualización offline?",
      answer: "Los suscriptores de los planes Mega y Ultimate (Plan Premium) pueden descargar sus episodios favoritos directamente en la aplicación para disfrutarlos sin conexión a internet."
    }
  ];

  return (
    <main className="help-main">
      <div className="help-header">
        <h2>Centro de Ayuda</h2>
        <p>¿Tienes dudas o necesitas asistencia? Aquí encuentras las respuestas más frecuentes.</p>
      </div>

      {/* Sección de Preguntas Frecuentes */}
      <div className="help-container">
        <h3>Preguntas Frecuentes (FAQ)</h3>
        <div className="faq-grid">
          {faqList.map((item, index) => (
            <div className="faq-card" key={index}>
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>

        {/* Sección de Contacto o Soporte Adicional */}
        <div className="help-support-box">
          <h3>¿Aún necesitas ayuda?</h3>
          <p>Nuestro equipo de soporte técnico de AnimeFlix está disponible 24/7 para asistirte con cualquier problema de reproducción o facturación.</p>
          <button className="help-contact-btn">CONTACTAR SOPORTE</button>
        </div>
      </div>
    </main>
  );
}