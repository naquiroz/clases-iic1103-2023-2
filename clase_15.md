---
theme: apple-basic
info: |
  ## Clase 15 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 15
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
exportFilename: clase_15
---
# Listas
## Clase 15 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Anuncios

1. Las notas de la I1 están publicadas, les fue muy bien! 🎉
2. No hay bitpoints extra por la T1 (hay casos de integridad académica en esta sección 😪)
3. Hoy se publica la T2. Empezarla lo antes posible, es más larga que la T1.

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
---

# Motivación
## Por qué aprender listas

---
layout: default
level: 2
title: Listas - motivación
hideInToc: false
---
# Votaciones
## ¿Dulce o truco?

Consideremos el siguiente problema:
Para _Halloween_, un grupo de amigos quiere ir a pedir dulces. Para ello, deben decidir si van a pedir dulces o a hacer truco. Para ello, cada uno de los amigos debe votar por una de las dos opciones. Debes contar cuántos votos hubo, e indicar si van a pedir dulces o hacer truco.

Input

```text
dulce
dulce
truco
dulce
truco
stop
```

Output

```text
Dulce: 3
Truco: 2
Vamos a pedir dulces
```

---
layout: default
level: 2
title: Motivación - listas
hideInToc: true
---

# Motivación
## ¿Dulce o truco?
### Solución

```python
dulce = 0
truco = 0
voto = input()
while voto != "stop":
    if voto == "dulce":
        dulce += 1
    elif voto == "truco":
        truco += 1
    voto = input()
if dulce > truco:
    print("Vamos a pedir dulces")
else:
    print("Vamos a hacer truco")
```

Esta solución funciona ahora, dado que sabemos que sólo hay dos opciones: `"dulce"` o `"truco"`. Pero ¿qué pasa si es dulce, truco, o fantasma? ¿O si es dulce, truco, fantasma, o nada? ¿O si es dulce, truco, fantasma, nada, o no sé? ¿O si son 100 opciones?

---
layout: section
level: 1
title: Listas
hideInToc: false
---

# Listas
## Almacenar conjuntos de información

---
layout: default
level: 2
title: Listas - introducción
hideInToc: false
---

# Listas
## Introducción

En la vida real, muchas veces necesitamos almacenar grupos de datos. Por ejemplo, una lista de compras, una lista de tareas, una lista de amigos, etc. En programación, podemos almacenar estos grupos de datos en lo que se conoce como una **lista**.

### Lista de compras

```text
Item 0: Leche
Item 1: Huevos
Item 2: Pan
Item 3: Mantequilla
```

### Lista de feriados

```text
Feriado 0: 1 de enero
Feriado 1: 1 de mayo
Feriado 2: 18 de septiembre
Feriado 3: 1 de noviembre
```

Notar que en ambos casos, los elementos de la lista tienen un orden, y podemos referirnos a ellos por su posición en la lista (índice) que, por conveniencia, parte en 0.

---
layout: default
level: 2
title: Listas - definición
hideInToc: false
---

# Listas
## Definición de sintaxis

En python, las listas se definen usando corchetes (`[]`), y separando los elementos de la lista con comas (`,`).

```python
# Lista de compras
compras = ["Leche", "Huevos", "Pan", "Mantequilla"]
# Lista de feriados
feriados = ["1 de enero", "1 de mayo", "18 de septiembre", "1 de noviembre"]
```

- `compras` y `feriados` son variables que contienen listas.
- Las listas pueden contener cualquier tipo de dato. Por ejemplo, strings, números, booleanos, etc.
- Cada elemento de la lista tiene un índice, que parte en 0.
- Podemos acceder a un elemento de la lista usando su índice.

---
layout: default
level: 2
title: Tipos de listas - básicos
hideInToc: false
---

# Tipos de listas
## Tipos básicos

Las listas, esencialmente puede contener un conjunto de cualquier tipo de datos. Algunos ejemplos

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

