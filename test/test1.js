const assert = require("assert");
const objetosPrueba = require("../js/orientadoobjetos.js");

var productos = new objetosPrueba.Productos();

var pantalla1 = new objetosPrueba.Pantalla (1234,"Hisense","UHD",50);
pantalla1.encendido();
pantalla1.encendido();
productos.add(pantalla1);

var pantalla2 = new objetosPrueba.Pantalla (1235,"LG","Plasma",43);
pantalla2.encendido();
productos.add(pantalla2);

describe("Numbers",function(){
  it('should add two numbers',function(){
    assert.equal(5, 3 + 2);
  })
});

describe("Objeto Pantalla", function(){
    it('Cantidad de elementos', function(){
      assert.strictEqual(productos.list().length, 2);
    });
    it('Garantia 1', function(){
        assert.strictEqual(pantalla1.garantia, 98);
      });
      it('Garantia 2', function(){
        assert.strictEqual(pantalla2.garantia, 99);
      });
  });