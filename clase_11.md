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
# Strings II
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

Para obtener el largo de un string, usamos la función `len()`. Por ejemplo, para obtener el largo de la palabra `"choripan"`:

```python
largo = len("choripan")
```

Para obtener un caracter de un string, usamos un índice. Los indices comienzan de 0. Si se indexa de derecha a izquierda, comienza de -1 y terminan en el largo, pero negativo. Por ejemplo,

```python
primer_caracter = "choripan"[0] # o "choripan"[-8]
ultimo_caracter = "choripan"[7] # o "choripan"[-1]
```

Para recorrer un string, podemos usar un ciclo for. Para imprimir cada caracter de la palabra `"choripan"`:

```python
for caracter in "choripan":
    print(caracter)
```

Para ver si un string es un substring de otro, podemos usar el operador `in`. Por ejemplo, para ver si `"pan"` es un substring de `"choripan"`:

```python
if "pan" in "choripan":
    print("pan es un substring de choripan")
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
## ¿Qué más podemos hacer con strings?

---
layout: default
level: 2
title: Motivación
hideInToc: true
---

# Motivación

La clase pasada vimos que los strings son cadenas de texto que pueden contener letras,
 números, símbolos, etc.Vimos también que podemos sumar, multiplicar y comparar strings, además de nuevas operaciones como `len()`, la indexación, el ciclo for y el operador `in`.

Pero, ¿qué más podemos hacer con strings?

- Obtener un substring de un string
- Saber si un string tiene caracteres mayúsculas
- Saber si un string tiene solo minúsculas
- Transformar strings a mayúsculas o minúsculas

---
layout: section
level: 1
title: Strings
hideInToc: false
---

# Strings
## Operaciones avanzadas II

---
layout: center
level: 2
title: Strings - inmutabilidad
hideInToc: false
---

# Strings
## Inmutabilidad

Los strings son **inmutables**, es decir, no se pueden modificar. Por ejemplo, si queremos cambiar el primer caracter de `"choripan"` por `"C"`, no podemos hacerlo. Entonces, si queremos cambiarlo, debemos crear uno nuevo.

```python
palabra = "choripan"
palabra[0] = "C"
# TypeError: 'str' object does not support item assignment
```

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

**WOWOWOW** ¿Qué es `palabra[1:]`? ¿ Por qué estamos uniendo eso con `"C"`?

---
layout: center
level: 2
title: Substrings
hideInToc: false
---

# Substrings
## Obtener un substring de un string

La clases anterior vimos que podíamos usar el operador `in` para determinar si un string es un substring de otro. Pero, ¿qué pasa si queremos obtener un substring de un string?

Para obtener un substring de un string, usamos la **indexación**. Por ejemplo, la palabra `choripan` tiene 8 caracteres, por lo que podemos acceder a cada uno de ellos con un número entre 0 y 7. Una forma de hacerlo es:

```python
palabra = "la consentida"
# Obtener el substring "la"
substring = palabra[0] + palabra[1]
```

Pero esto es muy engorroso, y no es escalable. ¿Qué pasa si queremos obtener el substring `"consentida"`? ¿O `"sentida"`? ¿O `"entida"`? ¿O `"tida"`? ¿O `"ida"`? ¿O `"da"`? ¿O `"a"`? ¿O `" "`? ¿O `""`?

---
layout: center
level: 2
title: Substrings
hideInToc: true
---

# Substrings
## Obtener un substring de un string

Otra forma más simple de obtener un substring de un string, es seleccionando un fragmento con lo que
se conoce como un _slice_. Para ello es necesario usar la sintaxis `string[inicio:fin]`, donde `inicio` es el índice del primer caracter que queremos obtener, y `fin` es el índice del primer caracter que no queremos obtener. Por ejemplo, para obtener el substring `"consentida"`:

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
layout: section
level: 1
title: Strings - métodos
hideInToc: false
---

# Strings
## Métodos

---
layout: default
level: 2
title: Strings - Qué es un método
hideInToc: false
---

# Strings
## Métodos - ¿Qué es un método?

Los _objetos_ de python suele tener **métodos**. Un método **es una función que se aplica a un objeto**
sobre o con la información que ese objeto contiene. Por ejemplo, los strings tienen métodos que nos permiten transformarlos a mayúsculas, a minúsculas, etc. Para aplicar un método a un objeto, usamos la sintaxis `objeto.metodo()`.

Todos los objetos en python —cómo números, strings, listas, etc.— tienen métodos.
Sin embargo, los métodos para cada tipo de objeto son distintos; veremos los métodos de los strings, pero no los de otros objetos.

Veremos:

- Cómo transformar un string a mayúsculas e identificar si un string tiene solo mayúsculas
- Cómo transformar un string a minúsculas e identificar si un string tiene solo minúsculas
- Cómo identificar si un string tiene sólo números (es decir que es un número)

---
layout: default
level: 2
title: String - upper
hideInToc: false
---

# Strings
## Métodos - upper

El método `upper()` transforma un string a mayúsculas. Por ejemplo, para transformar "Guaton loyola" a "GUATON LOYOLA":

```python
# Transformar un string a mayúsculas
string = "Guaton loyola"
string_mayusculas = string.upper()
# string_mayusculas es "GUATON LOYOLA"
```

¿ Pero cómo sabemos si el string ya está en mayúsculas?

---
layout: default
level: 2
title: Strings - isupper
hideInToc: false
---

# String
## Nuevos métodos - isupper

El método `isupper()` retorna `True` si el string está en mayúsculas, y `False` en caso contrario. Por ejemplo, para determinar si "Guaton loyola" está en mayúsculas:

```python
# Determinar si un string está en mayúsculas
string = "Guaton loyola"
string_mayusculas = string.upper()
# string_mayusculas es "GUATON LOYOLA"
if string_mayusculas.isupper():
    print("string_mayusculas está en mayúsculas")
