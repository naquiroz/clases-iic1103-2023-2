---
theme: apple-basic
info: |
  ## Clase 05 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 05
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
exportFilename: clase_05
---
# Control de flujo: alternativas
## Clase 05 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Anuncios

1. Segundo set de ejercicios de programación. Consultar fechas en el calendario de Bitpoints.
2. Coffee break hoy! Vayan, yo iré 😄

---
layout: center
level: 1
title: Repaso clase anterior
hideInToc: true
---

# Repaso clase anterior

---
layout: center
level: 2
title: Agenda
hideInToc: true
---

# Agenda

<Toc maxDepth=2 />

---
layout: two-cols
level: 1
title: Motivación - blockly
hideInToc: false
---

# Motivación
## Recordando ejercicios blockly

Recuerdan el ejercicio de la clase 02 de blockly?

❗ Primero el “jugador” observaba que tenía en su costado izquierdo. Luego, dependiendo de lo que tenía, hacía una acción.

❗Si lo escribiéramos en ingles sería algo así:

```text
IF there is a path to the left
  girar a la izquierda
ELSE
  no hacer nada
```

Notamos que no es necesario escribir el `ELSE`, ya que si no hay un camino a la izquierda, no hacemos nada.

::right::

<img class="rounded-xl" src="/content/clase_05/blockly_if.png" alt="blockly if else" width="400"/>

---
layout: section
level: 1
title: If - introducción
hideInToc: false
---

# If
## Introducción

---
layout: two-cols
level: 2
title: If - sintaxis
hideInToc: false
---

# If/else

Sintaxis en Python:

```python {2-3} {lines:true}
... # Algoritmo antes
if CONDICION:
    instruccion
... # Algoritmo después
```

- Si la condición es `True`, se ejecuta el **código indentado**.
- Es super importante la indentación, ya que es lo que le dice a Python que se ejecute `instruccion` si la condición es `True`.
- Si hubiera más instrucciones indentadas, se ejecutarían todas única y exclusivamente si la condición es `True`.

::right::

```mermaid {theme: 'neutral', scale: 0.8, flowchart: { curve: 'stepAfter' }}
flowchart TD
    A[Algoritmo antes] --> B{CONDICION}
    B --- |True| C[instruccion]
    C --- D[ ]
    B --- |FALSE| D
    D --- E[Algoritmo después]
    style D width:0;
```

---
layout: full
level: 2
title: If - condiciones
hideInToc: false
---

# If
## ¿Qué es una `condición`?

💡 Es cualquier expresión que se pueda evaluar como `True` o `False` (es cualquier expresión que entregue un valor booleano).

❓ ¿Se les ocurren ejemplos?
💯

<v-clicks>

- Que el usuario haya ingresado un número par.
- Que el usuario haya ingresado un número impar.
- Que el usuario haya ingresado un número mayor que 10.
- Que el texto ingresado por el usuario sea `"hola"`.
- Que el resultado de sumar dos números sea mayor que un numero
- Que el resultado de unir strings sea igual a otro string
</v-clicks>

---
layout: default
level: 2
title: If - condiciones tabla
hideInToc: true
---

**Recordar** que en la [clase 03](/clase_03) vimos los operadores de comparación, todos ellos entregan un valor booleano. Más adelante veremos otras _“cosas”_ que también entregan un valor booleano.

| Operación | Descripción | Ejemplo | Resultado |
| --------- | ----------- | ------- | --------- |
| `==` | Igual | `1 == 2` o `"hola" == "chao"` | `False` |
| `!=` | Distinto | `1 != 2` o `"dormir" != "siesta"` | `True` |
| `<` | Menor que | `1 < 2` | `True` |
| `>` | Mayor que | `1 > 2` | `False` |
| `>=` | Mayor o igual que | `1 >= 2` | `False` |
| `<=` | Menor o igual que | `1 <= 2` | `True` |

💡 Ahora que sabemos lo que son las **variables**, también podemos usarlas en las comparaciones.

---
layout: default
level: 2
title: If - condiciones - ejemplos
hideInToc: true
---

# If
## Ejemplos

Un programa que diga "PASEEE INTRO" solamente si el usuario ingresa una nota mayor a 3.95, pueden asumir que el usuario siempre ingresa un número decimal (float), y luego diga "Hasta luigi. Fin del algoritmo"

```python
nota = float(input())
if nota > 3.95:
    print("PASEEE INTRO")
print("Hasta luigi. Fin del algoritmo")
```

---
layout: default
level: 2
title: If - condiciones - ejemplos
hideInToc: true
---

# If
## Ejemplos

Un programa super seguro que, pida una contraseña para ingresar al sistema. Si la contraseña es "mi_password" entonces imprime "Bienvenido al sistema", y luego diga "Disfurta!". Luego, aún cuando la contraseña sea incorrecta, diga "Fin del algoritmo".

```python
password = input()
if password == "mi_password":
    print("Bienvenido al sistema")
    print("Disfurta!")
print("Fin del algoritmo")
```

---
layout: center
level: 1
title: Y si quiero hacer algo si la condición es `False`?
hideInToc: true
---

# Y el "sino"?
## Si quiero hacer algo si la condición es `False`

---
layout: two-cols
level: 1
title: If/else - introducción
hideInToc: false
---

# If/else
## Introducción

❓¿Qué ocurre si ahora quiero hacer algo solamente cuando la condición no se cumple?

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
layout: default
level: 2
title: If/else - ejemplos
hideInToc: true
---

# If/else
## Ejemplos

