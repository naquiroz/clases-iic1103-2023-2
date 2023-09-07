---
theme: apple-basic
info: |
  ## Clase 09 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 09
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
exportFilename: clase_09
---
# Funciones II
## Clase 09 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Anuncios

1. Primera tarea se abre esta semana

   a. Recordatorio: integridad académica, **individual, personal y de propia autoría** (si nadie es citado a un caso de integridad académica, todos/as ganan bitpoints)

2. Compilado para I1 está disponible en clearn. Está separado por contenidos, y tiene preguntas de pruebas
    anteriores.

---
layout: center
level: 1
title: Repaso clase anterior
hideInToc: true
---

# Repaso clase anterior

1. **Funciones built-in**: `print()`, `input()`, `int()`, `float()`, `str()`, `bool()`, `range()` son funciones que ya existen y que podemos usar sin tener que escribir todo el código de nuevo.
2. **Módulos**: Python nos permite usar módulos adicionales que contienen funciones que son de python, pero no vienen por defecto. Por ejemplo, `random.randint(inicio, final)` y `math.sqrt(numero_decimal)`. La primera nos permite generar un número aleatorio entre `inicio` y `final` (incluye el `final`),
y la segunda nos permite calcular la raíz cuadrada de un número decimal.
3. **Funciones definidas por otros**: Python nos permite definir nuestras propias funciones, y usarlas en nuestro código. Por ejemplo, `validar_rut(rut, digito_verificador)` nos permite validar un rut, y nos retorna `True` si es válido, y `False` si no lo es.

---
layout: center
level: 1
title: Repaso clase anterior
hideInToc: true
---

Para usar módulos y funciones definidas por otros, se debe hacer lo siguiente:

```python
# Importamos el módulo rut_verificacion
import rut_verificacion
# O alguna que ya venga de python
import random

# Usamos la función validar_rut con
# los parametros que necesita
# y sabemos que retorna True o False
if rut_verificacion.validar_rut(rut, digito_verificador):
    print("El rut es válido")
else:
    print("El rut no es válido")

# Usamos la función randint con
# los parametros que necesita
# y sabemos que retorna un número
numero = random.randint(0, 10) # Esto cambia cada vez que se ejecuta
print("El número aleatorio es", numero) # Esto cambia cada vez que se ejecuta
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
layout: default
level: 2
title: Algunas soluciones
hideInToc: false
---

# Algunas soluciones
## Verificar email

❌ Esta solución no funciona

```python
can_estudiante = int(input())
import verificador

# Esta linea no funciona
veri_mail = verificador.verificar_mail()

for i in range(can_estudiante):
    nombre = input()
    correo = input()
    # Aqui el return de la funcion es un booleano no un string
    if veri_mail(nombre) == "true":
        print(f"Mail de {nombre} correcto: {correo}!")
    else:
        print(f"Mail de {nombre} incorrecto: {correo}. No se podrá registrar su actividad")
```

---
layout: default
level: 2
title: Algunas soluciones
hideInToc: true
---

✅ Esta solución funciona pero podría ser con un for

```python
import verificador
estudiantes = int(input())
contador = 0
while contador < estudiantes:
    nombre = input()
    mail = input()
    estado = verificador.verificar_mail(mail)
    if estado == True:
        print("Mail de " + nombre + " correcto: " + mail +"!")
    elif estado == False:
        print("Mail de " + nombre + " incorrecto: " + mail + ". No se podrá registrar su actividad")
    contador += 1
```



---
layout: default
level: 2
title: Solución
hideInToc: false
---

# Solución
## Verificar email

```python
from verificador import verificar_mail
# Escribe tu código aquí
n = int(input())

for i in range(n):
    nombre = input()
    mail = input()
    if verificar_mail(mail):
        print(f"Mail de {nombre} correcto: {mail}!")
    else:
        print(f"Mail de {nombre} incorrecto: {mail}. No se podrá registrar su actividad")
```

---
layout: section
level: 1
title: Motivación
hideInToc: false
---
# Motivación
## Por qué definir nuestras propias funciones

---
layout: default
level: 2
title: Motivación
hideInToc: true
---

# Motivación

En muchas ocasiones, hay pasos de un código que se repiten y nos gustaría poder reutilizarlos. En la clase anterior vimos que podemos usar funciones built-in, módulos y funciones definidas por otros para reutilizar código.

Sin embargo, ¿qué pasa si queremos hacer algo que no existe? ¿Podemos crear nuestras propias funciones?


---
layout: section
level: 1
title: Funciones - definición de nuestras propias funciones
hideInToc: false
---

# Funciones
## Definición de nuestras propias funciones

---
layout: center
level: 2
title: Funciones - definición de nuestras propias funciones
hideInToc: true
---

# Funciones
## Definición de nuestras propias funciones

En python, podemos definir nuestras propias funciones. Para hacerlo, debemos seguir los siguientes pasos:

1. **Definir** la función
2. **Invocar** la función

La sintaixs para definir una función es la siguiente:

```python
def nombre_funcion(parametro1, parametro2, ...):
    # Código de la función
    # ...
    # ...
    # ...
    return valor_retorno