```

Y para las minúsculas, ¿cómo lo hacemos?

---
layout: default
level: 2
title: Strings - lower
hideInToc: false
---

# Strings
## Métodos - lower

El método `lower()` transforma un string a minúsculas. Por ejemplo, para transformar "Guaton loyola" a "guaton loyola":

```python
# Transformar un string a minúsculas
string = "Guaton loyola"
string_minusculas = string.lower()
# string_minusculas es "guaton loyola"
```

¿ Pero cómo sabemos si el string ya está en minúsculas?

---
layout: default
level: 2
title: Strings - islower
hideInToc: false
---

# Strings
## Métodos - islower

El método `islower()` retorna `True` si el string está en minúsculas, y `False` en caso contrario. Por ejemplo, para determinar si "Guaton loyola" está en minúsculas:

```python
# Determinar si un string está en minúsculas
string = "Guaton loyola"
string_minusculas = string.lower()
# string_minusculas es "guaton loyola"
if string_minusculas.islower():
    print("string_minusculas está en minúsculas")
```

Y para los números, ¿cómo lo hacemos?
---
layout: default
level: 2
title: Strings - isdigit
hideInToc: false
---

# Strings
## Métodos - isdigit

Para saber si un string tiene sólo números, una opción es usar el operador `in` y comparar cada caracter con los números. Pero, no habrá un método que nos ayude?

El método `isdigit()` retorna `True` si el string tiene sólo números (puntos, comas y guiones no son números), y `False` en caso contrario. Por ejemplo, para determinar si "123" tiene sólo números:

```python
# Determinar si un string tiene sólo números
string = "123"
if string.isdigit():
    print("string tiene sólo números")
