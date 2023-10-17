---
theme: apple-basic
info: |
  ## Clase 13 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 17
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
exportFilename: clase_17
---
# Listas de listas
## Clase 17 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Anuncios

1. Recordar tarea 2 se entrega el 26 de octubre.
2. Ir a las SAP (sala de ayudantes presencial) para resolver dudas.

---
layout: default
level: 1
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior

Para agregar un elemento al final de una lista, se puede utilizar el método `append()`. Por ejemplo:

```python
compras = ["Leche", "Huevos", "Pan", "Mantequilla"]
compras.append("Café") # Agrega "Café" al final de la lista
```

Podemos retirar un elemento utilizando `pop()`, que además retorna el elemento eliminado.

```python
ultimo_elemento = compras.pop() # El último elemento será removido y guardado en 'ultimo_elemento'
```

Si queremos eliminar un elemento en una posición específica, podemos suministrar un índice a `pop()`

```python
segundo_elemento = compras.pop(1) # Eliminamos el segundo elemento
```

Cuidado al modificar listas durante un `for`. Usar `while` puede ser una solución.

Finalmente, el método `split()` de los strings puede servir para dividir un string en una lista de strings.

```python
dulces = "M&M, Snickers, Twix, Milky Way, Kit Kat"
lista_dulces = dulces.split(",")
```

---
layout: center
level: 2
title: Agenda
hideInToc: true
---

# Agenda

<Toc />

---
layout: intro
level: 1
title: Listas
---

# Motivación
## Listas de listas

---
layout: default
level: 2
title: Motivación
hideInToc: false
---
# Listas
## Motivación

Hasta ahora, hemos visto que las listas pueden guardar **cualquier** tipo de dato. Pero, solo hemos visto ejemplos con `int`, `float`, `bool` y `str`. ¿Podemos guardar otros tipos de datos, como por ejemplo, listas?

¿Por qué querríamos guardar listas dentro de listas? ¿Qué utilidad tiene?

Algunos ejemplos de listas de listas son:

- Una lista de listas de coordenadas de puntos
- Una inventario de una tienda, donde cada producto tiene una lista de sus características
- Una lista de alumnos por sección, donde sección tiene estudiantes.

---
layout: default
level: 2
title: idea
hideInToc: true
---

# Listas
## Idea de listas de listas

Tenemos una cuadra que tiene varias casas. Cada casa tiene varios tipos de dulces. ¿Cómo podemos representar esto en una lista?

| Casa Nro. | Tiene Twix | Tiene M&M | Tiene Snickers | Tiene Milky Way | Tiene Kit Kat |
| ------------ | ---------- | -------- | -------------- | --------------- | ------------- |
| `0`          | `3`     | `0`  | `2`         | `0`         | `10`        |
| `1`          | `0`    | `1`   | `0`        | `3`          | `0`       |
| `2`          | `5`     | `4`   | `3`         | `3`          | `6`        |

Cada casa tiene un índice, que es el número de cuenta de la casas (que va desde 0 hasta 2).
Cada casa además tiene una lista de dulces, donde cada elemento de la lista es la cantidad de dulces de ese tipo que tiene la casa.

---
layout: default
level: 2
title: Listas - listas de listas
hideInToc: false
---

# Listas
## Listas de listas

Para representar listas de listas, podemos usar listas dentro de listas. Por ejemplo, para representar la cuadra de dulces, podemos usar la siguiente lista de listas.

```python
# Lista de casas
casas = [
    # Casa 0 (estos comentarios son solo para explicar, no son necesarios)
    [3, 0, 2, 0, 10],
    # Casa 1
    [0, 1, 0, 3, 0],
    # Casa 2
    [5, 4, 3, 3, 6]
]
```

Cada item de la lista `casas` es una forma de modelar una casa. Cada casa es una lista de dulces. Por ejemplo, la casa 0 tiene 3 Twix, 0 M&M, 2 Snickers, 0 Milky Way y 10 Kit Kat.

---
layout: default
level: 2
title: ejemplos
hideInToc: true
---

# Listas de listas
## Ejemplos

Existen muchas situaciones de la vida real donde se usan listas de listas. Por ejemplo, en una tienda, se puede tener una lista de productos, donde cada producto tiene una lista de sus características.

```python
# Lista de productos
productos_jumbo = [
    # Producto 0 (nombre, precio, stock, stock mínimo)
    ["Jamón", 1000, 250, 100],
    # Producto 1 (nombre, precio, stock, stock mínimo)
    ["Queso", 500, 100, 50],
    # Producto 3 (nombre, precio, stock, stock mínimo)
    ["Café", 1500, 50, 20]
]
```

