---
theme: apple-basic
info: |
  ## Clase 10 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 10
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
exportFilename: clase_10
---
# Strings
## Clase 10 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Anuncios

1. Tarea **cierra el 21 de sept**.

   a. Recordatorio: integridad académica, **individual, personal y de propia autoría** (si nadie es citado a un caso de integridad académica, todos/as ganan bitpoints)

---
layout: center
level: 1
title: Repaso clase anterior
hideInToc: true
---

# Repaso clase anterior

Vimos como **definir funciones** propias, para luego utilizarlas en nuestro código.

```python
def calcular_kms_recorridos(velocidad, tiempo):
    """Calcula los kms recorridos en un tiempo a una velocidad constante"""
    kms = velocidad * tiempo
    return kms
# Luego, podemos usar la función
lambo = calcular_kms_recorridos(100, 2)
```

- El valor de retorno es opcional
- Los parámetros son opcionales

Vimos la función `round()` que nos permite redondear un número decimal.

```python
# Redondear un número decimal
# a 2 decimales
numero = round(3.14159, 2)

# Ojo con comportamiento en decimales que terminan en 5
numero_1 = round(3.145, 2)
numero_2 = round(3.155, 2)
# numero_1 y numero_2 son 3.15
```

---
layout: center
level: 2
title: Agenda
hideInToc: true
---

# Agenda

<Toc maxDepth=2 />

---
layout: section
level: 1
title: Motivación - strings
hideInToc: false
---
# Motivación
## ¿Por qué trabajar con strings?

---
layout: default
level: 2
title: Motivación
hideInToc: true
---

# Motivación

Hasta ahora, las operaciones que hemos realizado han sido sobre números, booleanos y strings, pero las de esta última han sido muy limitadas. Hasta ahora sólo sabemos sumar, multiplicar y comparar strings.

```python
# Sumar strings
pablo_nombre = "Pablito"
clava_un_clavo = "clavó un clavito"
traba_lengua = pablo_nombre + " " + clava_un_clavo
# >>> "Pablito clavó un clavito"

la_mama = "La mama"
de_la_mama = " de la mama"

# Multiplicar strings
cancion = la_mama + de_la_mama * 3
# >>> "La mama de la mama de la mama de la mama"

opcion_1 = "la nueva"
opcion_2 = "la ex"
# Comparar strings
if opcion_1 == opcion_2:
    print("Son iguales")
else:
    print("No no noooo, no son iguales")
```

---
layout: center
level: 1
title: Motivación - strings
hideInToc: true
---

# Motivación
## Qué más podemos hacer con strings?

No habrán más operaciones que podamos hacer con strings? 🤔

<v-clicks>

- Ver si una contraseña es segura
  - Más de 8 caracteres
  - Al menos un número
  - Al menos una mayúscula

- Ver si un poema es un palíndromo
  - "Anita lava la tina"
  - "Aman a Panamá"
  - "Amo la pacífica paloma"

</v-clicks>

---
layout: section
level: 1
title: Strings
hideInToc: false
---

# Strings
## Operaciones avanzadas

---
layout: center
level: 2
title: Strings - recordatorio
hideInToc: true
---

# Strings

Recodemos que los strings son cadenas de texto que pueden contener letras, números, símbolos, emojis, etc.

Para recordar, sabemos sumar, multiplicar y comparar strings.

| Operación | Ejemplo | Resultado |
| --------- | ------- | --------- |
| Sumar     | "a" + "b" | "ab" |
| Multiplicar | "a" * 3 | "aaa" |
| Comparar | "a" == "b" | False |
| Comparar | "a" > "b" | False |
| Comparar | "a" < "b" | True |

Y vimos brevemente que `"A" < "a"` es `True` y que `"a" < "b"` es `True`. Esto a que se debe?

---
layout: center
level: 2
title: Strings - recordatorio
hideInToc: true
---

<img class="w-150" src="/content/clase_10/ascii_table.svg" />

La "A" es el caracter 65 y la "a" es el caracter 97. Por lo tanto, `"A" < "a"` es `True` y `"a" < "b"` es `True`.

❓ Pero cómo podemos saber si un string es más largo que otro?

---
layout: center
level: 2
title: Len - largo de un string
hideInToc: false
---

# Len
## Largo de un string

La función `len()` nos permite saber el largo de un string.

```python
# Largo de un string
largo = len("password") # Parametro: string, Retorna: int

if largo > 8:
    print("Es una contraseña segura")
else:
    print("Es una contraseña insegura")
```

---
layout: center
level: 2
title: Len - ejemplos
hideInToc: true
---

# Ejemplos de uso de len

Un programa que le pida al usuario, palabras hasta que ingrese la palabra "tikitikiti" y luego imprima la palabra más larga que ingresó, junto con su largo.

