---
theme: apple-basic
info: |
  ## Clase 03 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 03
fonts:
  # basically the text
  sans: 'Inter'
  # use with `font-serif` css class from windicss
  serif: 'Inter'
  # for code blocks, inline code, etc.
  mono: 'Fira Code'
  weights: '300,700,900'
layout: intro
level: 1
hideInToc: true
download: true
presenter: dev
exportFilename: clase_03
---

# Variables y expresiones
## Clase 03 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Asistencia
hideInToc: true
---
# Asistencia

<img class="w-50 mx-auto" src="/content/clase_03/qr_clase_03.png" />

---
layout: center
level: 1
title: Grupo telegram
hideInToc: true
---
# Grupo telegram

<img class="w-50 mx-auto" src="/content/clase_02/telegram.jpg" />

Informal pero, oficial.

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Anuncios

1. Ayer se publicó el primer set de ejercicios de programación. Tienen hasta el 28 de agosto para entregarlos (con bonus).
2. Las SAP (Salas de ayudantes presenciales) comienzan la próxima semana. Estarán disponibles en módulos 5 y 6.

Dato freak: Yo inventé Programanji 🤠

---
layout: center
level: 1
title: Salas SAP
hideInToc: true
---

# Salas SAP

<img class="w-200 mx-auto" src="/content/clase_02/salas.jpeg" />

🚨 **Para todas las salas, están disponibles en módulos 5,6**
---
layout: center
level: 1
title: Repaso clase anterior
hideInToc: true
---

# Repaso clase anterior

<div class="slidev-toc" style="column-count: 1;"><ol class="slidev-toc-list slidev-toc-list-level-1"><li class="slidev-toc-item slidev-toc-item-parent-active"><a href="/clase_02/7" class=""><div><p>Calibración</p></div></a><ol class="slidev-toc-list slidev-toc-list-level-2"><li class="slidev-toc-item"><a href="/clase_02/10" class=""><div><p>Motivación</p></div></a><!--v-if--></li></ol></li><li class="slidev-toc-item"><a href="/clase_02/13" class=""><div><p>Qué es un algoritmo</p></div></a><ol class="slidev-toc-list slidev-toc-list-level-2"><li class="slidev-toc-item"><a href="/clase_02/14" class=""><div><p>Acerca de los algoritmos</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a href="/clase_02/15" class=""><div><p>Definición de algoritmo</p></div></a><!--v-if--></li></ol></li><li class="slidev-toc-item"><a href="/clase_02/19" class=""><div><p>Cómo armar un algoritmo</p></div></a><ol class="slidev-toc-list slidev-toc-list-level-2"><li class="slidev-toc-item"><a href="/clase_02/20" class=""><div><p>Proceso de creación de un algoritmo</p></div></a><!--v-if--></li></ol></li><li class="slidev-toc-item"><a href="/clase_02/25" class=""><div><p>Ejercicios programación</p></div></a><!--v-if--></li></ol></div>

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
title: A programar
hideInToc: true
---

# A programar
Comencemos con la programación

---
layout: intro-image
level: 1
title: Nuestro primer programa
image: content/clase_03/computer.jpg
---
# Nuestro primer programa <span class="text-white">🤩</span>
<span class="drop-shadow-md">

## Nuestro primer "hola mundo"
</span>

---
layout: two-cols
level: 2
title: Clearn - Nuestro primer programa
hideInToc: true
---

# Creación de cuenta en Clearn

<Logo class="mx-auto p-5" />

