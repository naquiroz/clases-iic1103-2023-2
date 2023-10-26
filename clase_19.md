---
theme: apple-basic
info: |
  ## Clase 13 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 19
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
exportFilename: clase_19
---
# Funciones Recursivas y Archivos I
## Clase 19 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Anuncios

1. Recordar tarea 2 se entrega el jueves!
2. Concurso de memes, participen!
3. Disfraces halloween, próximo martes.

---
layout: default
level: 1
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior

## Definición
Una función recursiva es aquella que se llama a sí misma dentro de su definición. Es muy útil para resolver problemas que se pueden dividir en subproblemas más simples.

## Estructura
Una función recursiva generalmente tiene la siguiente estructura:

```python
def funcion_recursiva(parametros):
    # Caso Base
    if condicion:
        return resultado
    # Llamado Recursivo
    return funcion_recursiva(nuevos_parametros)
```

---
layout: default
level: 1
title: Repaso Clase Anterior
hideInToc: true
---

## Ejemplos
### 1. Factorial

```python
def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)
```

### 2. Fibonacci

```python
def fib(n):
    if n == 1 or n == 2:
        return 1
    return fib(n - 1) + fib(n - 2)
```

### 3. Expansión de coro

```python
def expandir_coro(coro):
    veces = int(coro.split("x")[1])
    coro_sin_x = coro.split("x")[0]
    if "x0" in coro:
        return ""
    return coro_sin_x + expandir_coro(coro_sin_x + "x" + str(veces - 1))
```

---
layout: center
level: 1
title: Funciones Recursivas
hideInToc: true
---

## Nota Importante
Para evitar llamados infinitos, toda función recursiva debe tener al menos un caso base que no haga un llamado recursivo.

---
layout: center
level: 2
title: Agenda
hideInToc: true
---

# Agenda

<Toc />

---
layout: section
level: 2
title: Funciones Recursivas - Continuación
hideInToc: false
---

# Funciones Recursivas
## Continuación

---
layout: default
level: 1
title: Funciones Recursivas - con listas
hideInToc: false
---

# Ejemplo de listas

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

Podemos sumar todos los números de la lista, y tenemos un caso base que no hace un llamado recursivo.

<!-- Archivos Section -->
---
layout: section
level: 1
title: Archivos
hideInToc: false
---

# Archivos

---
layout: default
level: 2
title: Archivos - Motivación
hideInToc: false
---

# Motivación

Usamos la computación en muchas partes de nuestra vida y en muchos rubros:

1. Para observar constelaciones o especímenes en un laboratorio
2. Para hacer cálculos de ingeniería y finanzas
3. Para jugar

Y en estos casos necesitamos guardar información. Por ejemplo:

1. Tomar mediciones (de estrellas o microorganismos) y guardarlas para analizarlas después.
2. Usa software que realice cálculos o modele situaciones (Excel, Word, AutoCAD, etc.)
3. Guardar el progreso de un juego.

Vamos a querer poder continuar el trabajo que hicimos en el pasado, y poder retomarlo si es que corremos el programa nuevamente en otra instancia.

Veamos un ejemplo.

---
layout: default
level: 2
title: Archivos - Motivación Splitwise
hideInToc: false
---

# Motivación
## Splitwise

Supongamos que tenemos un grupo de amigos que comparten gastos. Para llevar la cuenta de quién le debe a quién, usamos una aplicación llamada Splitwise. En esta, nos pide el nombre de un integrante, cuanto dinero gastó, y los nombres de quienes se beneficiaron de ese gasto.

```text
Nico
100
Nico, Juan, Pedro
Juan
50
Nico, Juan
Pedro
23
Nico, Pedro
Salir
```

Hasta aquí tenemos una aplicación que podría ir calculando las deudas de cada uno, pero si la cerramos, se pierde toda la información. ¿Cómo podemos guardar esta información?

Con archivos!

---
layout: two-cols
level: 2
title: Archivos - Definición
hideInToc: false
---

# Archivos
## Definición

Un archivo es un objeto que permite guardar información. Puede ser de cualquier tipo, y puede ser leída y escrita por el computador. Los archivos pueden ser de distintos tipos:

1. Texto (`.txt`, `.csv`)
2. Imagen (`.png`, `.jpg`, `.gif`)
3. Video (`.mp4`, `.avi`, `.mov`)
4. Muchos otros...