❗Cada lista dentro de la lista `productos_jumbo` tiene 4 elementos de distintos tipos (str, int, int, int).

❗La lista de listas está escrita en varias líneas, pero también se puede escribir en una sola línea.

```python
# Lista de productos
productos_jumbo = [["Jamón", 1000, 250, 100], ["Queso", 500, 100, 50], ...]
```

---
layout: default
level: 2
title: Indexación en listas de listas
hideInToc: false
---

# Listas de listas
## Indexación

Si queremos acceder a un elemento de una lista de listas, podemos usar la indexación. Por ejemplo, si queremos acceder al elemento `0` de la lista `casas`, podemos hacer lo siguiente:

```python
# Lista de casas
casas = [
    # Casa 0
    [3, 0, 2, 0, 10],
    # Casa 1
    [0, 1, 0, 3, 0],
    # Casa 2
    [5, 4, 3, 3, 6]
]
casa_0 = casas[0]
print(casa_0)
# >>> [3, 0, 2, 0, 10]
```

Sin embargo, si queremos acceder al elemento `0` de la lista `casa_0`, también podemos usar la indexación.

---
layout: default
level: 2
title: Indexación anidada
hideInToc: false
---

# Listas de listas
## Indexación anidada

Si además quisiéramos acceder al elemento `0` de la lista `casa_0`, podemos usar la indexación anidada.
Esto significa que podemos usar la indexación dentro de la indexación.

```python
# Lista de casas
casas = [
    # Casa 0
    [3, 0, 2, 0, 10],
    # ...
]
casa_0 = casas[0]
primer_dulce_casa_0 = casa_0[0]
print(primer_dulce_casa_0)
# >>> 3
```

Lo cual es equivalente a usar los corchetes de la indexación dos veces.

```python
primer_dulce_casa_0 = casas[0][0]
print(primer_dulce_casa_0)
# >>> 3
```

---
layout: default
title: Mutabilidad en listas de listas
level: 2
hideInToc: false
---

# Mutabilidad
## Listas de listas

Dado que una lista de listas es una lista, podemos modificar sus elementos usando la indexación.

```python
# Lista de casas
casas = [
    # Casa 0
    [3, 0, 2, 0, 10],
    # ...
]
# Modificamos la primera casa
casas[0] = [0, 0, 0, 0, 0]
```

También podemos modificar los elementos de las listas dentro de la lista.

```python
# Modificamos el primer dulce de la primera casa (asumiendo que casas[0] es [3, 0, 2, 0, 10])
casas[0][0] = 0
print(casas[0])
# >>> [0, 0, 2, 0, 10]
```

Y eso es porque las listas,y por consecuencia **las listas de listas, son mutables**.

---
layout: default
title: Listas de tipos mixtos
level: 2
hideInToc: false
---
# Listas de tipos mixtos

Hasta ahora, hemos visto ejemplos de listas de listas donde todos los elementos de la lista son del mismo tipo. Pero, ¿qué pasa si queremos guardar elementos de distintos tipos en una lista de listas?

Por ejemplo, ¿qué pasa si queremos guardar el nombre de un producto, su precio,
una lista de ingredientes, stock y stock mínimo?

```python
# Lista de productos
productos = [
    # Producto 0 (nombre, precio, ingredientes, stock, stock mínimo)
    ["Jamón", 1000, ["carne de cerdo", "sal", "conservantes"], 250, 100],
    # Producto 1 (nombre, precio, ingredientes, stock, stock mínimo)
    ["Queso", 500, ["leche", "sal", "conservantes"], 100, 50],
    # Producto 3 (nombre, precio, ingredientes, stock, stock mínimo)
    ["Coca Cola", 1500, ["agua", "azúcar", "conservantes"], 50, 20]
]

POSICION_INGREDIENTES = 2
# Obtener numero de ingredientes de cada producto
for producto in productos:
    print(len(producto[POSICION_INGREDIENTES]))
```

Usamos variables para guardar la posición de los ingredientes, para que sea más fácil de entender.

---
layout: default
level: 2
title: Listas de listas como matrices
hideInToc: true
---

# Listas de listas
## Entendiendo las listas de listas como matrices

Las listas de listas suelen usarse para representar matrices. Por ejemplo, la siguiente matriz:

$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

