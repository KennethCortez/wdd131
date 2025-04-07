document.addEventListener("DOMContentLoaded", () => {
    const messages = [
      document.getElementById("message1"),
      document.getElementById("message2"),
      document.getElementById("message3")
    ];
  
    let index = 0;
  
    const showNextMessage = () => {
      if (index >= messages.length) return;
  
      const msg = messages[index];
      msg.classList.remove("hidden");
  
      // Ocultar después de 6 segundos
      setTimeout(() => {
        msg.style.animation = "fadeOut 1s ease forwards";
      }, 5000);
  
      index++;
  
      // Mostrar el siguiente después de 10 segundos
      if (index < messages.length) {
        setTimeout(showNextMessage, 10000);
      }
    };
  
    showNextMessage();
  });
  