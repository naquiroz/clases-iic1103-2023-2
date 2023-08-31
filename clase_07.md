---
theme: apple-basic
info: |
  ## Clase 07 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 07
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
exportFilename: clase_07
---
# Control de flujo: iteraciones
## Parte II
## Clase 07 | Introducción a la programación

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
<!-- markdownlint-disable-next-line -->
<div class="slidev-toc" style="column-count: 1;"><ol class="slidev-toc-list slidev-toc-list-level-1"><li class="slidev-toc-item"><a href="/clase_06/7" class=""><div><p>Ejemplo - Pre ciclos</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a href="/clase_06/9" class=""><div><p>Motivación - blockly</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a href="/clase_06/10" class=""><div><p>While - introducción</p></div></a><ol class="slidev-toc-list slidev-toc-list-level-2"><li class="slidev-toc-item"><a href="/clase_06/11" class=""><div><p>While - sintaxis</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a href="/clase_06/12" class=""><div><p>While - condiciones</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a href="/clase_06/16" class=""><div><p>Variables acumuladoras y ciclos anidados</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a href="/clase_06/20" class=""><div><p>Ejemplo avanzado</p></div></a><!--v-if--></li></ol></li></ol></div>

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

# Quiz opiniones sobre el curso

## Por unos 🍭

<img class="w-50 mx-auto" src="/content/clase_07/qr_clase_07.png" />

---
layout: two-cols
level: 2
title: Usar for en vez de if
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
title: For - introducción
hideInToc: false
---

# For
## Repetir algo una cantidad específica de veces

---
layout: two-cols
level: 2
title: For - sintaxis
hideInToc: false
---

# For

Sintaxis en Python:

```python {2-3} {lines:true}
... # Algoritmo antes
for iterando in range(numero):
    instruccion
... # Algoritmo después
```

Todo el código se repetirá `numero` veces. `iterando` será un valor que irá desde `0` hasta `numero - 1`.

**`range(numero)`** genera una lista de números (desde el 0 hasta `numero`).

::right::

Por ejemplo, si lo usamos en un `for`

- `range(3) == [0,1,2]`, generaría un ciclo que se repite 3 veces
- `range(1) == [0]`, generaría un ciclo que se repite 1 sola vez.
- `range(n) == [0,1,...,n-1]`, generaría un ciclo que se repite `n` veces.

Generalmente, para el iterando se usa `i` en vez de `iterando`, pero pueden usar lo que quieran. A mi personalmente me gusta usar variables con sentido.

---
layout: two-cols
level: 2
title: For - ejemplos
hideInToc: true
---

# For
## Ejemplos

Un programa que imprima los N primeros múltiplos de 3.

```python
n = int(input())

# Por cada número (comenzando de 0)
for numero in range(n):
    print(numero + 1)
```

Y si queremos mostrar los N primeros múltiplos de 3 y 5 simultáneamente?

```python
n = int(input())
for numero in range(n):
    print((numero + 1 ) * 3, (numero + 1 ) * 5)
```

::right::

Y mostrar los N primeros múltiplos de 3 y 5, pero solamente si es que la suma de ambos par —y en caso que no mostrar los múltiplos de 4 y 6?

```python
n = int(input())
for numero in range(n):
    if ((numero + 1) * 3 + (numero + 1) * 5) % 2 == 0:
        print((numero + 1) * 3, (numero + 1) * 5)
    else:
        print((numero + 1) * 4, (numero + 1) * 6)
```

❓ No hay una forma de evitar hacer un `numero + 1` en cada línea?

Si, podemos usar `range(1, n + 1)` en vez de `range(n)`.

---
layout: default
level: 2
title: For con rangos distintos
hideInToc: true
---

# For con rangos distintos

Cuando necesitamos un rango distinto al que entrega `range`, podemos usar `range` con 2 parámetros.

```python {2-3} {lines:true}
... # Algoritmo antes
for iterando in range(inicio, fin):
    instruccion
... # Algoritmo después
```

Todo el código se repetirá `fin - inicio` veces. `iterando` será un valor que irá desde el `inicio` hasta el `fin - 1`.

Ejemplo:

```python
for numero in range(1, 4):
    print(numero)
```

---
layout: default
level: 2
title: Ciclos for anidados
hideInToc: false
---

# Anidación de loops for

A veces, vamos a querer repetir una acción, en cada paso de un ciclo. Para ello podemos anidar ciclos todas las veces que queramos. Hacer esto es igual que al anidar `if`s, pero en vez de usar `if` usamos `for`.

Algunos ejemplos:

- Los turnos de un juego, donde cada jugador tiene un turno, y cada turno tiene varias acciones.
- Los días de la semana, donde cada día tiene varias horas, y cada hora tiene varios minutos.

