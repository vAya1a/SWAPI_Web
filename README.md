# Página Web SWAPI

Proyecto de página web

- [Participantes](#participantes)
- [Descripción](#descripción)
- [Laravel](#laravel)
- [AngularJS](#angularjs)
- [Cordova](#cordova)
- [HTTP](#http)

# Participantes 

- Qiang Rui Zhang Cheng  
- Victor Ayala



# Descripción.

Este es un proyecto donde se realizará una página web para mostrar datos de una API de Star Wars llamado [SWAPI](https://swapi.dev/about),.

Para ello utilizaremos dos frameworks:

**[Laravel](#laravel)**, que es un framework de [PHP](https://www.php.net/manual/es/), y lo utilizaremos para la realización del backend, es decir, trabajaremos en el lado del servidor(lógica y funcionalidad) con este framework.

**[AngularJS](#angularjs)**, que es un framework de [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), y lo utilizaremos para la realización del frontend, basicamente la parte la cual el cliente interactuara con la página web.

Para la transferencia de información entre los dos frameworks usaremos **[HTTP](https://developer.mozilla.org/es/docs/Web/HTTP)** que es el lenguaje común que permite que los navegadores web y los servidores se comuniquen entre sí.


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

# Cordova

**[Cordova](https://cordova.apache.org/docs/en/11.x/)** es un framework de desarrollo de aplicaciones móviles multiplataforma que permite crear aplicaciones nativas utilizando tecnologías web como HTML, CSS y JavaScript. También conocido como Apache Cordova o PhoneGap, Cordova proporciona un entorno de desarrollo consistente para crear aplicaciones móviles que pueden ejecutarse en diferentes plataformas, como iOS, Android y Windows.

La principal ventaja de utilizar Cordova es la capacidad de escribir una vez el código y luego desplegarlo en múltiples plataformas móviles sin tener que reescribirlo por completo. Esto ahorra tiempo y recursos, ya que los desarrolladores pueden aprovechar su conocimiento de tecnologías web existentes para crear aplicaciones móviles completas.

Cordova utiliza un enfoque basado en WebView, donde la interfaz de usuario de la aplicación se muestra en un navegador web embebido dentro de una aplicación nativa. Esto permite acceder a las capacidades del dispositivo a través de JavaScript, utilizando una serie de plugins proporcionados por Cordova. Estos plugins permiten el acceso a características como la cámara, el GPS, los contactos, las notificaciones push y mucho más.

Al utilizar Cordova, los desarrolladores pueden crear una experiencia de usuario nativa al aprovechar las características y los componentes específicos de cada plataforma. Además, Cordova ofrece un conjunto de herramientas de desarrollo, como la Cordova CLI (Command Line Interface) y el Cordova WebView, que facilitan la creación, prueba y depuración de aplicaciones móviles.

Cordova también cuenta con una activa comunidad de desarrolladores que contribuyen con plugins y recursos adicionales, lo que amplía aún más las capacidades y funcionalidades disponibles para las aplicaciones creadas con Cordova.

Si bien Cordova proporciona una solución efectiva para el desarrollo de aplicaciones móviles multiplataforma, es importante tener en cuenta que, debido a su naturaleza basada en WebView, puede haber limitaciones en el rendimiento y la experiencia de usuario en comparación con las aplicaciones nativas. Sin embargo, para muchas aplicaciones, Cordova ofrece una opción viable y rentable para llegar a múltiples plataformas sin tener que desarrollar y mantener aplicaciones nativas separadas.

En resumen, Cordova es un framework de desarrollo de aplicaciones móviles que permite a los desarrolladores crear aplicaciones nativas utilizando tecnologías web. Ofrece la ventaja de escribir código una vez y desplegarlo en múltiples plataformas, lo que ahorra tiempo y recursos. Con su enfoque basado en WebView y una amplia gama de plugins, Cordova brinda acceso a las características del dispositivo y una experiencia de usuario nativa.

# HTTP

**[HTTP](https://developer.mozilla.org/es/docs/Web/HTTP) (Hypertext Transfer Protocol)** es un protocolo de comunicación utilizado para la transferencia de información en la World Wide Web (WWW). Es el lenguaje común que permite que los navegadores web y los servidores se comuniquen entre sí y facilita la solicitud y la entrega de recursos, como páginas web, imágenes, videos y otros archivos en la internet.

HTTP funciona según un modelo cliente-servidor, donde el cliente, generalmente un navegador web, envía solicitudes HTTP al servidor y espera respuestas. Una solicitud HTTP consta de un método (como GET, POST, PUT o DELETE) que indica la acción que se debe realizar, una URL (Uniform Resource Locator) que identifica el recurso solicitado y opcionalmente un cuerpo que contiene datos adicionales. El servidor responde a la solicitud con un código de estado que indica si la solicitud fue exitosa (como 200 OK) o si ocurrió algún error (como 404 Not Found).

HTTP también permite la transferencia segura de datos a través de **[HTTPS](https://www.cloudflare.com/es-es/learning/ssl/what-is-https/) (HTTP Secure)**, que utiliza una capa adicional de cifrado para proteger la confidencialidad e integridad de la información transmitida.

En resumen, HTTP es el protocolo fundamental que permite la comunicación entre navegadores web y servidores, facilitando la transferencia de recursos en la World Wide Web. Es ampliamente utilizado en internet y es la base de la navegación y la interacción en línea que experimentamos a diario.

## http-server

**[http-server](https://www.npmjs.com/package/http-server)** es un paquete de Node.js que permite crear un servidor web simple para servir archivos estáticos en tu máquina local. Proporciona una forma rápida y sencilla de configurar un servidor web local sin necesidad de configuraciones complejas.

Al utilizar http-server, puedes navegar por los archivos en un directorio específico a través de un navegador web. Esto es útil cuando deseas probar tu sitio web o aplicación en tu máquina local antes de implementarla en un servidor real.

El paquete http-server se instala globalmente utilizando npm (Node Package Manager). Después de la instalación, puedes ejecutar el comando http-server desde la línea de comandos en el directorio que deseas servir. El servidor se inicia y muestra la URL local a la que puedes acceder desde tu navegador para ver los archivos.

Algunos de los beneficios de utilizar http-server son:

1. Configuración rápida: No es necesario configurar un servidor web completo, solo se necesita un comando para iniciar el servidor.
2. Servicio de archivos estáticos: Sirve archivos HTML, CSS, JavaScript, imágenes y otros archivos estáticos desde el directorio especificado.
3. Soporte de recarga automática: Puedes habilitar la recarga automática del navegador cuando los archivos cambien.
4. Fácil de usar: No requiere conocimientos avanzados de configuración de servidores web.

En resumen, http-server es una herramienta útil para crear rápidamente un servidor web local y servir archivos estáticos en tu máquina durante el desarrollo y pruebas de tu sitio web o aplicación.
