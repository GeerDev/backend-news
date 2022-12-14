# Back-End App News

_Crearemos un prototipo de back-end que proporcione y gestione informaci贸n sobre noticias a los usuarios utilizando MongoDB, Mongoose y NodeJS_

## Api usada para sacar datos de las noticias 鈽戯笍

Para poblar nuestra base de datos en MongoDB hemos utilizado una API externa que contiene noticias de actualidad:

![Foto APINEWS](./images_github/APINEWS.png)

## Tecnologias utilizadas 馃殌

El proyecto ha sido desarrollado utilizando los siguientes paquetes en Nodejs:

* Nodemon
* Expresss
* Mongoose
* Dotenv
* Axios
* Swagger-ui-express
* Cors
* Multer
* Jest
* Supertest

## 驴Como desplegar el proyecto en local? 馃搵

Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo:

Clonarte el repositorio localmente:

> git clone [url del repositorio]

Instalar las depedencias necesarias:

> npm i

Rellenar las variables necesarias en el archivo .env.example para iniciar el proyecto, despues cambiarle el nombre a .env:

> >   -  Puerto en el que quieras que se ejecute el server, PORT
> >   -  Cadena de conexi贸n con la base de datos en Mongo Atlas, MONGO_URI
> >   -  Cadena de conexi贸n con la base de datos en modo "Test", MONGO_URI_TEST
> >   -  String para controlar si estamos usando la aplicaci贸n en local o est谩 trabajando desplegada, LOCAL_OR_DEPLOY

Arrancar el proyecto:

> npm start

## Endpoints y middlewares 馃洜锔?

El sistema ataca al modelo "New" del que disponemos en la base de datos, y puede realizar estas acciones (endpoints):

- fillDatabase: Ejecuta las llamadas a una API externa para poblar nuestra base de datos con los suyos
- getAll: Devuelve todas las noticias ordenadas por ingreso en la base de datos
- getById: Devuelve una noticia filtrada por Id
- showCategories: Devuelve todas las categorias existentes en las noticias en la base de datos
- findNewsByCategory: Encuentra las noticias filtradas por la categoria que le indiques
- searchByTitle: Realiza la busqueda por t铆tulo de una noticia, tambi茅n filtra por categoria
- create: Crea una noticia
- updateArchived: Actualiza las propiedades de "archived" y "archiveDate" en una noticia filtrada por Id
- delete: Borra la noticia por Id

Los middlewares implementados en este proyecto son los siguientes:

- errors: Controla que se cumplan las validaciones que tenemos en los modelos de la base de datos a la hora de crear una noticia
- multer: Nos permite poder subir im谩genes al servidor

## Testing con Jest y Supertest 馃幆

Mediante Jest y Supertest hemos testeado algunos de los endpoints de nuestro back, adem谩s hemos configurado nuestro sistema para que ataque a una base de datos diferente a la desarrollo:

Comando para ejecutar los tests:

> npm test

![Foto Testing](./images_github/Testing.png)

## Integraci贸n continua: Github Actions 馃搶

Hemos configurado un workflow para que est茅 escuchando cuando se producen pusheos o pull request a nuestra rama "main" y en esa caso que ejecute los tests implementados, tambi茅n configuramos un "secret" que contiene nuestra conexi贸n a la base de datos de testing:

![Foto Actions](./images_github/Actions.png)

## Documentaci贸n con Swagger 馃摎

Utilizando Swagger hemos podido documentar los siguientes endpoints del proyecto:

- Get all news
- Create new
- Update new
- Delete new

![Foto Swagger](./images_github/Swagger.png)

## Despliegue en Railway 馃彈锔?

El proyecto se encuentra desplegado en Railway, se pueden ejecutar sus endpoints y ver su documentaci贸n en el siguiente enlace:

https://backend-news-production.up.railway.app/

![Foto Railway](./images_github/Railway.png)

---

馃榾 Hecho por [Germ谩n Fern谩ndez](https://www.linkedin.com/in/geerdev/) 馃鈥嶐煉?