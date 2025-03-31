//Realizar una tabla de multiplicación de un número (a) desde 0 hasta x,
// pero que no se muestre la multiplicación de a * 5.

function mult(a = 0, x = 12) {
  for (let i = 0; i <= x; i++) {
    if (i === 5) continue;
    console.log(`${a} x ${i} = ${a * i}`);
  }
}

mult(7, 10);
