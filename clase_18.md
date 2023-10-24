---
theme: apple-basic
info: |
  ## Clase 13 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 18
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
exportFilename: clase_18
---
# Funciones Recursivas
## Clase 18 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Anuncios

1. Recordar tarea 2 se entrega el 26 de octubre.
2. Compilado para la I2 publicado
3. Concurso de memes, participen!
4. Disfraces halloween, participen!
5. Quieren ayudantía extra para la I2? Responder poll en telegram.

---
layout: two-cols
level: 1
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior

Para armar una lista de listas, podemos usar la siguiente sintaxis:

```python
lista_de_listas = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
```

Para acceder a un elemento de una lista de listas, podemos usar la indexación anidada.

```python
lista_de_listas = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
primer_elemento = lista_de_listas[0][0]
print(primer_elemento)
# >>> 1
```

::right::
Cada elemento de la lista de listas es una lista, por lo que podemos modificarla.

```python
lista_de_listas = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
lista_de_listas[0] = [0, 0, 0]
print(lista_de_listas)
# >>> [[0, 0, 0], [4, 5, 6], [7, 8, 9]]
```

Y podemos hacer lo mismo con la indexación anidada.

```python
lista_de_listas = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
lista_de_listas[0][0] = 0
print(lista_de_listas)
# >>> [[0, 2, 3], [4, 5, 6], [7, 8, 9]]
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
layout: intro
level: 1
title: Funciones Recursivas
---

# Motivación
## Funciones Recursivas

---
layout: default
level: 2
title: Motivación
hideInToc: false
---
# Funciones Recursivas
## Motivación

Sabemos hasta ahora que podemos usar funciones definidas por nosotros dentro de otras funciones definidas por nosotros. Por ejemplo, podemos definir una función `sumar` que suma dos números, y luego podemos usarla dentro de otra función `sumar_tres` que suma tres números.

```python
def sumar(a, b):
    return a + b

def sumar_tres(a, b, c):
    return sumar(sumar(a, b), c)
```

Esto permite reducir un gran problema en problemas más pequeños, que son más fáciles de resolver. Por ejemplo, si queremos sumar 3 números, podemos dividir el problema en sumar 2 números y sumar 1 número.

Pero que pasa si queremos sumar 100 números? O 1000? O 1000000? Veamos.

---
layout: center
level: 2
title: Motivación II
hideInToc: true
---
Sumemos 4 números usando la función `sumar_tres`.

```python
def sumar(a, b):
    return a + b

def sumar_tres(a, b, c):
    return sumar(sumar(a, b), c)

def sumar_cuatro(a, b, c, d):
    # Esto es equivalente a sumar(sumar(sumar(a, b), c), d)
    return sumar(sumar_tres(a, b, c), d)
```

O cinco números.

```python

def sumar_cinco(a, b, c, d, e):
    # Esto es equivalente a sumar(sumar(sumar(sumar(a, b), c), d), e)
    return sumar(sumar_cuatro(a, b, c, d), e)
```

 No podemos definir una función para cada caso, ya que sería muy tedioso y repetitivo. ¿Cómo podemos resolver este problema? Una opción sería usar un ciclo, pero eso ya lo vimos, hoy veremos otra opción. Las funciones recursivas.

---
layout: center
level: 2
title: Ejemplos diarios
hideInToc: true
---

# Funciones Recursivas
## Ejemplos diarios

En la vida diaria hay muchos ejemplos de problemas que se pueden resolver usando funciones recursivas. Por ejemplo, para resolver el problema de sumar 100 números, podemos dividir el problema en sumar 99 números y sumar 1 número.

Otro ejemplo es un arbol genealógico. Si queremos saber los padres de una persona, podemos dividir
el problema en saber los padres de los padres de esa persona, y así sucesivamente.

---
layout: default
level: 2
title: Funciones Recursivas - Definición
hideInToc: false
---

# Funciones Recursivas

Para definir una función recursiva, lo primero que debemos observar es que, al igual que podemos llamar
a otras funciones dentro de una función, podemos llamar a la misma función dentro de la misma función.

```python
def funcion_recursiva():
    funcion_recursiva()
```

Por ejemplo:

```python
def de_la_mama():
    print("de la mama")
    de_la_mama()

print("La mama")
de_la_mama()
# >>> La mama
# >>> de la mama
# >>> de la mama
# >>> de la mama
# >>> ... (asi hasta el infinito)
```

Y esto es porque la función `de_la_mama` se llama a si misma dentro de la función `de_la_mama`.

---
layout: default
level: 2
title: Funciones Recursivas - Parámetros
hideInToc: false
---

# Funciones Recursivas
## Parámetros

Las funciones recursivas siguen siendo funciones, por lo que pueden recibir parámetros. Por ejemplo, podemos definir una función recursiva que imprima "de la mama N" donde N es un número, N veces y vaya disminuyendo N en 1 cada vez que se llama a la función.

```python
def de_la_mama(n):
    # Ejecuto código
    print("de la mama", n)
    # Hago el llamado recursivo
    de_la_mama(n - 1)

