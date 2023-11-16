---
theme: apple-basic
info: |
  ## Clase 26 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 26
fonts:
  # basically the text
  sans: 'Inter,Noto Color Emoji'
  # use with `font-serif` css class from windicss
  serif: 'Inter,Noto Color Emoji'
  # for code blocks, inline code, etc.
  mono: 'Fira Code,Noto Color Emoji'
  weights: '300,700,900'
layout: intro
level: 1
hideInToc: true
download: true
presenter: dev
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: true
  withToc: true
exportFilename: clase_26
---

# Ordenamiento
## Clase 26 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---

# Anuncios

1. La tarea se publicó el miércoles. Recordar que tienen hasta el 30 de noviembre para entregarla.
2. El compilado de ejercicios está publicado para el examen.

---
layout: center
level: 2
title: Ejercicio restante de la clase anterior
hideInToc: true
---

# Ejercicio restante de la clase anterior
## Veamoslo

---
layout: default
level: 1
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior

Por ejemplo, si queremos representar un condominio, podemos definir una clase `Casa` que tenga atributos como dirección, número de ventanas y color. Luego, podemos definir una clase `Condominio` que tenga atributos como dirección y una lista de casas. De esta forma, podemos crear un condominio con dos casas.

```python
class Casa:
    def __init__(self, direccion, n_ventanas, color):
        self.direccion = direccion
        self.n_ventanas = n_ventanas
        self.color = color
class Condominio:
    def __init__(self, direccion, casas):
        self.direccion = direccion
        self.casas = casas # Esta lista tendrá instancias de la clase Casa
```

---
layout: default
level: 1
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior

También podemos definir un método que transfiera agua de una casa a otra. Para esto, debemos definir un método que reciba dos instancias de la clase `Casa` y un número de litros y transfiera esa cantidad de litros de agua de una casa a otra.

```python
class Condominio:
    def __init__(self, direccion, casas):
        self.direccion = direccion
        self.casas = casas # Esta lista tendrá instancias de la clase Casa
    def agregar_casa(self, casa):
        """Recibe una instancia de la clase Casa y la agrega a la lista de casas del condominio."""
        self.casas.append(casa)
    def transferir_agua(self, indice_1, indice_2, litros):
        """Recibe dos instancias de la clase Casa y
        un número de litros y transfiere esa cantidad de litros de agua de una casa a otra."""
        casa_1.consumir_agua(litros)
        casa_2.consumir_agua(-litros)
```

---
layout: default
level: 1
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior

Otra cosa que podemos querer hacer es que el condominio cree las casas. Para esto, debemos definir un método que cree una instancia de la clase `Casa` y la agregue a la lista de casas del condominio.

```python

class Condominio:
    def __init__(self, direccion, casas):
        self.direccion = direccion
        self.casas = casas # Esta lista tendrá instancias de la clase Casa
    def agregar_casa(self, casa):
        """Recibe una instancia de la clase Casa y la agrega a la lista de casas del condominio."""
        self.casas.append(casa)
    def crear_casa(self, direccion, n_ventanas, color):
        """Recibe los datos de una casa y crea una instancia de la clase Casa,
        la agrega a la lista de casas del condominio y la retorna."""
        casa = Casa(direccion, n_ventanas, color)
        self.agregar_casa(casa)
        return casa
```

---
layout: center
level: 1
title: Agenda
hideInToc: true
---

# Agenda

<Toc />

---
layout: default
level: 1
title: Motivación
hideInToc: false
---

# Motivación

En la vida real, los datos no siempre vienen ordenados. Muchas veces, vamos a querer ordenarlos para poder trabajar con ellos. Por ejemplo:

- Recibir una lista de alumnos y querer ordenarlos por nombre.
- Recibir una lista de alumnos y querer ordenarlos por promedio.
- Recibir una baraja de cartas y querer ordenarlas por pintas y números.
- Recibir una lista de pedidos y querer ordenarlos por fecha.

---
layout: default
level: 1
title: Algoritmos de ordenamiento
hideInToc: false
---

