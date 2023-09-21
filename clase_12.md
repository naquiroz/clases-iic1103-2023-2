---
theme: apple-basic
info: |
  ## Clase 12 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 12
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
exportFilename: clase_12
---
# Repaso I1
## Clase 12 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 2
title: Agenda
hideInToc: true
---

# Agenda

<Toc maxDepth=2 />

---
layout: intro
level: 1
---

# Variables y expresiones
## Clase 03 | Introducción a la programación

---
layout: default
level: 2
title: Hola mundo
hideInToc: true
---
# Hola Mundo <span class="text-white">👋🏻</span>

Los comentarios son líneas que comienzan con `#` y son ignoradas por el computador.

```python {monaco}
print("Hola mundo!") # Un saludo pal mundo
```

---
layout: default
level: 2
title: Tipos de datos básicos
hideInToc: true
---

# Tipos de datos básicos

<span class="like-h3">Números</span>

- **`int`**: Números enteros (viene de _integer_). Por ejemplo: `1`, `2`, `3`.
- **`float`**: Números con decimales (viene de _floating point_). Por ejemplo: `1.0`, `2.5`, `3.1415`. ⚠️ **Ojo** con los decimales, en Python se usan `.` y no `,` como en español.

<span class="like-h3">Textos</span>

- **`str`**: Textos (viene de _string_). Por ejemplo: `"Hola mundo"`, `"IIC1103"`, `"👋🏻"`.

<span class="like-h3">Booleanos</span>

- **`bool`**: Booleanos (viene de _boolean_). Puede ser `True` o `False`.

---
layout: default
level: 2
title: Operaciones básicas - numéricas
hideInToc: true
---

## Operaciones básicas

| Operación | Descripción | Ejemplo | Resultado |
| --------- | ----------- | ------- | --------- |
| `+` | Suma | `1 + 2` | `3` |
| `-` | Resta | `1 - 2` | `-1` |
| `*` | Multiplicación | `2 * 3` | `6` |
| `/` | División | `3 / 2` | `1.5` |
| `**` | Potencia | `2 ** 3` | `8` |
| `//` | División entera | `3 // 2` | `1` |
| `%` | Módulo | `3 % 2` | `1` |
| `-` | Inverso aditivo | `-1` | `-1` |

---
layout: default
level: 2
title: Operaciones básicas - booleanos
hideInToc: true
---

## Operaciones básicas - booleanos

| Operación | Descripción | Ejemplo | Resultado |
| --------- | ----------- | ------- | --------- |
| `==` | Igual | `1 == 2` o `"hola" == "chao"` | `False` |
| `!=` | Distinto | `1 != 2` o `"dormir" != "siesta"` | `True` |
| `<` | Menor que | `1 < 2` | `True` |
| `>` | Mayor que | `1 > 2` | `False` |
| `>=` | Mayor o igual que | `1 >= 2` | `False` |
| `<=` | Menor o igual que | `1 <= 2` | `True` |

---
layout: default
level: 2
title: Operaciones básicas - booleanos (cont.)
hideInToc: true
---

## Operaciones básicas - booleanos (cont.)

| Operación | Descripción | Ejemplo | Resultado |
| --------- | ----------- | ------- | --------- |
| `and` | Y | `True and False` | `False` |
| `or` | O | `True or False` | `True` |
| `not` | Negación (No) | `not True` | `False` |

---
layout: default
level: 2
title: Operaciones básicas - strings
hideInToc: true
---

## Operaciones básicas - strings

| Operación | Descripción | Ejemplo | Resultado |
| --------- | ----------- | ------- | --------- |
| `+` | Concatenación | `"Sa" + "shei!"` | `"Sashei!"` |
| `*` | Repetición | `"Le!"` * 3 | `"Le!Le!Le!"` |

Y es posible compararlos también:

| Operación | Descripción | Ejemplo | Resultado |
| --------- | ----------- | ------- | --------- |
| `==` | Igual | `"mi tarea" == "mi tarea"` | `True` |
| `!=` | Distinto | `"mi tarea" != "tu tarea"` | `True` |

---
layout: default
level: 2
title: Precedencia de operadores
hideInToc: true
---

# Precedencia de operadores

