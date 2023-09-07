---
theme: apple-basic
info: |
  ## Clase 08 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 08
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
exportFilename: clase_08
---
# Funciones
## Clase 08 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Anuncios

1. Primera tarea se abre esta semana

   a. Recomendación: no dejarla para el último día, hacer sets, ir a SAP

   b. Recordatorio: integridad académica, **individual, personal y de propia autoría** (si nadie es citado a un caso de integridad académica, todos/as ganan bitpoints)

2. Compilado para I1 está disponible en clearn. Está separado por contenidos, y tiene preguntas de pruebas
    anteriores.

---
layout: center
level: 1
title: Repaso clase anterior
hideInToc: true
---

# Repaso clase anterior
<!-- markdownlint-disable-next-line -->
<div class="slidev-toc" style="column-count: 1;"><ol class="slidev-toc-list slidev-toc-list-level-1"><li class="slidev-toc-item"><a href="/clase_07/7" class=""><div><p>Motivación - blockly</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a href="/clase_07/8" class=""><div><p>For - introducción</p></div></a><ol class="slidev-toc-list slidev-toc-list-level-2"><li class="slidev-toc-item"><a href="/clase_07/9" class=""><div><p>For - sintaxis</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a href="/clase_07/12" class=""><div><p>Ciclos for anidados</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a href="/clase_07/13" class=""><div><p>Cuando usar for y cuando while</p></div></a><!--v-if--></li></ol></li><li class="slidev-toc-item"><a href="/clase_07/14" class=""><div><p>Ciclos infinitos</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a href="/clase_07/15" class=""><div><p>Ejemplo avanzado</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a href="/clase_07/19" class=""><div><p>FAQ - Preguntas frecuentes</p></div></a><!--v-if--></li></ol></div>

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
title: Motivación
hideInToc: false
---
# Motivación
## Por qué aprenderemos funciones

---
layout: default
level: 2
title: Motivación
hideInToc: true
---

# Motivación

En muchas ocasiones, hacemos cálculos u operaciones que se repiten muchas veces pero dependen de distintos valores.
Por ejemplo calcular el área de un círculo:

```python
radio = 5
pi = 3.14159
area = pi * radio ** 2
print(area)
```

Y si ahora el radio es 10?

```python
radio = 10
pi = 3.14159
area = pi * radio ** 2
print(area)
```

Que tedioso!

---
layout: two-cols
level: 1
title: Motivación II
hideInToc: true
---

# Funciones - Motivación
## Reutilizar código

Existirá alguna forma de que, **usando lo que alguien ya hizo**, podamos calcular el área de un círculo sin tener que escribir todo el código de nuevo?

Hagamos un ejemplo más entretenido: **validar el RUT de una persona**. En la realidad, el algoritmo es relativamente complejo, y por es **es mejor reutilizarlo**.

Digamos que **existe una _herramienta_ o un _asistente_** que nos permite validar el RUT de una persona. Entonces _sería ideal_ que pudiéramos hacer algo como

```text
validar_rut("27333162", "K")
```

Así, nos despreocupamos de validarlo nosotros.

::right::

<div class="mt-25 h-100 flex flex-col justify-around">
    <img class="rounded-xl" src="/content/clase_08/rut.png" alt="algoritmo rut"/>
</div>

---
layout: default
level: 2
title: Funciones - requisitos
hideInToc: true
---
# Funciones
## Requisitos para que funcione

Para que la herramienta (una función) `validar_rut("27333162", "K")` funcione, debemos seguir ciertas reglas:

1. Debemos **invocarla** por su nombre exacto: `validar_rut`
2. Debemos darle el número de  _cosas_ o bien **parámetros** que necesita: `("27333162", "K")`
3. Debemos darle los parámetros en el **orden** correcto: `("27333162", "K")`
4. Debemos darle los parámetros del **tipo** correcto: `("27333162", "K")`

Si la invocamos correctamente nos dirá si el RUT es válido o no. En python, podríamos esperar que **retorne** `True` o `False`.

---
layout: section
level: 1
title: Funciones - definición
hideInToc: false
---

# Funciones
## Definición

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
layout: center
level: 2
title: Todas las funciones built-in
hideInToc: false
---

# Todas las funciones built-in

Existen un listado de todas las funciones built-in.

<img class="mx-auto w-75" src="/content/clase_08/built-in.png" alt="built-in" />

Sin embargo, sólo deben preocuparse de las que hemos visto hasta ahora.

Veremos más funciones built-in a medida que avancemos en el curso.

