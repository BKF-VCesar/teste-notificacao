let button = document.querySelector(".button");

button.addEventListener("click", function () {
  console.log("solicitando permissão...");
  // Verificar se as notificações são suportadas pelo navegador
  //   if (!("Notification" in window)) {
  //     console.log("Este navegador não suporta notificações.");
  //     alert("Este navegador não suporta notificações.");
  //   } else {
  //     // Verificar se a permissão ainda não foi concedida pelo usuário
  //     if (Notification.permission === "granted") {
  //       console.log("Permissão já concedida.");
  //       alert("Você já concedeu permissão para receber notificações.");
  //     } else if (Notification.permission !== "denied") {
  //       // Solicitar permissão
  //       Notification.requestPermission().then((permission) => {
  //         if (permission === "granted") {
  //           console.log("Permissão concedida pelo usuário.");
  //           alert("Você concedeu permissão para receber notificações.");
  //         }
  //       });
  //     }
  //   }
});