<div class="w-ful -m-2">
  <img src="/content/clase_03/precedencia.jpg" class="mx-auto rounded w-125" />
</div>

✅ En vez de memorizar la tabla, es mejor usar paréntesis para agrupar las operaciones.

---
layout: default
level: 2
title: Uso de paréntesis
hideInToc: true
---

# Uso de paréntesis

```python
>>> print(1 + 2 * 3)
7
>>> print((1 + 2) * 3)
9
```

Y se puede usar con operaciones más complejas

```python
# La edad que tenía hace 5 años, sumado a tres veces la edad que tendré en 5 años, es mayor que 100
>>> print((26 - 5) + 3 * (26 + 5) > 100)
True
```

Y se puede usar con operadores lógicos y strings

```python
>>> print(("que gran" + " " + "onda chiqui!") == ("que gran onda chiqui!")) # Suuuuuave
True
>>> print(("que gran" + " " + "onda chiqui!") == ("que gran" + "onda chiqui!"))
False
```

---
layout: default
level: 2
title: Definición de variables
hideInToc: true
---

# Definición de variables

Pueden pensar en una variable como una caja, que tiene un nombre y un contenido. El nombre de la variable es como la etiqueta de la caja, y el contenido es lo que está dentro de la caja.

```python
base = 5
altura = 10
area = base * altura / 2
print(area)
```

💡 **En las variables, podemos guardar valores, y resultados de operaciones.**

---
layout: intro
level: 1
---

# Variables y expresiones II
## Clase 04 | Introducción a la programación

---
layout: default
level: 2
title: Input — pedir información
hideInToc: true
---

# Input
## Pedir información

👉🏻 **`input()`** es la función que nos permite pedir información al usuario.

`input()` siempre retorna un `str`, por lo que si queremos un número, debemos convertirlo.

```python
edad = int(input())
print("El próximo año tendrás", edad + 1)
```

---
layout: default
level: 2
title: Variables - continuación
hideInToc: true
---

# Variables
## Almacenar información

- Las variables nos sirven para almacenar información.
- Pueden tomar cualquier valor, y podemos ponerle el nombre que queramos, con algunas restricciones:

  - No pueden empezar con un número.
  - No pueden tener espacios.
  - No pueden tener caracteres especiales (excepto `_`).
  - No pueden ser palabras reservadas:
    - `and`, `as`, `assert`, `break`, `class`, `continue`, `def`, `del`, `elif`, `else`, `except`, `False`, `finally`, `for`, `from`, `global`, `if`, `import`, `in`, `is`, `lambda`, `None`, `nonlocal`, `not`, `or`, `pass`, `raise`, `return`, `True`, `try`, `while`, `with`, `yield`

---
layout: default
level: 2
title: Variables - operadores compuestos
hideInToc: true
---

# Variables
## Operadores de asignación compuestos

| Operador | Ejemplo | Equivalente |
| -------- | ------- | ----------- |
| `+=`     | `a += b` | `a = a + b` |
| `-=`     | `a -= b` | `a = a - b` |
| `*=`     | `a *= b` | `a = a * b` |
| `/=`     | `a /= b` | `a = a / b` |
| `**=`    | `a **= b` | `a = a ** b` |
| `//=`    | `a //= b` | `a = a // b` |
| `%=`     | `a %= b` | `a = a % b` |

---
layout: intro
level: 1
---
# Control de flujo: alternativas
## Clase 05 | Introducción a la programación

---
layout: two-cols
level: 2
title: If/else - introducción
hideInToc: true
---

# If/else

❓¿Qué ocurre si ahora quiero hacer algo solamente cuando la condición se cumple o no se cumple?

```python {2-5} {lines:true}
... # Algoritmo antes
if CONDICION:
    instruccion
else:
    otra_instruccion
... # Algoritmo después
```

- Si la condición es `True` (se cumple), se ejecuta la `instruccion` indentada.
- Si la condición es `False`, solamente se ejecuta la `otra_instruccion` indentada.
- En ambos casos, se ejecuta el "Algoritmo después".

::right::

```mermaid {theme: 'neutral', scale: 0.8, flowchart: { curve: 'stepAfter' }}
flowchart TD
    A[Algoritmo antes] --> B{CONDICION}
    B -->|True| C[instruccion]
    C --- D[ ]
    B --- |FALSE| F[otra_instruccion]
    F --- D
    D --- E[Algoritmo después]
    style D width:0;
```

