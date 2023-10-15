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
## Clase 16 | Introducción a la programación

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
layout: two-cols
level: 1
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior



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
## Listas de listas

---
layout: two-cols
level: 2
title: Listas de listas - motivación
hideInToc: false
---
# Listas
## Motivación

Hasta ahora, hemos visto que las listas pueden guardar **cualquier** tipo de dato. Pero, solo hemos visto ejemplos con `int`, `float`, `bool` y `str`. ¿Podemos guardar otros tipos de datos, como por ejemplo, listas?

¿Por qué querríamos guardar listas dentro de listas? ¿Qué utilidad tiene?

Algunos ejemplos de listas de listas son:

- Una lista de listas de notas de alumnos
- Una lista de listas de coordenadas de puntos
- Una inventario de una tienda, donde cada producto tiene una lista de sus características
- Una lista de alumnos por sección, donde sección tiene estudiantes.

---
layout: default
level: 2
title: Listas de listas - idea
hideInToc: true
---

# Listas
## Idea de listas de listas

Tenemos una cuadra que tiene varias casas. Cada casa tiene varios tipos de dulces. ¿Cómo podemos representar esto en listas de listas?

| Indice casas | Tiene Twix | Tiene M&M | Tiene Snickers | Tiene Milky Way | Tiene Kit Kat |
| ------------ | ---------- | -------- | -------------- | --------------- | ------------- |
| `0`          | `3`     | `0`  | `2`         | `0`         | `10`        |
| `1`          | `0`    | `1`   | `0`        | `3`          | `0`       |
| `2`          | `5`     | `4`   | `3`         | `3`          | `6`        |

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
    # Casa 0
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
title: Listas - aclaraciones for
hideInToc: false
---

# Aclaraciones
## `for i in range(len(lista))`

Para dejar de manera explícita la explicación, existe una **tercera** forma de recorrer una lista, que es usando `for i in range(len(lista))`.

```python
compras = ["Leche", "Huevos", "Pan", "Mantequilla"]

# Recorrer la lista con un for
for i in range(len(compras)):
    print("Item:", compras[i])
    # >>> Item: Leche
    # >>> ...
```

Esto es equivalente a usar `while`, pero es más corto y más fácil de leer.

```python
i = 0
while i < len(compras):
    print("Item:", compras[i])
    i += 1
    # >>> Item: Leche
    # >>> ...
```

---
layout: default
level: 2
title: Listas - aclaraciones for
hideInToc: true
---

# Listas
## Editar elementos durante un `for`

**Tener mucho cuidado** cuando se editan elementos de una lista durante un `for`. Esto puede llevar a comportamientos inesperados.

```python
# Lista de compras
compras = ["Leche", "Huevos", "Pan", "Mantequilla"]

# Recorrer la lista con un for
for i in range(len(compras)):
    compra = compras.pop(i)
    print("Item:", compra)
    # >>> Item: Leche
    # >>> Item: Pan
    # >>> Se saltó el "Huevos"!
```

Cuando se edita una lista durante un `for`, se puede saltar elementos. Esto es porque el `for` se mueve de elemento en elemento, pero como estamos editando la lista, los elementos se mueven.

---
layout: two-cols
level: 2
title: Listas - aclaraciones for
hideInToc: true
---

# Listas
## Editar elementos durante un `for`
### ¿ Cual es la solución ?

Para evitar este problema, podemos usar un `while` en vez de un `for` y usar el índice para recorrer la lista.

```python
# Lista de compras
compras = ["Leche", "Huevos", "Pan", "Mantequilla"]

# Recorrer la lista con un while
while len(compras) > 0:
    compra = compras.pop(0)
    print("Item:", compra)
    # >>> Item: Leche
    # >>> Item: Huevos
    # >>> Item: Pan
    # >>> Item: Mantequilla
    # >>> Se imprimieron todos los elementos!
```

::right::

Y en caso que luego necesitemos los datos originales, siempre es mejor armarse una copia de la lista original antes de recorrerla.

```python
# Lista de compras
compras = ["Leche", "Huevos", "Pan", "Mantequilla"]
# Copia de la lista de compras
compras_original = compras[0:len(compras)] # O compras[:]

lista_string = ""
# Recorrer la lista con un while
while len(compras) > 0:
    lista_string += compras.pop(0) + ", "
    # >>> "Leche, Huevos, Pan, Mantequilla, "

print(lista_string)
print("Total:", len(compras_original)) # Aquí usamos la lista original
```

---
layout: default
title: Operaciones con listas - split
level: 2
hideInToc: true
---

