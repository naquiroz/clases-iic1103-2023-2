---
theme: apple-basic
info: |
  ## Clase 21 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 21
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
exportFilename: clase_21
---

# Repaso I2
## Clase 21 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: section
level: 1
title: Clase 15 - Listas
hideInToc: false
---

# Listas
## Clase 15 | Introducción a la programación

---
layout: default
level: 2
title: Listas - introducción
hideInToc: false
---

# Listas
## Introducción

Muchas veces necesitamos almacenar grupos de datos. Por ejemplo, una lista de compras.

### Lista de compras

```text
Item 0: Leche
Item 1: Huevos
Item 2: Pan
Item 3: Mantequilla
```

Notar que, los elementos de la lista tienen un orden, y podemos referirnos a ellos por su posición en la lista (índice) que, por conveniencia, parte en 0.

Las listas se definen usando corchetes (`[]`), y separando los elementos con comas (`,`).

```python
# Lista de compras
compras = ["Leche", "Huevos", "Pan", "Mantequilla"]
```

---
layout: default
level: 2
title: Tipos de listas - básicos
hideInToc: false
---

# Tipos básicos de listas

Las listas pueden contener un conjunto de cualquier tipo de datos.

```python
# Lista vacía
lista_vacia = [] # Lista con largo 0

# Lista de strings
lista_cafes = ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee"]

# Lista de números (int o float)
porcentaje_leche = [0.5, 0.3, 0.6, 0.0, 0.1]

# Lista de números
cucharadas_azucar = [1, 2, 3, 0, 0]

# Lista de booleanos
con_leche = [True, True, True, False, False]

# Lista de varios tipos
capuccino = ["Capuccino", 0.5, 1, True]
```

Las listas **no tienen largo fijo**.

---
layout: default
level: 2
title: Operaciones con listas - suma
hideInToc: fals
---

# Operaciones con listas
## Todas las operaciones básicas

### Largo de una lista

```python
# Largo de una lista
cafes = ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee"]

largo = len(cafes) # 5
```

### Indexación

```python
# Acceder al primer café igual que en strings
primer_cafe = cafes[0] # Entrega "Capuccino"
```

### Suma

```python
# Le agregamos un café
cafes += ["Café con leche"] # <-- Notar que es una lista, no un string

print(cafes)
# >>> ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee", "Café con leche"]
```

Notar que sumamos una lista no un elemento.

---
layout: default
level: 2
title: Operaciones con listas - mutabilidad y asignación
hideInToc: false
---

# Operaciones con listas
## Mutabilidad y asignación

Las listas **son mutables** es decir, los valores de la lista pueden cambiar.

```python
# Lista de cafés
cafes = ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee"]

# Cambiar el primer café
cafes[0] = "Café con leche"

print(cafes) # Entrega ["Café con leche", "Mocha", "Latte", "Americano", "Irish Coffee"]
```

Las listas **se asignan por referencia**.
---
layout: default
level: 2
title: Sub-listas - sintaxis
hideInToc: false
---

# Sub-listas

Al igual que los strings, podemos saber si **un elemento** está en una lista usando el operador `in`.

```python
# Lista de cafés
cafes = ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee"]

# ¿Está el café "Mocha" en la lista?
if "Mocha" in cafes:
    print("Sí, está")
else:
    print("No, no está")
```

Y podemos generar una sub-lista usando la sintaxis `[inicio:fin]`.

```python
# Lista de cafés
cafes = ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee"]

# Sub-lista de cafés
cafes_halloween = cafes[1:4] # Entrega ["Mocha", "Latte", "Americano"]
# OJO ESTO ES UNA COPIA, NO UNA REFERENCIA
```

Acá es muy importante notar que la sub-lista es una **copia** de la lista original, no una referencia.

---
layout: default
level: 1
title: Recorrer listas - for y while
hideInToc: false
---

# Recorrer listas
## For y while

Para recorrer una lista, podemos usar un `for` o un `while`.

```python
# Lista de compras
compras = ["Leche", "Huevos", "Pan", "Mantequilla"]
# Recorrer la lista con un for
for item in compras:
    print("Item:", item)
# >>> Item: Leche
# >>> Item: Huevos
# ...

# O recorremos la lista con un while
i = 0
while i < len(compras):
    print("Item:", compras[i])
    i += 1
# >>> Item: Leche
# ...
```

---
layout: section
level: 1
title: Clase 16 - Listas II
hideInToc: false
---

# Listas II
## Clase 16 | Introducción a la programación

---
layout: default
level: 2
title: Listas - append
hideInToc: true
---

# Listas
## `append` y `pop`

