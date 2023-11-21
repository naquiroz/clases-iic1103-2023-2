---
theme: apple-basic
info: |
  ## Clase 27 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 27
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
exportFilename: clase_27
---

# Material Extra!
## Clase 27 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 2
title: Ejercicio restante de la clase anterior
hideInToc: true
---

# Ejercicio restante de la clase anterior
## Veamoslo

---
layout: center
level: 1
title: Agenda
hideInToc: true
---

# Agenda

<Toc maxDepth=1 />

---
layout: two-cols
level: 1
title: Motivación
hideInToc: false
---

# Motivación

Cuando salgan de este curso, notarán que hay muchas cosas que no se enseñaron, y que probablemente les serán útiles en el futuro. Por ejemplo, en este curso no vimos:

1. Valores truthy y falsy.
2. Print con separador.
3. String formatting con f-strings.
4. `break` y `continue`.
5. for con step
6. `max` y `min`, `sum`
7. Parámetros opcionales en funciones.
8. string `index`, `count`, `upper`, `capitalize`, `startswith`, `endswith`, `replace`, `join`, y muchos más.

::right::
<!-- markdownlint-disable-next-line -->
9.  lista `index`, `count`, `extend`, `remove`, `copy`, `insert`.
<!-- markdownlint-disable-next-line -->
10. Archivos con modo `a`, `r+`, `w+`, `x`.
<!-- markdownlint-disable-next-line -->
11. `__repr__` y `__add__`.
<!-- markdownlint-disable-next-line -->
12. `lambda` para funciones anónimas en sorted.

---
layout: section
level: 1
title: Advertencia - no entra en el curso
hideInToc: true
---

# ADVERTENCIA
## Nada de esto entra en el curso

Todo esto es material extra, que no entra en el curso. Si quieren aprenderlo, pueden hacerlo por su cuenta, pero no es necesario para el curso. Veremos contenidos fuera del curso, progresando en dificultad.

---
layout: section
level: 1
title: Nivel 1
hideInToc: false
---

# Nivel 1
## Truthy y falsy, print y string formatting

---
layout: two-cols
level: 2
title: Truthy y falsy
hideInToc: false
---

# Valores truthy y falsy

En python, todos los valores se pueden convertir a booleanos. Algunos valores se consideran `True` y otros `False`. Por ejemplo:

```python
print(bool(0))
# False
print(bool(1))
# True
print(bool(""))
# False
print(bool("Hola"))
# True
print(bool([]))
# False
print(bool([1, 2, 3]))
# True
```

::right::

Por lo tanto, podemos usar valores como `0`, `""` y `[]` en condiciones. Por ejemplo:

```python
lista_valores = [0, 1, "", "Hola", [], [1, 2, 3]]
for valor in lista_valores:
    if valor:
        print(f"{valor} es truthy")
    else:
        print(f"{valor} es falsy")
```

Python evalúa los valores truthy y falsy al momento de usarlos en una condición y es por eso que podemos usarlos en condiciones.

---
layout: default
level: 2
title: Print con separador
hideInToc: false
---

# Print con separador

Cuando usamos `print()` con varios argumentos, estos se imprimen separados por un espacio. Por ejemplo:

```python
print("Hola", "mundo")
# Hola mundo
```

Pero podemos cambiar el separador usando el parámetro `sep`. Por ejemplo:

```python
print("Hola", "mundo", sep="-")
# Hola-mundo
```

O incluso podemos usar un string vacío para que no haya separador:

```python
print("Hola", "mundo", sep="")
# Holamundo
```

---
layout: default
level: 2
title: String formatting con f-strings
hideInToc: false
---

# String formatting con f-strings

Cuando queremos imprimir un string con un valor de una variable, podemos usar f-strings. Por ejemplo:

```python
nombre = "Juan"
print(f"Hola {nombre}")
# Hola Juan
```

Esto acepta cualquier expresión de python, lo evalúa y lo convierte a string. Por ejemplo:

```python
print(f"2 + 2 = {2 + 2}")
# 2 + 2 = 4
```

O incluso podemos usar f-strings para imprimir múltiples valores:

```python
nombre = "Juan"
edad = 20
print(f"Hola {nombre}, tienes {edad} años")
# Hola Juan, tienes 20 años
```

