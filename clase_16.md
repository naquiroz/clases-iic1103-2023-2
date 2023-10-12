---
theme: apple-basic
info: |
  ## Clase 13 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 16
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
exportFilename: clase_16
---
# Listas II
## Clase 16 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Anuncios

1. ¡Concurso de memes, participar 🤩!

---
layout: two-cols
level: 1
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior

Podemos crear listas con:

```python
# Lista de compras
compras = ["Leche", "Huevos", "Pan", "Mantequilla"]

```

Podemos seleccionar y modificar elementos de una lista con:

```python
compras[0] = "Leche descremada"
print(compras[0]) # Entrega "Leche descremada"
```

Podemos agregar elementos a una lista con suma:

```python
compras += ["Café"]
print(compras)
```

El largo de una lista se puede obtener con `len()`:

```python
print(len(compras)) # Entrega 5
```

::right::

Podemos seleccionar una **nueva** sub-lista con:

```python
compras_halloween = compras[1:4]
print(compras_halloween)
# >>> ["Huevos", "Pan", "Mantequilla"]

# Podemos ver si un elemento está en una lista con `in`
if "Huevos" in compras_halloween:
    print("Sí, está")
else:
    print("No, no está")
```

Y podemos recorrer una lista con `for` o `while`:

```python
for item in compras:
    print("Item:", item)
# >>> Item: Leche descremada
# >>> ...

i = 0
while i < len(compras):
    print("Item:", compras[i])
    i += 1
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
---

# Motivación
## Segunda parte de listas

---
layout: two-cols
level: 2
title: Listas - motivación
hideInToc: false
---
# Listas
## Agregar elementos

Cuando queremos agregar elementos a una lista, podemos usar la suma `+`. **PEEERO** algo que no les mencioné la clase pasada es que esto tiene comportamientos extraños
(además de ser un poco tedioso).

```python
# Lista de compras
compras = ["Leche", "Huevos", "Pan", "Mantequilla"]

# Nueva lista de compras
compras_cafe = compras
# Agregar café
compras_cafe += ["Café"]

print(compras)
# >>> ["Leche", "Huevos", "Pan", "Mantequilla", "Café"]
print(compras_cafe)
# >>> ["Leche", "Huevos", "Pan", "Mantequilla", "Café"]
```

::right::

Pero si usamos el operador por separado funciona distinto

```python
# Lista de compras
compras = ["Leche", "Huevos", "Pan", "Mantequilla"]

# Nueva lista de compras
compras_cafe = compras
# Agregar café
compras_cafe = compras_cafe + ["Café"]

print(compras)
# >>> ["Leche", "Huevos", "Pan", "Mantequilla"]
print(compras_cafe)
# >>> ["Leche", "Huevos", "Pan", "Mantequilla", "Café"]
```

Y esto es porque `+` no modifica la lista original, sino que crea una nueva lista con los elementos de la lista original más los elementos que le sumemos.
En cambio el `+=` modifica la lista original.

Entonces, no hay otra mejor forma de agregar elementos a una lista?

---
layout: default
level: 2
title: Listas - append
hideInToc: true
---

# Listas
## `append`

Para agregar elementos a una lista, también podemos usar el método `append`. Append es un **método** que tienen las listas, y que agrega un elemento al final de la lista.

```python
# Lista de compras
compras = ["Leche", "Huevos", "Pan", "Mantequilla"]

# Agregar café
compras.append("Café")
print(compras)
# >>> ["Leche", "Huevos", "Pan", "Mantequilla", "Café"]
```

💡 Notaron que aprendimos otro _metodo_? Este tipo de funciones los iremos viendo cada vez más.

❗️ Notar que `append` **modifica** la lista original, no crea una nueva lista.

❗️ Notar que `append` **no** retorna nada, por lo que no podemos hacer `compras = compras.append("Café")`.

❗️ Notar que `append` **sólo** agrega un elemento a la lista **y siempre al final**.

---
layout: default
level: 2
title: Listas - pop
hideInToc: false
---

# Listas
## `pop`

Para sacar elementos de una lista, podemos usar el método `pop`. `pop` es un **método** que tienen las listas, y que saca un elemento de la lista.

```python
# Lista de compras
compras = ["Leche", "Huevos", "Pan", "Mantequilla"]

# Sacar el último elemento
ultimo_elemento = compras.pop()
print(ultimo_elemento) # Entrega "Mantequilla"
print(compras) # Entrega ["Leche", "Huevos", "Pan"]
```

A diferencia de `append`, `pop` **sí** retorna el elemento que saca de la lista, y además puede recibir un parámetro que indica el índice del elemento que queremos sacar.

```python
segundo_elemento = compras.pop(1)
print(segundo_elemento) # Entrega "Huevos"
print(compras) # Entrega ["Leche", "Pan"]
```

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
# Recorrer la lista con un for
for i in range(len(compras)):
    lista_string += compras[i] + ", "
    # >>> "Leche, Huevos, Pan, Mantequilla, "

print(lista_string)
print("Total:", len(compras)) # Aquí usamos la lista original
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
peliculas = "Saw, Chucky, Annabelle, It, REC"
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
El cuervo tomó una Coca-Cola;Jack se puso sombrero de fiesta;El fantasma intentó hacer pizza, pero se le atravesó;
Coca-Cola
sombrero
pizza
un té de calabaza=un gorro de payaso=spaghetti con ojos
```

### Output

```text
Título mejorado: El cuervo tomó una spagheti con ojos
Título mejorado: Jack se puso de fiesta un gorro de payaso
Título mejorado: El fantasma intentó hacer, pero se le atravesó un té de calabaza
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
def mejorar_titulo(titulo, palabras_a_remover, frase_a_agregar):
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