1. Ingresar a [https://clearn.cl](https://clearn.cl)
2. **Deben crease una cuenta con correo UC**
3. Luego de iniciar sesión, ingresar al curso de este semestre
4. En la esquina superior derecha verán un ícono del interprete de Python. Hacer click en él.
5. ¡Listo! Ya pueden programar en Python en el navegador.

::right::

<div class="absolute top-1/3">
  <img class="px-2 rounded-10 w-100" src="/content/clase_03/interprete.png" />
</div>

---
layout: two-cols
level: 2
title: Hola mundo
hideInToc: false
---
# Hola Mundo <span class="text-white">👋🏻</span>

Podemos agregar comentarios en nuestro código para que sea más fácil de entender.

Los comentarios son líneas que comienzan con `#` y son ignoradas por el computador.

```python {monaco}
print("Hola mundo!") # Un saludo pal mundo
```

_Python_ es un un lenguaje interpretado, lo que significa que el código se ejecuta línea por línea.
Pueden probar correr el código en Clearn.

::right::

<img src="/content/clase_03/correr_clearn.gif" class="w-200" />

Pueden probarlo ahora mismo en Clearn, siguiendo los pasos de la animación.

---
layout: center
level: 3
title: Probemos
hideInToc: true
---
# Probemos

---
layout: iframe
level: 3
title: Demo hola mundo CodeSandbox
hideInToc: true
url: https://codesandbox.io/p/sandbox/boring-lake-5krlmg?file=%2Fmain.py%3A1%2C1&embed=1
---

---
layout: section
level: 1
title: Tipos de datos básicos
hideInToc: false
---

# Tipos de datos básicos
## Números, textos y booleanos

---
layout: default
level: 2
title: Tipos de datos básicos
hideInToc: false
---

# Tipos de datos básicos

En la computación —y particularmente en Python— existen distintos tipos de datos básicos, que son agrupables en tres categorías:

<span class="like-h3">Números</span>

- **`int`**: Números enteros (viene de _integer_). Por ejemplo: `1`, `2`, `3`.
- **`float`**: Números con decimales (viene de _floating point_). Por ejemplo: `1.0`, `2.5`, `3.1415`. ⚠️ **Ojo** con los decimales, en Python se usan `.` y no `,` como en español.
- **`complex`**: Números complejos. Por ejemplo: `1+2j`. **Este no lo usaremos en el curso**.

<span class="like-h3">Textos</span>

- **`str`**: Textos (viene de _string_). Por ejemplo: `"Hola mundo"`, `"IIC1103"`, `"👋🏻"`.

<span class="like-h3">Booleanos</span>

- **`bool`**: Booleanos (viene de _boolean_). Puede ser `True` o `False`.

---
layout: section
level: 1
title: Operaciones básicas
hideInToc: false
---

# Operaciones básicas
## Suma, resta, multiplicación, división y más

---
layout: default
level: 2
title: Operaciones básicas - numéricas
hideInToc: false
---

# Operaciones básicas

En Python podemos realizar operaciones básicas con los tipos de datos básicos. Estos se pueden hacer con números o textos (veremos textos más adelante).

<!-- Tabla con todas las operaciones simples (suma, resta, multiplicación, potencia, inverso aditivo, división normal, parte entera y resto o modulo).Mostrar el operador y una descripción. Mostrar un ejemplo y su resultado como columnas tambien -->

| Operación | Descripción | Ejemplo | Resultado |
| --------- | ----------- | ------- | --------- |
| `+` | Suma | `1 + 2` | `3` |
| `-` | Resta | `1 - 2` | `-1` |
| `*` | Multiplicación | `2 * 3` | `6` |
| `/` | División | `3 / 2` | `1.5` |

---
layout: default
level: 2
title: Operaciones básicas - numéricas continuación
hideInToc: true
---
También hay operaciones más complejas, que se pueden hacer con números.

| Operación | Descripción | Ejemplo | Resultado |
| --------- | ----------- | ------- | --------- |
| `**` | Potencia | `2 ** 3` | `8` |
| `//` | División entera | `3 // 2` | `1` |
| `%` | Módulo | `3 % 2` | `1` |
| `-` | Inverso aditivo | `-1` | `-1` |

---
layout: default
level: 2
title: Operaciones básicas - división parte entera
hideInToc: true
---

# División parte entera

La división parte entera se pueden hacer con números enteros (`int`) y con decimales (`float`).

En la división normal, el resultado es un número con decimales (`float`).

```python
>>> print(3 / 2)
1.5
```

En la división parte entera, el resultado es un número entero (`int`), que corresponde a la parte entera del resultado de la división normal.

```python
>>> print(3 // 2)
1
```

👀 **Ojo**: La división parte entera **no** redondea el resultado, solo entrega la parte entera.

👀 **Ojo**: Si alguno de los dos números es un `float`, el resultado será un `float`.

```python
>>> print(3.0 // 2)
1.0
```

---
layout: default
level: 2
title: Operaciones básicas - módulo
hideInToc: true
---

# Módulo (resto)

El módulo se pueden hacer con números enteros (`int`) y con decimales (`float`). El resultado es simplemente el resto de la división si fuera entera.

```python
>>> print(3 % 2)
1
```

👀 **Ojo**: Si alguno de los dos números es un `float`, el resultado será un `float`.

```python
>>> print(3.0 % 2)
1.0
```
<!-- Examples slides from the above-->

---
layout: default
level: 2
title: Operaciones básicas - ejemplos
hideInToc: true
---

# Operaciones básicas
## Ejemplos con números
<v-clicks>
Fui a comprar un almuerzo al hall y compré una bebida ($1000), un sándwich ($3000) y un helado ($1200). ¿Cuánto gasté?

```python
print(1000 + 3000 + 1200) # Esto imprime 5200
```

Fui a una fonda, y me comí 3 empanadas de pino ($1500 c/u). Pero una de ellas me la regalaron. Me cobraron un 10% de propina. ¿Cuánto gasté?

```python
print(3 * 1500 - 1 * 1500) # Esto imprime 3000
print(3000 * 1.1) # Esto imprime 3300
```

Cuantos billetes de $1000 necesito para pagar lo anterior? ¿Cuánto me faltaría?

```python
print(3300 // 1000) # Esto imprime 3
print(3300 % 1000) # Esto imprime 300
```
</v-clicks>

ℹ️ Es posible imprimir el resultado de una operación directamente en la consola, usando el `print`.

---
layout: default
level: 2
title: Operaciones básicas - ejemplos (cont.)
hideInToc: true
---

# Operaciones básicas
## Ejemplos con números (cont.)

```python {monaco}
# Cómo determinar si un número es par

>>> print(4 % 2 == 0)
True

>>> print(5 % 2 == 0)
False
# Pregunta: Por qué arriba retorna booleanos? (True o False)

# Propuesto: retornar 0 si es impar, 1 si es par

>>>
```

---
layout: section
level: 2
title: Operaciones básicas - booleanos
hideInToc: false
---
# Operaciones básicas
## Booleanos

---
layout: default
level: 2
title: Operaciones básicas - booleanos
hideInToc: true
---

# Operaciones básicas - booleanos

En Python podemos realizar comparaciones entre números y textos —y otras cosas—, y el resultado será un booleano, que es simplemente `True`(verdadero) o `False` (falso). Algunos ejemplos son:

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

# Operaciones básicas
## Booleanos

🚨 Notar que los ejemplos que hicimos fueron con números y textos, pero también se pueden hacer con otros tipos de datos, como por ejemplo con booleanos (y otros que veremos más adelante)

### Operadores de booleanos

Además, existe una forma de juntar booleanos, que son los operadores booleanos. Estos son:

| Operación | Descripción | Ejemplo | Resultado |
| --------- | ----------- | ------- | --------- |
| `and` | Y | `True and False` | `False` |
| `or` | O | `True or False` | `True` |
| `not` | Negación (No) | `not True` | `False` |

ℹ️ **Nota**: Los operadores tienen precedencia, y se pueden agrupar con paréntesis (ahora lo veremos).

---
layout: default
level: 3
title: Operaciones básicas - booleanos - ejemplos
hideInToc: true
---
# Operaciones básicas
## Booleanos - Ejemplos

Veamos algunos ejemplos de operaciones, con distintos tipos de datos.

```python

# Algo no verdadero es falso
print(not True) # False

# Mi edad en 5 años más será más que 30 (que terrible)
print(26 + 5 > 30) # True

# Mi nombre (Nicolás) no es "Roberto". Veremos comparaciones de strings más adelante
print("Nicolás" != "Roberto") # True

# Mi nombre (Nicolás) no es "Roberto" y mi edad en 5 años más será más que 30.
# Veremos comparaciones de strings más adelante en las diapositivas de strings
print("Nicolás" != "Roberto" and 26 + 5 > 30) # True

```

---
layout: section
level: 2
title: Operaciones básicas - strings
hideInToc: false
---
# Operaciones básicas
## Strings

---
layout: default
level: 2
title: Operaciones básicas - strings
hideInToc: true
---

# Operaciones básicas
## Strings

Los textos o strings también pueden ser operados, pero de una forma distinta a los números. Algunos ejemplos de operaciones son:

| Operación | Descripción | Ejemplo | Resultado |
| --------- | ----------- | ------- | --------- |
| `+` | Concatenación | `"Sa" + "shei!"` | `"Sashei!"` |
| `*` | Repetición | `"Le!"` * 3 | `"Le!Le!Le!"` |

La resta, división, etc. no están definidas para los strings.

---
layout: default
level: 2
title: Operaciones básicas - strings (cont.)
hideInToc: true
---

Y es posible compararlos también:

| Operación | Descripción | Ejemplo | Resultado |
| --------- | ----------- | ------- | --------- |
| `==` | Igual | `"mi tarea" == "mi tarea"` | `True` |
| `!=` | Distinto | `"mi tarea" != "tu tarea"` | `True` |

❓ ¿Qué pasa si comparamos dos strings con `>` o `<`?
<v-click>

> **Respuesta**: Se comparan alfabéticamente, es decir, si el primer string es alfabéticamente mayor que el segundo, el resultado es `True`, y si no, es `False`.
> **No es necesario que sepan esto pero puede serles útil**
</v-click>

❓ ¿Qué pasa si comparamos un string con un número? (i.e. `"1" == 1`)

<v-click>

> **Respuesta**: El resultado siempre será `False`, ya que son tipos de datos distintos.
</v-click>

---
layout: default
level: 3
title: Operaciones básicas - strings - ejemplos
hideInToc: true
---
# Operaciones básicas
## Strings - Ejemplos

```python
# Concatenación
print("A mi me gusta el" + "tangananica") # Esto imprime "A mi me gusta eltangananica" <- falto un espacio

# Repetición
print("Tangana"+ "nica" * 3) # Esto imprime "Tangananicanicanica"

# Comparación
print("Tangananica" == "Tanganana") # Esto imprime False
print("Tangananica" != "Tanganana") # Esto imprime True

# Comparación alfabética
print("Yo nunca vi television" > "Porque es muy fome") # Esto imprime True
print("Yo preferia" < "Estudiar y hasta leer") # Esto imprime False
```

🚨 Notar que las mayúsculas y minúsculas son distintas, por lo que `"Hola" != "hola"` y al comparar alfabéticamente, las mayúsculas son "menores" que las minúsculas.

Tulio triviño estaría orgulloso de ustedes.

---
layout: section
level: 1
title: Precedencia de operadores
hideInToc: false
---

# Precedencia de operadores
## ¿Qué operación se hace primero?

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

Usar paréntesis es una buena práctica para agrupar operaciones y hacer más legible el código.

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
layout: center
level: 2
title: Nemo
hideInToc: true
---

<img src="/content/clase_03/buscando-a-nemo-que-onda.gif" class="mx-auto w-130" />


---
layout: center
level: 2
title: Contexto Ejercicio Propuesto
hideInToc: true
---

# Contexto Ejercicio Propuesto

[https://www.youtube.com/embed/SLM0S1rC0cE](https://www.youtube.com/embed/SLM0S1rC0cE)

---
layout: center
level: 1
title: Ejercicio avanzado
hideInToc: true
---
# Ejercicio propuesto

Estás organizando una fondita para el 18 de septiembre en Chile. Decides escribir un mensaje secreto para tus amigos utilizando empanadas ("E"), choripanes ("P"), bebidas ("B") y banderas chilenas ("C") como forma de codificar la información.

Por cada amigo que invites, enviarás un mensaje que consiste en:

- 3 empanadas seguidas de 2 choripanes.
- Luego, por cada 4 amigos, agregarás una bebida al final del mensaje.
- Si el número de amigos es par, añadirás una bandera chilena al inicio del mensaje. Si es impar, la añadirás al final.

Si decides invitar a 14 amigos, ¿cómo se verá el mensaje?

---
layout: section
level: 1
title: Variables
hideInToc: false
---

# Variables
## ¿Qué son y para qué sirven?

---
layout: center
level: 2
title: Motivación
hideInToc: true
---
# Motivación
Habrán notado que en el ejercicio anterior, tuvimos que repetir varias veces el número de amigos que teníamos. Esto es un poco tedioso, y además, si cambia el número de amigos, tenemos que cambiarlo en todos lados.

<v-click>

**¿Cómo podemos solucionar esto?**
</v-click>

<v-click>

## 🤩 ¡ Con variables ! 🤩
</v-click>

---
layout: fact
level: 2
title: Definición de variables
hideInToc: false
---

# Variables

Una variable nos permite guardar información o valores, que pueden ser referenciados más adelante en el código.

---
layout: fact
level: 2
title: Demostración
hideInToc: true
---

# Demostración

5 Bitpoints a quienes me ayuden a demostrar esto.

---
layout: default
level: 2
title: Definición de variables
hideInToc: true
---

# Definición de variables

Pueden pensar en una variable como una caja, que tiene un nombre y un contenido. El nombre de la variable es como la etiqueta de la caja, y el contenido es lo que está dentro de la caja.

🧠 Le da un contexto más semántico al programa. Es decir, podemos entenderlo mejor.

Mejores variables -> mejores programas

Por ejemplo:

```python
print(5 * 10 / 2) # Sacar el area de un triangulo de base 5 y altura 10
```

No es lo mismo que

```python
base = 5
altura = 10
area = base * altura / 2
print(area)
```

💡 **En las variables, podemos guardar valores, y resultados de operaciones.**

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

---
layout: end
level: 1
title: Fin de la clase
hideInToc: true
---

# ¡Nos vemos en la próxima clase!
**Traigan Computador 💻**