Las listas **no tienen largo fijo** y pueden contener cualquier tipo de dato.

---
layout: section
level: 2
title: Operaciones con listas
hideInToc: true
---

# Operaciones con listas
## Operaciones básicas

Las operaciones que se pueden hacer con listas son muy similares a las que se pueden hacer con strings.

---
layout: default
title: Operaciones con listas - largo
level: 2
hideInToc: true
---

# Operaciones con listas
## Largo de una lista

Las operaciones que
Para obtener el largo de una lista, podemos usar la función `len()`.

```python
# Largo de una lista
cafes = ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee"]

largo = len(cafes) # Entrega 5

sin_cafes = [] # Lista vacía

largo = len(sin_cafes) # Entrega 0
```

Al igual que con los strings, el largo de una lista es la cantidad de elementos que contiene. Una lista puede tener largo 0, es decir, no tener elementos.

---
layout: default
level: 2
title: Operaciones con listas - indexación
hideInToc: true
---

# Operaciones con listas
## Indexación

Al igual que los strings, podemos acceder a los elementos de una lista usando su índice.

```python
# Lista de cafés
cafes = ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee"]

# Acceder al primer café
primer_cafe = cafes[0] # Entrega "Capuccino"

# Acceder al último café
ultimo_cafe = cafes[4] # Entrega "Irish Coffee"
```

Y al igual que los strings, podemos acceder a los elementos de una lista usando índices negativos.

```python
# Lista de cafés
cafes = ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee"]

# Acceder al primer café
primer_cafe = cafes[-5] # Entrega "Capuccino"
# Acceder al último café
ultimo_cafe = cafes[-1] # Entrega "Irish Coffee"
```

---
layout: default
level: 2
title: Operaciones con listas - suma
hideInToc: false
---

# Operaciones con listas
## Suma de listas

Al igual que los strings, podemos sumar listas.

```python
# Lista de cafés
cafes = ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee"]

# Le agregamos un café
cafes += ["Café con leche"] # <-- Notar que es una lista, no un string

print(cafes)
# >>> ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee", "Café con leche"]
```

❗️ Es **super importante** que la lista que sumemos sea una lista, y no un string. Si sumamos un string (o cualquier otro valor), obtendremos un error.

---
layout: default
level: 2
title: Operaciones con listas - mutabilidad y asignación
hideInToc: false
---

# Operaciones con listas
## Mutabilidad y asignación

Recordar en la clase de strings vimos que

> Los strings son **inmutables**, es decir, no se pueden modificar.
> La forma correcta de hacerlo es crear un nuevo string, que contenga el string original, pero con el caracter cambiado.

Pero, ¿qué pasa con las listas?

```python
# Lista de cafés
cafes = ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee"]

# Cambiar el primer café
cafes[0] = "Café con leche"

print(cafes) # Entrega ["Café con leche", "Mocha", "Latte", "Americano", "Irish Coffee"]
```

🤩 ¡Aquí sí podemos modificar la lista! Las listas **son mutables** es decir, los valores de la lista pueden cambiar.

Aquí es donde la cosa se poner _bizarrap_...


---
layout: center
level: 1
title: Quiz
hideInToc: true
---

# Quiz mutabilidad (3 bitpoints)

<img class="w-50 mx-auto" src="/content/clase_15/qr_15.png" />

---
layout: section
title: Mutabilidad de listas - cuidado
level: 1
---

# Mutabilidad
## Tener cuidado con cambios inesperados

---
layout: default
level: 2
title: Mutabilidad de listas - cuidado
hideInToc: true
---

# Mutabilidad de listas

Si bien las listas son mutables, hay que tener cuidado con los cambios inesperados. Recordar que las variables son **referencias** a un valor, y que cuando asignamos una variable a otra, estamos asignando la referencia, no el valor.

