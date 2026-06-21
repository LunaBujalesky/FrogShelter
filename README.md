# FrogShelter
API for frog adoptions.
Frog Shelter es una API similar a la de pokemon donde los usuarios pueden adoptar y evolucionar ranas virtuales, desarrollada con Node.js. El frontend consume una API REST implementada en Express mediante el router adoption.router.js. Siguientes implementaciones: "mis ranas" para ver ranas adoptadas, poder tomar tu rana y exportarla para tenerlo como plugin del navegador u en otro sitio web. Frontend de la api.

## Características

- Listar ranas disponibles.
- Consultar rana por ID.
- Adoptar ranas.
- Evolucionar ranas adoptadas.
- Frontend básico para interactuar con la API.
- Tests funcionales con Jest y Supertest.
- Dockerización completa.

## Tecnologías utilizadas

- Node.js
- Express
- Jest
- Supertest
- Docker

## Link al Dockerfile
https://hub.docker.com/repository/docker/lunabujalesky/frogshelter/general

## Link imagen pública dockerfile
https://hub.docker.com/r/lunabujalesky/frogshelter
---

##Documentación
https://docs.google.com/document/d/1Ld2T94QXQEavdfgb51rJzToCWHGSNodehK97ywUOveA/edit?usp=sharing

Instalar dependencias:

npm install

Iniciar la aplicación:

npm start

La aplicación estará disponible en:

http://localhost:3000
Ejecutar los tests
npm test
Endpoints principales
Obtener todas las ranas
GET /api/adoptions
Obtener una rana por ID
GET /api/adoptions/:id
Adoptar una rana
POST /api/adoptions/:id
Evolucionar una rana
POST /api/adoptions/:id/evolve
Docker
Construir la imagen
docker build -t frogshelter .
Ejecutar el contenedor
docker run -p 3000:3000 frogshelter

## Instalación local

Clonar el repositorio:

```bash
git clone https://github.com/TU-USUARIO/FrogShelter.git
cd FrogShelter
