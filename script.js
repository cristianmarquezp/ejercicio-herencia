

class Empleado { 
    constructor(nombre, funcion){
        this.nombre = nombre;
        this.funcion= funcion;   
    }

    trabajoRealizado(){
        return "Yo " + this.nombre + " hago :" + this.funcion;
    }
}

var nuevoEmp = new Empleado("Cristian", "el tinto" );

console.log(nuevoEmp.trabajoRealizado());