```python

# Obtenemos la primera palabra
palabra = input()
# Inicializamos la palabra mas larga
palabra_mas_larga = palabra
# Inicializamos el largo de la palabra mas larga
largo_palabra_mas_larga = len(palabra)

# Mientras la palabra no sea "tikitikiti"
while palabra != "tikitikiti":
    palabra = input()
    largo_palabra = len(palabra)
    # Si la palabra es mas larga que la palabra mas larga
    if largo_palabra > largo_palabra_mas_larga:
        # Actualizamos la palabra mas larga
        palabra_mas_larga = palabra
        largo_palabra_mas_larga = largo_palabra

print(palabra_mas_larga, largo_palabra_mas_larga)
```

---
layout: two-cols
level: 2
title: Len - ejemplos
hideInToc: true
---

# Ejemplos de uso de len

Define una función que reciba dos strings, y retorne el largo del string más largo. Luego haz
un programa que reciba palabras de dos en dos, hasta que alguna de las dos tenga largo 18. Luego imprime el largo de la palabra más larga entre todas las que ingresaste.

```python
def mas_largo(string_1, string_2):
    """Retorna el largo del string más largo"""
    largo_1 = len(string_1)
    largo_2 = len(string_2)
    if largo_1 > largo_2:
        return largo_1
    else:
        return largo_2

```

::right::
<div class="mx-2">

```python
# Obtenemos la primera palabra
palabra_1 = input()
palabra_2 = input()
# Inicializamos el largo de la palabra mas larga
largo_p_mas_larga = mas_largo(palabra_1, palabra_2)

# Mientras el largo de ninguna de las palabras sea 18
while len(palabra_1) != 18 and len(palabra_2) != 18:
    palabra_1 = input()
    palabra_2 = input()
    largo_palabra = mas_largo(palabra_1, palabra_2)
    # Si la palabra es mas larga que
    # la palabra mas larga
    if largo_palabra > largo_p_mas_larga:
        # Actualizamos la palabra mas larga
        largo_p_mas_larga = largo_palabra
```

</div>

---
layout: default
level: 2
title: Strings - indexación
hideInToc: false
---

# Strings - indexación
## Acceder a un caracter de un string

Cómo los strings son cadenas de texto, podemos acceder a cada caracter de un string. Para esto, usamos la **indexación**. Por ejemplo, la palabra `choripan` tiene 8 caracteres, por lo que podemos acceder a cada uno de ellos con un número entre 0 y 7.

| C | H | O | R | I | P | A | N |
| - | - | - | - | - | - | - | - |
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |

```python
palabra = "choripan"
# Acceder al primer caracter
primer_caracter = palabra[0]
# Acceder al último caracter
ultimo_caracter = palabra[7]
# Acceder al tercer caracter
tercer_caracter = palabra[2]
```

Notar que acceder a un caracter del string, nos entrega otro string con un solo caracter (es decir, un string de largo 1).

---
layout: default
level: 2
title: Strings - indexación - consideraciones
hideInToc: false
---

# String
## Indexación - consideraciones

- Si intentamos acceder a un caracter que no existe, obtenemos un error.

```python
palabra = "choripan"
# Acceder al caracter 8
ultimo_caracter = palabra[8]
# IndexError: string index out of range
```

Obtener un caracter de un string, nos entrega otro string de largo 1.

```python
palabra = "choripan"
# Acceder al primer caracter
primer_caracter = palabra[0]
# primer_caracter es "c"
if len(primer_caracter) == 1:
    print("Es un string de largo 1")
```

---
layout: default
level: 2
title: Strings - indexación - ejemplos
hideInToc: true
---

# Strings
## Indexación - ejemplos

Un programa que cuente cuántas veces aparece una letra en un string.

```python
# Obtenemos el string
string = input()
# Obtenemos la letra
letra = input()
cantidad = 0
# Inicializamos ciclo for
for i in range(len(string)):
    # Si el caracter en la posicion i es igual a la letra
    if string[i] == letra:
        # Sumamos 1 a la cantidad de veces que aparece la letra
        cantidad += 1
print(cantidad)
```

---
layout: default
level: 2
title: Strings - indexación inversa
hideInToc: false
---

# Strings - indexación inversa
## Acceder a un caracter de un string - inverso

También podemos acceder a los caracteres de un string de derecha a izquierda, usando números negativos. El último caracter es el -1, el penúltimo es el -2, etc. Por ejemplo, la palabra `choripan` tiene 8 caracteres, por lo que podemos acceder a cada uno de ellos con un número entre -1 y -8.

| C | H | O | R | I | P | A | N |
| - | - | - | - | - | - | - | - |
| -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 |

```python
palabra = "choripan"
# Acceder al primer caracter
primer_caracter = palabra[-8]
# Acceder al último caracter
ultimo_caracter = palabra[-1]
# Acceder al tercer caracter
tercer_caracter = palabra[-6]
```

No habrá otra forma de recorrer un string?

---
layout: default
level: 2
title: For sobre strings
hideInToc: true
---

# For sobre strings
## Recorrer un string

Podemos recorrer un string con un ciclo for, de la misma forma que recorremos range. Esta vez, en vez de recorrer un rango de números, recorreremos un caracter de un string.

```python
# Recorrer un string
string = "anticucho"

for caracter in string:
    print(caracter)
```