```

Lo que estoy haciendo aquí es **definir** una función llamada `nombre_funcion` que recibe los parámetros `parametro1`, `parametro2`, etc. y que retorna un valor de retorno `valor_retorno`.

---
layout: center
level: 2
title: Funciones - definición de nuestras propias funciones
hideInToc: true
---

Podemos pensarlo cómo un manual de instrucciones para hacer algo. Por ejemplo, un manual de instrucciones para hacer un sandwich:

```python
def hacer_sandwich(pan, queso, jamon):
    # Código de la función
    # ...
    # ...
    # ...
    return sandwich
```

---
layout: center
level: 2
title: Definición y uso de funciones
hideInToc: false
---

# Definición y uso de funciones

Al usar funciones, tenemos dos partes:

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

Lo que estoy haciendo aquí es **`def`inir** una función llamada `area_circulo` que recibe el parámetro `radio` y que retorna un valor de retorno `area`.

La indentación aquí también es muy importante, ya que nos indica qué código pertenece a la función y qué código no.

---
layout: default
level: 2
title: Cómo usar funciones - ejemplo
hideInToc: false
---

# Cómo usar funciones
## Recordando el ejemplo de la clase 03

Primero se debe definir la función y luego invocarla. Por ejemplo,

Estás organizando una fondita para el 18 de septiembre en Chile. Decides escribir un mensaje secreto para tus amigos utilizando empanadas ("E"), choripanes ("P"), bebidas ("B") y banderas chilenas ("C") como forma de codificar la información.

Por cada amigo que invites, enviarás un mensaje que consiste en:

- 3 empanadas seguidas de 2 choripanes.
- Luego, por cada 4 amigos, agregarás una bebida al final del mensaje.
- Si el número de amigos es par, añadirás una bandera chilena al inicio del mensaje. Si es impar, la añadirás al final.

Define una función `crear_mensaje` que reciba como parámetro el número de amigos que invitarás y retorne el mensaje que enviarás.

---
layout: default
level: 2
title: Solución
hideInToc: false
---
# Solución

```python
# 3 empanadas seguidas de 2 choripanes.
PATRON = "E" * 3 + "P" * 2
def crear_mensaje(numero_amigos):
  """Retorna un mensaje secreto para enviar a tus amigos
  utilizando empanadas ("E"), choripanes ("P"), bebidas ("B") y banderas chilenas ("C").
  """
    # Inicializamos el mensaje vacío
    mensaje = ""
    # Si el número de amigos es par, añadirás una bandera chilena al inicio del mensaje.
    if numero_amigos % 2 == 0:
        mensaje += "C"
    # 3 empanadas seguidas de 2 choripanes por cada amigo
    mensaje += PATRON * numero_amigos
    # Luego, por cada 4 amigos, agregarás una bebida al final del mensaje.
    mensaje += "B" * (numero_amigos // 4)
    # Si el número de amigos es impar, la añadirás al final.
    if numero_amigos % 2 == 1:
        mensaje += "C"
    # Retornamos el mensaje
    return mensaje
crear_mensaje(int(input()))
```

Qué pasó ahí con `PATRON`? Cómo es que podemos usarlo en la función?

---
layout: section
level: 1
title: Variables locales y globales
hideInToc: false
---

# Variables locales y globales
## Uso de variables dentro de funciones

---
layout: two-cols
level: 2
title: Variables locales y globales
hideInToc: true
---

# Variables locales y globales
## Uso de variables dentro de funciones

Las variables que definimos dentro de una función **sólo existen dentro de la función**.

Las variables que definimos fuera de una función podemos usarlas dentro de la función, pero **no podemos modificarlas**.

```python
variable_global = 0
def funcion():
    # Esta variable sólo existe dentro de la función
    variable_local = variable_global + 1
    # Podemos usarla dentro de la función
    print(variable_local)
```

::right::

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
print(variable_global)
```

Qué ocurre ahí con `variable_global`?

--> No se puede modificar una variable global dentro de una función

Además, **las variables locales pierden su valor cuando la función termina de ejecutarse**.

---
layout: section
level: 2
hideInToc: false
title:
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

El módulo `random` tiene muchas más funciones, pero no son parte de los contenidos del curso. Si te interesa, puedes leer más en \[la documentación de python\](https://docs.python.org/3/library/random.html).

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

Si te interesa, puedes leer más en \[la documentación de python\](https://docs.python.org/3/library/math.html).

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

Existen otras formas de importar módulos, pero no son parte de los contenidos del curso. Si te interesa, puedes leer más en \[la documentación de python\](https://docs.python.org/3/reference/import.html)

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
layout: center
level: 1
title: FAQ - Preguntas frecuentes
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
](public/content/clase_08)