Para agregar elementos a una lista, también podemos usar el método `append`, que agrega un elemento al final de la lista. Para eliminar podemos usar `pop`, que es un **método** que saca un elemento de la lista.

```python
# Lista de compras
compras = ["Leche", "Huevos", "Pan", "Mantequilla"]
# Agregar café
compras.append("Café")
# compras == ["Leche", "Huevos", "Pan", "Mantequilla", "Café"]
ultimo_elemento = compras.pop()
print(ultimo_elemento)
# >>> "Café"
# compras == ["Leche", "Huevos", "Pan", "Mantequilla"]
primer_elemento = compras.pop(0)
# compras == ["Huevos", "Pan", "Mantequilla"]
```

❗️ Notar que `append` **modifica** la lista original, no crea una nueva lista, ni retorna. Siempre agrega al final.

❗️ Notar que `pop` si retorna el elemento que saca de la lista.

❗️ `pop` puede recibir un índice, y sacar el elemento en esa posición en vez del último y **lo retorna**.

---
layout: default
level: 2
title: Listas - aclaraciones for
hideInToc: false
---

# Aclaraciones
## `for i in range(len(lista))`

Existe una **tercera** forma de recorrer una lista, que es usando `for i in range(len(lista))`.

```python
compras = ["Leche", "Huevos", "Pan", "Mantequilla"]

# Recorrer la lista con un for
for i in range(len(compras)):
    print("Item:", compras[i])
    # >>> Item: Leche
    # >>> ...
```

❗️ Tener ojo con cambiar la lista mientras se recorre, ya que esto puede generar errores (como por ejemplo, usando `pop`).

---
layout: default
title: Operaciones con listas - split
level: 2
hideInToc: true
---

# Operaciones con listas
## string.split(separador)

Usando el método `split(separador)`, que es un método que tienen los strings, podemos separar un string en una lista de strings, usando el `separador` como separador.

```python
# String de dulces de haloween
dulces = "M&M, Snickers, Twix, Milky Way, Kit Kat"
# Lista de dulces
lista_dulces = dulces.split(", ")
print(lista_dulces)
# >>> ["M&M", "Snickers", "Twix", "Milky Way", "Kit Kat"]
```

El `separador` es opcional, y si no se entrega, se usa el espacio como separador.

---
layout: section
level: 1
title: Clase 17 - Listas de listas
hideInToc: false
---

# Listas de listas
## Clase 17 | Introducción a la programación

---
layout: two-cols
level: 2
title: Listas - listas de listas
hideInToc: false
---

# Listas
## Listas de listas

Para representar listas de listas, podemos usar listas dentro de listas. Por ejemplo, para representar la cuadra de dulces, podemos usar la siguiente lista de listas.

```python
casas = [
    # Casa 0
    [3, 0, 2, 0, 10],
    # Casa 1
    [0, 1, 0, 3, 0],
    # Casa 2
    [5, 4, 3, 3, 6]
]
```

Cada casa es una lista de dulces. Por ejemplo, la casa 0 tiene 3 Twix, 0 M&M, 2 Snickers, 0 Milky Way y 10 Kit Kat
(el elemento 0 es el Twix, el 1 el M&M, etc.)

::right::

```python
productos_jumbo = [
    # Producto 0 (nombre, precio, stock, stock mínimo)
    ["Jamón", 1000, 250, 100],
    # Producto 1 (nombre, precio, stock, stock mínimo)
    ["Queso", 500, 100, 50],
    # Producto 3 (nombre, precio, stock, stock mínimo)
    ["Café", 1500, 50, 20]
]
```

❗La lista de listas está escrita en varias líneas, pero también se puede escribir en una sola línea.

```python
# Lista de productos
productos_jumbo = [["Jamón", 1000, 250, 100], ["Queso", 500, 100, 50], ...]
```

❗Cada lista dentro de la lista `productos_jumbo` tiene 4 elementos de distintos tipos (str, int, int, int).

---
layout: default
level: 2
title: Indexación anidada
hideInToc: false
---

# Listas de listas
## Indexación anidada

Si además quisiéramos acceder al elemento `0` de la lista `casa_0`, podemos usar la indexación anidada.

```python
# Lista de casas
casas = [
    # Casa 0
    [3, 0, 2, 0, 10],
    # ...
]
primer_dulce_casa_0 = casas[0][0]
print(primer_dulce_casa_0)
# >>> 3
```

Dado que una lista de listas es una lista, podemos modificar sus elementos, o los elementos en un elemento de la lista, usando la indexación anidada.

```python
# Modificamos la primera casa
casas[0] = [0, 0, 0, 0, 0]
# Modificamos el primer dulce de la primera casa
casas[0][0] = 5
```

