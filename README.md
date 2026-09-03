# PWA-web
Aplicacion web progresiva

## Icono en el escritorio

Esta aplicacion esta configurada como una Progressive Web App (PWA), lo que
permite instalarla y agregar un icono de acceso directo en el escritorio o en
la pantalla de inicio, tal como una aplicacion nativa. Esto se logra mediante:

- Un archivo `manifest.json` que define el nombre, los colores y los iconos
  (`icons/icon-192.png` e `icons/icon-512.png`) de la aplicacion.
- Un `service-worker.js` que habilita el funcionamiento sin conexion y es
  requerido por los navegadores para permitir la instalacion.
- El registro del `manifest.json` y del service worker desde `index.html`.

### Como probarlo localmente

1. Sirve los archivos con un servidor HTTP simple, por ejemplo:

   ```bash
   npx http-server . -p 8080
   ```

2. Abre `http://localhost:8080` en un navegador compatible (Chrome, Edge,
   etc.).
3. Cuando el navegador detecte que la aplicacion es instalable, aparecera el
   boton "Instalar aplicacion" en la pagina, o podras usar la opcion
   "Instalar" / "Agregar a pantalla de inicio" del menu del navegador.
4. Al instalarla, se creara un icono de acceso directo en el escritorio (o en
   la pantalla de inicio en dispositivos moviles).

