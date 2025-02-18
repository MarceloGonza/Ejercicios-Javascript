#Escribir una función llamada imprimirArreglo que reciba un arreglo e
# imprima cada elemento en una línea a parte:

def imprimirArreglo(lista):
    for elemento in lista:
        print(elemento)

# Uso de la función

mi_lista = [1, 2, 3, 4, 5] 
imprimirArreglo(mi_lista)


#Ejemplo con retorno de valores:
#def duplicar_numeros(numeros):
#    return [num * 2 for num in numeros]
#        
#mis_numeros = [1, 2, 3, 4, 5]
#resultado = duplicar_numeros(mis_numeros)
#print(resultado)


#Ejemplo con validación de datos:
#def sumar_lista(numeros):
#    if not isinstance(numeros, list): #verifica que sea una lista
#        raise TypeError("El parámetro debe ser una lista")
#    return sum(numeros)

#mi_lista = [10,20,30]
#print(sumar_lista(mi_lista))