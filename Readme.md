# Introduccion: 

Crear un proyecto individual como requisito de Soy Henry Bootcamp

# Objetivos del poryecto:

  <ul>
  <li>Construir una App utlizando React, Redux, Node y Sequelize.</li>
  <li>Afirmar y conectar los conceptos aprendidos en la carrera.</li>
  <li>Aprender mejores prácticas.</li>
  <li>Aprender y practicar el workflow de GIT.</li>
  <li>Usar y practicar testing.</li>
  </ul>

# ¿Puedo ver el proyecto desplegado en alguna parta?

Si, desde aqui: 
https://online-countries.vercel.app/

# ¿Se adapta a los diferentes tamaños de pantalla?

No, se recomienda ver desde un navegor de pc o "vista de escritorio".

# ¿Como puedo ejecutar el proyecto en mi PC?
  
  <ul>
  <li>Prviamente debera tener instalador y configurado postgreSQL, ademas debera crear una base de datos con el nombre de: "countries", dejo algunas referencias: 
  <a href="https://www.postgresql.org/download/" target="_blank">Descargar postgreSQL</a></li>, <a href="https://www.todopostgresql.com/como-crear-base-de-datos-en-postgresql/" target="_blank">Crear base de datos en postgreSQL,</a></li>
  <li>Descarga o clona el repositorio de github: <a href="https://github.com/jeangq24/PI-Countries-main.git" target="_blank"> https://github.com/jeangq24/PI-Countries-main.git</a>
  <li>Una vez descargado el repositorio debera configurar los variables de entorno, para esto se debe dirigiir a la carpeta PI-Countries-main/api, una vez en
  "api" cree un archivo con el siguiente nombre: ".env", posteriormente debemos editar ese archivo agregando lo siguiente</li>
    <ul>
      <li>DB_USER=usuariodepostgres</li>
      <li>DB_PASSWORD=passwordDePostgres</li>
      <li>DB_HOST=localhost (si ha configurado postgres en otro puerto debera especificarlo de la siguiente forma: localhost:puerto)</li>
    </ul>
    <li>Debera instalar las dependecias necesarias para poder ejecutar el proyecto, en la carpeta PI-Countries-main debera abrir una terminal y ejecutar:</li>
      <ul>
        <li> npm install ./api</li>
        <li> npm install ./client</li>
      </ul>
    <li> Ejecute en la terminal los siguiente comandos para poder visualizar el proyecto:
      <ul>
        <li>npm start ./api</li>
        <li>npm start ./client</li>
      </ul>
  </ul>

*Se abrira una pestaña en el navegador por deafult (se recomienda la vista el Mozilla Firefox de este proyecto) y podra interactual con el sistema.

# Front-end 

Este proyecto esta realizado con tecnologias como: HTML, CSS, REACT, REDUX, LEAFLET 

*Adjunto video del funcionamiento del sistema: 

<a href="https://youtu.be/pj9REeJMRHA" target="_blank">Video COUNTRIESAPP</a>
![](https://github.com/jeangq24/PI-Countries-main/blob/master/Screenshot_2021-10-05_21_38_12.png)


# Back-end: 

Este proyecto esta realizado con tecnologias como: NODE.JS - Express para la configuracion de servidor, base de datos con PostgreSQL, para la minupulacion de la DB con el ORM Suquelize y la API <a href="www.restcountries.com" target="_blank">REST COUNTRIES</a> quien proporciona informacion al sistema.
