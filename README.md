# MarkSoft

MarkSoft es un sitio web estático para la venta de productos de hospital. Este proyecto está desarrollado utilizando React y una serie de librerías complementarias.

## Tecnologías utilizadas

* [React](https://reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario
* [Material-UI](https://mui.com/) - Componentes de React para un diseño moderno y responsive
* [Emotion]() - Biblioteca de CSS-in-JS para estilizar componentes
* [React Router](https://reactrouter.com/) - Enrutamiento dinámico en aplicaciones React
* [Flatpickr]() - Calendario de selección de fecha y hora
* [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) - Resaltado de sintaxis en React
* [Chroma.js]() - Manipulación de colores
* [React Copy to Clipboard](https://github.com/nkbt/react-copy-to-clipboard) - Copiar texto al portapapeles en React
* [React Countup](https://github.com/glennreyes/react-countup) - Animaciones de conteo en React
* [Testing Library]() - Pruebas unitarias y de integración para componentes de React

## Requisitos previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

* [Node.js](https://nodejs.org/) (versión 20.15.1)
* [npm](https://www.npmjs.com/)

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/marksoft.git
   cd marksoft
   ```
2. Instala las dependencias del proyecto utilizando npm:

   ```bash
   npm install
   ```
3. Inicia la aplicación en modo desarrollo:

   ```bash
   npm start
   ```

   La aplicación se abrirá en tu navegador predeterminado en `http://localhost:3000`.

## Scripts disponibles

En el proyecto, puedes ejecutar los siguientes scripts:

* `npm start`: Inicia la aplicación en modo desarrollo.
* `npm build`: Compila la aplicación para producción en la carpeta `build`.
* `npm test`: Ejecuta las pruebas unitarias.

## Estructura del proyecto

La estructura principal del proyecto es la siguiente:

```plaintext
marksoft/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md

```

* **`public/`** : Contiene los archivos estáticos del proyecto.
* **`src/`** : Contiene el código fuente de la aplicación.
* **`components/`** : Contiene los componentes reutilizables de la aplicación.
* **`pages/`** : Contiene las diferentes páginas de la aplicación.
* **`App.js`** : Componente principal de la aplicación.
* **`index.js`** : Punto de entrada de la aplicación.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna idea para mejorar el proyecto o encuentras algún problema, no dudes en abrir una `issue` o enviar un `pull request`.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE]().
