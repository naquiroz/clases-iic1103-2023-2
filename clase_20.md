---
theme: apple-basic
info: |
  ## Clase 13 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 20
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
exportFilename: clase_20
---
# Archivos II
## Clase 20 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Anuncios

1. Recordar tarea 2 se entrega hoy!
2. Disfraces halloween, próximo martes.


---
layout: default
level: 1
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior

## Archivos

Los archivos son objetos que permiten guardar información. Los archivos pueden ser de texto, imagen, video, entre otros. En este curso, nos enfocamos en archivos de texto.

### Rutas de Archivos

Las rutas son direcciones que indican la ubicación de un archivo en el sistema. Hay dos tipos de rutas:

1. Ruta absoluta: Ruta completa desde el inicio del sistema hasta el archivo.
2. Ruta relativa: Ruta desde el archivo que estamos usando hasta el archivo que queremos usar.

### Uso de Archivos

Para trabajar con archivos, necesitamos abrirlos, leer/escribir en ellos, y finalmente cerrarlos. Para abrir y cerrar archivos usamos las funciones `open(ruta)` y `archivo.close()`, respectivamente.

---
layout: default
level: 1
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior
## Archivos

### Lectura de Archivos

Para leer archivos, podemos usar `read()`, `readlines()` o `readline()`. `read()` lee el archivo completo como un solo string, `readlines()` lee el archivo línea por línea pero completo, y `readline()` lee el archivo línea por línea, de a una línea.

```python
# Ejemplo de readlines()
archivo = open("ejercicio.txt")
lineas = archivo.readlines()
archivo.close()
```

### Saltos de Línea y `strip()`

Los saltos de línea son caracteres especiales que representamos con `"\n"`. Para eliminar los saltos de línea de un string, usamos la función `strip("\n")`.

```python
# Ejemplo de strip()
contenido_linea = "Corrida 1\n15 kms\n".strip("\n")
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
layout: section
level: 1
title: Archivos - Continuación
hideInToc: false
---

# Archivos
## Continuación

---
layout: default
level: 2
title: Motivación
hideInToc: false
---

# Motivación

Vimos que los archivos son objetos que permiten obtener información. Pero, ¿cómo podemos guardar información en ellos?

Para eso, necesitamos escribir en ellos. Para escribir en un archivo, debemos seguir los siguientes pasos:

<div class="flex">
  <p class="mx-auto text-6xl"> 📖 -> &nbsp;✏️ -> &nbsp;📘 </p>
</div>

<div class="flex">
  <p class="mx-auto text-5xl">

  `open()`
  -> &nbsp;
  `write()`
  -> &nbsp;
  `close()`
  </p>
</div>

Es decir, para nosotros escribir en un archivo, debemos:

1. Abrir el archivo **en modo de escritura**
2. Escribir en el archivo
3. Cerrar el archivo

---
layout: default
level: 2
title: Abrir en modo de escritura
hideInToc: false
---

# Archivos
## Abrir el archivo en modo de escritura

Para abrir un archivo en modo de escritura, debemos usar la función `open(ruta, modo)`. El modo es un string que indica cómo queremos abrir el archivo. Para abrirlo en modo de escritura, debemos usar el modo `"w"` (de _write_) versus el valor por defecto `"r"` (de _read_) que es el que asume `open(ruta)`.

```python
# Lo abrimos en modo escritura
archivo = open("carpeta_bacan/archivo.txt", "w")
# Hacemos algo con el archivo aquí
archivo.close() # Siempre cerrar el archivo
```

❗ Algo **muy importante** es que al abrir un archivo en modo de escritura, **se borra todo el contenido del archivo**. Por lo tanto, si abrimos un archivo en modo de escritura, y luego lo cerramos, el archivo queda vacío.

Para obtener el contenido del archivo, debemos abrirlo en modo de lectura primero, leerlo, y luego abrirlo en modo de escritura.

---
layout: default
level: 2
title: Escribir en el archivo
hideInToc: false
---

# Archivos
## Escribir en el archivo

Para escribir en un `archivo`, debemos usar el método `write(contenido)`. Este método recibe un string, y escribe el string en el archivo.
Por ejemplo, si quiero guardar las notas de mis cursos en un archivo, puedo hacer lo siguiente:

```python
archivo = open("carpeta_bacan/archivo.txt", "w")
archivo.write("4.5\n5.5\n6.0\n7.0\n")
archivo.close()
```

❗ El string que le pasamos a `write()` tiene saltos de línea. Esto es porque `write()` no agrega saltos de línea automáticamente. Si queremos agregar un salto de línea, debemos agregarlo nosotros.

❗ Si volvemos a llamar a `write()` en el mismo archivo, el string que le pasemos se escribe al final del archivo. Es decir, no se borra el contenido anterior.

❗ Si el archivo en la ruta que le pasamos a `open()` no existe, se crea un archivo nuevo en esa ruta.

---
layout: default
level: 2
title: Escribir junto a lo que ya está
hideInToc: false
---

# Archivos
## Escribir contenido adicional

Para agregar contenido al final del archivo, debemos primero leer el contenido del archivo, y luego escribir el contenido nuevo junto al contenido anterior.

Por ejemplo, si quiero guardar los movimientos de personaje en un juego, puedo hacer lo siguiente:

```python
# Leemos contenido anterior
movimientos = open("carpeta_jugadores/jugador_1/movimientos.txt", "r")
movimientos_anteriores = movimientos.read()
movimientos.close()