```

---
layout: default
level: 2
title: Strings ejemplo de interrogación
hideInToc: false
---

# Introgram (I1 2017-2 P1) 🌶️🌶️🌶️

¡Algo terrible ha ocurrido! Tu aplicación preferida de mensajería, Introgram, enloqueció y está mezclando los mensajes
de tus contactos.

Cada vez que dos usuarios distintos te envían un mensaje, Introgram los mezcla y te muestra solamente un mensaje. En el mensaje mezclado, los primeros 2 caracteres corresponden al primer mensaje, los siguientes 2 caracteres corresponden al segundo mensaje, los siguientes 3 caracteres corresponden al
primer mensaje, los siguientes 3 caracteres corresponden al segundo mensaje, los siguientes 4 caracteres corresponden al primer mensaje, y así sucesivamente hasta que el texto termina. En el caso de que los últimos 2n caracteres no sigan este patrón (por ejemplo: aabb**ab** -> aa**a** y bb**b**), se debe tomar estos caracteres restantes y separarlos equitativamente entre **mA** y **mB**.

---
layout: default
level: 2
title: Strings ejemplo de interrogación
hideInToc: true
---

Por ejemplo, si dos usuarios Andrés y Benito mandan respectivamente los mensajes **mA** y **mB**:

**mA** : "Voten por mi, soy el mejor."
**mB**: "No, no, mejor voten por mi."

entonces Introgram entrega el siguiente mensaje mezclado **mAB**:

**mAB**= "VoNoten, n poro, m mi, ejor soy elvoten mejor.por mi."

## Objetivo

Tu trabajo es escribir un programa que revierta los problemas que genera Introgram. Es decir, se te entregará un string mezclado **mAB** y tu programa debera imprimir los strings mA y mB originales.

## Constraints

- Los strings **mA** y **mB** son siempre del mismo largo.

---
layout: default
level: 2
title: Strings ejemplo de interrogación
hideInToc: true
---

## Input Format

Recibirás un _string_ que es el mensaje mezclado de Introgram.

## Output Format

Se deberán imprimir en orden los mensajes, es decir primero el mensaje **mA** y luego el mensaje **mB**.

---
layout: default
level: 2
title: Strings ejemplo de interrogación
hideInToc: true
---

## Ejemplos

### Ejemplo 1

#### Input Test Case 00

```text
VoNoten, n poro, m mi, ejor soy elvoten  mejor.por mi.
```

#### Output Test Case 00

```text
Voten por mi, soy el mejor.
No, no, mejor voten por mi.
```

#### Explicación:

Los primeros dos caracteres "Vo" corresponden a **mA** , luego los siguientes dos "No" son parte de **mB**. Ahora, los siguientes 3 caracteres "ten" son del primer mensaje y los otros 3 ", n" son del segundo. Esto continua hasta que se llega a los últimos 7 caracteres de
mA " mejor." y los 7 de mB "por mi.".

---
layout: default
level: 2
title: Strings ejemplo I1 - Solución
hideInToc: true
---

# Solución

```python {1-19|20-36|37-40} {lines:true, maxHeight:'350px'}
# Recibimos el mensaje mezclado
mensaje = input()

# Inicializamos el largo de caracteres que vamos a leer
# y dividir para el mensaje A y B
cars_por_leer = 2

# Inicializamos los mensajes A y B
mensaje_A = ""
mensaje_B = ""

# Calculamos el largo del mensaje
largo_mensaje = len(mensaje)

# Guardamos el largo recorrido del mensaje
largo_recorrido = 0

# Mientras no hayamos recorrido todo el mensaje
# seguimos dividiendo el mensaje en A y B
while largo_recorrido < largo_mensaje:
    # Si el largo de caracteres que vamos a leer (para cada palabra)
    # es mayor o igual al largo entonces
    # Dividimos los caracteres restantes en A y B a la mitad y terminamos
    if largo_recorrido + cars_por_leer * 2 >= largo_mensaje:
        cars_por_leer = (largo_mensaje - largo_recorrido) // 2
    # --- Obtenemos el substring de A
    mensaje_A += mensaje[largo_recorrido:largo_recorrido + cars_por_leer]
    # Actualizamos el largo recorrido
    largo_recorrido += cars_por_leer
    # Obtenemos el substring de B
    mensaje_B += mensaje[largo_recorrido:largo_recorrido + cars_por_leer]
    # Actualizamos el largo recorrido
    largo_recorrido += cars_por_leer
    # Actualizamos el largo de caracteres que vamos a leer
    cars_por_leer += 1

# Imprimimos los mensajes A y B
print(mensaje_A)
print(mensaje_B)
```

---
layout: center
level: 1
title: Spoiler repaso
hideInToc: true
---

# Coming soon...

La proxima clase comenzaremos repasando para la I1 😮😮😮😮😮

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