Para ver ejemplos mucho más avanzados, pueden ver [este video](https://www.youtube.com/watch?v=Mfmr_Puhtew).

---
layout: section
level: 1
title: Nivel 2
hideInToc: false
---

# Nivel 2
## Break, continue, for con step, max, min, sum
### Entrando en arenas movedizas

---
layout: two-cols
level: 2
title: Break y continue
hideInToc: false
---

# Break y continue

Cuando estamos en un ciclo, podemos usar `break` para salir del ciclo, y `continue` para saltar a la siguiente iteración. Por ejemplo:

```python
for i in range(10):
    if i == 3:
        break
    print(i)
# 0
# 1
# 2
# Y se sale del ciclo
```

Personalmente, creo que `break` es una mala práctica, y que siempre se puede evitar. Por ejemplo, el código anterior se puede escribir así:

```python
i = 0
while i < 3:
    print(i)
    i += 1
```

::right::
Ahora bien, `continue` es más útil. Por ejemplo, si queremos imprimir todos los números entre 0 y 10 que no sean múltiplos de 3, podemos hacer:

```python
for i in range(10):
    if i % 3 == 0:
        continue
    print(i)
# 1
# 2
# 4
# 5
# 7
# 8
```

`continue` es útil cuando queremos saltar a la siguiente iteración, pero no queremos salir del ciclo.

---
layout: two-cols
level: 2
title: for con step
hideInToc: false
---

# For con step

Si queremos recorrer un conjunto de numeros, pero no de 1 en 1, podemos usar `range` con un tercer parámetro. Por ejemplo:

```python
for i in range(0, 10, 2):
    print(i)
# 0
# 2
# 4
# 6
# 8
```

Esto es útil cuando queremos recorrer una lista de 2 en 2, o de 3 en 3, etc.

El tercer parámetro de `range` se llama `step`, y por defecto es 1. También podemos usar `step` negativo para recorrer la lista al revés. Por ejemplo:

::right::

```python
for i in range(3, 0, -1):
    print(i)
# 3
# 2
# 1
```

Esto también se puede usar de una forma similar en `slice`. Por ejemplo:

```python
lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(lista[::2])
# [1, 3, 5, 7, 9]
```

Donde el primer `:` indica el inicio, el segundo `:` indica el fin, y el tercer `:` indica el step.

---
layout: default
level: 2
title: for con step (cont.)
hideInToc: true
---

# For con step

Otros ejemplos con valores de inicio y fin:

```python
print(lista[1::2])
# [2, 4, 6, 8]
print(lista[1:7:2])
# [2, 4, 6]
```

Y podemos seleccionar elementos al revés:

```python
print(lista[::-1])
# [9, 8, 7, 6, 5, 4, 3, 2, 1]
print(lista[7:1:-1])
# [8, 7, 6, 5, 4, 3]
```

💡Nota: valor de inicio debe ser menor que el de fin si el step es positivo, y mayor si el step es negativo.

---
layout: default
level: 2
title: max, min, sum
hideInToc: false
---

# max, min, sum

En python, podemos usar `max`, `min` y `sum` para obtener el máximo, mínimo y suma de una lista. Por ejemplo:

```python
lista = [1, 2, 3, 4, 5]
print(max(lista))
# 5
print(min(lista))
# 1
print(sum(lista))
# 15
```

Por qué esto es nivel 2? Porque se puede usar con otros tipos de datos. Por ejemplo:

```python
lista = ["Hola", "mundo", "cruel"]
print(max(lista))
# mundo
print(min(lista))
# Hola
print(sum(lista))
# Error! Por qué?
```

Esto es porque `sum` solo funciona con números.

---
layout: default
level: 2
title: max, min, sum (cont.)
hideInToc: true
---

# max, min, sum

También podemos usar `max` y `min` con `key` para especificar un criterio de ordenamiento. Por ejemplo:

```python
lista = ["Hola", "mundo", "cruel"]
def criterio(string):
    vocales = "aeiou"
    cantidad_vocales = 0
    for letra in string:
        if letra in vocales:
            cantidad_vocales += 1
    return cantidad_vocales
print(max(lista, key=criterio))
# mundo
print(min(lista, key=criterio))
# Hola
```

---
layout: section
level: 1
title: Nivel 3
hideInToc: false
---

# Nivel 3
## Parámetros opcionales en funciones, métodos de strings y listas.
### Comenzamos con cosas más avanzadas

---
layout: default
level: 2
title: Parámetros opcionales en funciones
hideInToc: false
---

# Parámetros opcionales en funciones

En python, podemos definir funciones con parámetros opcionales. Por ejemplo:

```python
def saludar(nombre, apellido=None):
    if apellido:
        print(f"Hola {nombre} {apellido}")
    else:
        print(f"Hola {nombre}")
```

En este caso, `apellido` es un parámetro opcional, y si no se le pasa un valor, se usa `None` por defecto. Por ejemplo:

```python
saludar("Juan")
# Hola Juan
saludar("Juan", "Perez")
# Hola Juan Perez
```

Esto es útil cuando queremos se comporte de forma distinta según los parámetros que se le pasen.

💡 El valor `None` es un valor especial que representa la ausencia de un valor. Por ejemplo, si queremos representar que una persona no tiene apellido, podemos usar `None` para representar que no tiene apellido.

---
layout: two-cols
level: 2
title: Parámetros opcionales en funciones (cont.)
hideInToc: true
---

# Parámetros opcionales en funciones

Los parámetros opcionales siempre deben ir al final de la lista de parámetros y deben tener un valor por defecto. Por ejemplo, esto es inválido:

```python
def saludar(apellido=None, nombre):
    if apellido:
        print(f"Hola {nombre} {apellido}")
    else:
        print(f"Hola {nombre}")
```

Pero esto si es válido:

```python
def saludar(nombre, apellido="", edad=0):
    saludo = f"Hola {nombre}"
    if apellido:
        saludo += f" {apellido}"
    if edad:
        saludo += f", tienes {edad} años"
    print(saludo)
```

::right::

Y si queremos solo entregar la edad, podemos hacer:

```python
saludar("Juan", edad=20)
# Hola Juan, tienes 20 años
```

---
layout: two-cols
level: 2
title: Métodos de strings
hideInToc: false
---

# Métodos de strings

Además de los métodos que ya conocemos, hay muchos otros métodos de strings que podemos usar. Por ejemplo:

```python
string = "hola mundo"
print(string.upper())
# HOLA MUNDO
print(string.capitalize())
# Hola mundo
print(string.startswith("hola"))
# True
print(string.endswith("mundo"))
# True
print(string.replace("mundo", "amigos"))
# hola amigos
print(string.count("o"))
# 2
```

::right::

```python
# Igual que index pero
# retorna -1 si no encuentra
print(string.find("m"))
# 5
# Igual que find pero lanza
# error si no encuentra
print(string.index("m"))
# 5
lista_palabras = string.split(" ")
print(lista_palabras)
# ["hola", "mundo"]
print("-".join(lista_palabras))
# hola-mundo
```

---
layout: default
level: 2
title: Métodos de listas
hideInToc: false
---

# Métodos de listas

Además de los métodos que ya conocemos, hay muchos otros métodos de listas que podemos usar. Por ejemplo:

```python
lista = [1, 2, 3, 4, 5]
print(lista.index(3)) # Retorna el indice del primer elemento que sea 3
# 2
print(lista.count(3)) # Retorna la cantidad de elementos que sean 3
# 1
lista.extend([6, 7, 8]) # Agrega los elementos de la lista al final
print(lista)
# [1, 2, 3, 4, 5, 6, 7, 8]
lista.remove(3) # Elimina el primer elemento que sea 3
print(lista)
# [1, 2, 4, 5, 6, 7, 8]
lista.insert(2, "hola") # Inserta "hola" en el indice 2
print(lista)
# [1, 2, "hola", 4, 5, 6, 7, 8]
lista.reverse() # Invierte la lista
print(lista)
# [8, 7, 6, 5, 4, "hola", 2, 1]
copia = lista.copy() # Copia la lista
```

---
layout: section
level: 1
title: Nivel 4
hideInToc: false
---

# Nivel 4
## Archivos con modo `a`, `r+`, `w+`, `x`, `__repr__` y `__add__` en clases, y `lambda` en sorted.
### Nivel experto

---
layout: two-cols
level: 2
title: Archivos con modo `a`, `r+`, `w+`, `x`
hideInToc: false
---

# Archivos con modos
## `a`, `r+`, `w+`, `x`

Cuando abrimos un archivo, podemos especificar otros modos además de `r` y `w`. Por ejemplo:

```python
# Abre el archivo en modo append
archivo = open("archivo.txt", "a")
# El archivo debe existir
# Y el contenido existente no se borra

# Escribe al final del archivo
archivo.write("Hola mundo")
archivo.close()

# Abre el archivo en modo read+
archivo = open("archivo.txt", "r+")
# El archivo debe existir
# Y el contenido existente no se borra

# Escribe al final del archivo
archivo.write("Hola mundo")
archivo.close()
```

::right::

```python
# Abre el archivo en modo write+
archivo = open("archivo.txt", "w+")
# El archivo puede existir o no y
# el contenido existente se borra

archivo.read()
# w+ Permite leer el archivo además de escribirlo

archivo.close()

# Abre el archivo en modo exclusive
archivo = open("archivo.txt", "x")
# El archivo no debe existir
# Si existe, lanza un error

archivo.write("Hola mundo")
# Escribe al final del archivo
archivo.close()
```

También podemos usar usar el módo "x+" para leer además de escribir, y el módo "a+" para leer además de escribir al final del archivo.

---
layout: center
level: 2
title: Tabla de métodos de archivos
hideInToc: true
---

# Tabla de métodos de archivos

<img src="/content/clase_27/image.png" class="w-85 mx-auto" />

Esta tabla es muy útil para saber qué métodos podemos usar en cada modo.

[Fuente](https://stackoverflow.com/a/67558256/8305277)

---
layout: two-cols
level: 2
title: Clases con `__repr__` y `__add__`
hideInToc: false
---

# Clases
## con `__repr__` y `__add__`

Cuando definimos una clase, podemos definir los métodos `__repr__` y `__add__`. Por ejemplo:

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
```

Y podemos usarlos así:

```python
v1 = Vector(1, 2)
v2 = Vector(3, 4)

```

::right::

```python
print(v1)
# Vector(1, 2)
print(v2)
# Vector(3, 4)
print([v1, v2])
# [Vector(1, 2), Vector(3, 4)]
print(v1 + v2)
# Vector(4, 6)
```

Esto dado que `__repr__` define cómo se imprime un objeto en forma resumida, y `__add__` define cómo se suman dos objetos (es decir, qué significa `+` para dos objetos de esa clase).

En el caso de `__repr__`, es útil para imprimir objetos dentro de listas, y en el caso de `__add__`, es útil para sumar objetos de esa clase.

---
layout: center
level: 2
title: Clases con `__repr__` y `__add__` (cont.)
hideInToc: true
---

# Clases
## con `__repr__` y `__add__`

De la diapositiva anterior:

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
```

En el `__add__` se recibe `self` y `other`, donde `self` es el objeto de la clase, y `other` es el otro objeto que se está sumando (el de la derecha de `+`). Idealmente, `other` también debería ser de la misma clase, pero no es necesario. También deberíamos retornar un objeto de la misma clase.

---
layout: default
level: 2
title: Lambda en sorted
hideInToc: false
---

# Lambda en sorted
## Motivación

Cuando usamos `sorted`, podemos usar `key` para especificar un criterio de ordenamiento. Por ejemplo:

```python
def criterio(pais):
    return pais[1]

poblacion = [
    ["Chile", 18_000_000], # El _ es para separar los miles, pero sigue siendo
    # un numero
    ["Argentina", 45_000_000],
    ["Peru", 33_000_000],
    ["Bolivia", 11_000_000],
    ["Colombia", 50_000_000],
    ["Venezuela", 28_000_000],
    ["Ecuador", 17_000_000],
    ["Brasil", 210_000_000],
    ["Uruguay", 3_000_000],
    ["Paraguay", 7_000_000],
]
print(sorted(poblacion, key=criterio)[:3])
# [['Uruguay', 3000000], ['Paraguay', 7000000], ['Bolivia', 11000000]]
```

---
layout: default
level: 2
title: Lambda en sorted (cont.)
hideInToc: true
---

# Lambda en sorted
## Uso de lambda

Pero podemos usar `lambda` para definir una función anónima. Por ejemplo:

```python
poblacion = [
    ["Chile", 18_000_000],
    ["Argentina", 45_000_000],
    ["Peru", 33_000_000],
    ["Bolivia", 11_000_000],
    ["Colombia", 50_000_000],
    ["Venezuela", 28_000_000],
    ["Ecuador", 17_000_000],
    ["Brasil", 210_000_000],
    ["Uruguay", 3_000_000],
    ["Paraguay", 7_000_000],
]
print(sorted(poblacion, key=lambda pais: pais[1])[:3])
# [['Uruguay', 3000000], ['Paraguay', 7000000], ['Bolivia', 11000000]]
```

`lambda` es útil cuando queremos definir una función anónima que solo se usa una vez. En este caso, solo se usa una vez en `sorted`, por lo que es útil usarla.

---
layout: default
level: 2
title: Lambda en sorted (cont.)
hideInToc: true
---

`lambda` es una función anónima que recibe parámetros y retorna un valor. En este caso, recibe `pais` y retorna `pais[1]`. Por lo tanto, es equivalente a:

```python
def criterio(pais):
    return pais[1]
```

Pero también podría recibir cero o más parámetros. Por ejemplo:

```python
import random

lista = [1, 2, 3, 4, 5]
print(sorted(lista, key=lambda: random.random())) # No recibe parámetros
# [3, 1, 2, 5, 4] o cualquier otra permutación, ya que se ordena al azar
parejas = [[1, 2], [3, 4], [5, 6]]
```

---
layout: center
level: 1
title: Coming soon
hideInToc: true
---

# Coming soon

Estos son algunos temas que no vimos, pero que podrían ser útiles en el futuro. Si quieren aprenderlos, pueden hacerlo por su cuenta, pero no es necesario para el curso, y hay muchos otros temas que podrían aprender.

1. Próximas clases serán de repaso (2 clases)
2. La última clase será un repaso y un cierre del curso (tercera clase de repaso).

Nos vemos en la próxima clase!
