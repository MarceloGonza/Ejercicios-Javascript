// Tienes un array de objetos que representan productos con su nombre y precio. Usa .reduce() para encontrar el producto más caro.
// Usa .reduce() para comparar los precios y devolver el objeto con el mayor precio.
// No uses Math.max(), hazlo solo con reduce().

// Necesitas comparar los precios en cada iteración.
// acumulador debe ser el producto con el precio más alto hasta el momento.

const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Mouse", precio: 50 },
  { nombre: "Teclado", precio: 100 },
  { nombre: "Monitor", precio: 300 },
];

// Usa reduce() para encontrar el producto más caro
const productoMasCaro = productos.reduce(
  (max, precio) => (precio.precio > max ? precio.precio : max),
  productos[0]
);
console.log(productoMasCaro); // Debería mostrar { nombre: "Laptop", precio: 800 }
