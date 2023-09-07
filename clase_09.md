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

1. Primera tarea se abrió esta semana

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
layout: two-cols
level: 2
title: Cómo usar funciones - ejemplo
hideInToc: false
---

# Más ejemplos

Una función que retorne true si un numero es par y false si es impar

```python
def es_par(numero):
    if numero % 2 == 0:
        return True
    return False

print(es_par(3))
print(es_par(int(input())))
```

Que retorne la suma de todos los números de 1 a n

```python
def suma_hasta_n(n):
    suma = 0
    for i in range(1, n + 1):
        suma += i
    return suma

resultado_1 = suma_hasta_n(5)
resultado_2 = suma_hasta_n(resultado_1)
print(resultado_2)
```

::right::

<div class="px-2">
Una función que reciba un cachipún y retorne el ganador

```python
def cachipun(jugador_1, jugador_2):
    if jugador_1 == "piedra" and jugador_2 == "tijera":
        return "jugador_1"
    elif jugador_1 == "papel" and jugador_2 == "piedra":
        return "jugador_1"
    elif jugador_1 == "tijera" and jugador_2 == "papel":
        return "jugador_1"
    elif jugador_1 == jugador_2:
        return "empate"
    else:
        return "jugador_2"

print(cachipun("piedra", "tijera"))
print(cachipun("papel", "piedra"))
print(cachipun("tijera", "papel"))
```

</div>

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
layout: two-cols
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

::right::

Importante notar que cuando el ultimo decimal es 5, la función `round()` se comporta de manera distinta a lo que esperaríamos:

```python
# Redondear un número decimal
# a 2 decimales
numero = round(3.145, 2)
# numero es 3.15

numero = round(3.155, 2)
# numero es 3.15

```

Esto se debe a una razón más compleja que no es parte de los contenidos del curso, pero pueden leer más en [la documentación de python](https://docs.python.org/3/library/functions.html#round).

Considerar también que cuando se redondea un valor que termina en 5, **se redondea al valor par más cercano.** (con la excepción de 0.5 y de los ejemplos anteriores)

---
layout: center
level: 1
title: FAQ - Preguntas frecuentes
hideInToc: false
---

# Preguntas frecuentes

1. ¿Puedo usar funciones dentro de otras funciones?: Sí, puedes usar funciones dentro de otras funciones. Por ejemplo, si tienes una función `funcion1` y una función `funcion2`, puedes usar `funcion2` dentro de `funcion1` sin problemas.

   ```python
    def funcion1():
         # Código de la función
         funcion2()
         return valor_retorno
    ```

2. ¿Puedo usar una función dentro de sí misma? : Sí, puedes. Esto se llama **recursión** y es un tema que veremos más adelante en el curso.

3. ¿Puede una funcion no retornar nada? : Sí, una función puede no retornar nada.

   ```python
    def funcion1():
         # Código de la función
         # ...
         print("Hola")
         # ...
    ```

---
layout: center
level: 1
title: Spoiler while
hideInToc: true
---

# Coming soon...

La proxima clase comenzaremos con una materia un poco distinta, que es el manejo más avanzado de texto
o strings. Aprenderemos a manipularlos, entenderemos como funcionan y como podemos usarlos para resolver
problemas más complejos.
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
