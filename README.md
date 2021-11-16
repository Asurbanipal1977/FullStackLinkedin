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