# Agregamos el nuevo movimiento
movimientos = open("carpeta_jugadores/jugador_1/movimientos.txt", "w")
movimientos.write(movimientos_anteriores + "derecha\n")
movimientos.close()
```

---
layout: default
level: 2
title: Escribir con `print()`
hideInToc: false
---

# Archivos
## Escribir con `print()`

Para escribir en un archivo, podemos usar `write()`, pero también podemos escribir con `print()`. Para eso, debemos usar el parámetro `file` de `print()`, que recibe un archivo.

```python
archivo = open("carpeta_bacan/archivo.txt", "w")
print("4.5", file=archivo)
print("5.5", file=archivo)
print("6.0", file=archivo)
print("7.0", file=archivo)
archivo.close()
```

Lo anterior hará lo mismo que el ejemplo anterior, pero usando `print()` en vez de `write()`.

---
layout: default
level: 2
title: Ejemplo PAC-MAN
hideInToc: false
---

# Ejemplo PAC-MAN

Eres una de las personas encargadas de programar el juego PAC-MAN. Tu objetivo es guardar el mapa del juego en un archivo de texto. El mapa es una matriz de caracteres, donde cada linea puede tener cualquier de las siguientes letras:

- `P`: Indica que hay un punto en esa posición.
- `G`: Indica que hay un fantasma en esa posición.
- `W`: Indica que hay una pared en esa posición.
- `E`: Indica que hay un espacio vacío en esa posición.
- `F`: Indica que hay un fruto en esa posición.
- `M`: Indica que el pac-man está en esa posición.

Es decir un mapa podría verse así:

```text
WWWWWWWWW
WPPPPPPPW
WPGGGGPPW
WMPPPPPPW
WWWWWWWWW
```

---
layout: default
level: 2
title: Ejemplo PAC-MAN
hideInToc: true
---

# Ejemplo PAC-MAN
Escribe un programa que reciba lineas de texto, y las guarde en un archivo de texto llamado `mapa.txt`. El programa debe terminar cuando se ingrese una linea vacía.

Por ejemplo, si el usuario ingresa las siguientes lineas:

```text
WWWWWWWWW
WPPPPPPPW
WPGGGGPPW
WMPPPPPPW
WWWWWWWWW

```

El archivo `mapa.txt` debe quedar con el siguiente contenido:

```text
WWWWWWWWW
WPPPPPPPW
WPGGGGPPW
WMPPPPPPW
WWWWWWWWW
```

---
layout: default
level: 2
title: Ejemplo - Solución
hideInToc: true
---
# Solución

```python {-} {lines: true, maxHeight: '350px'}
# Abrimos el archivo en modo de escritura
archivo = open("mapa.txt", "w")

# Leemos la primera linea
linea = input()

# Mientras la linea no sea vacía
while linea != "":
    # Escribimos la linea en el archivo
    archivo.write(linea + "\n")
    # Leemos la siguiente linea
    linea = input()