Aquí, `caracter` es un string de largo 1, que contiene el caracter que estamos recorriendo, recorriendo de izquierda a derecha.

---
layout: default
level: 2
title: For sobre strings - ejemplos
hideInToc: false
---

# For sobre strings
## Ejemplos

Un programa que cuente cuántas veces aparece una letra en un string.

```python
# Obtenemos el string
string = input()
# Obtenemos la letra
letra = input()
cantidad = 0
# Inicializamos ciclo for
for caracter in string:
    # Si el caracter es igual a la letra
    if caracter == letra:
        # Sumamos 1 a la cantidad de veces que aparece la letra
        cantidad += 1
print(cantidad)
```

---
layout: default
level: 2
title: For sobre strings - ejemplos
hideInToc: false
---

## Ejemplo palíndromo

Un programa que reciba un string y determine si es un palíndromo.

```python
# Obtenemos el string
string = input()
# Determinamos el largo del string
largo = len(string)
# Si el string es de largo par recorremos hasta la mitad, sino, restamos 1 y recorreremos hasta la mitad

if largo % 2 == 0:
    mitad = largo // 2
else:
    mitad = (largo - 1) // 2

es_palindromo = True
caracter_izquierda = 0
caracter_derecha = -1
# Recorremos por la izquierda y por la derecha hasta la mitad
while caracter_izquierda < mitad and es_palindromo:
    # Si en algun momento los caracteres son distintos el string no es palindromo
    if string[caracter_izquierda] != string[caracter_derecha]:
        es_palindromo = False
    caracter_izquierda += 1
    caracter_derecha -= 1
print("Es palindromo?", es_palindromo)
```

---
layout: section
level: 1
title: Substring - inicio
hideInToc: false
---

# Substring
## Inicio - determinar si un string es un substring de otro

---
layout: default
level: 2
title: Substring
hideInToc: true
---

# Substring
## Operador `in`

Si queremos identificar si un grupo de caracteres está contenido en otro string, podemos usar el operador `in`.

Al comparar dos strings con el operador `in`, el resultado es `True` si el primer string es un substring del segundo string, y `False` en caso contrario.

```python
# Determinar si un string es un substring de otro usando in
string = "choripan"
substring = "pan"
if substring in string:
    print("pan es un substring de choripan")
```

❗ **Importante**:  `"A"` no es un substring de `"a"`, dado que son strings distintos.

❗ **Importante**: `int("1")` o `1` no es un substring de `"1"`, dado que son tipos distintos.


---
layout: default
level: 1
title: Ejemplo avanzado
hideInToc: false
---

# Ejemplo avanzado

Una frase es "diecieochera" si tiene 18 caracteres, o contiene la palabra "dieciocho" o bien si todas las palabras de la frase tiene una cantidad igual o menor de caracteres que la palabra "empanada". Escribe un programa que reciba una frase y determine si es diecieochera.
Con tal que cumpla una de las dos condiciones, es diecieochera.

```python {1-16|17-32|33-38} {lines:true, maxHeight: '300px'}
# Obtenemos la frase
frase = input()
# Obtenemos la cantidad de caracteres de la frase
largo_frase = len(frase)
# Obtenemos la cantidad de caracteres de la palabra "empanada"
largo_empanada = len("empanada")

# Vemos si contiene 18 caracteres o la palabra "dieciocho"
es_dieciochera = (largo_frase == 18) or ("dieciocho" in frase)

# Si no es dieciochera, vemos si todas las palabras tienen
# un largo menor o igual que "empanada"
if not es_dieciochera:
    # Recorreremos la frase letra por letra
    # y buscamos la palabra de mayor largo
    largo_palabra_actual = 0
    largo_palabra_mas_larga = 0

    for caracter in frase:
        # Si el caracter es un espacio
        if caracter == " ":
            # Si el largo de la palabra actual es mayor que
            # el largo de la palabra mas larga
            if largo_palabra_actual > largo_palabra_mas_larga:
                # Actualizamos el largo de la palabra mas larga
                largo_palabra_mas_larga = largo_palabra_actual
            # Reseteamos el largo de la palabra actual
            largo_palabra_actual = 0
        else:
            # Si el caracter no es un espacio
            # sumamos 1 al largo de la palabra actual
            largo_palabra_actual += 1
es_dieciochera_2 = largo_palabra_mas_larga <= largo_empanada
# Si es dieciochera o es dieciochera_2
if es_dieciochera or es_dieciochera_2:
    print("Es dieciochera")
else:
    print("No es dieciochera")
```

---
layout: center
level: 1
title: Spoiler strings 2
hideInToc: true
---

# Coming soon...

Aprendimos a recorrer strings, obtener caracteres de un string, y a determinar si un string es un substring de otro. Pero aún nos falta mucho por aprender sobre strings:

- Cómo obtener un substring de un string
- Cómo saber si un string tiene sólo números
- Cómo saber si un string tiene sólo letras
- Cómo saber si un string tiene sólo mayúsculas
- Y mucho más...

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
