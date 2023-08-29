---
theme: apple-basic
info: |
  ## Clase 06 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 06
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
exportFilename: clase_06
---
# Control de flujo: iteraciones
## Clase 06 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Anuncios

1. Primera tarea se abre la próxima semana

   a. Recomendación: no dejarla para el último día, hacer sets, ir a SAP

   b. Recordatorio: integridad académica, **individual, personal y de propia autoría** (si nadie es citado a un caso de integridad académica, todos/as ganan bitpoints)

---
layout: center
level: 1
title: Repaso clase anterior
hideInToc: true
---

# Repaso clase anterior

<ol class="slidev-toc-list slidev-toc-list-level-1" style="font-size: 17.6px;"><li class="slidev-toc-item" style="font-size: 17.6px;"><a href="/clase_05/5" class="" style="font-size: 17.6px;"><div style="font-size: 17.6px;"><p style="font-size: 17.6px;">Motivación - blockly</p></div></a><!--v-if--></li><li class="slidev-toc-item" style="font-size: 17.6px;"><a href="/clase_05/6" class="" style="font-size: 17.6px;"><div style="font-size: 17.6px;"><p style="font-size: 17.6px;">If - introducción</p></div></a><ol class="slidev-toc-list slidev-toc-list-level-2" style="font-size: 17.6px;"><li class="slidev-toc-item" style="font-size: 17.6px;"><a href="/clase_05/7" class="" style="font-size: 17.6px;"><div style="font-size: 17.6px;"><p style="font-size: 17.6px;">If - sintaxis</p></div></a><!--v-if--></li><li class="slidev-toc-item" style="font-size: 17.6px;"><a href="/clase_05/8" class="" style="font-size: 17.6px;"><div style="font-size: 17.6px;"><p style="font-size: 17.6px;">If - condiciones</p></div></a><!--v-if--></li></ol></li><li class="slidev-toc-item" style="font-size: 17.6px;"><a href="/clase_05/13" class="" style="font-size: 17.6px;"><div style="font-size: 17.6px;"><p style="font-size: 17.6px;">If/else - introducción</p></div></a><!--v-if--></li><li class="slidev-toc-item" style="font-size: 17.6px;"><a href="/clase_05/16" class="" style="font-size: 17.6px;"><div style="font-size: 17.6px;"><p style="font-size: 17.6px;">If/elif/else</p></div></a><ol class="slidev-toc-list slidev-toc-list-level-2" style="font-size: 17.6px;"><li class="slidev-toc-item" style="font-size: 17.6px;"><a href="/clase_05/20" class="" style="font-size: 17.6px;"><div style="font-size: 17.6px;"><p style="font-size: 17.6px;">Ejemplo avanzado</p></div></a><!--v-if--></li><li class="slidev-toc-item" style="font-size: 17.6px;"><a href="/clase_05/21" class="" style="font-size: 17.6px;"><div style="font-size: 17.6px;"><p style="font-size: 17.6px;">Solución</p></div></a><!--v-if--></li></ol></li></ol>

---
layout: center
level: 2
title: Agenda
hideInToc: true
---

# Agenda

<Toc maxDepth=2 />

---
layout: center
level: 1
title: Repaso quiz
hideInToc: true
---

# Quiz repaso

<img class="w-50 mx-auto" src="/content/clase_06/qr_clase_06.png" />

---
layout: center
level: 2
title: Agenda
hideInToc: true
---

# Instalar Thonny
# Editor de código

