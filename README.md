# StartWeb Solutions

## ¿Qué hace el proyecto?

Este proyecto consiste en una landing page personal que se ejecuta dentro de un contenedor Docker utilizando Nginx como servidor web. La página muestra información profesional de un desarrollador junior incluyendo nombre, presentación, estudios, tecnologías conocidas y objetivos profesionales.

## ¿Cómo construirlo?

Para construir la imagen Docker del proyecto, ejecuta el siguiente comando en la terminal dentro de la carpeta del proyecto:

**Paso 1:** Abrir la terminal (PowerShell en Windows, Terminal en Linux/Mac)

**Paso 2:** Navegar a la carpeta del proyecto

**Paso 3.1:** Construir la imagen Docker con Docker Compose

docker-compose build

**Paso 3.2:** Si no puede construir la imagen con Docker Compose puedes poner este comando:

docker build -t mi-landing .


## ¿Cómo ejecutarlo?
Una vez construida la imagen, levanta el contenedor con Docker Compose usando este comando:

docker-compose up

## ¿Cómo acceder a la web?

Una vez que el contenedor esté en ejecución, abre tu navegador web y accede a la siguiente dirección:

http://localhost:8080
