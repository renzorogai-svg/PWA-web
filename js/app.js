// Registra el service worker para habilitar el uso sin conexion
// y la instalacion de la aplicacion como PWA.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .catch((error) => console.error("Error al registrar el service worker:", error));
  });
}

// Captura el evento "beforeinstallprompt" para mostrar un boton
// que permita instalar la aplicacion (icono en escritorio).
let deferredInstallPrompt = null;
const installButton = document.getElementById("install-button");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (installButton) {
    installButton.style.display = "inline-block";
  }
});

if (installButton) {
  installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      return;
    }
    installButton.style.display = "none";
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
  });
}

window.addEventListener("appinstalled", () => {
  if (installButton) {
    installButton.style.display = "none";
  }
  deferredInstallPrompt = null;
});