# Operaciones con listas
## string.split(separador)

Otra forma de crear listas es a partir de un string, usando el método `split`. `split(separador)` es un método que tienen los strings, y que separa un string en una lista de strings, usando el `separador` como separador.

```python
# String de dulces de haloween
dulces = "M&M, Snickers, Twix, Milky Way, Kit Kat"
# Lista de dulces
lista_dulces = dulces.split(", ")
print(lista_dulces)
# >>> ["M&M", "Snickers", "Twix", "Milky Way", "Kit Kat"]
```

El `separador` es opcional, y si no se entrega, se usa el espacio como separador.

```python
# Peliculas de miedo
peliculas = "Saw Chucky Annabelle It REC"
# Lista de peliculas
lista_peliculas = peliculas.split()
print(lista_peliculas)
# >>> ["Saw", "Chucky", "Annabelle", "It", "REC"]
```

---
layout: section
level: 1
title: Ejemplos
---
# Ejemplo

---
layout: default
level: 2
title: Ejemplos - mejores títulos
hideInToc: true
---

# Ejemplo
## Mejores títulos

Eres director de una productora de películas de terror, pero los títulos que te están sugiriendo para tus películas no son muy buenos. Para esto, decides crear un programa que te ayude a mejorar los títulos de tus películas.
Recibirás una línea con todas las películas (separadas por un punto y coma `;`). Luego recibirás una linea por cada pelicula, con una palabra a remover del título de la película.
Finalmente, recibirás una sola línea con varias frases (separadas por un =) que deberás agregarlas a cada película (al final del título) ,en orden invertido, es decir, la ultima frase a la primera película.

Define una función `mejorar_titulo` que reciba una película, una palabra a remover y una frase a agregar, y retorne el título mejorado. Luego usa esta función para mejorar los títulos de tus películas.

Por cada película debes imprimir `Título mejorado: <título_mejorado>`

---
layout: default
level: 2
title: Ejemplos - mejores títulos
hideInToc: true
---

# Ejemplo
## Mejores títulos

### Input

```text
El cuervo tomó una Coca-Cola;Jack se puso sombrero de fiesta;El fantasma intentó hacer pizza, pero se le atravesó
Coca-Cola
sombrero
pizza,
un té de calabaza=un gorro de payaso=spaghetti con ojos
```

### Output

```text
Título mejorado: El cuervo tomó una spaghetti con ojos
Título mejorado: Jack se puso de fiesta un gorro de payaso
Título mejorado: El fantasma intentó hacer pero se le atravesó un té de calabaza
```

---
layout: default
level: 2
title: Ejemplos - solución
hideInToc: true
---

## Solución
### Definición de la función

```python
def mejorar_titulo(titulo, palabra_a_remover, frase_a_agregar):
    # Nuestro titulo final. Tendrá las palabras del titulo original, menos la palabra a remover
    # y luego las frases a agregar
    titulo_final = []
    # Dividimos el titulo en palabras
    palabras = titulo.split()
    # Recorremos las palabras
    for palabra in palabras:
        # Si la palabra no es la palabra a remover, la agregamos al titulo final
        if palabra != palabra_a_remover:
            titulo_final.append(palabra)
    titulo_a_entregar = ""
    for palabra in titulo_final:
        titulo_a_entregar += palabra + " "
    # Agregamos la frase a agregar al final del titulo
    titulo_a_entregar += frase_a_agregar
    return titulo_a_entregar

```

---
layout: default
level: 2
title: Ejemplos - solución
hideInToc: true
---

## Solución
### Usando la función

```python
# Input
peliculas = input().split(";")

# Recibimos las palabras a remover
palabras_a_remover = []
for i in range(len(peliculas)):
    palabras_a_remover.append(input())

# Recibimos las frases a agregar
frases_a_agregar = input().split("=")
for i in range(len(peliculas)):
    # Por cada pelicula, mejoramos el titulo
    # Extraemos la ultima frase a agregar con pop() sin parametros
    # para sacar el ultimo elemento de la lista
    titulo_mejorado = mejorar_titulo(peliculas[i], palabras_a_remover[i], frases_a_agregar.pop())
    print("Título mejorado:", titulo_mejorado)
```

---
layout: center
level: 1
title: Spoiler repaso
hideInToc: true
---

# Coming soon...

Hemos guardado números, booleanos, strings dentro de listas. Pero, ¿podemos guardar otros tipos de datos?

Que tal por ejemplo... ¿una lista dentro de otra lista?

¿O una lista dentro de una lista dentro de otra lista?

Veremos esto en la próxima clase.

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