```python
# Lista de cafés
cafes = ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee"]

# Cafes de halloween comienza siendo igual
cafes_halloween = cafes


# Agregar café de halloween pumpkin spice latte
cafes_halloween += ["Pumpkin Spice Latte"]

# Lista de cafés
print(cafes)
# >>> ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee", "Pumpkin Spice Latte"]
print(cafes_halloween)
# >>> ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee", "Pumpkin Spice Latte"]
# WTF!?!?!
```

¿Qué pasó ahí?

---
layout: two-cols
level: 2
title: Mutabilidad de listas - explicación
hideInToc: true
---

# Mutabilidad de listas
## Explicación

Recordemos que las variables guardan referencias a valores. Recordando el código

```python
# Lista de cafés
cafes = [
    "Capuccino", "Mocha",
    "Latte", "Americano", "Irish Coffee"
    ]

# Cafes de halloween comienza siendo igual
cafes_halloween = cafes
```

Hasta este momento tenemos dos variables (`cafes` y `cafes_halloween`) que guardan la referencia a la misma lista.

::right::

<div class="mt-25 h-100 flex flex-col justify-around">
    <img class="rounded-xl" src="/content/clase_15/box_vars.png" alt="variables en listas"/>
</div>

---
layout: two-cols
level: 2
title: Mutabilidad de listas - explicación
hideInToc: true
---

# Mutabilidad de listas
## Explicación

Recordemos que las variables guardan referencias a valores. Recordando el código

```python
# Cafes de halloween comienza siendo igual
cafes_halloween = cafes

# Agregar café de halloween pumpkin spice latte
cafes_halloween += ["Pumpkin Spice Latte"]
```

Cuando modificamos `cafes_halloween`, estamos modificando la lista a la que apunta `cafes_halloween`.

❗️❗️ Pero, como `cafes` y `cafes_halloween` apuntan a la misma lista, también estamos modificando `cafes`.

::right::

<div class="mt-25 h-100 flex flex-col justify-around">
    <img class="rounded-xl" src="/content/clase_15/new_box_vars.png" alt="variables en listas"/>
</div>

---
layout: section
level: 1
title: Sub-listas
hideInToc: false
---
# Sub-listas
## Extraer partes de una lista como una nueva lista

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
level: 2
title: Sub-listas - sintaxis II
hideInToc: true
---

# Sub-listas
## Detalle del operador `in`

Una cosa importante a notar: El operador `in` **no** funciona con sub-listas.

```python
# Lista de cafés
cafes = ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee"]

# Sub-lista de cafés
sub_cafes = cafes[1:4] # Entrega ["Mocha", "Latte", "Americano"]

# ¿Está sub_cafes en la lista?

if sub_cafes in cafes:
    print("Sí, está")
else:
    print("No, no está")
```