Para este curso nos enfocaremos en archivos de texto, que son los más fáciles de manipular.

❗️ El `.txt` es la _extensión_ del archivo. Indica el tipo de archivo que es. Por ejemplo, un archivo `.png` no se puede leer como un archivo `.txt`.

::right::

<img src="/content/clase_19/documentos.png" class="w-100" />

Si abro `ejercicio.txt` con un editor de texto, puedo ver su contenido.

<img src="/content/clase_19/archivo.png" class="w-100" />

---
layout: two-cols
level: 2
title: Archivos - Rutas
hideInToc: false
---

# Archivos - Rutas
## Ok, ahora, dónde está el archivo?

Necesitamos saber su ruta. Una ruta es como un linea dentro de un mapa, que nos indica cómo llegar a un archivo. Hay dos tipos de rutas:

1. Ruta absoluta: Es la ruta completa desde el inicio del computador hasta el archivo. Por ejemplo, en Windows `C:\Users\Nico\Documents\ejercicio.txt`  o en Mac `/Users/Nico/Documents/ejercicio.txt`.

2. Ruta relativa: Es la ruta desde el archivo que estamos usando hasta el archivo que queremos usar.

  Esto es importante, dado que necesitamos saber la ruta de un archivo para poder usarlo en nuestro programa.
::right::

   Por ejemplo, si estamos en el archivo `ejercicio.txt` y queremos usar el archivo `ejercicio2.txt` que está en la misma carpeta, la ruta relativa es `ejercicio2.txt`.
  Si por ejemplo `ejercicio2.txt` está en una carpeta llamada `carpeta`, la ruta relativa es `carpeta/ejercicio2.txt`.

<img src="/content/clase_19/dos_archivos.png" class="w-85" />

---
layout: default
level: 2
title: Archivos - Cómo usarlos
hideInToc: false
---

# Archivos - Cómo usarlos

Ahora que entendemos qué son los archivos y cómo encontrarlos, ¿cómo los usamos?

La primera pregunta que debemos hacernos es: ¿queremos leer o escribir en el archivo?

1. Leer: Queremos obtener la información que está guardada en el archivo.
2. Escribir: Queremos guardar información en el archivo.

Hoy veremos cómo leer archivos.

Para leer un archivo, debemos seguir los siguientes pasos:

1. Abrir el archivo
2. Leer el el contenido del archivo
3. Cerrar el archivo

<div class="flex">
  <p class="mx-auto text-6xl"> 📖 -> &nbsp;🔍 -> &nbsp;📘 </p>
</div>

---
layout: default
level: 2
title: Archivos - Cómo usarlos
hideInToc: true
---
# Archivos - Cómo usarlos

Para trabar con los archivos, tenemos indicarle al computador que queremos usarlos. Para eso, tenemos dos funciones:

<div class="flex">
  <p class="mx-auto text-6xl"> 📖 -> &nbsp;🔍 -> &nbsp;📘 </p>
</div>

<div class="flex">
  <p class="mx-auto text-6xl">

  `open()`
  -> &nbsp;🔍 -> &nbsp;
  `close()`
  </p>
</div>

- `archivo = open(ruta)` recibe la ruta del archivo que queremos abrir, y nos devuelve un objeto que representa el archivo. La ruta debe ser un `str`.

- `archivo.close()` a partir del objeto que representa el archivo que queremos cerrar, y cierra el archivo. Ahora puede ser usado por otros programas.

❗️❗️ Es muy importante cerrar los archivos que abrimos, dado que si no lo hacemos, otros programas no podrán usarlos.

---
layout: center
level: 2
title: Archivos - Cómo usarlos
hideInToc: true
---
# Archivos - Cómo usarlos

Por ejemplo, un programa que abra los archivos, y los cierre, podría ser el siguiente:

```python
archivo = open("ejericio.txt")
print("¡Abrí el archivo!")
# Hacer algo con el archivo
print("Toma computador, ya no lo necesito")
archivo.close()
```

Muy bien, ahora que sabemos cómo abrir y cerrar archivos, ¿cómo leemos su contenido? Debemos decidir si queremos:

1. Leer el archivo completo como un solo string
2. Leer el archivo línea por línea, pero completo
3. Leer el archivo línea por línea, pero de a una línea