print("La mama")
de_la_mama(1)
# >>> La mama
# >>> de la mama 1
# >>> de la mama 0
# >>> de la mama -1
# >>> ... (asi hasta el infinito)
```

Pero aquí empezamos a tener un problema. ¿Cuándo se detiene la función? ¿Cómo podemos hacer que se detenga?

---
layout: default
level: 2
title: Funciones Recursivas - Caso Base
hideInToc: false
---

# Funciones Recursivas
## Caso Base

Para que una función recursiva se detenga, debemos definir un caso base.

>❗❗ Un caso base **es un caso donde la función no se llama a si misma**. Al definir un caso base, podemos asegurarnos que la función en algún
llamado entraré en el caso base y se detendrá.

De esa manera, si **nos aseguramos** que **siempre**, eventualmente, la función llegue al caso base, podemos asegurarnos que la función se detendrá.

De lo contrario, la función se llamará a si misma infinitamente y se producirá un error como:

```text
RecursionError: maximum recursion depth exceeded while calling a Python object
```

Esto ocurre cuando la función se llama a si misma demasiadas veces y la memoria se llena.

---
layout: default
level: 2
title: Funciones Recursivas - Caso Base Ejemplo
hideInToc: false
---

# Funciones Recursivas
## Ejemplo de caso base

Por ejemplo, podemos definir una función recursiva que imprima "de la mama N", N veces y vaya disminuyendo N en 1 cada vez que se llama a la función, pero que se detenga cuando N sea 0.

```python
def de_la_mama(n):
    # Caso base
    if n == 0:
        return
    # Ejecuto código
    print("de la mama", n)
    # Hago el llamado recursivo
    de_la_mama(n - 1)

print("La mama")
de_la_mama(3)
# >>> La mama
# >>> de la mama 3
# >>> de la mama 2
# >>> de la mama 1
```

Y lo logramos! Creamos nuestra primera función recursiva.

---
layout: default
level: 2
title: Funciones recursivas - tipos de parmámetros
hideInToc: true
---

# Funciones Recursivas
## Tipos de parámetros

Las funciones recursivas pueden recibir distintos tipos de parámetros. De esa manera, pueden recibir:

1. `int` o `float`
2. `str`
3. `list` : Pero aquí deben tener mucho cuidado, ya que si modifican la lista dentro de la función, pueden tener problemas.

Veamos un ejemplo de cada uno.

---
layout: default
level: 2
title: Funciones recursivas - con int o float
hideInToc: false
---

# Funciones Recursivas
## Con int o float

Un típo ejemplo es la función factorial. El factorial de un número se define como:

$$
n! = n \times (n - 1) \times (n - 2) \times ... \times 1
$$

Es decir, multiplicar todos los números desde 1 hasta n. Por ejemplo, el factorial de 5 es:
$$ 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120 $$

Podemos definir una función recursiva que calcule el factorial de un número.

```python
def factorial(n):
    # Caso base
    if n == 1:
        return 1
    # Hago el llamado recursivo
    return n * factorial(n - 1)
```

---
layout: default
level: 2
title: Funciones recursivas - con int o float
hideInToc: false
---

# Funciones Recursivas
## Con int o float

Otro ejemplo es la función fibonacci. La sucesión de fibonacci se define como:

$$
fib(n) = fib(n - 1) + fib(n - 2) \\
fib(1) := 1, ~ fib(2) := 1
$$

Aquí, por cada llamado, recursivo, se abren dos "ramas" recursivas. Por ejemplo, para calcular `fib(4)`, se calcula `fib(3) + fib(2)`, y para calcular `fib(3)` se calcula `fib(2) + fib(1)`. Esto, en código, se ve así:

```python
def fib(n):
    # Caso base
    if n == 1 or n == 2:
        return 1
    # Hago el llamado recursivo
    return fib(n - 1) + fib(n - 2)
```

---
layout: default
level: 2
title: Funciones recursivas - con str
hideInToc: false
---

# Funciones Recursivas
## Con strings

Un ejemplo donde podríamos usar strings es para expandir el coro de una letra. Por ejemplo

```text
Primera y ultima llamada,
para que se reporten a esta competencia.
Mueve ese pom pom pom.x3
```

Podríamos expandirlo a:

```text
Primera y ultima llamada, para que se reporten a esta competencia.
Mueve ese pom pom pom.Mueve ese pom pom pom.Mueve ese pom pom pom
```

Daddy Yankee ("En sus marcas, listos, fuera") estaría orgulloso.

---
layout: default
level: 2
title: Funciones recursivas - con str II
hideInToc: true
---

Podemos definir una función recursiva que reciba un string con "xN" y lo expanda a "xN" veces en la misma línea.

```python
def expandir_coro(coro):
    # Caso base
    veces = int(coro.split("x")[1])
    coro_sin_x = coro.split("x")[0]
    if "x0" in coro:
        return ""
    # Hago el llamado recursivo
    return coro_sin_x + expandir_coro(coro_sin_x + "x" + str(veces - 1))