Link: [https://thonny.org/](https://thonny.org/)

Simplemente presionar el botón de descarga, y seguir las instrucciones. Podrán guardar sus programas en su computador, y ejecutarlos desde ahí.

---
layout: default
level: 1
title: Ejemplo - Pre ciclos
hideInToc: false
---

# Ejemplo

Haz un algoritmo que le pida al usuario un número (mayor a 0), y luego imprima todos los números desde el 1 hasta el número ingresado por el usuario.

Por ejemplo si el usuario ingresa 4, el programa debe imprimir:

```text
1
2
3
4
4
```

```python
numero = int(input())
if numero >= 1:
    print(1)
if numero >= 2:
    print(2)
if numero >= 3:
    print(3)
if numero >= 4:
    print(4)
```

❓ Y si el usuario ingresa 5? O 100? O 1000000?

---
layout: two-cols
level: 2
title: Usar while en vez de if
hideInToc: true
---

# Motivación

Cuando las condiciones son muchas, es muy tedioso escribir un `if` por cada una de ellas.
No podemos ponernos en todos los casos específicos, pero podemos hacer algo más general.

1. Podemos buscar un patrón en las condiciones.
2. Con el patrón, podemos escribir un algoritmo que se repita.
3. Podemos encontrar la condición de término del algoritmo y con eso, escribir un código que se repita hasta que se cumpla la condición de término.

::right::

<div class="mt-25 h-100 flex flex-col justify-around">
    <img class="rounded-xl" src="/content/clase_06/meme_ifs.jpg" alt="blockly for"/>
</div>

---
layout: two-cols
level: 1
title: Motivación - blockly
hideInToc: false
---

# Motivación
## Recordando ejercicios blockly (nuevamente)

Recuerdan el ejercicio de la clase 02 de blockly?

❗ En el primer caso, el jugador avanzaba una cantidad específica de pasos, y en el segundo caso, avanzaba hasta que se cumpliera una condición.

❗Si lo escribiéramos en ingles sería algo así:

```text
FOR 3 times
    avanzar
    avanzar
    girar_derecha
```

O bien

```text
WHILE no piggie
  avanzar
```

Cuando queremos repetir algo una cantidad específica de veces, usamos el `for`, y cuando queremos repetir algo hasta que se cumpla una condición, usamos el `while`.

::right::

<div class="mt-25 h-100 flex flex-col justify-around">
    <img class="rounded-xl w-1/2" src="/content/clase_06/blockly_for.png" alt="blockly for"/>
    <img class="rounded-xl w-1/2" src="/content/clase_06/blockly_while.png" alt="blockly while"/>
</div>

---
layout: section
level: 1
title: If - introducción
hideInToc: false
---

# While
## Repetir algo hasta que se cumpla una condición

---
layout: two-cols
level: 2
title: If - sintaxis
hideInToc: false
---

# While

Sintaxis en Python:

```python {2-3} {lines:true}
... # Algoritmo antes
while CONDICION:
    instruccion
... # Algoritmo después
```

- Si la condición es `True`, se ejecuta el **código indentado**. Este código se repite **hasta que la condición sea `False`**.
- Al igual que en el `if/else` es muy importante la indentación.

::right::

```mermaid {theme: 'neutral', scale: 1.2, flowchart: { curve: 'stepAfter' }}
flowchart TD
    A[Algoritmo antes] --> B{CONDICION}
    B --> |True| C[instruccion]
    C --> B
    B --> |FALSE| E[Algoritmo después]
```

---
layout: full
level: 2
title: While - condiciones
hideInToc: false
---

# While
## ¿Qué es una `condición`?

💡 Al igual que en los `if` es cualquier expresión que se pueda evaluar como `True` o `False` (es cualquier expresión que entregue un valor booleano).

❓ ¿Se les ocurren ejemplos para el while?

<v-clicks>

- Hasta que el usuario ingrese un número mayor que 10.
- Hasta que el usuario haya ingresado un número par.
- Hasta que el texto ingresado por el usuario sea el valor esperado.
- Hasta que el resultado de sumar dos números sea mayor que un numero
- Hasta que el resultado de unir strings sea igual a otro string
</v-clicks>

---
layout: default
level: 2
title: While - ejemplos
hideInToc: true
---

# While
## Ejemplos

Resolvamos el mismo ejercicio anterior, pero ahora usando un `while`.

> Haz un algoritmo que le pida al usuario un número (mayor a 0), y luego imprima todos los números desde el 1 hasta el número ingresado por el usuario.

```python
numero_objetivo = int(input())
numero_mostrado = 1

# Mientras el numero mostrado sea menor o igual al numero objetivo
while numero_mostrado <= numero_objetivo:
    # Mostrar el numero mostrado
    print(numero_mostrado)
    # Aumentar el numero mostrado en 1
    numero_mostrado += 1 # Equivalente a numero_mostrado = numero_mostrado + 1
```

Aquí usamos lo que suele llamarse un **contador**, que es una variable que se usa para contar algo. En este caso, el contador es `numero_mostrado`, que cuenta los números que se han mostrado hasta el momento.

---
layout: center
level: 3
title: Ejemplo visualizado
hideInToc: true
---
# Ejemplo visualizado

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=numero_objetivo%20%3D%2010%20%23%20por%20ejempl,%20en%20vez%20de%20int%28input%28%29%29%0Anumero_mostrado%20%3D%201%0A%0A%23%20Mientras%20el%20numero%20mostrado%20sea%20menor%20o%20igual%20al%20numero%20objetivo%0Awhile%20numero_mostrado%20%3C%3D%20numero_objetivo%3A%0A%20%20%20%20%23%20Mostrar%20el%20numero%20mostrado%0A%20%20%20%20print%28numero_mostrado%29%0A%20%20%20%20%23%20Aumentar%20el%20numero%20mostrado%20en%201%0A%20%20%20%20numero_mostrado%20%2B%3D%201%20%23%20Equivalente%20a%20numero_mostrado%20%3D%20numero_mostrado%20%2B%201&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

---
layout: two-cols
level: 2
title: While - más ejemplos
hideInToc: true
---

# While
## Ejemplos

Un programa que imprima los N primeros múltiplos de 3.

```python
n = int(input())
contador = 1
while contador <= n:
    print(contador * 3)
    contador += 1
```

Y si queremos mostrar los N primeros múltiplos de 3 y 5 simultáneamente?

```python
n = int(input())
contador = 1
while contador <= n:
    print(contador * 3, contador * 5)
    contador += 1
```

::right::

Y mostrar los N primeros múltiplos de 3 y 5, pero solamente si es que la suma de ambos par —y en caso que no mostrar los múltiplos de 4 y 6?

```python
n = int(input())
contador = 1
while contador <= n:
    if (contador * 3 + contador * 5) % 2 == 0:
        print(contador * 3, contador * 5)
    else:
        print(contador * 4, contador * 6)
    contador += 1
```

❓ Si queremos mostrar los N primeros múltiplos de 3 y 5, y cuando lleguemos a un numero par (al sumar ambos múltiplos), en vez de imprimir los múltiplos de 3 y 5,
imprimimos una cuenta regresiva desde ese número (la suma de ambos) hasta el cero, para luego continuar con los siguientes múltiplos de 3 y 5, y mostrar la suma de los múltiplos de 3 al final?

Para eso, necesitamos saber variables acumuladoras, y ciclos anidados.

---
layout: section
level: 2
title: Variables acumuladoras y ciclos anidados
hideInToc: false
---

# Variables acumuladoras y ciclos anidados
## Manejar datos de forma más compleja

---
layout: default
level: 2
title: Variables acumuladoras
hideInToc: true
---

# Variables acumuladoras

A veces, necesitamos guardar datos de forma más compleja: calcular la suma de ciertos números, o bien, el promedio y/o otras operaciones.
Para eso, necesitamos usar **variables acumuladoras**. Solamente es una forma distinta de llamar a una variable que se usa para acumular datos. Por ejemplo, calcular un promedio de notas hasta que la nota ingresada sea `-1.0`

```python
# Obtener la primera nota
nota = float(input())
# Inicializar las variables acumuladora
suma_notas = 0
cantidad_notas = 0
# Mientras la nota no sea -1
while nota != -1:
    # Acumular la nota
    suma_notas += nota
    # Acumular la cantidad de notas
    cantidad_notas += 1
    # Obtener la siguiente nota
    nota = float(input())
# Calcular el promedio
promedio = suma_notas / cantidad_notas
# Mostrar el promedio
print(promedio)
```

---
layout: default
level: 2
title: Ciclos anidados
hideInToc: true
---

# Ciclos anidados

A veces, vamos a querer repetir una acción, en cada paso de un ciclo. Para ello podemos anidar ciclos todas las veces que queramos. Hacer esto es igual que al anidar `if`s, pero en vez de usar `if` usamos `while`.

Algunos ejemplos:

- Los turnos de un juego, donde cada jugador tiene un turno, y cada turno tiene varias acciones.
- Los días de la semana, donde cada día tiene varias horas, y cada hora tiene varios minutos.

Ejemplo en código:

```python {1|2|3-4|5-6|7|6|8|4|9|2|10} {lines:true}
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
layout: default
level: 2
title: Ejemplo resuelto
hideInToc: true
---

## Ejemplo resuelto

> Si queremos mostrar los N primeros múltiplos de 3 y 5, y cuando lleguemos a un numero par (al sumar ambos múltiplos), en vez de imprimir los múltiplos de 3 y 5,
> imprimimos una cuenta regresiva desde ese número hasta el cero, para luego continuar con los siguientes múltiplos de 3 y 5, y mostrar la suma de los múltiplos de 3 al final?

```python
# Obtener el numero de multiplos
n = int(input())
# Inicializamos contador y acumulador
contador = 1
suma = 0

# Mientras el contador sea menor o igual al numero de multiplos
while contador <= n:
    suma_multiplos = contador * 3 + contador * 5
    # Si la suma de los multiplos es par
    if suma_multiplos % 2 == 0:
        # Mientras la variable 'suma_multiplos' sea mayor o igual a 0
        while suma_multiplos >= 0:
            print(suma_multiplos)
            suma_multiplos -= 1
    # Si el contador es impar
    else:
        print(contador * 3, contador * 5)
        # Acumular la suma de los multiplos de 3
    suma += contador * 3
    contador += 1
```

---
layout: default
level: 2
title: Ejemplo avanzado
hideInToc: false
---

# Ejemplo avanzado

### Ejercicio: Negociaciones Avanzadas en Catan

**Contexto:**

En el juego de mesa "Catan", los jugadores negocian recursos con otros jugadores para avanzar en el juego. Supongamos que eres un jugador que quiere negociar ladrillos por trigo y madera. Tienes un número inicial de ladrillos y quieres obtener trigo y madera a cambio.
Otros jugadores te ofrecerán trigo y madera a cambio de tus ladrillos, pero cada jugador tiene una tasa de cambio diferente.
Tu objetivo es obtener la mayor cantidad de trigo y madera posible antes de quedarte sin ladrillos. Sin embargo, algunos jugadores son más difíciles de negociar y te pedirán que negocies varias veces antes de aceptar la oferta.

---
layout: default
level: 2
title: Ejemplo avanzado
hideInToc: true
---

**Entradas:**

- Un número entero `L` que representa la cantidad inicial de ladrillos que tienes.
- Un número entero `N` que representa el número de jugadores con los que intentarás negociar.
- `N` grupos de números (separados en lineas distintas). Cada grupo comienza con un número entero (primera linea) que indica cuántas veces debes negociar con ese jugador antes de que acepte.
  Debes considerar solo la mejor negociación (la que te entregue más trigos y maderas siempre y cuando tengas los ladrillos para tomar la oferta)

Para cada negociación, habrá tres números enteros: el primero representa la cantidad de ladrillos que el jugador quiere, el segundo representa la cantidad total de trigo y el tercero la cantidad total de madera que te ofrece a cambio.
Importante: si no tienes suficientes ladrillos para aceptar una negociación en una oferta, debes saltártela.

**Salidas:**

- Un mensaje que diga "Resultados de las negociaciones:".
- Dos números enteros que representan la cantidad total de trigo y madera que obtuviste después de todas las negociaciones.

**Restricciones:**

- 1 <= L <= 100
- 1 <= N <= 10

---
layout: default
level: 2
title: Ejemplo avanzado
hideInToc: true
---

**Ejemplo:**

Entrada:

```text
5
2
2
2
2
1
3
1
1
1
2
1
1
```

Salida:

```text
Resultados de las negociaciones:
3
2
```

---
layout: default
level: 2
title: Ejemplo avanzado
hideInToc: true
---

### Solución:

```python {2-3|5-7|9-11|12-21|20-22|22-36|38-45|47-50} {lines:true, maxHeight: '300px'}
# Recibimos la cantidad inicial de ladrillos y el número de jugadores
ladrillos = int(input())
n_jugadores = int(input())

# Inicializamos las variables para almacenar la cantidad total de trigo y madera
total_trigo = 0
total_madera = 0

# Iteramos sobre cada jugador
i = 0
while i < n_jugadores:
    # Recibimos la cantidad de veces que debemos negociar con el jugador
    n_negociaciones = int(input())

    # Inicializamos las variables para almacenar la mejor oferta del jugador
    mejor_oferta_trigo = 0
    mejor_oferta_madera = 0
    mejor_oferta_ladrillos = 0

    # Iteramos sobre cada oferta del jugador
    j = 0
    while j < n_negociaciones:
        # Recibimos la oferta del jugador
        ladrillos_jugador = int(input())
        trigo = int(input())
        madera = int(input())

        # Verificamos si tenemos suficientes ladrillos para aceptar la oferta
        if ladrillos >= ladrillos_jugador:
            # Si la oferta es mejor que la anterior, la actualizamos
            if trigo + madera > mejor_oferta_trigo + mejor_oferta_madera:
                mejor_oferta_trigo = trigo
                mejor_oferta_madera = madera
                mejor_oferta_ladrillos = ladrillos_jugador

        j += 1

    # Actualizamos la cantidad total de trigo y madera
    total_trigo += mejor_oferta_trigo
    total_madera += mejor_oferta_madera

    # Actualizamos la cantidad de ladrillos que nos quedan
    ladrillos -= mejor_oferta_ladrillos

    i += 1

# Imprimimos los resultados
print("Resultados de las negociaciones:")
print(total_trigo)
print(total_madera)
```

Con las entradas dadas en el ejemplo, este código imprimirá `3` y `2` como salida además del mensaje
 `Resultados de las negociaciones:`.

---
layout: center
level: 1
title: Spoiler while
hideInToc: true
---

# Coming soon...

En el último ejemplo, usamos un `while` para iterar sobre los jugadores, y otro `while` para iterar sobre las ofertas de cada jugador. Esto es un ejemplo de un ciclo anidado, que es un ciclo dentro de otro ciclo. Pero, ¿no sabíamos exactamente cuántas veces se iba a repetir el ciclo?
¿Es necesario repetir el ciclo infinitamente hasta que se cumpla la condición de término? ¿No podemos repetirlo un número específico de veces?

Para eso el `for`, que comenzaremos a ver en la próxima clase.

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
