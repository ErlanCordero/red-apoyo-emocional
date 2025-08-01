function mostrarMensaje() {
    const extra = document.getElementById("info-extra");
    extra.style.display = extra.style.display === "none" ? "block" : "none";
  }
  
  const frases = [
    { frase: "🧘 Respira profundamente y conecta con el presente.", contenido: "Practica 5 minutos de meditación para reducir el estrés." },
    { frase: "🌞 Comienza el día con gratitud.", contenido: "Escribe tres cosas por las que estás agradecido hoy." },
    { frase: "❤️ Cuida tu mente tanto como tu cuerpo.", contenido: "Haz una pausa y realiza estiramientos suaves." },
    { frase: "🌿 La calma empieza con un pensamiento positivo.", contenido: "Escucha música relajante durante 10 minutos." },
    { frase: "💪 Cada pequeño esfuerzo cuenta.", contenido: "Realiza ejercicios de respiración consciente." }
  ];
  
  let indiceActual = 0;
  
  function mostrarFrase(indice) {
    const fraseTexto = document.getElementById("frase-texto");
    const contenidoTexto = document.getElementById("contenido-texto");
  
    fraseTexto.textContent = frases[indice].frase;
    contenidoTexto.textContent = frases[indice].contenido;
  }
  
  document.getElementById("btn-cambiar").addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % frases.length; // ciclo entre frases
    mostrarFrase(indiceActual);
  });
  
  // Mostrar la primera frase al cargar la página
  mostrarFrase(indiceActual);
  
  function mostrarAcercaDe() {
    const info = document.getElementById("acerca-de");
    info.style.display = info.style.display === "none" ? "block" : "none";
  }