---
layout: two-cols
title: Listas de tipos mixtos y como matrices
level: 2
hideInToc: false
---
# Listas de tipos mixtos y como matrices

Podemos guardar elementos de distintos tipos en una lista de listas.

Por ejemplo, ¿qué pasa si queremos guardar el nombre de un producto, su precio,
una lista de ingredientes, stock y stock mínimo?

```python
# Lista de productos
productos = [
    # (nombre, precio, ingredientes, stock, stock mínimo)
    ["Jamón", 1000, ["carne de cerdo", "sal"], 250, 100],
    ["Queso", 500, ["leche","conservantes"], 100, 50],
]

POSICION_INGREDIENTES = 2
# Obtener numero de ingredientes de cada producto
for producto in productos:
    print(len(producto[POSICION_INGREDIENTES]))
```

::right::

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

---
layout: section
level: 1
title: Clase 18 - Funciones Recursivas
hideInToc: false
---

# Funciones Recursivas
## Clase 18 | Introducción a la programación

---
layout: default
level: 2
title: Funciones Recursivas - Definición
hideInToc: false
---

# Funciones Recursivas

Para definir una función recursiva, lo primero que debemos observar es que, al igual que podemos llamar
a otras funciones dentro de una función, podemos llamar a la misma función dentro de la misma función.

```python
def funcion_recursiva():
    funcion_recursiva()
```

## Caso Base

Para que una función recursiva se detenga, debemos definir un caso base.

>❗❗ Un caso base **es un caso donde la función no se llama a si misma**. Al definir un caso base, podemos asegurarnos que la función en algún
llamado entraré en el caso base y se detendrá.

De esa manera, si **nos aseguramos** que **siempre**, eventualmente, la función llegue al caso base, podemos asegurarnos que la función se detendrá.

De lo contrario, la función se llamará a si misma infinitamente y se producirá un error.

---
layout: default
level: 2
title: Funciones recursivas - con int o float
hideInToc: false
---

# Funciones Recursivas
## Con int o float

Un típo ejemplo es la función factorial. El factorial de un número se define como:

$$
n! = n \times (n - 1) \times (n - 2) \times ... \times 1
$$

Es decir, multiplicar todos los números desde 1 hasta n. Por ejemplo, el factorial de 5 es:
$$ 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120 $$

Podemos definir una función recursiva que calcule el factorial de un número.

```python
def factorial(n):
    # Caso base
    if n == 1:
        return 1
    # Hago el llamado recursivo
    return n * factorial(n - 1)
```

---
layout: default
level: 2
title: Funciones recursivas - con int o float
hideInToc: false
---

# Funciones Recursivas
## Con int o float

Otro ejemplo es la función fibonacci. La sucesión de fibonacci se define como:

$$
fib(n) = fib(n - 1) + fib(n - 2) \\
fib(1) := 1, ~ fib(2) := 1
$$

Aquí, por cada llamado, recursivo, se abren dos "ramas" recursivas. Por ejemplo, para calcular `fib(4)`, se calcula `fib(3) + fib(2)`, y para calcular `fib(3)` se calcula `fib(2) + fib(1)`. Esto, en código, se ve así:

```python
def fib(n):
    # Caso base
    if n == 1 or n == 2:
        return 1
    # Hago el llamado recursivo
    return fib(n - 1) + fib(n - 2)
```

---
layout: section
level: 1
title: Clase 19 - Funciones Recursivas y Archivos I
hideInToc: false
---
# Funciones Recursivas y Archivos I
## Clase 19 | Introducción a la programación

---
layout: default
level: 1
title: Funciones Recursivas - con listas
hideInToc: false
---
# Funciones Recursivas
## Ejemplo de listas

En la motivación de la clase pasada, vimos un ejemplo de usar una función para sumar dos, tres, cuatro o más números. Sin embargo, ¿qué pasa si queremos sumar todos los números de una lista?

```python
# Código clase pasada
def sumar(a, b):
    return a + b

def sumar_tres(a, b, c):
    return sumar(sumar(a, b), c)

def sumar_cuatro(a, b, c, d):
    return sumar(sumar_tres(a, b, c), d)
```

Podríamos definir la función `sumar_lista` de la siguiente forma:

```python
def sumar_lista(lista):
    if len(lista) == 1:
        return lista[0]
    return lista[0] + sumar_lista(lista[1:])
```

---
layout: end
level: 1
title: Créditos
hideInToc: true
---

# Mucha suerte!

Eso sería el repaso para el I2. ¡Mucha suerte en la prueba!

¡Muchas gracias a todos/as!
