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
  - Los js externos que queramos usar debemos exportarlos en el fichero js: module.exports
  - Ejecutar la prueba desde línea de comandos mediante el comando: mocha.

### 2. EXPRESIONES REGULARES
1. Se declaran con new RegExp() o con /expresion/
2. Se evaluan con .test(texto a evaluar), que devuelve un true o false.
3. Para evaluar si existe alguno de los caracteres, se usan los corchetes. Ej: /[012345]/ buscará que exista un 0,1,2,3,4 o 5 en la cadena a evaluar. También se puede usar rangos, como A-Z
4. Se pueden usar atajos para hacer mas cortas las expresiones regulares. Ej: \d es digito, \w es letra o número
5. La negación de la expresión regular se realiza con el carácter ^
6. Caracteres especiales para repetir. + es para 1 o mas veces y el * es para 0 ó mas veces.
7. El carácter ? indica la opcionalidad del carácter.
8. Para el conteo de caracteres se utiliza el formato {m,n}.
9. Con el operador i estaremos indicando que la expresión regular no es case sensitive
10. Con los paréntesis agrupamos expresiones regulares
11. El método exec permite obtener mas información, ya que devuelve un objeto con el índice, el input o entrada encontrada, etc.
12. El método match es parecido al anterior, pero se aplica sobre una cadena de texto y es la expresión regular la que se pasa como parámetro
13. Para limitar o forzar que una expresión regular se cumpla se usa \b al principio y al final de lo que se quiera delimitar.
14. Para usar patrones auxiliares se usa el carácter pipe |.




