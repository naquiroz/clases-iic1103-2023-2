---
theme: apple-basic
info: |
  ## Clase 28 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 28
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
exportFilename: clase_28
---

# Repaso Examen
## Clase 28 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: section
level: 1
title: Clase 19 - Archivos I
hideInToc: false
---

# Archivos I
## Clase 19 | Introducción a la programación

---
layout: two-cols
level: 2
title: Archivos - Que son y rutas
hideInToc: false
---

# Archivos - Que son y rutas

Un archivo es un objeto que permite guardar información. Puede ser de cualquier tipo, como `.txt`, `.png`, `.mp3`, etc. En python, podemos usar archivos para guardar información, y luego leerla.

Necesitamos saber su ruta. Una ruta es como un linea dentro de un mapa, que nos indica cómo llegar a un archivo. Hay dos tipos de rutas:

1. Ruta absoluta: Es la ruta completa desde el inicio del computador hasta el archivo. Por ejemplo.

2. Ruta relativa: Es la ruta desde el archivo que estamos usando hasta el archivo que queremos usar.

::right::

   Por ejemplo, si estamos en el archivo `ejercicio.txt` y queremos usar el archivo `ejercicio2.txt` que está en la misma carpeta, la ruta relativa es `ejercicio2.txt`.
  Si por ejemplo `ejercicio2.txt` está en una carpeta llamada `carpeta`, la ruta relativa es `carpeta/ejercicio2.txt`.

<img src="/content/clase_19/dos_archivos.png" class="w-85" />

---
layout: two-cols
level: 2
title: Archivos - Cómo leerlos - `read()`
hideInToc: false
---

# Archivos - Cómo leerlos - <span class="text-black dark:text-white">`read()`</span>

**👉🏻 Este fragmento es material extra**
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

::right::

**👉🏻 Esto no es material extra**

Los saltos de línea son caracteres especiales (igual que los espacios) que indican que el texto debe pasar a la siguiente línea. En Python, el salto de línea se representa con el caracter `"\n"`.

```python
print("Hola\nMundo")
# >>> Hola
# >>> Mundo
```

Y al con `read()`, el string que nos devuelve es con `\n`  y podemos usar `split("\n")` para obtener una lista con las líneas del archivo.

```python
archivo = open("ejercicio.txt")
contenido = archivo.read()
# Contenido es "Corrida 1\n15 kms\n..."
lineas = contenido.split("\n")

archivo.close()
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

---
layout: two-cols
level: 2
title: Archivos - Cómo leerlos - `readlines()` y `readline()`
hideInToc: true
---

# Archivos
## Cómo leerlos - <span class="text-black dark:text-white">`readlines()`</span> y <span class="text-black dark:text-white">`readline()`</span>

Otra forma de leer archivos es línea por línea. Para eso, tenemos dos funciones:

- `readlines()` nos devuelve una lista de string con las líneas del archivo.
- `readline()` nos devuelve un string con una línea cada vez que lo llamamos, partiendo de ;la primera líne.

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

Ambos nos devuelven strings con los saltos de línea. Para sacarlos, podemos usar `strip()`.

Notar que `readlines()`es el único oficialmente enseñado en el curso.

---
layout: two-cols
level: 2
title: Escribir en el archivo
hideInToc: true
---

# Archivos
## Escribir en el archivo

Para escribir en un `archivo`, debemos usar abrirlo con `"w"` en open, y escribimos con el método `write(contenido)`. Este método recibe un string a escribir n el archivo.

```python
archivo = open("carpeta_bacan/archivo.txt", "w")
archivo.write("4.5\n5.5\n6.0\n7.0\n")
archivo.close()
```

❗ `write()` no agrega saltos de línea automáticamente. Si queremos agregar un salto de línea, debemos agregarlo nosotros.

❗ Si volvemos a llamar a `write()` en el mismo archivo abierto, el string que le pasemos se escribe al final del archivo. Es decir, no se borra el contenido anterior.

::right::

❗ Si el archivo en la ruta que le pasamos a `open()` no existe, se crea un archivo nuevo en esa ruta.

Para agregar contenido al final del archivo, debemos primero leer el contenido del archivo, y luego escribir el contenido nuevo junto al contenido anterior.

```python
movimientos = open("jugador_1/movimientos.txt", "r")
movimientos_anteriores = movimientos.read()
movimientos.close()