---
layout: two-cols
level: 2
title: If/elif/else - introducción
hideInToc: true
---

# If/elif/else
## Introducción

```python {-} {lines:true}
... # Algoritmo antes
if CONDICION_1:
    instruccion_1
elif CONDICION_2:
    instruccion_2
... # Varios elif
elif CONDICION_N:
    instruccion_N
else:
    otra_instruccion
... # Algoritmo después
```

::right::

- Si la `CONDICION_1` es `True`, se ejecuta la `instruccion_1` indentada.
- Si la `CONDICION_1` es `False`, se evalúa la `CONDICION_2`.
- Si la `CONDICION_2` es `True`, se ejecuta la `instruccion_2` indentada.
- Si la `CONDICION_2` es `False`, se evalúa la `CONDICION_3` y así sucesivamente.
- Si ninguna de las condiciones es `True`, se ejecuta la `otra_instruccion` indentada.
- En todos los casos, se ejecuta el "Algoritmo después".

❗ **IMPORTANTE**: Si una condición es `True`, no se evalúan las siguientes condiciones, ni siquiera si son `True`.

---
layout: intro
level: 1
---
# Control de flujo: iteraciones
## Clase 06 | Introducción a la programación

---
layout: two-cols
level: 2
title: While - sintaxis
hideInToc: true
---

# While

Sintaxis en Python:

```python {-} {lines:true}
... # Algoritmo antes
while CONDICION:
    instruccion
... # Algoritmo después
```

- Si la condición es `True`, se ejecuta el **código indentado**. Este código se repite **hasta que la condición sea `False`**.

::right::

```mermaid {theme: 'neutral', scale: 1.2, flowchart: { curve: 'stepAfter' }}
flowchart TD
    A[Algoritmo antes] --> B{CONDICION}
    B --> |True| C[instruccion]
    C --> B
    B --> |FALSE| E[Algoritmo después]
```

---
layout: default
level: 2
title: Ciclos anidados
hideInToc: true
---

# Ciclos anidados

Podemos anidar ciclos todas las veces que queramos. Hacer esto es igual que al anidar `if`s, pero en vez de usar `if` usamos `while`.

```python {-} {lines:true}
... # Algoritmo antes
while CONDICION_1:
    instruccion_1_antes
    while CONDICION_2:
        instruccion_2_antes
        while CONDICION_3:
            instruccion_3
        instruccion_2_despues
    instrucción_1_despues
... # Algoritmo después
```

---
layout: intro
level: 1
---
# Control de flujo: iteraciones
## Parte II
## Clase 07 | Introducción a la programación

---
layout: two-cols
level: 2
title: For - sintaxis
hideInToc: true
---

# For

Sintaxis en Python:

```python {-} {lines:true}
... # Algoritmo antes
for iterando in range(numero):
    instruccion
... # Algoritmo después
```

Todo el código se repetirá `numero` veces. `iterando` será un valor que irá desde `0` hasta `numero - 1`.

**`range(numero)`** genera una lista de números (desde el 0 hasta `numero`).

Por ejemplo, si lo usamos en un `for`

- `range(n) == [0,1,...,n-1]`, generaría un ciclo que se repite `n` veces.

::right::

Cuando necesitamos un rango distinto al que entrega `range`, podemos usar `range` con 2 parámetros.

Por ejemplo:

```python {2-3} {lines:true}
... # Algoritmo antes
for iterando in range(inicio, fin):
    instruccion
... # Algoritmo después
```

Todo el código se repetirá `fin - inicio` veces. `iterando` será un valor que irá desde el `inicio` hasta el `fin - 1`.

---
layout: default
level: 2
title: Ciclos for anidados
hideInToc: true
---

# Anidación de loops for

Ppodemos anidar ciclos todas las veces que queramos. Hacer esto es igual que al anidar `if`s, pero en vez de usar `if` usamos `for`.