print("Primera y ultima llamada,")
print(" para que se reporten a esta competencia.")
print(expandir_coro("Mueve ese pom pom pom.x3"))
# >>> Primera y ultima llamada,
# >>> para que se reporten a esta competencia.
# >>> Mueve ese pom pom pom.Mueve ese pom pom pom.Mueve ese pom pom pom
```

---
layout: default
title: Ejemplo - Interrogación
level: 2
hideInToc: false
---

# Dibujar Triángulos (I1 2019-2) <span class="text-white">🌶️🌶️🌶️🌶️</span>
## Introducción

Ante los altos precios de las tarjetas gráficas y tus insaciables ganas de jugar, decides crear tu propio motor gráfico, el cual será muy liviano pues solo utilizará carácteres [ASCII](https://en.wikipedia.org/wiki/ASCII).
Además, sabes que los triángulos son parte fundamental en la [renderización](https://en.wikipedia.org/wiki/Rendering_(computer_graphics)) y demás ámbitos de la [computación gráfica](https://en.wikipedia.org/wiki/3D_computer_graphics),
por lo que poder dibujarlos es esencial para lograr tu objetivo, así que lo asignas como tu primera tarea.

## Objetivo

Debes definir la función **RECURSIVA** _dibujar_ que, para un valor _n_, dibuje el triángulo equilátero de base _n_ correspondiente, donde la base está compuesta por asteriscos separados por guiones bajos,
además la brecha izquierda también se debe rellenar con estos guiones (recomendado ver el output format).

La función solo imprime, no retorna nada y _n_ siempre será mayor o igual a 1.

Tu función puede recibir los parámetros que quieras, pero **DEBES** encargarte de procesar el input y ejecutar tu función  correctamente según la cantidad de parámetros que le asignas.

---
layout: default
title: Ejemplo - Interrogación
level: 2
hideInToc: true
---

### Input format

Un número _n_ mayor o igual a 1 que representa la base del triángulo.

### Constraints

_n_ es mayor o igual a 1.

### Output format

En la siguiente tabla te muestran el valor del parámetro n que se le entrega a la llamada inicial de _dibujar_, y el triángulo equilátero correspondiente que la función imprime.

<img src="https://res.cloudinary.com/dqh5fbvqt/image/upload/v1697429643/foto_bngd5y.png" />

---
layout: default
title: Ejemplo - Interrogación
level: 2
hideInToc: true
---

**PISTA:** Se puede utilizar el operador \* entre un _str_ y un _int_ para concatenar _int_ veces el _str_, por ejemplo:

`a = 5`

`b = "hola"`

`c = a*b`

`print(c)`

`"holaholaholaholahola"`

* Si llegaste tan lejos, toma, [deleitate](https://www.asciicker.com/).

---
layout: default
level: 2
title: Ejemplos - GeoTree
hideInToc: true
---

## Ejemplos

### Input Test Case 03

```text
3
```

### Output Test Case 03

```text
*_*_*
_*_*
__*
```

---
layout: default
level: 2
hideInToc: true
---

## Solución

```python {1|2-4|5-12|13-14|-} {lines: true, maxHeight: '350px'}
def dibujar(n, relleno):
    # Caso base = Estamos en la última línea
    if n == 0:
        return
    # Imprimimos la línea actual
    # El relleno es la cantidad de guiones que hay que poner antes de los asteriscos
    # como la primera línea tiene 0 asteriscos, el relleno es 0
    relleno_guiones = '_' * relleno
    # La cantidad de asteriscos es n, pero la cantidad de guiones es n - 1
    asteriscos_triangulo = "*" + '_*' * (n - 1)
    # Imprimimos la línea
    print(relleno_guiones + asteriscos_triangulo)
    # Hacemos el llamado recursivo
    dibujar(n-1, relleno+1)

# Llamamos inicialmente a la función
dibujar(int(input()), 0)

```

Este problema es un poco más complejo que los anteriores, ya que tenemos que imprimir una línea, y luego llamar a la función recursiva con un parámetro distinto. En este caso, el parámetro es el relleno, que es la cantidad de guiones que hay que poner antes de los asteriscos.

---
layout: center
level: 1
title: Spoiler repaso
hideInToc: true
---

# Coming soon...

Ya estamos pudiendo hacer cosas muy interesantes con las listas, funciones, funciones recursivas, pero en la vida, no vamos a hacer todo
en una hora, tampoco nuestros programas van a ser tan rápidos, y vamos a querer guardar información para usarla más tarde.

Para eso, vamos a ver archivos.

¡Nos vemos en la próxima clase!

---
layout: end
level: 1
title: Créditos
hideInToc: true
---

# Créditos

Esta clase fue preparada con el apoyo de Valeria Herskovic, Jorge Muñoz, Cristian Ruz, Nicolás Alvarado y José Tomás Marquinez

<Profesores class="mx-auto" />

Y créditos a Alfonso, un gran amigo, por un ejemplo de recursión.

¡Muchas gracias a todos/as!