movimientos = open("jugador_1/movimientos.txt", "w")
movimientos.write(movimientos_anteriores + "derecha\n")
movimientos.close()
```

También podemos escribir con `print()`. Debemos usar el `file` en `print()`, pasando un archivo.

```python
archivo = open("carpeta_bacan/archivo.txt", "w")
print("4.5", file=archivo)
print("7.0", file=archivo)
archivo.close()
```

---
layout: default
level: 2
title: Escribir CSVs
hideInToc: false
---

# Archivos
## CSVs
Los archivos CSV son archivos de texto (es decir muy parecido a los `.txt`) que tienen una estructura definida. Normalmente tiene una línea con los nombres de las columnas, y luego una línea por cada fila de la tabla con valores separados por coma.

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
layout: section
level: 1
title: Clase 23 - OOP Tipos propios I
hideInToc: false
---

# OOP: Tipos propios I
## Clase 23 | Introducción a la programación

---
layout: default
level: 2
title: Definición de clases
hideInToc: true
---

# Definición
## Concepto de clase

Es un **conjunto de instrucciones y estructura que definen un tipo de dato**. Esto nos permite definir su comportamiento, los datos y la forma en que los almacena. **Una analogía**:

- Las clases son el _Plano_ de un tipo (como una casa). Definen comportamiento y qué datos almacena.
- Al igual que un plano, **una clase no es una casa en sí misma, sino que es la descripción de cómo se construye una casa**, que se necesita para construirla, y el comportamiento que tendrá.

Una clase define:

- **Atributos**: Los datos que almacena una eventual creación hecha a partir de la clase.
- **Métodos**: Las funciones que puede realizar una eventual creación hecha a partir de la clase.
- **Constructor**: La forma en que se crea una eventual creación hecha a partir de la clase.

---
layout: default
level: 2
title: Definición de instancias
hideInToc: true
---

# Definición
## Concepto de instancia

Una instancia es un **objeto creado a partir de una clase**. Es decir, es una **casa** construida a partir de un **plano**. A diferencia de las clases, las instancias sí son objetos que podemos usar directamente.

Las instancias tienen **atributos** y **métodos**.

❗ Un método **no es lo mismo que una función**, dado que está asociado a un objeto.

---
layout: default
level: 2
title: Constructor y definicion de clase
hideInToc: true
---

# Constructor o <span class="dark:text-white text-black">`__init__`</span>
## Cómo instanciar y definir una clase

Para definir una clase en python, usamos la palabra reservada `class` seguida del nombre de la clase, y luego dos puntos `:`.
Para definir los atributos que tendrá una clase, usamos un método especial llamado `__init__` . Nos permite _construir_ una instancia de la clase, y definir los atributos que tendrá la instancia.

El método define todos los atributos que tendrá la instancia, y cómo se inicializarán.

```python
class Casa:
    """Esta es el manual o plano de una casa."""
    def __init__(self, direccion, n_ventanas, color):
        """Este es el constructor de la clase casa, es decir, la forma en que se crea una casa.
        Recibe como parámetros la dirección, el número de ventanas y el color de la casa.
        """
        self.direccion = direccion
        self.puerta_abierta = False
        self.ventanas = [False] * n_ventanas
        self.color = color
        self.consumo_servicios_basicos = [0, 0, 0]
```

`__init__` es un método especial que se llama automáticamente cuando se crea una instancia de la clase.

---
layout: default
level: 2
title: self y atributos
hideInToc: true
---

# <span class="dark:text-white text-black">`self`</span> y atributos
## ¿Qué es `self`?

Cuando creamos la clase `Casa`, definimos el método `__init__` con 4 parámetros: `self`, `direccion`, `n_ventanas` y `color`. Pero, ¿qué es `self`?

```python
class Casa:
    def __init__(self, direccion, n_ventanas, color):
        self.direccion = direccion
        self.vendanas = [False] * n_ventanas
        ...