```python {-} {lines:true}
... # Algoritmo antes
for numero_1 in range(inicio_1, fin_1): # Esto también podría ser for numero_1 in range(otro_numero)
    instruccion_1_antes
    for numero_2 in range(inicio_2, fin_2):
        instruccion_2_antes
        for numero_3 in range(inicio_3, fin_3):
            instruccion_3
        instruccion_2_despues
    instrucción_1_despues
... # Algoritmo después
```

---
layout: intro
level: 1
---

# Funciones
## Clase 08 | Introducción a la programación

---
layout: two-cols
level: 2
title: Funciones - definición
hideInToc: true
---

# Funciones
## Definición

Las funciones (haciendo un análogo a las matemáticas) son una forma de **encapsular** y **reutilizar** código. Las funciones tienen un nombre, y pueden recibir parámetros y retornar un valor.

En python, existen funciones built-in —de hecho, hemos usado varias— que nos facilitan hacer varias operaciones.

| print() | input() | int() | float() | str() | bool() | range() |
| ------- | ------- | ----- | ------- | ----- | ------ | ------- |

Sin embargo, hay muchas más...

::right::

```mermaid {theme: 'neutral', scale: 1.2, flowchart: { curve: 'stepAfter' }}
flowchart LR
    A(Entrada 1)   --> D(funcion)
    B(Entrada ...) --> D
    C(Entrada N)   --> D
    D              --> E(valor retornado)
```

Esto es equivalente algo como

$$
funcion(entrada_1, entrada_2, ..., entrada_n) \\
= valor\_retornado
$$

---
layout: default
level: 2
title: Funciones built-in cómo usarlas
hideInToc: true
---

# Cómo usar las funciones built-in

Para usar una función built-in, debemos invocarla por su nombre exacto, y darle los parámetros que necesita. Por ejemplo

```python
# Imprimir un mensaje (con números) en la consola, separados por espacios
print("Hola mundo", 1, 2, 3)
# Parámetro: (texto/bool/int/float, ..., texto/bool/int/float ), Retorna: nada

# Recibir un texto desde la consola
texto = input() # Parámetro: (), Retorna: texto

# Convertir un número a string
numero = str(123) # Parámetro: (número), Retorna: "123"

# Convertir un string a número
numero = int("123") # Parámetro: (string), Retorna: 123

# Crear un rango de números
rango = range(10) # Parámetro: (fin), Retorna: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Crear un rango desde 3 hasta 10
rango = range(3, 11) # Parámetros: (inicio, fin), Retorna: [3, 4, 5, 6, 7, 8, 9, 10]
```

---
layout: default
level: 2
title: Funciones built-in - módulos
hideInToc: true
---

# Funciones built-in
## Módulos adicionales

Existen funciones built-in que no están disponibles por defecto, pero que podemos usar igual.

Un **módulo** es un archivo que contiene código python, y que podemos importar para usar sus funciones.

En el curso se enseñan los módulos `random` y `math`, pero existen muchos más.

Específicamente, en el curso se enseñan las funciones `random.randint()` y `math.sqrt()`.

- El módulo `random` nos permite generar números aleatorios.

- El módulo `math` nos permite hacer operaciones matemáticas más complejas.

---
layout: two-cols
level: 2
title: Funciones - modulos de python
hideInToc: true
---
# Funciones
## Módulo `random`

Para usarlo, debemos importarlo:

```python
import random

# Generar un número aleatorio
# entre 0 y 10 (incluye el 10)
numero = random.randint(0, 10)
# Parámetros: (inicio, fin), Retorna: número
```

Notar que **a diferencia de `range()`** el número generado por `random.randint()` puede ser desde 0 hasta 10, es decir, incluye el 10.

::right::

# Funciones
## Módulos `math`

Para usarlo, debemos importarlo:

```python
import math

# Calcular la raíz cuadrada de un número
raiz = math.sqrt(9) # Parámetro: (número), Retorna: float
```

---
layout: two-cols
level: 2
title: Funciones - definidas por otros
hideInToc: true
---

# Funciones definidas por otros

Para usar funcionas definidas por otros en otros archivos, nuestro sistema de archivos se vería algo así:

<img class="mx-auto w-75 rounded" src="/content/clase_08/funciones.png" alt="funciones" />

::right::

Tenemos un archivo donde está nuestro código (`code.py`) y un módulo donde están las funciones definidas por otros (`rut_verificacion.py`).

