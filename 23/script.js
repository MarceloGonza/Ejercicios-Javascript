// Dado un array de objetos que representan productos con su precio, usa .reduce() para calcular el precio total.
// Usa .reduce() para sumar todos los precios.
// Retorna el total de la compra

const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Mouse", precio: 50 },
  { nombre: "Teclado", precio: 100 },
  { nombre: "Monitor", precio: 300 },
];

// Usa reduce() para obtener el precio total
const precioTotal = productos.reduce(
  (acumulador, precio) => acumulador + precio.precio,
  0
);

console.log(precioTotal); // Debería mostrar 1250