Un programa que diga "PASEEE INTRO" solamente si el usuario ingresa una nota mayor a 3.95. Si la nota es menor o igual a 3.95, entonces diga "No pase intro", y luego diga "Hasta luigi. Fin del algoritmo"

```python
nota = float(input())
if nota > 3.95:
    print("PASEEE INTRO")
else:
    print("No pase intro")
print("Hasta luigi. Fin del algoritmo")
```

---
layout: default
level: 2
title: If/else - ejemplos
hideInToc: true
---

# If/else
## Ejemplos

Un programa que diga clasifique un restaurant con "Bueno/Malo" según el puntaje (de 0 a 100).
Si es menos que 30 es "Malo", si es mayor o igual que 30 es "Bueno".

```python
puntaje = int(input())
if puntaje >= 30:
    print("Bueno")
else:
    print("Malo")
```

❓ Y si quiero que sea "Bueno" si es mayor o igual que 60, "Regular" si es
mayor o igual que 30 y menor que 60, y "Malo" si es menor que 30?

```python
puntaje = int(input())
if puntaje >= 60:
    print("Bueno")
else:
    if puntaje >= 30:
        print("Regular")
    else:
        print("Malo")
```

❓ No hay una forma más fácil de hacerlo?

---
layout: section
level: 1
title: If/elif/else
hideInToc: false
---

# If/elif/else

---
layout: two-cols
level: 2
title: If/elif/else - introducción
hideInToc: true
---

# If/elif/else
## Introducción

```python {2-3|4-5|6|7-8|9-10|2-10} {lines:true}
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
layout: center
level: 2
title: If/elif/else - diagrama
hideInToc: true
---

# If/elif/else
## Diagrama

```mermaid {theme: 'neutral', scale: 0.8, flowchart: { curve: 'stepAfter' }}
flowchart LR
    A[Algoritmo antes] --> B{CONDICION_1}
    B --- |True| C[instruccion]
    C --- D[ ]
    B --- |FALSE| F{CONDICION_2}
    G --- D
    F --- |False| D
    F --- |True| G[instruccion_2]
    D --- E[Algoritmo después]
    style D width:0;
```

Y así sucesivamente para cada `elif` y `else` al final.
---
layout: default
level: 2
title: If/elif/else - ejemplos
hideInToc: true
---

Usando el ejemplo anterior, ahora queremos que sea "Bueno" si es mayor o igual que 60, "Regular" si es mayor o igual que 30 y menor que 60, y "Malo" si es menor que 30.

```python {1-7} {lines:true}
puntaje = int(input())
if puntaje >= 60:
    print("Bueno")
elif puntaje >= 30:
    print("Regular")
else:
    print("Malo")
```

Y si le agregamos un `elif` más?

```python {1-9} {lines:true}
puntaje = int(input())
if puntaje >= 90:
    print("Excelente")
elif puntaje >= 60:
    print("Bueno")
elif puntaje >= 30:
    print("Regular")
else:
    print("Malo")
```

---
layout: default
level: 2
title: Ejemplo avanzado
hideInToc: false
---

# Ejemplo avanzado


Eres un periodista que está escribiendo un artículo sobre J. Robert Oppenheimer y la creación de la bomba atómica. Durante tu investigación, decides hacer algunos cálculos relacionados con los eventos históricos.

1. Pregunte al usuario sobre cuántos años Oppenheimer enseñó en la Universidad de California. Debes imprimir un mensaje que pregunte: "Responde a las siguientes preguntas basadas en la vida y carrera de J. Robert Oppenheimer:"
2. Pregunte al usuario sobre cuántos años Oppenheimer enseñó en caltech. (Valor esperado: 3 años)
3. Se la suma de los años entregados es exactamente 8, debes decir "Estudios correctos". luego, se te pedirá que indiques la energía (en joules) liberada por cada bomba atómica. Puedes asumir que es un número entero.
4. Si los años no suman 8, deberás decir "Incorrecto en la primera pregunta. Oppenheimer enseñó un total de 8 años entre ambas instituciones."
5. Finalmente, si la energía total lanzada equivale justo a 400000 deberás decir "Wow, mucha energía." De lo contrario, deberás decir "Esto no es una bomba atómica. Buuuu"

---
layout: default
level: 2
title: Solución
hideInToc: false
---

# Solución

```python {monaco}
print("Responde a las siguientes preguntas basadas en la vida y carrera de J. Robert Oppenheimer:")

# Años enseñados en la Universidad de California.
años_UC = int(input())
# Años enseñados en caltech.
años_caltech = int(input())

if años_UC + años_caltech == 8:
    print("Estudios correctos")

    # Energía liberada por cada bomba atómica.
    energia_bomba = int(input())
    # Número de bombas atómicas lanzadas.
    numero_bombas = int(input())

    if energia_bomba * numero_bombas == 400000:
        print("Wow, mucha energía.")
    else:
        print("Esto no es una bomba atómica. Buuuu")
else:
    print("Incorrecto en la primera pregunta. Oppenheimer enseñó un total de 8 años entre ambas instituciones.")
```

---
layout: center
level: 1
title: Spoiler while
hideInToc: true
---

# Coming soon...

En el último ejemplo, pudimos preguntar una sola vez por la energía de la bomba atómica, y luego preguntar por el número de bombas atómicas lanzadas. Qué pasa si queremos preguntar por la energía de cada bomba atómica?
O si queremos preguntar por el número de bombas atómicas lanzadas, y luego por la energía de cada bomba atómica?

Para eso sirve el `while` y el `for`, que comenzaremos a ver en la próxima clase.


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
