class Producto {
    constructor(numSerie){
        this.numSerie = numSerie;
        this.tiempoGarantia=100;
    }

    set garantia(value) {
        this.tiempoGarantia -= value;
    }

    get garantia(){
        return this.tiempoGarantia;
    }
}

class Pantalla extends Producto{
    constructor(numSerie, marca, modelo, pulgadas){
        super(numSerie);
        this.marca = marca;
        this.modelo=modelo;
        this.pulgadas = pulgadas;
    }

    encendido(){
        this.garantia = 1;
        console.log (`La pantalla ${this.marca} se ha encendido`);

    }

    volumen () {
        console.log (`El volumne se ha modificado`);
    }
    info () {
        console.log (`La pantalla ${this.marca} de modelo ${this.modelo} tiene ${this.pulgadas} y tiene una garantia de ${this.garantia}`);
    }
}

class Productos {
    constructor(){
        this.productos = [];
    }

    list() {
        return [...this.productos];
    }

    add(producto) {
        
        this.productos.push(producto);
    }
}


if (typeof module !== 'undefined')
    module.exports = {Productos, Producto, Pantalla}