casas = [Casa("Benito Rebolledo #3032", 4, "Rojo"), Casa("Benito Rebolledo #3033", 4, "Azul")]
```

Es la forma que nosotros indicamos que para una futura instancia que siga el plano de la clase `Casa`, el atributo `direccion` será igual al parámetro `direccion` que recibe el método `__init__` y lo mismo con los otros.
Ahora, cualquier comportamiento de la instancia sabrá de sus propios valores para cada atributo.

❗ Los atributos de una clase se definen con `self.atributo = valor` dentro de un método de la clase y **no son lo mismo** que los parámetros de un método. Es mas, pueden tener el mismo nombre, pero no son lo mismo y pueden haber más atributos que parámetros (o viceversa)

---
layout: default
level: 2
title: Métodos
hideInToc: true
---

# Métodos
## Cómo definir métodos en una clase

Cuando queremos definir un método en una clase, lo hacemos de la misma forma que definimos una función, pero dentro de la clase y con un parámetro `self` al principio. Pueden recibir parámetros y retornar valores como cualquier función.

```python
class Casa
    def __init__(self, direccion, n_ventanas, color):
        self.direccion = direccion
        self.puerta_abierta = False
        self.ventanas = [False] * n_ventanas
        self.color = color
        self.consumo_servicios_basicos = [0, 0, 0]

    def n_ventanas_abiertas(self, n_ventanas):
        total_ventanas_abiertas = 0
        for ventana_abierta in self.ventanas:
            if ventana_abierta:
                total_ventanas_abiertas += 1
        return total_ventanas_abiertas >= n_ventanas
```

---
layout: section
level: 1
title: Clase 24 - OOP Tipos propios II
hideInToc: false
---

# OOP: Tipos propios II
## Clase 24 | Introducción a la programación

---
layout: two-cols
level: 1
title: Uso de métodos y atributos
hideInToc: true
---

# Uso de métodos y atributos
## Fuera de la clase

Podemos usar los métodos de una clase fuera de ella.

```python
class Casa:
    def __init__(self, direccion, n_ventanas, color):
        self.direccion = direccion
        self.puerta_abierta = False
        self.ventanas = [False] * n_ventanas
        self.color = color
        self.consumo_servicios_basicos = [0, 0, 0]
    ... # Funciones definidas anteriormente
    def abrir_puerta(self):
        self.puerta_abierta = True
    def consumir_agua(self, litros):
        """Recibe un número de litros y
         aumenta el consumo de agua en ese número."""
        self.consumo_servicios_basicos[0] += litros
```

::right::

```python
casa_1 = Casa("Benito Rebolledo #3032", 4, "Rojo")
casa_2 = Casa("Benito Rebolledo #3033", 1, "Azul")

casa_1.consumir_agua(100)
casa_2.consumir_agua(200)
```

También podemos usar los atributos de una instancia de una clase.

```python
print(casa_1.direccion)
if casa_1.puerta_abierta:
    casa_2.abrir_puerta()
```

Y podemos usar métodos dentro de otros métodos:

```python
class Casa:
    def __init__(self, direccion, n_ventanas, color):
      ...
    def consumir_agua(self, litros):
        self.consumo_servicios_basicos[0] += litros
    def usar_ducha(self, minutos):
        self.consumir_agua(minutos * 10)
        self.consumo_servicios_basicos[1] += minutos * 7
```

---
layout: default
level: 1
title: Metodo `__str__`
hideInToc: true
---

# <span class="text-black dark:text-white">`__str__`</span>

Hay un método especial `__str__` . Nos permite definir la representación en string de una instancia de una clase. Este método se llama automáticamente cuando se usa la función `str` sobre una instancia de una clase.

```python

class Persona:
    def __init__(self, nombre, apellido, edad):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad
    def __str__(self):
        return self.nombre + " " + self.apellido + " tiene " + str(self.edad) + " años."
```

❗**MUY IMPORTANTE**: El `__str__` no está pensado para usar `print` dentro de él, sino que para retornar un string que represente a la instancia, luego si quieres imprimirlo, usas `print(str(instancia))`.

```python
persona_1 = Persona("Nicolás", "Quiroz", 26)
print(persona_1) # Aquí el print esta haciendo internamente str(persona_1), lo que llama a __str__
# >>> Nicolás Quiroz tiene 26 años.
```

---
layout: section
level: 1
title: Clase 25 - OOP Interacción entre objetos
hideInToc: false
---

# OOP: Interacción entre objetos
## Clase 25 | Introducción a la programación

---
layout: default
level: 1
title: Interacción entre objetos
hideInToc: false
---

# Interacción entre objetos

Sería muy útil poder hacer lo siguiente para agregar una casa a un condominio:

```python
casa_1 = Casa("Benito Rebolledo #3032", 4, "Rojo")
casa_2 = Casa("Benito Rebolledo #3033", 1, "Azul")