Entonces para usar la función `validar_rut`, debemos importarla desde el módulo `rut_verificacion.py`:

```python
# Importamos la función
# validar_rut desde el módulo rut_verificacion
import rut_verificacion

rut = "27333162"
digito_verificador = "K"

# Usamos la función validar_rut con
# los parametros que necesita
# y sabemos que retorna True o False
if rut_verificacion.validar_rut(rut, digito_verificador):
    print("El rut es válido")
else:
    print("El rut no es válido")
```

---
layout: intro
level: 1
---

# Funciones II
## Clase 09 | Introducción a la programación

---
layout: center
level: 2
title: Funciones - definición de nuestras propias funciones
hideInToc: true
---

# Funciones
## Definición de nuestras propias funciones

Podemos definir nuestras propias funciones. Para hacerlo, debemos seguir los siguientes pasos:

1. **Definir** la función
2. **Invocar** la función

<div class="bg-red-300 pt-2 px-2 pb-0.5 text-red-600">

<p class="leading-none text-xs !-my-2 text-left">Definción de función</p>

```python
def area_circulo(radio):
    pi = 3.14159
    area = pi * radio ** 2
    return area
```

</div>

<div class="bg-blue-300 pt-2 px-2 pb-0.5 text-blue-600">

<p class="leading-none text-xs !-my-2 text-left">Código principal</p>

```python
mi_radio = 5
mi_area = area_circulo(mi_radio)
print(mi_area)
```

</div>

Notar la diferencia en que la definición de la función **no** se ejecuta instantáneamente (sólo se _graban_ las instrucciones), pero el código principal **sí**.

---
layout: default
level: 2
title: Variables locales y globales
hideInToc: true
---

# Variables locales y globales

Las variables que definimos dentro de una función **sólo existen dentro de la función**.

Las variables que definimos fuera de una función podemos usarlas dentro de la función, pero **no podemos modificarlas**.

```python
variable_global = 0
def funcion():
    # Esta variable sólo existe dentro de la función
    variable_local = 1
    # Podemos usarla dentro de la función
    print(variable_local)
    # Podemos usar la variable global dentro de la función
    print(variable_global)
    # Podemos modificar la variable global dentro de la función
    variable_global = 2
    print(variable_global)
funcion()
print(variable_global)
```

Qué ocurre ahí con `variable_global`?

--> No se puede modificar una variable global dentro de una función

Además, **las variables locales pierden su valor cuando la función termina de ejecutarse**.

---
layout: center
level: 2
title: FAQ - Preguntas frecuentes
hideInToc: true
---

# Preguntas frecuentes

1. ¿Puedo usar funciones dentro de otras funciones?: Sí, puedes usar funciones dentro de otras funciones. Por ejemplo, si tienes una función `funcion1` y una función `funcion2`, puedes usar `funcion2` dentro de `funcion1` sin problemas.

   ```python
    def funcion2():
        # Código de la función
        return valor_retorno

    def funcion1():
         # Código de la función
         funcion2()
         return valor_retorno
    ```

---
layout: default
level: 2
title: Funciones - round
hideInToc: true
---
# Funciones
## `round()`

La función `round()` nos permite redondear un número decimal. Para usarla, debemos invocarla con el número que queremos redondear y la cantidad de decimales que queremos que tenga el número redondeado:

```python
# Redondear un número decimal
# a 2 decimales
numero = round(3.14159, 2)
# Parámetros: (número, decimales), Retorna: float
```

---
layout: intro
level: 1
---

# Strings
## Clase 10 | Introducción a la programación

---
layout: center
level: 2
title: Len - largo de un string
hideInToc: true
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
layout: default
level: 2
title: Strings - indexación
hideInToc: true
---

# Strings - indexación
## Acceder a un caracter de un string

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

---
layout: default
level: 2
title: Strings - indexación inversa
hideInToc: true
---

# Strings - indexación inversa
## Acceder a un caracter de un string - inverso

También podemos acceder a los caracteres de un string de derecha a izquierda, usando números negativos.

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

---
layout: default
level: 2
title: For sobre strings
hideInToc: true
---

# For sobre strings
## Recorrer un string

Podemos recorrer caracter por caracter un string.