De esto va a depender cómo lo usemos en nuestro programa. En el curso, oficialmente, sólo se les enseña el (2.), pero pueden usar cualquiera de los tres.

---
layout: default
level: 2
title: Archivos - Cómo leerlos - `read()`
hideInToc: false
---

# Archivos - Cómo leerlos - <span class="text-black dark:text-white">`read()`</span>
## 👉🏻 Esta diapositiva es material extra

Para leer el archivo completo como un solo string, usamos la función `read()`.

```python
archivo = open("ejercicio.txt")
contenido = archivo.read() # Su contenido es
"""
Corrida 1
15 kms
1h 30m 00s
Corrida 2
...
"""
# Cuantas corridas hice?
print(len(contenido.split("Corrida")) - 1)
# Imprimimos el contenido
print(contenido)
archivo.close()
```

El `print` de `contenido` tiene varias líneas. Esto es porque el archivo tiene saltos de línea, y el string los mantiene. ¿Pero como es que el string tiene saltos de línea? 🤔 Cómo se ve eso?

---
layout: two-cols
level: 2
title: Archivos - `"\n"` y `split()`
hideInToc: false
---

# Archivos - <span class="text-black dark:text-white">`"\n"`</span>
## Saltos de línea

Los saltos de línea son caracteres especiales (igual que los espacios) que indican que el texto debe pasar a la siguiente línea. En Python, el salto de línea se representa con el caracter `"\n"`.

```python
print("Hola\nMundo")
# >>> Hola
# >>> Mundo
```

Cuando abrimos un archivo con `read()`, el string que nos devuelve tiene los saltos de línea. Por ejemplo, si tenemos el archivo `ejercicio.txt`:

```text
Corrida 1
15 kms
...
```

::right::

Y lo abrimos con `read()`, el string que nos devuelve es:

```python
archivo = open("ejercicio.txt")
contenido = archivo.read()
# Contenido es "Corrida 1\n15 kms\n..."
archivo.close()
```

Y lo interesante, es que podemos usar `split()` con `"\n"` para obtener una lista con las líneas del archivo.

```python
archivo = open("ejercicio.txt")
contenido = archivo.read()
lineas = contenido.split("\n")
# lineas es ["Corrida 1", "15 kms", ...]
archivo.close() # Recordar cerrar el archivo
```

---
layout: default
level: 2
title: Archivos - `strip()`
hideInToc: false
---
# Archivos - <span class="text-black dark:text-white">`strip()`</span>

Vimos que el string que nos devuelve `read()` tiene saltos de línea. ¿Cómo podemos sacarlos?

Para eso, usamos la función `strip(caracteres)`. Esta función recibe un string, y nos devuelve el mismo string, pero sin los caracteres (siempre que estén al principio o al final del string).

```python
print("Hola Mundo".strip("o"))
# >>> Hola Mund
print("Hola Mundo".strip("H"))
# >>> ola Mundo
print("Hola Mundo".strip("Ho"))
# >>> la Mund
print("Hola Mundo".strip("Hdo"))
# >>> la Mun
contenido_linea_extra_final = "Corrida 1\n15 kms\n".strip("\n")
# contenido_linea_extra_final es "Corrida 1\n15 kms" (sin el último \n)
contenido_linea_extra_inicio = "\nCorrida 1\n15 kms".strip("\n")
# contenido_linea_extra_inicio es "Corrida 1\n15 kms" (sin el primer \n)
contenido_linea_extra_inicio_y_final = "\nCorrida 1\n15 kms\n".strip("\n")
# contenido_linea_extra_inicio_y_final es "Corrida 1\n15 kms" (sin el primer y último \n)
```

Esto es muy útil para trabajar con archivos, dado que podemos sacar los saltos de línea de cada línea del archivo.

---
layout: two-cols
level: 2
title: Archivos - Cómo leerlos - `readlines()` y `readline()`
hideInToc: false
---

# Archivos
## Cómo leerlos - <span class="text-black dark:text-white">`readlines()`</span> y <span class="text-black dark:text-white">`readline()`</span>

Otra forma de leer archivos es línea por línea. Para eso, tenemos dos funciones:

- `readlines()` nos devuelve una lista con las líneas del archivo. Cada línea es un string, y cada string tiene el salto de línea al final del string.
- `readline()` nos devuelve un string con la primera línea del archivo. Si lo llamamos de nuevo, nos devuelve la segunda línea, y así sucesivamente.
  Es equivalente a obtener elemento por elemento de la lista que nos devuelve `readlines()`, cada vez que llamamos a `readline()`.

::right::

```python
# Ejemplo de readlines()
archivo = open("ejercicio.txt")
lineas = archivo.readlines()
# lineas es ["Corrida 1\n", "15 kms\n", ...]
archivo.close()

# Ejemplo de readline()
archivo = open("ejercicio.txt")
linea = archivo.readline()
# linea es "Corrida 1\n" y luego "15 kms\n" etc
while linea != "":
    print(linea.strip("\n"))
    # >>> Corrida 1
    # >>> 15 kms
    # >>> ...
    linea = archivo.readline()
archivo.close()
```

Ambos métodos son equivalentes, y nos devuelven strings con los saltos de línea. Para sacarlos, podemos usar `strip()`.

Notar que `readlines()`es el único oficialmente enseñado en el curso.

---
layout: default
level: 2
title: Archivos - Cómo leerlos - Ejemplo
hideInToc: false
---

# Archivos - Cómo leerlos - Ejemplo

## Leer y agrupar mediciones de brillo de estrellas

Imagina que estás trabajando en un proyecto de astronomía en el que debes analizar las mediciones de brillo de varias estrellas. Las mediciones se almacenan en un archivo de texto llamado `"estrellas_23_oct.txt"`.
Cada línea en el archivo contiene una medición de brillo y el nombre de la estrella correspondiente, separados por un guión ("-").

El contenido del archivo puede verse así:

```text
3-A
2-B
3-A
4-C
5-B
10-C
11-A
```

---
layout: default
level: 2
title: Archivos - Cómo leerlos - Ejemplo
hideInToc: true
---

Desafortunadamente, todas las mediciones están desordenadas en el archivo. Necesitamos un programa que lea los datos del archivo, agrupe las mediciones de brillo por estrella y luego imprima los brillos para cada estrella en líneas separadas.

```text
3,3,11
2,5
4,10
```

---
layout: default
level: 2
title: Archivos - Cómo leerlos - Solución Ejemplo
hideInToc: true
---

## Solución

```python {1-2|4-10|12-29|31-32|34-42|-} {lines: true, maxHeight: '350px'}
# Abrimos el archivo para lectura
archivo = open("estrellas_23_oct.txt")

# Iniciamos una lista vacía donde tendremos una lista por cada estrella, el primer elemento será el
# nombre y el segundo una lista con los brillos

estrellas = []

# Leemos el archivo línea por línea
lineas = archivo.readlines()

# Para cada línea
for linea in lineas:
    # Separamos el nombre de la estrella y el brillo
    medicion = linea.strip("\n").split("-")
    nombre = medicion[1]
    brillo = medicion[0]
    # Buscamos si ya tenemos la estrella en la lista
    indice = -1
    for i in range(len(estrellas)):
      # Si ya la tenemos, guardamos su índice
      if estrellas[i][0] == nombre:
        indice = i
    # Si no la tenemos, la agregamos a la lista
    if indice != -1:
      estrellas[indice][1].append(brillo)
    # Si ya la tenemos, agregamos el brillo a la lista de brillos
    else:
      estrellas.append([nombre, [brillo]])

# Siempre cerramos el archivo!
archivo.close()

# Imprimimos las mediciones de brillo para cada estrella en una línea separada
for estrella in estrellas:
  datos = ""
  for brillo in estrella[1]:
    datos += brillo + ","
  datos = datos[:-1]
  # Este for junto a datos[:-1] es equivalente a usar join
  # datos = ",".join(estrella[1]) -> "3,3,11"
  print(datos)
```

Nota: Este programa asume que todas las líneas en el archivo están en el formato correcto y que todas las mediciones de brillo son números enteros. Si estos supuestos no son ciertos, se deben hacer cambios en el programa para manejar estos casos.

---
layout: center
level: 1
title: Spoiler repaso
hideInToc: true
---

# Coming soon...

Vimos cómo leer archivos, pero de que nos sirve si no podemos guardar la información que leemos? 🤔

No formas más estandarizadas de guardar información, separadas por ejemplo por comas?

Lo veremos en la próxima clase!

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