[https://docs.python.org/3/library/functions.html](https://docs.python.org/3/library/functions.html)

---
layout: default
level: 2
title: Funciones built-in cómo usarlas
hideInToc: false
---

# Cómo usar las funciones built-in

Para usar una función built-in, debemos invocarla por su nombre exacto, y darle los parámetros que necesita. Por ejemplo

```python
# Imprimir un mensaje (con números) en la consola, separados por espacios
print("Hola mundo", 1, 2, 3)
# Parámetro: (texto/bool/int/float, ..., texto/bool/int/float ), Retorna: nada

# Recibir un texto desde la consola
texto = input() # Parámetro: (), Retorna: texto

# Recibir un número desde la consola
numero = int(input()) # Parámetro: (texto), Retorna: número

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
title: Funciones con y sin valor de retorno o parámetros
hideInToc: false
---
# Funciones con y sin valor de retorno o parámetros

En python existen funciones que pueden no recibir parámetros, como `input()`, y otras que pueden no retornar un valor, como `print()`.

En ambos casos, tenemos que entender que invocarlas igual, el cual está dado por todo lo que se ejecuta
dentro de la función.

`input()` por ejemplo, nos permite recibir un texto desde la consola, y eso es lo que ocurre dentro de la función.

`print()` por ejemplo, nos permite imprimir un texto en la consola, y eso es lo que ocurre dentro de la función.

---
layout: section
level: 1
title: Funciones built-in - módulos
hideInToc: false
---

# Funciones built-in
## Módulos adicionales

---
layout: default
level: 2
title: Funciones built-in - módulos
hideInToc: true
---

# Funciones built-in
## Módulos adicionales

Existen funciones built-in que no están disponibles por defecto, pero que podemos usar igual. Python tiene más de 200 módulos adicionales que podemos usar.

Un **módulo** es un archivo que contiene código python, y que podemos importar para usar sus funciones. Estas funciones fueron definidas por otros, y podemos usarlas sin tener que escribir todo el código de nuevo.

En el curso se enseñan los módulos `random` y `math`, pero existen muchos más.

Específicamente, en el curso se enseñan las funciones `random.randint()` y `math.sqrt()`.

---
layout: section
level: 2
title: Funciones - modulos de python
hideInToc: false
---

# Funciones
## Módulos de python

---
layout: two-cols
level: 2
title: Funciones - modulos de python
hideInToc: true
---
# Funciones
## Módulos de python - random

El módulo `random` nos permite generar números aleatorios. Para usarlo, debemos importarlo:

```python
import random
```

Y luego podemos usar sus funciones:

```python
# Generar un número aleatorio
# entre 0 y 10 (incluye el 10)
numero = random.randint(0, 10)
# Parámetros: (inicio, fin), Retorna: número
```

Notar que **a diferencia de `range()`** el número generado por `random.randint()` puede ser desde 0 hasta 10, es decir, incluye el 10.

::right::

Por ejemplo, si queremos generar un número aleatorio entre límites que nos da el usuario:

```python
import random

inicio = int(input())
fin = int(input())

numero = random.randint(inicio, fin)
print(numero)
```

El módulo `random` tiene muchas más funciones, pero no son parte de los contenidos del curso. Si te interesa, puedes leer más en [la documentación de python](https://docs.python.org/3/library/random.html).

---
layout: two-cols
level: 2
title: Funciones - modulos de python
hideInToc: true
---
# Funciones
## Módulos de python - math

El módulo `math` nos permite hacer operaciones matemáticas más complejas. Para usarlo, debemos importarlo:

```python
import math
```

Y luego podemos usar sus funciones:

```python
# Calcular la raíz cuadrada de un número
raiz = math.sqrt(9) # Parámetro: (número), Retorna: float
```

Hay muchas más funciones en el módulo `math`, pero **no son parte de los contenidos del curso**.

::right::

Por ejemplo, podemos calcular el seno de un número:

```python
# Calcular el seno de un número
seno = math.sin(0.5)
# Parámetro: (número), Retorna: float
```

O calcular el logaritmo de un número:

```python
# Calcular el logaritmo de un número
logaritmo = math.log(10)
# Parámetro: (número), Retorna: float
```

Todas estas funciones están definidas en el módulo `math` y **no son parte del temario del curso**
pero pueden usarlas si les es útil.

Si te interesa, puedes leer más en [la documentación de python](https://docs.python.org/3/library/math.html).

_Muy bonito y todo_ pero, puedo usar otras funciones que no sean built-in?

---
layout: section
level: 1
title: Funciones - definidas por otros
hideInToc: false
---

# Funciones
## Definidas por otros

---
layout: two-cols
level: 2
title: Funciones - definidas por otros
hideInToc: true
---

# Funciones definidas por otros

En python, existen funciones que no son built-in, pero que podemos usar igual. Por ejemplo, la función `validar_rut` que vimos al principio de la clase.

Para que pudiéramos usarla, alguien tuvo que definirla. Nuestro sistema de archivos se vería algo así:

<img class="mx-auto w-75 rounded" src="/content/clase_08/funciones.png" alt="funciones" />

::right::

De esa manera, tenemos un archivo donde está nuestro código (`code.py`) y tenemos otro módulo donde están las funciones definidas por otros para validar el rut (`rut_verificacion.py`).

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
layout: default
level: 2
title: Funciones definidas por otros - requisitos
hideInToc: false
---

# Funciones definidas por otros
## Requisitos para que funcione

Para que podamos importar y usar el módulo `rut_verificacion.py`, debemos seguir ciertas reglas:

1. Debemos **importarlo** por su nombre exacto: `rut_verificacion`
2. El módulo que queremos importar debe estar en la **misma carpeta** que nuestro código
3. El módulo que queremos importar debe tener la **extensión** `.py`
4. El módulo que queremos importar debe tener la **función** que queremos usar

☢️ Esto de aquí abajo **no** funciona!

```python
import rut_verificacion.py
```

Arrojará un error como este:

```text
Traceback (most recent call last):
  File "code.py", line 1, in <module>
    import rut_verificacion.py
ModuleNotFoundError: No module named 'rut_verificacion.py'; 'rut_verificacion' is not a package
```

---
layout: two-cols
level: 2
title: Materia Extra - Otras formas de importar
hideInToc: true
---

# Materia Extra (opcional) - Otras formas de importar
## No es parte de los contenidos del curso

Existen otras formas de importar módulos, pero no son parte de los contenidos del curso. Si te interesa, puedes leer más en [la documentación de python](https://docs.python.org/3/reference/import.html)

Podemos importar un módulo y darle un alias o importar una función específica de un módulo:

```python
import rut_verificacion as rv

rv.validar_rut("27333162", "K")
```

::right::
Podemos importar una función específica de un módulo:

```python
from rut_verificacion import validar_rut

validar_rut("27333162", "K")
```

Podemos importar todas las funciones de un módulo:

```python
from rut_verificacion import *

validar_rut("27333162", "K")
```

Nada de esto es parte de los contenidos del curso, pero pueden usarlo si les es útil.

---
layout: default
level: 2
title: Ejemplo - Propuesto
hideInToc: true
---

# Ejemplo - Propuesto
## Verificar email
## 3 bitpoints

Necesitas verificar correctamente que los correos registrados en las actividades de la sección 12 son validos.
Se considera un mail valido si este contiene un **@** y ocupa el dominio **uc.cl** ( ¡no sirve los correos personales gmail! )

Para esto cuentas con el modulo `verificador` que contiene una función `verificar_mail()` que recibe como input un _string_ y devuelve un  _booleano_.

Primero recibes como input un entero `n` indicando la cantidad de estudiantes que deberás verificar.
Por cada estudiante recibirás primero su nombre y luego su mail. En caso de ser correcto deberás **imprimir**:
> Mail de {nombre_estudiante} correcto: {mail}!

En caso de que sea incorrecto deberás **imprimir:**

> Mail de {nombre_estudiante} incorrecto: {mail}. No se podrá registrar su actividad

---
layout: default
level: 2
title: Ejemplo - Propuesto
hideInToc: false
---

# Ejemplo
## Verificar email

Entrada:

```text
2
Julio Torres
julio.torres@uc.cl
María Medina
marimari@gmail.com
```

Salida:

```text
Mail de Julio Torres correcto: julio.torres@uc.cl!
Mail de María Medina incorrecto: marimari@gmail.com. No se podrá registrar su actividad
```

---
layout: center
level: 1
title: Ejercicio - propuesto
hideInToc: false
---

# Ejercicio - propuesto

Quien lo traiga resuelto al comienzo de la próxima clase, gana 3 bitpoints.

---
layout: center
level: 1
title: Spoiler while
hideInToc: true
---

# Coming soon...

Hasta ahora vimos que las funciones built-in son muy útiles, pero que también
podemos usar funciones definidas por otros. Estas funciones, en ambos casos, son funciones
que ya existen y que podemos usar sin tener que escribir todo el código de nuevo. Sin embargo,
¿qué pasa si queremos hacer algo que no existe? ¿Podemos crear nuestras propias funciones?

En la próxima clase veremos cómo crear nuestras propias funciones, y cómo usarlas.
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
