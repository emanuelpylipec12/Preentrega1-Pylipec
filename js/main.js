let nombreUsuario = prompt("ingrese su nombre");
console.log(nombreUsuario);

alert("Hola " + nombreUsuario + "!" + "  bienvenido a la tienda Silvina Leiva.")




function saludar(nombreUsuario){
   console.log ("hola " + nombreUsuario)
}
saludar(nombreUsuario)



let id = prompt("Ingrese id de producto")

if (id <= 06) {
    alert("El precio del producto es de 1.452usd")
} else {
    alert("El numero de id no existe")
}


let precio = 1.2
let ivaQueCorresponde = 21
let iva = precio *ivaQueCorresponde/100
let precioConIva = precio + iva
alert (precioConIva)