Se puede representar como la siguiente lista de listas:

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
```

También hay otros tipos de matrices como por ejemplo:

- Tableros de ajedrez, donde cada casilla es un elemento de la lista.
- Mapas, donde cada elemento de la lista es una fila del mapa y cada elemento de la fila es una casilla del mapa.
- Imágenes, donde cada elemento de la lista es una fila de la imagen y cada elemento de la fila es un pixel de la imagen.
- Y muchos más...


---
layout: default
level: 2
title: Ejemplo - Matriz
hideInToc: true
---

# Ejemplo
## Matriz

Supongamos queremos representar el inventario que tiene una bodega de productos. La bodega tiene filas de repisas, y cada repisa tiene columnas de productos. Cada columna
tiene un solo item (asumiremos repisas de un solo nivel) y cada item se representa como
un SKU (Stock Keeping Unit), que es un número único que identifica a cada producto además de inventario. Por ejemplo, para una bodega de muebles de oficina:

```python
repisas = [
    # Repisa 0
    [["SKU-0001", 10], ["SKU-0002", 5], ["SKU-0003", 0]],
    # Repisa 1
    [["SKU-0004", 23], ["SKU-0005", 13], ["SKU-0006", 2]],
    # Repisa 2
    [["SKU-0007", 2], ["SKU-0008", 1], ["SKU-0009", 3]],
    # Repisa 3
    [["SKU-0010", 9], ["SKU-0011", 7], ["SKU-0012", 0]],
]
# Stock SKU-0001
fila = 0
columna = 0
POSICION_STOCK = 1
print(repisa[fila][columna][POSICION_STOCK])
# >>> 10
```

En este caso es una lista, con 4 elementos, donde cada elemento es una lista de 3 elementos, donde cada elemento es una lista de 2 elementos.

---
layout: section
level: 1
title: Ejemplos
---
# Ejemplo

---
layout: center
level: 2
title: Ejemplos - GeoTree
hideInToc: true
---

# Introducción

Estás realizando tu práctica en GeoTree, un emprendimiento UC que usa Python para armar árboles genealógicos. Sin embargo, están teniendo problemas en la implementación, por lo que te piden a ti, flamante alumno de Introducción a la Programación, que los ayudes a terminar su programa.

Hasta ahora, lo único que tienen es una representación con listas del árbol de una familia y las declaraciones que vas a necesitar. El árbol está representado por una lista donde, en cada elemento se guarda un _string_ con el nombre del miembro de la familia (no hay _strings_ repetidos),
seguido de una lista de las posiciones de sus hijos dentro de la lista.

---
layout: two-cols
level: 2
title: Ejemplos - GeoTree
hideInToc: true
---

Por ejemplo, la siguiente variable 'arbol'

```text
arbol = [
["Abraham", [1,2]],    #0
["Herb", []],          #1
["Homer", [3,4,5]],    #2
["Bart", []],          #3
["Maggie", []],        #4
["Lisa", []],          #5
["Marge", [3,4,5]],    #6
["Mona", [2]],         #7
["Clancy", [6,10,11]], #8
["Jackie", [6,10,11]], #9
["Selma", [12]],       #10
["Patty", []],         #11
["Ling", []]           #12
]
```

::right::

Representa el siguiente arbol genealogico:

<img class="w-100 mx-auto" src="/content/clase_17/simpsons.png" />


(Cuidado que Herb es hijo únicamente de Abraham, y no de Mona)

---
layout: center
level: 2
title: Ejemplos - GeoTree
hideInToc: true
---

# Objetivo

Tu objetivo es implementar las siguientes funciones:

- _**hijos(a,n):**_ recibe una _lista_ a con el árbol genealógico y un _string_ n con el nombre de un integrante de la familia. Retorna una _lista_ de _strings_ con los nombres de los hijos de ese integrante. Si el integrante no tiene hijos, retorna una _lista_ vacía.

- _**padres(a,n):**_ recibe una _lista_ a con el árbol genealógico y un _string_ n con el nombre de un integrante de la familia. Retorna una _lista_ de _strings_ con los nombres de los padres de ese integrante. Si el integrante no tiene padres, retorna una _lista_ vacía.
-

**IMPORTANTE: Solo** _**debes implementar las funciones pedidas, el resto ya se encuentra implementado.**_

---
layout: center
level: 2
title: Ejemplos - GeoTree
hideInToc: true
---

## Input Format

No debes preocuparte del input, solo de crear las funciones correctamente.

## Output Format

Se imprime la lista con los padres o hijos del integrante entregado en los parámetros.

---
layout: two-cols
level: 2
title: Ejemplos - GeoTree
hideInToc: true
---

## Ejemplos

### Input Test Case 00

```python
arbol = [
["Abraham", [1,2]],
["Herb", []],
["Homer", [3,4,5]],
["Bart", []],
["Maggie", []],
["Lisa", []],
["Marge", [3,4,5]],
["Mona", [2]],
["Clancy", [6,10,11]],
["Jackie", [6,10,11]],
["Selma", [12]],
["Patty", []],
["Ling", []]
]
resultado = hijos(arbol, 'Marge')
print(resultado)

