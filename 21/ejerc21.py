
# Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos:
# edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales
# o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.

def calcularImpuestos(edad, ingresos):
    if edad >= 18 and ingresos >= 1000:
        return (ingresos * 40) / 100
    else:
        return 0
    
edad = int(input("Ingrese su edad: "))
ingresos = int(input("Coloque sus ingresos: "))

print(calcularImpuestos(edad, ingresos))