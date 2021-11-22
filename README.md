### 1. BUENAS PRÁCTICAS

1. Las variables se pueden declarar separadas por comas.
2. Las variables globales lo mejor es declararlas como objetos y usar propiedades. De esta manera las declaras como si fuera un espacio de nombres.
```
    var mensaje={};
    mensaje.prueba1 = "1";
    mensaje.prueba2 = 3; 
```
3. No se puede usar palabras reservadas como try, catch, function, ...
4. No se deben hacer cálculos innnecesarios. Por ejemplo, en un bucle for para un arreglo, deberiamos usar una variable previa que contenga el contenido del tamaño del arreglo.
5. En lugar de trabajar con funciones anónimas podemos hacer un objeto que contenga una función y asociarla con esa función. Ej:
```
    var tienda = {
        nombre: "dsfdsfdsfsd",.
        saludar: function() {
           var mensaje = "Hola " + this.nombre;
           return mensaje;
        }
      };
```
6. Hay que validar los objetos para controlar que solo se haga operaciones si el objeto existe.
7. Usar el operador ternario siempre que sea posible.
8. === compara tipo y valor de los datos.
9. Ya se puede usar clases y herencia en javascript
10. Controlar los errores con try catch y, siempre que sea posible, si estamos en un bucle usarlo fuera del bucle.
11. Los objetos que tengan pocas propiedades o atributos, se pueden declarar de manera literal. Ej:
```
    var persona = {};
    persona.nombre = "Juan";
    
    var lista = ['banana','naranja'];
 ```
 12. El formato de declaración del nombre de variables es Camel Case y Snake Case.
 13. Se recomienda no usar el evento load del window y, en su lugar, poner el código javascript abajo, para así tener todo el DOM cargado.
 14. Usar archivos separados para los js.
 15. Usar funciones para evitar la duplicidad.
 16. Añadir el evento en tiempo de ejecución y no en la página HTML.
 17. Utilizar json para transmitir y recibir información. 
 18. **Join** permite convertir un array en un string, mientras que **concat** permite añadir un nuevo elemento a un array.
 19. Uso de console.time('etiqueta') y un console.timeEnd('etiqueta') para pruebas de rendimiento.
 20. Minificar y ofuscar el código. Por ejemplo, usando [jscompress.com](http://jscompress.com) y [javascriptobfuscator.com](https://javascriptobfuscator.com/Javascript-Obfuscator.aspx)
 21. Uso del servicio [jshint](http://jshint.com) para validar el código.
 22. Validar la ejecución correcta mediante el uso de [mochajs](http://mochajs.org). Se puede instalar con el comando npm. Los pasos para usar mocha:
  - npm install --global mocha
  - Crear carpeta test y dentro colocar todos los js que queramos usar.
  ```
      const assert = require("assert");
      const objetosPrueba = require("../js/orientadoobjetos.js");
  ```
  - Los js externos que queramos usar debemos exportarlos en el fichero js: module.exports.
  ```
      module.exports = {Productos, Producto, Pantalla}
  ```
  - Ejecutar la prueba desde línea de comandos mediante el comando: mocha.
  
  Unb ejemplo en: [test de prueba](https://github.com/Asurbanipal1977/javascriptLinkedin/blob/main/test/test1.js)

### 2. EXPRESIONES REGULARES
1. Se declaran con new RegExp() o con /expresion/
2. Se evaluan con **.test**(texto a evaluar), que devuelve un true o false.
3. Para evaluar si existe alguno de los caracteres, se usan los corchetes. Ej: /[012345]/ buscará que exista un 0,1,2,3,4 o 5 en la cadena a evaluar. También se puede usar rangos, como A-Z
4. Se pueden usar atajos para hacer mas cortas las expresiones regulares. Ej: \d es digito, \w es letra o número
5. La negación de la expresión regular se realiza con el carácter ^
6. Caracteres especiales para repetir. + es para 1 o mas veces y el * es para 0 ó mas veces.
7. El carácter ? indica la opcionalidad del carácter.
8. Para el conteo de caracteres se utiliza el formato {m,n}.
9. Con el operador i estaremos indicando que la expresión regular no es case sensitive
10. Con los paréntesis agrupamos expresiones regulares
11. El método **exec** permite obtener mas información, ya que devuelve un objeto con el índice, el input o entrada encontrada, etc.
12. El método **match** muestra en un array todas las coincidencias entre la cadena y la expresión regular. En este caso, por tanto, se pasa a una cadena la expresión regular cadena.match(\expresion regular\)
13. Para limitar o forzar que una expresión regular se cumpla se usa \b al principio y al final de lo que se quiera delimitar.
14. Para usar patrones auxiliares se usa el carácter pipe |.
15. El patrón para indicar el inicio es ^ y el patrón para indicar el final es $.
16. Para hacer una búsqueda global se utiliza /g.
17. Se puede usar el método **search** de una cadena de texto para buscar patrones dentro de esa cadena. Se para tras encontrar la primera coincidencia y devuelve el índice.
18. La propiedad lastIndex se puede cambiar y actualizar para que el punto de comienzo de la búsqueda sea otro.

### 3. CONTROL DE CALIDAD
Una de las herramientas es **PhantomJS**.
- Es un navegador web.
- Basado en webkit.
- Sin interfaz gráfica. Funciona desde consola.
- Tiene un API de bajo nivel para pruebas.

También se usa **CasperJS**:
- Conjunto de rutinas enfocado a pruebas
- Trabaja con el navegador

Y finalmente se usa **Gulp**:
- Automatizador de tareas basado en Javascript.
- Gestiona diversas tareas y se controla desde consola.
- Permite generar un servidor.

3.1. Instalación de herramientas:
- Se tiene que descargar el proyecto de [siddharta1337](https://github.com/siddharta1337/Desarrollo-web-Control-de-calidad-automatizado)
- Se ejecuta: npm init
- Se ejecuta: npm install --save gulp gulp-webserver opn
- En el archivo gulpfile.js se encuentra el código de automatización
- El .pipe nos sirve para definir la tarea.
En la definición del servidor, el parámetro liveload a true permite que se recargue el servidor siempre que haya error.

PHANTOMJS
- Después instalamos el navegador [phantomjs de la ruta](https://phantomjs.org/download.html) 
- Se añade la ruta al path.
- Se ejecuta con: phantomjs archivo.js

CASPERJS
- Permite realizar pruebas end to end, permite realizar clicks, etc
- Se instala mendiante el comando: npm install casperjs -g.
- Casperjs funciona sobre phantomjs.
- Para ejecutar el test se usa:
  casperjs test '.\prueba_sintaxis.js'
- Para controlar una tarea e pasos se utiliza la función .then().

### 4. SCRUM
- Metodología ágil de desarrollo software que permite reducir los tiempos así como reducir los errores.
- Es un sistema de trabajo en paralelo.
- Ciclos cortos (de dos a tres semanas).
- Permite crear productos que se adapten a necesidades cambiantes, es decir, hay mayor adaptación a los cambios imprevistos.
- Trabajo en equipo.
- Trabaja con sprint, creando productos funcionales desde el principio.

4.1. Roles
- Cada miembro tiene una misión.
- Es importante mantener los procesos.
- Los roles son: Product Owner, Scrum Master, equipo.
- Los roles pueden intercambiarse.
- El product owner:
  - Aporta las ideas del producto final.
  - Genera los requisitos en el backlog.
  - No es el jefe... Su función es suministrar las ideas que van a construir el producto.
- El equipo:
  - Son los que llevan a cabo el producto.
  - Los equipos deben ser pequeños y autosuficientes. Entre 3-5 a 15 personas.
  - Todos son parte del proceso creativo.
  - El equipo se enfoca a resultados.
- El scrumMaster:
  - Mantiene el flujo de trabajo.
  - Apoyo del equipo.
  - Mantiene los procesos.
  - Gestiona las reuniones diarias.
  - Tampoco es el jefe.

4.2. CICLO DE TRABAJO
- Los miembros del equipo seleccionan las tareas del backlog.
- Una vez que acaba el desarrollo, el equipo presenta el producto con el product owner y el scrumMaster.
- Se trabaja en ciclos cortos.
- La bitácora la realiza el product owner.
- La bitácora siempre debe redactarse desde el punto de vista del cliente.
- Solo el dueño de producto puede agregar o quitar tareas de la bitácora.
- Un sprint es un ciclo de desarrollo de un producto.
- El scrum diario es uno de los rituales principales de SCRUM. Es una reunión importante, corta(de unos 15 minutos), se realizan de pie y cada miembro del equipo responde a tres preguntas:
  - ¿Qué hiciste ayer?
  - ¿Qué vas a hacer hoy?
  - ¿Hay algún obstáculo para realizarlo? El ScrumMaster deberá resolver estos obstáculos.
- Las peticiones deben ser claras, medibles y cuantificables.
- En la **retrospectiva** los miembros del equipo analizan sus experiencias. Se va a hablar sobre las nuevas habilidades adquiridas, dificultades encontradas y su función no es encontrar culpables.

4.3. HERRAMIENTAS PARA SCRUM
- Hay que organizar la bitácora, indicando el id, tema, rol, necesidad, resultado, notas, prioridad y status. 
- Cada capacidad o necesidad de la bitácora, se puede subdividir en varias subtareas.
- El burndown nos va a permitir comparar el previsto con el avance real.
- Trello es un herramienta en línea para organizar un proyecto SCRUM.



