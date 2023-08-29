# What The Film - API

## Recursos

Existe un repositorio disponible en [git](https://github.com/GwerhDev/WhatTheFilm-API).

Existe una versión [online](https://whatthefilm-api.fly.dev/) en Fly.io

## Instalación

Utilizar [node](https://nodejs.org/es) para instalar las dependencias.

```bash
npm i
```
Utilizar [nodemon](https://nodemon.io/) para levantar el servidor en local. `http://localhost:3000`
```bash
npm run dev
```

Puedes configurar las variables en tu entorno local creando un archivo .env o editando el script config.js

## Uso

### /GET get-films

Entrega JSON con todas las películas de la base de datos.

### /GET get-films/:id

Entrega JSON con la película que coincida la id en la base de datos.

### /POST get-ai-recommendation 

Devuelve una recomendación de película.

Se debe enviar un JSON con el siguiente formato:

```bash
{
  "query": "",
  "cohereApiKey": ""
}
```

Debes conseguir una api key de cohere creandote una cuenta [acá](https://cohere.com/)

## Tecnologías

[Express](https://expressjs.com/), [Nodemon](https://nodemon.io/)