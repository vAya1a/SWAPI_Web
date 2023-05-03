# ProyectoLB

DAW/DAM - Proyecto de formación ([Labordequipo](https://job.labordequipo.es/2022/11/08/operario-a-de-limpieza-para-sustituciones-limpiezas-generales-etc-2-2/))

- [Participantes](#participantes)
- [Descripción](#descripción)
- [Laravel](#laravel)
- [AngularJS](#angularjs)

# Participantes 

- Qiang Rui Zhang Cheng  
- Victor Ayala



# Descripción.

Este es un proyecto de Formación donde se realizará una página web para mostrar datos de una API de Star Wars llamado SWAPI.

Para ello utilizaremos dos frameworks:

**[Laravel](#laravel)**, que es un framework de [PHP](https://www.php.net/manual/es/), y lo utilizaremos para la realización del backend, es decir, trabajaremos en el lado del servidor(lógica y funcionalidad) con este framework.

**[AngularJS](#angularjs)**, que es un framework de [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), y lo utilizaremos para la realización del frontend, basicamente la parte la cual el cliente interactuara con la página web.


# Laravel

**[Laravel](https://laravel.com/docs/10.x/readme)**  es un framework PHP MVC para desarrollo rápido de aplicaciones web. Automatiza muchos procesos habituales y tiene una curva de aprendizaje empinada, pero no tanto como otros frameworks (con “otros” queremos decir “Symfony”, que es, sin duda, el framework más difícil de aprender).

Desde hace algunos años, Laravel ha experimentado un crecimiento espectacular en el mercado de las aplicaciones web.

## Ventajas de Laravel

Para ir abriendo boca, te cuento algunos de los puntos fuertes que tiene Laravel:

1. Sintaxis simple y elegante.  
2. Mapeo objeto-relacional (ORM): Eloquent.
3. Potente sistema de plantillas para vistas: Blade. También lo veremos con bastante profundidad.  
4. Reutiliza y moderniza componentes de Symfony.
5. Es sencillo (esto es un decir) y potente.
6. Uso creciente en la industria: es previsible que domine el mercado durante los próximos años.
7. Comunidad de usuarios altamente especializada (buena relación señal/ruido, al menos de momento)

## Inconvenientes de Laravel

Como no hay nada perfecto, es evidente que Laravel también tiene algunos defectillos. Entre ellos, estos:

1. Instalación, configuración y despliegue complejos, incluso a través de servicios de virtualización.
2. Curva de aprendizaje elevada.
3. Se mueve según los intereses personales de su autor (es obra individual), con actualizaciones muy frecuentes y cambios caprichosos. Las actualizaciones pueden ser un quebradero de cabeza.
4. Inestabilidad de varios de sus componentes: a menudo hay que recurrir a fixes o a componentes de terceros.
5. Fuerte dependencia de la consola de comandos y de herramientas de terceros (composer, vagrant, npm…). Esto, por supuesto, solo es un inconveniente para las personas que tengan alergia a la consola de comandos.

# AngularJS
**[AngularJS](http://expertojava.ua.es/experto/restringido/2015-16/angular/angularjs.pdf)** es un framework de JavaScript de código abierto, mantenido por Google, que ayuda con la gestión de lo que se conoce como aplicaciones de una sola página (en inglés, single-page applications). Su objetivo es aumentar las aplicaciones basadas en navegador con (MVC) Capacidad de Modelo Vista Controlador, en un esfuerzo para hacer que el desarrollo y las pruebas más fáciles.

## ¿Single-page web applications?
Una single-page web application (en adelante SPA), es una aplicación web que se ejecuta completamente en una única página web, con el objetivo de proporcionar una experiencia más fluida y similar a la que nos encontraríamos en una aplicación de escritorio.

En una aplicación SPA, todos los datos necesarios, como el HTML, CSS o JavaScript, se cargan y añaden en la página cuando es necesario, normalmente respondiendo a acciones del usuario. En ningún momento del proceso veremos una recarga total de la página. Para esto, como os imaginaréis a lo largo del proceso de ejecución de una aplicación SPA existe una comunicación con el servidor en segundo plano.