# Algortimos de ordenamiento
## ¿Cómo ordenamos?

Para ordenar un conjunto de datos, en una lista por ejemplo, tenemos que seguir un conjunto de pasos. Por ejemplo, si queremos ordenar una lista de números, podemos seguir los siguientes pasos:

1. Recorrer la lista y encontrar el elemento más pequeño.
2. Agregarlo al final de una lista distinta (que comienza vacía).
3. Repetir hasta que no queden elementos en la lista original.

Esto es lo que se llama un **algoritmo de ordenamiento**. Un algoritmo de ordenamiento es lo mismo que un algoritmo normal, pero que tiene como objetivo ordenar un conjunto de datos.

El algoritmo que acabamos de describir se llama **Insertion Sort**. Este algoritmo es bastante ineficiente, pero es fácil de entender y de implementar.

---
layout: two-cols
level: 1
title: Insertion Sort
hideInToc: true
---

# Insertion Sort

El algoritmo de ordenamiento que acabamos de describir se llama **Insertion Sort**. Este algoritmo es bastante ineficiente, pero es fácil de entender y de implementar.

Primero podemos entenderlo en pseudocódigo:

```pascal
insertion_sort(lista):
    lista_ordenada = []
    while lista no está vacía:

        elemento_menor = nada

        for elemento in lista:

            if elemento_menor es nada
              or elemento < elemento_menor:
                elemento_menor = elemento

        agregar elemento_menor a lista_ordenada
        eliminar elemento_menor de lista
    return lista_ordenada
```

::right::

O en python:

```python
def insertion_sort(lista):
    lista_ordenada = []
    while lista != []:
        elemento_menor = None
        for i in range(len(lista)):
            elemento = lista[i]
            if (elemento_menor is None
            or elemento < elemento_menor):
                elemento_menor = i
        lista_ordenada.append(lista.pop(elemento_menor))
    return lista_ordenada
```

Sin embargo, podemos hacerlo más eficiente, es más, podemos no usar un algoritmo de ordenamiento, sino que usar una función que ya existe en python.

---
layout: default
level: 1
title: lista.sort()
hideInToc: false
---

# <span class="dark:text-white text-black">`lista.sort()`</span>

En python, las listas tienen un método llamado `sort()`. Este método ordena la lista en **orden ascendente**.

```python
lista = [5, 2, 3, 1, 4]
lista.sort() # Ordena la lista. Noten que no retorna nada.
print(lista)
```

Al ejecutar este código, se imprime:

```python
[1, 2, 3, 4, 5]
```