```

::right::
### Output Test Case 00

```python
['Bart', 'Maggie', 'Lisa']
```

**Explicación:** Si nos fijamos en el árbol genealógico, podemos notar que los hijos de Marge son Bart, Lisa y Maggie.
Esto lo podemos ver dado que la lista que contiene al nombre "Marge" (Elemento en el indice 6) tiene la lista con los indices 3, 4 y 5. Observando los elementos de la lista arbol en estos indices, podemos ver que se encuentran las sub-listas con los nombres "Bart", "Lisa" y "Maggie".

---
layout: two-cols
level: 2
title: Ejemplos - GeoTree
hideInToc: true
---

### Input Test Case 01

```python
arbol = [
["Abraham", [1,2]],
["Herb", []],
["Homer", [3,4,5]],
["Bart", []],
["Maggie", []],
["Lisa", []],
["Marge", [3,4,5]],
["Mona", [2]],
["Clancy", [6,10,11]],
["Jackie", [6,10,11]],
["Selma", [12]],
["Patty", []],
["Ling", []]
]
resultado = padres(arbol, 'Homer')
print(resultado)
```

::right::
### Output Test Case 01

```python
['Abraham', 'Mona']
```

**Explicación:** Si nos fijamos en el árbol genealógico, podemos notar que los padres de Homer son Abraham y Mona.
Esto lo podemos ver dado que las listas que contiene al nombre "Mona" (Elemento en el indice 7) y al nombre "Abraham" (Elemento en el indice 0) tiene la lista con el indice 2, donde se encuentra ubicada la sub-lista con el nombre "Homer".

---
layout: default
level: 2
hideInToc: true
---

## Solución

```python {1-3|4-17|20-32} {lines: true, maxHeight: '350px'}
# Definimos las constantes para que sea mas facil de entender
POSICION_NOMBRE = 0
POSICION_HIJOS = 1
# Le colocaremos mejores nombres a los parametros
# de la funcion para que sea mas facil de entender
def hijos(arbol, nombre_de_interes):
    # Buscamos el nombre en la lista
    for indice_hijo in range(len(arbol)):
        if arbol[indice_hijo][POSICION_NOMBRE] == nombre_de_interes:
            # Si lo encontramos, retornamos la lista de hijos
            hijos_obtenidos = []
            indices_hijos = arbol[indice_hijo][POSICION_HIJOS]
            for indice_hijo in indices_hijos:
                hijos_obtenidos.append(arbol[indice_hijo][POSICION_NOMBRE])
            return hijos_obtenidos
    # Si no lo encontramos, retornamos una lista vacia
    return []


def padres(arbol, nombre_de_interes):
    # Buscamos el nombre en la lista
    for indice_hijo in range(len(arbol)):
        if arbol[indice_hijo][POSICION_NOMBRE] == nombre_de_interes:
            # Si lo encontramos, usamos el indice del hijo y buscamos
            # los nombres de los padres (si tienen al hijo en su lista)
            padres = []
            for posible_padre in range(len(arbol)):
                if indice_hijo in arbol[posible_padre][POSICION_HIJOS]:
                    padres.append(arbol[posible_padre][POSICION_NOMBRE])
            return padres
    # Si no lo encontramos, retornamos una lista vacia
    return []
```

---
layout: center
level: 1
title: Spoiler repaso
hideInToc: true
---

# Coming soon...

Que ocurre si queremos repetir un algoritmo varias veces? 🤔

Hasta ahora hemos visto for y while, pero hay más!

La proxima clase veremos un concepto con funciones, que se llama la recursión.
---
layout: end
level: 1
title: Créditos
hideInToc: true
---

# Créditos

Esta clase fue preparada con el apoyo de Valeria Herskovic, Jorge Muñoz, Cristian Ruz, Nicolás Alvarado y José Tomás Marquinez

<Profesores class="mx-auto" />

¡Muchas gracias a todos/as!