Ejemplo en código:

```python {1|2|3-4|5-6|7|6|8|4|9|2|10} {lines:true}
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
layout: default
level: 2
title: Cuando usar for y cuando while
hideInToc: false
---

Todo ciclo `for` puede ser escrito como un ciclo `while`, y viceversa. Sin embargo, hay veces en que es más fácil usar uno que el otro.

- Si sabemos cuántas veces se va a repetir el ciclo, es más fácil usar un `for`.
- Si no sabemos cuántas veces se va a repetir el ciclo, es más fácil usar un `while`.
- Si queremos repetir algo hasta que se cumpla una condición, es más fácil usar un `while`.
- Si queremos repetir algo una cantidad específica de veces, es más fácil usar un `for`.

Ejemplo de cuando usar `for`:

```python
n = int(input())
for numero in range(n):
    print(numero + 1)
```

Ejemplo de cuando usar `while`:

```python
valor = int(input())
while valor != 0:
    print(valor)
    valor = int(input())
```

---
layout: default
level: 1
title: Ciclos infinitos
hideInToc: false
---

# Ciclos infinitos

En la clase anterior, vimos que los ciclos `while` se repiten hasta que se cumpla una condición. Pero, ¿qué pasa si la condición nunca se cumple? ¿Se repite infinitamente el ciclo?

Sí, y eso es un problema. Si el ciclo se repite infinitamente, el programa nunca terminará de ejecutarse. Esto **se llama un ciclo infinito**, y es un error muy común en programación.

Lo ocurre en palabras simples es algo como esto:

```python
while True:
    print("Hola")
```

O más realista:

```python
valor = 2
while valor > 1:
    print("Hola")
    valor += 1
```

Para evitar esto, debemos asegurarnos que la condición de término se cumpla en algún momento.

---
layout: default
level: 1
title: Ejemplo avanzado
hideInToc: false
---

# Ejemplo avanzado
## Mismo de la clase anterior, pero con `for`
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

3 bitpoints por ayudarme a explicarlo.

```python {2-3|5-7|9-11|12-21|20-22|22-36|38-45|47-50} {lines:true, maxHeight: '300px'}
# Recibimos la cantidad inicial de ladrillos y el número de jugadores
ladrillos = int(input())
n_jugadores = int(input())

# Inicializamos las variables para almacenar la cantidad total de trigo y madera
total_trigo = 0
total_madera = 0

# Iteramos sobre cada jugador
for i in range(n_jugadores):
    # Recibimos la cantidad de veces que debemos negociar con el jugador
    n_negociaciones = int(input())

    # Inicializamos las variables para almacenar la mejor oferta del jugador
    mejor_oferta_trigo = 0
    mejor_oferta_madera = 0
    mejor_oferta_ladrillos = 0

    # Iteramos sobre cada oferta del jugador
    for j in range(n_negociaciones):
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

    # Actualizamos la cantidad total de trigo y madera
    total_trigo += mejor_oferta_trigo
    total_madera += mejor_oferta_madera

    # Actualizamos la cantidad de ladrillos que nos quedan
    ladrillos -= mejor_oferta_ladrillos

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
title: FAQ - Preguntas frecuentes
hideInToc: false
---

# FAQ - Preguntas frecuentes I

1. ¿Qué pasa si no sé cuántas veces se va a repetir el ciclo?
   - Si no sabes cuántas veces se va a repetir el ciclo, es más fácil usar un `while`.
2. ¿Puedo anidar/mezclar ciclos `for` y `while`?
   - Sí, puedes anidar/mezclar ciclos `for` y `while` todas las veces que quieras.
   - Por ejemplo, puedes tener un `for` dentro de un `while`, o un `while` dentro de un `for`:

        ```python
        for i in range(10):
            inicial = i
            while inicial > 0:
                print(i)
                inicial -= 1
        ```


---
layout: center
level: 1
title: FAQ - Preguntas frecuentes
hideInToc: true
---

# FAQ - Preguntas frecuentes II

1. ¿Puedo usar `for` con `while` y con `if`?
    - Sí, puedes usar `for` con `while` y con `if` todas las veces que quieras.

        ```python
        for i in range(10):
            inicial = i
            while inicial > 0:
                if inicial % 2 == 0:
                    print(i)
                inicial -= 1
        ```


---
layout: center
level: 1
title: Spoiler while
hideInToc: true
---

# Coming soon...

En el último ejemplo (y en varios que hemos visto hasta ahora) hemos repetido código muchas veces, donde
solamente cambian pequeñas partes del código. Esto es muy común en programación, y para evitarlo, podemos encapsular el código
e invocarlo cuando lo necesitemos. Para esto usaremos **funciones**, que veremos en la próxima clase.

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