```python
# Recorrer un string
string = "anticucho"

for caracter in string:
    print(caracter)
```

---
layout: default
level: 2
title: Substring
hideInToc: true
---

# Substring
## Operador `in`

Al comparar dos strings con el operador `in`, el resultado es `True` si el primer string es un substring del segundo string, y `False` en caso contrario.

```python
# Determinar si un string es un substring de otro usando in
string = "choripan"
substring = "pan"
if substring in string:
    print("pan es un substring de choripan")
```

❗ **Importante**:  `"A"` no es un substring de `"a"`, dado que son strings distintos.

---
layout: intro
level: 1
---

# Strings II
## Clase 11 | Introducción a la programación

---
layout: center
level: 2
title: Strings - inmutabilidad
hideInToc: true
---

# Strings
## Inmutabilidad

Los strings son **inmutables**, es decir, no se pueden modificar.

La forma correcta de hacerlo es crear un nuevo string, que contenga el string original, pero con el caracter cambiado.

```python {-} {lines:true}
# Si queremos unir dos strings, podemos usar el operador + y crear un tercer string:
palabra_1 = "anti"
palabra_2 = "cucho"
palabra_3 = palabra_1 + palabra_2
# Cambiar el primer caracter de "choripan" por "C"
palabra = "choripan"
# Creamos un nuevo string, que contiene el primer caracter cambiado
palabra = "C" + palabra[1:]
```

---
layout: center
level: 2
title: Substrings
hideInToc: true
---

# Substrings
## Obtener un substring de un string

Otra forma de obtener un substring de un string, es con lo que se conoce como un _slice_. Para ello es necesario usar la sintaxis `string[inicio:fin]`, donde `inicio` es el índice del primer caracter que queremos obtener, y `fin` es el índice del primer caracter que no queremos obtener.

```python
palabra = "la consentida"
# Obtener el substring "consentida"
substring = palabra[3:13]
```

Al igual que al seleccionar un caracter, el los indices comienzan en 0, y si se indexa de derecha a izquierda, comienza de -1 y terminan en el largo, pero negativo. Por ejemplo, para obtener el substring `"consentida"` con indices negativos:

```python
palabra = "la consentida"
# Obtener el substring "consentida"
substring = palabra[-10:]
```

En este último caso no es necesario especificar el índice final, dado siempre que no se especifica, se asume que es el largo del string.

---
layout: default
level: 2
title: Strings - Qué es un método
hideInToc: true
---

# Strings
## Métodos - ¿Qué es un método?

Los _objetos_ de python suele tener **métodos**. Un método **es una función que se aplica a un objeto**
sobre o con la información que ese objeto contiene. Por ejemplo, los strings tienen métodos que nos permiten transformarlos a mayúsculas, a minúsculas, etc. Para aplicar un método a un objeto, usamos la sintaxis `objeto.metodo()`.

---
layout: default
level: 2
title: String - upper
hideInToc: true
---

# Strings
## Métodos - upper

El método `upper()` transforma un string a mayúsculas.

El método `isupper()` retorna `True` si el string está en mayúsculas, y `False` en caso contrario.

El método `lower()` transforma un string a minúsculas. Por ejemplo, para transformar "Guaton loyola" a "guaton loyola".

El método `islower()` retorna `True` si el string está en minúsculas, y `False` en caso contrario. Por ejemplo, para determinar si "Guaton loyola" está en minúsculas.

```python
# Transformar un string a mayúsculas
string = "Guaton loyola"
string_mayusculas = string.upper()
# string_mayusculas es "GUATON LOYOLA"
string_mayusculas.isupper() # Retorna True
# Transformar un string a minúsculas
string_minusculas = string.lower()
# string_minusculas es "guaton loyola"
string_minusculas.islower() # Retorna True
```

---
layout: default
level: 2
title: Strings - isdigit
hideInToc: true
---

# Strings
## Métodos - isdigit

El método `isdigit()` retorna `True` si el string tiene sólo números (puntos, comas y guiones no son números), y `False` en caso contrario. Por ejemplo, para determinar si "123" tiene sólo números:

```python
# Determinar si un string tiene sólo números
string = "123"
if string.isdigit():
    print("string tiene sólo números")
```