condominio = Condominio("Benito Rebolledo #3030", [])
condominio.agregar_casa(casa_1)
condominio.agregar_casa(casa_2)
```

O para pedirle agua a otra casa:

```python
condominio.transferir_agua(casa_1, casa_2, 50)
```

O para obtener el consumo total de agua de todas las casas del condominio:

```python
print(condominio.consumo_total_agua())
```

---
layout: default
level: 2
title: Interacción entre objetos
hideInToc: true
---
# Interacción entre objetos

Las instancias de una clase pueden ser atributos de otra clase. Por ejemplo, podemos tener una clase `Condominio` que tiene una lista de casas. Para esto, podemos definir un atributo de la clase `Condominio` .
Podemos definir un método que transfiera agua de una casa a otra. Para esto, debemos definir un método que reciba dos instancias de la clase `Casa` y un número de litros y transfiera esa cantidad de litros de agua de una casa a otra.

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
        self.casas[indice_1].consumir_agua(litros)
        self.casas[indice_2].consumir_agua(-litros)
```

---
layout: default
level: 2
title: Creación al interior de una clase
hideInToc: true
---

# Creación al interior de una clase

Podemos definir un método que cree una instancia de la clase `Casa` y la agregue a la lista de casas del condominio.

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
layout: section
level: 1
title: Clase 26 - Ordenamiento
hideInToc: false
---

# Ordenamiento
## Clase 26 | Introducción a la programación

---
layout: two-cols
level: 1
title: Insertion Sort
hideInToc: true
---

# Insertion Sort

Este algoritmo es bastante ineficiente, pero es fácil de entender y de implementar.

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
            if (elemento_menor == None
            or elemento < lista[elemento_menor]):
                elemento_menor = i
        lista_ordenada.append(lista.pop(elemento_menor))
    return lista_ordenada
```

---
layout: two-cols
level: 1
title: lista.sort()
hideInToc: true
---

# <span class="dark:text-white text-black">`lista.sort()`</span>

Las listas tienen un método llamado `sort()` que ordena la lista en **orden ascendente** y **modifica la lista original**, no retorna nada.

```python
lista = [5, 2, 3, 1, 4]
lista.sort() # Noten que no retorna nada.
print(lista)
# [1, 2, 3, 4, 5]
```

Si queremos ordenar en orden descendente, podemos usar `reverse`:

```python
lista.sort(reverse=True) # Ordena en descendente.
print(lista)
# [5, 4, 3, 2, 1]
```

::right::

# <span class="dark:text-white text-black">`sorted()`</span>

Si queremos ordenar con `sort()`  pero evitar que esta lista cambie, podemos en vez usar la función `sorted()`. Esta recibe una lista y retorna una nueva lista ordenada.

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
layout: default
level: 2
title: Ordenamiento de distintos tipos
hideInToc: true
---

# Ordenamiento de distintos tipos

La siguiente tabla muestra cómo se ordenan los distintos tipos de datos:

| Tipo de dato | Ordenamiento |
| ------------ | ------------ |
| `int`        | Compara los números |
| `float`      | Compara los números |
| `str`        | Compara por orden alfabético (las mayúsculas van antes que las minúsculas). a < ... < z. Se compara primero la primera letra. Si hay empate, se compara la segunda letra, y así sucesivamente. Si una es mas larga que la otra, la mas corta va primero. |
| `list`       | Compara el primer elemento de cada lista. Si hay empate, compara el segundo elemento y así. En empate, una lista mas corta va antes. Los datos deben ser  el mismo tipo de dato .|

Si hay empate en el ordenamiento, se mantendrá el orden en que estaban originalmente.

---
layout: default
level: 1
title: uso de key
hideInToc: true
---

# Usando <span class="dark:text-white text-black">`key`</span>

Para usar criterios más complejos de comparación, podemos usar el parámetro `key`. Recibe un elemento de la lista y retorna un valor que se usa para comparar. Por ejemplo:

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
# ["Pedro", "Juan", "Antonio", "Maria"]
```