`sort()` es un método que **modifica la lista original**, es decir, no retorna una nueva lista, sino que modifica la instancia de la lista sobre la que se llama. Modificar una lista sobre si misma con un algoritmo de ordenamiento es conocido como un algoritmo in-place. Pueden leer más al respecto [aquí](https://www.educative.io/answers/what-are-in-place-and-out-of-place-algorithms).

Si queremos ordenar una lista en orden descendente, podemos usar el parámetro `reverse`:

```python
lista = [5, 2, 3, 1, 4]
lista.sort(reverse=True) # Ordena la lista en orden descendente.
print(lista)
# [5, 4, 3, 2, 1]
```

---
layout: default
level: 1
title: sorted()
hideInToc: false
---

# <span class="dark:text-white text-black">`sorted()`</span>

Si queremos ordenar con `sort()`  pero evitar que esta lista cambie, podemos copiarla y ordenar la copia.

```python
lista = [5, 2, 3, 1, 4]
lista_ordenada = lista[:] # Copia la lista
lista_ordenada.sort()
print(lista)
# [5, 2, 3, 1, 4]
print(lista_ordenada)
# [1, 2, 3, 4, 5]
```

Pero otra opción es usar la función `sorted()`. Esta recibe una lista y retorna una nueva lista ordenada.

```python
lista = [5, 2, 3, 1, 4]
lista_ordenada = sorted(lista)
print(lista)
# [5, 2, 3, 1, 4]
print(lista_ordenada)
# [1, 2, 3, 4, 5]
```

❗ `sorted()` **no modifica la lista original**, recibe los mismos parámetros que `sort()`, y **no es un método** sino que es una función.

---
layout: two-cols
level: 1
title: Ordenando listas de strings
hideInToc: false
---

# Ordenando listas de strings

Recordemos la tabla que vimos en la [clase 10](/clase_10/10) que muestra los valores de los operadores de comparación para strings:

<img class="w-95" src="/content/clase_10/ascii_table.svg" />

::right::
La "A" es el caracter 65 y la "a" es el caracter 97. Por lo tanto, `"A" < "a"` y `"a" > "A"`.

Esto significa que si ordenamos una lista de strings, las mayúsculas van a quedar primero. Además si un string es más largo que otro, va a quedar después. Por ejemplo:

```python
lista = ["a", "A", "b", "B"]
lista.sort()
print(lista)
# ["A", "B", "a", "b"]

# Palabras con mas letras y espacios
lista = ["hola", "hola mundo", "hola mundo!"]
lista.sort()
print(lista)
# ["hola", "hola mundo", "hola mundo!"]
```

Python compara letra por letra hasta que encuentra una que sea distinta y es ahí donde decide el orden. Si una palabra es más larga que otra, pero son iguales, la palabra más larga va a quedar después.

---
layout: default
level: 1
title: uso de key
hideInToc: false
---

# Usando <span class="dark:text-white text-black">`key`</span>

Si queremos ordenar una lista de strings en orden alfabético, una mezcla de datos numéricos y strings, o una lista de objetos, usar solamente `sort()` o `sorted()` no es suficiente, puede arrojar error o no ordenar como queremos.

Para usar criterios más complejos de comparación, podemos usar el parámetro `key`. Este recibe una función que recibe un elemento de la lista y retorna un valor que se usa para comparar. Por ejemplo:

```python
def cuantas_vocales(string):
    vocales = "aeiou"
    contador = 0
    for letra in string:
        if letra in vocales:
            contador += 1
    return contador

lista = ["Pedro", "Antonio", "Juan", "Maria"]
lista.sort(key=cuantas_vocales)
print(lista)
# ["Juan", "Pedro", "Antonio", "Maria"]
```

---
layout: default
level: 1
title: Ordenando objetos
hideInToc: false
---

# Ordenando objetos

Si queremos ordenar una lista de objetos, podemos usar el parámetro `key` para indicar qué atributo de cada objeto queremos usar para comparar. Por ejemplo, ordenar regalos de navidad por tamaño:

```python
class Regalo:
    def __init__(self, nombre, alto, ancho, largo):
        self.nombre = nombre
        self.alto = alto
        self.ancho = ancho
        self.largo = largo

def volumen(regalo):
    """Nuestra función key. Retorna el volumen del regalo."""
    return regalo.alto * regalo.ancho * regalo.largo

regalos = [
    Regalo("Pelota", 10, 10, 10),
    Regalo("Libro", 5, 5, 5),
    Regalo("Caja", 20, 20, 20),
]
regalos.sort(key=volumen) # Ordena los regalos por volumen en orden ascendente.
print(regalos[0].nombre)
# "Libro"
```

---
layout: center
level: 1
title: Otros algoritmos de ordenamiento
hideInToc: false
---

# Otros algoritmos de ordenamiento

Python usa un algoritmo llamado **Timsort** para ordenar listas. Este algoritmo es bastante eficiente, pero no es el único. Existen muchos otros algoritmos de ordenamiento, cada uno con sus ventajas y desventajas. Veamos algunos de [aquí](https://www.toptal.com/developers/sorting-algorithms) o [aquí](https://www.youtube.com/watch?v=kPRA0W1kECg).

---
layout: default
level: 1
title: Ordenando elementos tipo lista
hideInToc: false
---

# Ordenando elementos tipo lista

Cuando todos los elementos de una lista son listas del mismo formato, podemos usar `sort()` o `sorted()` para ordenarlas. Por ejemplo:

```python
dulces_navidad = [
    ["Chocolate", 10],
    ["Galletas", 5],
    ["Caramelos", 20],
]
dulces_navidad.sort()
print(dulces_navidad)
# [["Caramelos", 20], ["Chocolate", 10], ["Galletas", 5]]
```

Esto es porque python compara elemento por elemento, y como el primer elemento de cada lista es un string, los compara usando el orden alfabético. Si hay dos strings iguales, compara el segundo elemento, y así sucesivamente.

---
layout: default
level: 1
title: Ejemplo avanzado
hideInToc: false
---

# Juegos DCCmericanos (Ex 2023-1)
## Ejemplo avanzado

# Introducción

Los resultados de los Juegos DCCmericanos ya están, y todos quieren saber cuáles son los países con mayor cantidad de medallas de oro, plata y bronce.

# Objetivo:

 Contarás con una lista de listas `tabla`, que representa los resultados en los juegos para todos los países, donde cada elemento de `tabla` representa un país, con la siguiente información:

- El nombre del país
- El nombre del continente al que pertenece ese país
- La cantidad de oros que ganó ese país
- La cantidad de platas que ganó ese país
- La cantidad de bronces que ganó ese país

---
layout: default
level: 1
title: Ejemplo avanzado
hideInToc: true
---

Por ejemplo, la lista `[‘Italia’,’Europa’,2,1,4]` indica que Italia (ubicado en Europa) obtuvo 2 medallas de oro, 1 de plata y 4 de bronce.

Para calcular el puntaje final de cada país, se usará la fórmula 10\*oro + 5\*plata + bronce. Para el ejemplo anterior, el puntaje de Italia sería 10\*2 + 5\*1 + 4 = 29 puntos.

Debes definir la función `podio(tabla, continente)`, la cual retorna una lista de los 3 países del continente `continente`, que tienen el mayor puntaje, en el formato  `[pais, puntaje]`. Si dos o más países tienen el mismo puntaje, se considera un orden alfabético del nombre del país. **¡Cuidado!**
Si `continente` es un asterisco "*", entones se tiene que encontrar los 3 países con mayor puntaje de toda la tabla (sin considerar un continente en específico).

---
layout: default
level: 1
title: Ejemplo avanzado
hideInToc: true
---

## Input Format

**Es muy importante que sepas que NO debes hacerte cargo de recibir ningún input en tu código, ya que este será manejado de forma automática por nosotros**.
De todas maneras, el código que se ejecuta es una llamada a la función `podio(tabla, continente)`. El valor de `tabla` es una lista de lista conformada de 2 *strings* y 3 *ints*, y el valor de continente es un *string* (que puede una abreviatura de un continente, o un asterisco).

## Output Format

La función `podio(tablero, continente)` retorna una lista de listas con los 3 con mayor puntaje pertenecientes al `continente`, con en el formato  [pais, puntaje]. Si continente es igual a `*`, entonces se hace el mismo procedimiento pero para todos los países de `tablero`.
Deben estar ordenados de mayor a menor puntaje. Los puntajes empatados deben ordenarse alfabéticamente. Siempre debes entregar una lista solo con tres elementos.

---
layout: center
level: 1
title: Ejemplo avanzado
hideInToc: true
---

## Consideraciones

- Siempre habrán al menos 3 países por continente.
- Si a podio se le pasa un asterisco "*" como `continente`, no hay que tomar un continente en específico.
- Si hay empates entre países con el mismo puntaje, se considera un orden alfabético.

---
layout: two-cols
level: 1
title: Ejemplo avanzado
hideInToc: true
---

## Ejemplos

#### Input Test Case 00

```python
tabla = [
['Chile', 'SA', 4, 3, 1],
['Francia', 'EU', 2, 2, 1],
['Argentina', 'SA', 4, 3, 1],
['Portugal', 'EU', 2, 0, 1],
['Alemania', 'EU', 1, 5, 6],
['Italia', 'EU', 2, 0, 1],
['Peru', 'SA', 0, 0, 2],
['Uruguay', 'SA', 0, 5, 2],
]
print(podio(tabla, 'SA'))
```

::right::

#### Output Test Case 00

```python
['Argentina', 56]
['Chile', 56]
['Uruguay', 27]
```

**Explicación**: Como se está ordenando por 'SA', los países que se tienen que considerar son Chile (con puntaje 4\*10+3\*5+1 = 56), Argentina (con puntaje 4\*10+3\*5+1 = 56), Peru (con puntaje 0\*10+0\*5+3 = 3) y Uruguay (con puntaje 0\*10+5\*5+2 = 27). Argentina y Chile están empatados por primer lugar.
En ese caso se pone Argentina primero por orden alfabético, y Chile en segundo lugar. En tercer lugar está Uruguay con 27 puntos.

---
layout: two-cols
level: 1
title: Ejemplo avanzado
hideInToc: true
---

#### Input Test Case 02

```python
tabla = [
['Chile', 'SA', 4, 3, 1],
['Francia', 'EU', 2, 2, 1],
['Argentina', 'SA', 4, 3, 1],
['Portugal', 'EU', 2, 0, 1],
['Alemania', 'EU', 1, 5, 6],
['Italia', 'EU', 2, 0, 1],
['Peru', 'SA', 0, 0, 2],
['Uruguay', 'SA', 0, 5, 2],
]
print(podio(tabla, '*'))
```

#### Output Test Case 02

```python
['Argentina', 56]
['Chile', 56]
['Alemania', 27]
```

::right::

**Explicación**: En este testcase, hay que ordenar por "*". Esto significa que vamos a encontrar los 3 países con mayor puntaje (sin considerar los continentes). Tenemos los puntajes:

- Chile: 4\*10 + 3\*5 + 1 = 56
- Francia: 2\*10 + 2\*5 + 1 = 31
- Argentina: 4\*10 + 3\*5 + 1 = 56
- Portugal: 2\*10 + 0\*5 + 1 = 21
- Alemania: 1\*10 + 5\*5 + 6 = 41
- Italia: 2\*10 + 0\*5 + 1 = 21
- Peru: 0\*10 + 0\*5 + 2 = 2
- Uruguay: 0\*10 + 5\*5 + 2 = 27

Por lo tanto, Argentina queda como primer lugar y Chile segundo con un mismo puntaje de 56 (tienen el mismo puntaje, y por orden alfabético Argentina irá antes que Chile), y Alemania tercero con 41 puntos

---
layout: default
level: 1
title: Ejemplo avanzado - Solución
hideInToc: false
---

# Solución

```python {1-11|12-20|22-35} {lines: true, maxHeight: '350px'}
# Indices de la lista
NOMBRE = 0
CONTINENTE = 1
ORO = 2
PLATA = 3
BRONCE = 4

# Calcula el puntaje de un pais
def puntaje(pais):
    return pais[ORO] * 10 + pais[PLATA] * 5 + pais[BRONCE]

def criterio(pais_filtrado):
    """Criterio de ordenamiento para sort().

    De acuerdo al enunciado, se ordena por puntaje, y si
    hay empate, se ordena alfabeticamente.
    Consideramos que el pais_filtrado es una lista de la forma
    [pais, puntaje].
    """
    return [-pais_filtrado[1], pais_filtrado[0]]

def podio(tabla, continente):
    """Retorna los 3 paises con mayor puntaje del continente.

    Si continente es "*", retorna los 3 paises con mayor puntaje
    de toda la tabla.
    """

    filtrados = []
    for pais in tabla:
        if continente == "*" or pais[CONTINENTE] == continente:
            filtrados.append([pais[NOMBRE], puntaje(pais)])

    ordenados = sorted(filtrados, key=criterio)
    return ordenados[:3]
```

---
layout: center
level: 1
title: Spoiler repaso
hideInToc: true
---

# Coming soon <span class="dark:text-white text-black">😭</span>

Esta es toda la materia del curso. ¡Felicitaciones por llegar hasta acá! 🎉 Que queda:

1. Próxima clase: materia extra (opcional).
2. Subsiguientes: Repaso y simulacro para el examen.
3. Última clase: Cierre del curso.

Nos vemos en la próxima clase.