# Cerramos el archivo
archivo.close()
```

---
layout: default
level: 2
title: Archivos CSV
hideInToc: true
---
# Archivos
## CSV

Los archivos CSV son archivos de texto (es decir muy parecido a los `.txt`) que tienen una estructura definida.
CSV significa _Comma Separated Values_, y se usa para guardar tablas de datos. Los CSV normalmente tiene una línea con los nombres de las columnas, y luego una línea por cada fila de la tabla.

Por ejemplo, si tenemos una tabla con los nombres de los alumnos y sus notas, el CSV podría verse así:

```text
nombre,nota
Juan,4.5
Pedro,5.5
María,6.0
```

Los CSVs son muy útiles para guardar información, ya que son fáciles de leer y escribir. Además, son muy usados en el mundo de la programación y la ciencia de datos, por lo que es importante saber trabajar con ellos.

Como dato, los CSV pueden ser abiertos con Excel, también son muy usados en el mundo de la administración y las finanzas.

---
layout: default
level: 2
title: Escribir CSVs
hideInToc: false
---

# Archivos
## Escribir CSVs

Para escribir CSVs, escribimos igual que siempre pero debemos recordar agregar las comas y los saltos de línea.

Por ejemplo, si queremos guardar la tabla de notas de los alumnos, podemos hacer lo siguiente:

```python
archivo = open("notas.csv", "w")
archivo.write("nombre,nota\n")
archivo.write("Juan,4.5\n")
archivo.write("Pedro,5.5\n")
archivo.write("María,6.0\n")
archivo.close()
```

---
layout: default
level: 2
title: Ejemplo avanzado
hideInToc: false
---
# Archivos - Ejemplo avanzado
## Guardar lecciones de duolingo

Eres un estudiante de IIC1103, y debes ayudar a separar las lecciones de Duolingo en distintos registros por cada usuario. Para eso, duolingo te ha dado un archivo de texto con las lecciones de todos los usuarios,
y te ha pedido que guardes las lecciones de cada usuario en un archivo separado. El archivo entregado se llama `lecciones.csv`, y tiene el siguiente formato:

```text
usuario,numero_leccion,fecha_completada
juan,2,2021-10-01
pedro,1,2023-10-02
nicolas,1,2019-10-03
migue_123,3,2022-10-04
juan,1,2021-10-05
```

Y debemos crear uno archivo por usuario, CSV, con el nombre del usuario como nombre del archivo. Por ejemplo, el archivo de Juan se llamaría `juan.csv`, y tendría el siguiente contenido:

```text
leccion,fecha_completada
2,2021-10-01
1,2021-10-05
```

---
layout: default
level: 2
title: Archivos - Ejemplo avanzado - Solución
hideInToc: true
---

## Solución

```python {1-9|11-20|22-34|36-41|42-53} {lines: true, maxHeight: '350px'}
# Abrimos el archivo para lectura
lecciones = open("lecciones.csv", "r")
# Leemos las lineas del archivo
lineas = lecciones.read().strip("\n").split("\n")
# Nos interesan todas las lineas menos la primera
# (dado que la primera linea tiene los nombres de las columnas)
lineas = lineas[1:]
# Creamos una lista donde cada lista de dos elementos tiene el nombre del usuario y su lista de lecciones
usuarios = []

# Por cada linea
for linea in lineas:
    # Separamos los datos
    datos = linea.split(",")
    # Obtenemos el nombre del usuario
    nombre = datos[0]
    # Obtenemos el numero de leccion
    leccion = datos[1]
    # Obtenemos la fecha
    fecha = datos[2]

    # Buscamos si el usuario ya está en la lista de usuarios
    usuario_encontrado = False
    usuario_indice = 0
    while not usuario_encontrado:
        usuario = usuarios[usuario_indice]
        # Por cada usuarios:
        # Si el usuario ya está en la lista
        if usuario[0] == nombre:
            # Agregamos la leccion a la lista de lecciones del usuario
            usuario[1].append([leccion, fecha])
            # Indicamos que ya encontramos el usuario
            usuario_encontrado = True
            # Terminamos el ciclo

    # Si el usuario no está en la lista
    if not usuario_encontrado:
        # Creamos una lista con el nombre del usuario y una lista vacía de lecciones
        usuarios.append([nombre, []])
        # Agregamos la leccion a la lista de lecciones del usuario
        usuarios[-1][1].append([leccion, fecha])
# Por cada usuario
for usuario in usuarios:
    # Abrimos el archivo con el nombre del usuario en modo escritura
    archivo = open(usuario[0] + ".csv", "w")
    # Escribimos el nombre de las columnas
    archivo.write("leccion,fecha_completada\n")
    # Por cada leccion del usuario
    for leccion in usuario[1]:
        # Escribimos la leccion en el archivo
        archivo.write(leccion[0] + "," + leccion[1] + "\n")
    # Cerramos el archivo
    archivo.close()
```

Esta solución asume que el archivo `lecciones.csv` existe, y que tiene el formato correcto, además de tener al menos una linea
de datos.

---
layout: center
level: 1
title: Spoiler repaso
hideInToc: true
---

# Coming soon...

Esta es toda la materia que se debe ver antes de la I2. La próxima clase será de repaso, y la siguiente será de resolver dudas y resolver ejercicios.

Luego de eso retomamos con los últimos dos contenidos del curso 😮:

1. Programación Orientada a Objetos (OOP/POO)
2. Ordenamiento

Nos vemos la próxima semana!