El código anterior entrega `No, no está`. Esto es porque `in` sólo funciona con elementos, no con listas. En dos clases más veremos más
en detalle por qué no podemos usar `in` con listas —o no al menos de la forma que lo estamos usando acá—. Para quienes quieran entender por qué, pueden leer **[este artículo](https://www.pythonforbeginners.com/basics/list-of-lists-in-python)** (el articulo es material adicional).

---
layout: default
level: 2
title: Sub-listas - sintaxis III
hideInToc: true
---

# Sub-listas
## Detalle de las sub-listas

Otras cosa importante a notar: Las sub listas son **copias** de la lista original, no referencias. Por lo que si modificamos la sub-lista, no modificamos la lista original.

```python
# Lista de cafés
cafes = ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee"]

# Cafes de halloween comienza siendo casi igual
cafes_halloween = cafes[1:4] # Entrega ["Mocha", "Latte", "Americano"]

# Agregar café de halloween pumpkin spice latte
cafes_halloween += ["Pumpkin Spice Latte"]

# Lista de cafés
print(cafes)
# >>> ["Capuccino", "Mocha", "Latte", "Americano", "Irish Coffee"]
print(cafes_halloween)
# >>> ["Mocha", "Latte", "Americano", "Pumpkin Spice Latte"]
```

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

Ahora, dado que en este ejemplo no necesitamos el índice, es mejor usar un `for`.

---
layout: default
level: 1
title: Ejemplos
---
# Ejemplos
## De simples a complejos

---
layout: default
level: 2
title: Ejemplos - eficiencia de recolección de dulces.
hideInToc: true
---

# Ejemplo

En un barrio, los niños van a pedir dulces a las casas. Cada casa tiene una cantidad de dulces, pero las casas pueden entregar una cantidad de dulces limitada.
Las casas pueden entregar máximo 5 dulces por niño. Los niños van a pedir dulces (pidiendo inputs que son `int`) hasta que un hogar diga `"No me quedan dulces"`.
Calcule la eficiencia de recolección, que viene dada por `cantidad_dulces / (cantidad_casas * 5)`. No considerar la casa que dice `"No me quedan dulces"`.

Input

```text
5
3
2
No me quedan dulces
```

Output

```text
Eficiencia de recolección: 0.6666666666666666
```

---
layout: default
level: 2
title: Ejemplos - eficiencia de recolección de dulces (solución)
hideInToc: true
---

## Solución

```python
# Input
dulces = []
mensaje_dulce = input()
while mensaje_dulce != "No me quedan dulces":
    dulce = int(mensaje_dulce)
    dulces += [dulce]
    mensaje_dulce = input()

# Calcular eficiencia
suma_dulces = 0
for dulce in dulces:
    suma_dulces += dulce
eficiencia = suma_dulces / (len(dulces) * 5)
print("Eficiencia de recolección:", eficiencia)
```

---
layout: default
level: 2
title: Ejemplo avanzado - votaciones
hideInToc: true

---

# Votaciones

Para las votaciones presidenciales chilenas, se quiere saber cuántos votos hubo por cada candidato,
y quien ganó en cada comuna. Se te entregarán una linea con un numero de 1 a 5. Luego, cuando recibas un `-1`, se terminarán las votaciones.

Después recibirás 2 tripletas de líneas donde la primera línea entrega el nombre de la comuna,
la segunda línea el índice donde comienzan los votos de esa comuna, y la tercera línea el índice
donde terminan los votos de esa comuna (en la lista de votos entregados anteriormente) inclusive. Puedes asumir que no habrán empates.

Por cada comuna debes imprimir `Candidato ganador en comuna <nombre_comuna>: <numero_candidato>`

---
layout: default
level: 2
title: Ejemplo avanzado - votaciones - I/O
hideInToc: true
---
Input

```text
1
2
4
3
5
1
1
4
3
3
-1
Santiago
0
5
Providencia
6
9
```

Output

```text
Candidato ganador en comuna Santiago: 1
Candidato ganador en comuna Providencia: 3
```

---
layout: default
level: 2
title: Ejemplo avanzado - votaciones - solución
hideInToc: true
---

# Solución

```python
# Input
votos = []
voto = int(input())
while voto != -1:
    votos += [voto]
    voto = int(input())

for i in range(2):
    votos_canditatos = [0,0,0,0,0]
    comuna = input()
    inicio = int(input())
    fin = int(input())
    votos_comuna = votos[inicio:fin+1]
    for voto in votos_comuna:
        votos_canditatos[voto-1] += 1
    # Encontrar el máximo
    maximo = 0
    for i in range(len(votos_canditatos)):
        if votos_canditatos[i] > votos_canditatos[maximo]:
            maximo = i
    ganador = maximo + 1
    print("Candidato ganador en comuna", comuna + ":", ganador)
```

---
layout: center
level: 1
title: Spoiler repaso
hideInToc: true
---

# Coming soon...

- Agregar elementos a una lista con `+` es muy tedioso. En la próxima clase veremos una forma más fácil de hacerlo.
- La próxima clase veremos cómo sacar elementos de una lista.
- La próxima cómo hacer listas a partir de strings
- La próxima clase veremos cómo hacer listas de listas

Nos vemos la próxima clase!

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
