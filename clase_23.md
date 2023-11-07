---
theme: apple-basic
info: |
  ## Clase 23 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 23
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
exportFilename: clase_23
---
# OOP: Tipos propios I
## Clase 23 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Anuncios

1. La tarea 3 se publicará el martes 14 de Noviembre.

---
layout: center
level: 2
title: Agenda
hideInToc: true
---

# Agenda

<Toc />

---
layout: default
level: 2
title: Motivación
hideInToc: False
---

# Motivación
## Ejemplo arquitectos

Digamos eres un constructor de casas en un condominio, todas las casas son similares,
varían en algunas cosas como el número de ventanas, el color de la pintura, etc. Pero todas tienen las mismas características básicas, una dirección, cuentan con una puerta, tienen consumo de servicios básicos (agua, luz, gas) y tienen un N ventanas que se pueden abrir y cerrar.

Si modelamos esto con listas de listas, cada casas podría ser una lista con la siguiente estructura:

- Primer elemento: Dirección (string)
- Segundo elemento: Puerta (booleano, True si está abierta, False si está cerrada)
- Tercer elemento: Consumo de servicios básicos (lista de 3 elementos, cada uno con un número que representa el consumo de agua, luz y gas)
- Cuarto elemento: Ventanas (lista de N elementos, cada uno con un booleano que representa si la ventana está abierta o cerrada)
- Quinto elemento: Color de la pintura (string).

---
layout: default
level: 2
title: Motivación
hideInToc: False
---

# Motivación
## Ejemplo arquitectos

Cada elemento de la lista representa una casa:

```python
casa_1 = ["Benito Rebolledo #3032", True, [100, 200, 300], [True, False, True, False], "Rojo"]
casa_2 = ["Benito Rebolledo #3033", False, [200, 300, 400], [False, False, True, False], "Azul"]
casa_3 = ["Benito Rebolledo #3034", True, [300, 400, 500], [True, True, True, True], "Verde"]
casas = [casa_1, casa_2, casa_3]
```

Y si ahora queremos hacer una función `abrir_puerta` que abra la puerta de una casa, tendríamos que hacer algo como:

```python
def abrir_puerta(casa):
    casa[1] = True
```

O `sonar_alarma` que suene la alarma de una casa si alguna ventana o la puerta está abierta:

```python
def sonar_alarma(casa):
    if casa[1] or True in casa[3]:
        print("¡¡¡ALARMA!!!")
```

---
layout: default
level: 2
title: Motivación
hideInToc: False
---

# Motivación
## Ejemplo arquitectos

Es un poco engorroso tener que recordar que el primer elemento de la lista es la dirección, el segundo la puerta, etc. Además, si queremos agregar una nueva característica a las casas, por ejemplo, el número de pisos, tendríamos que modificar todas las funciones que usan la lista de casas.

Sería mucho más fácil si pudiéramos hacer algo como:

```python
casa_1 = Casa("Benito Rebolledo #3032", 4 , "Rojo") # Casa con dirección "Benito Rebolledo #3032", 4 ventanas y roja
casa_1.abrir_puerta() # Abre la puerta de la casa
casa_1.sonar_alarma() # Suena la alarma de la casa
```

Pero para eso python debería tener un tipo de dato `Casa` que represente una casa y que tenga métodos como `abrir_puerta` y `sonar_alarma` (que no lo tiene).

Lo bueno, es que podemos crear nuestros propios tipos de datos en python, y eso es lo que veremos hoy. **Clases e instancias u objetos.**

---
layout: section
level: 1
title: Clases - Conceptual
hideInToc: False
---

# Clases
## _Buckle up_ que veremos un concepto totalmente nuevo.

---
layout: default
level: 2
title: Definición de clases
hideInToc: False
---

# Definición
## Concepto de clase

Una clase es un **conjunto de instrucciones y estructura que definen un tipo de dato**. Esto nos permite definir su comportamiento, los datos y la forma en que los almacena.

Podríamos hacer una analogía a que las clases son el _Plano_ de un tipo de dato (en este caso una casa), y son ellas las que definen cómo se comporta y qué datos almacena.
Pero, al igual que un plano, **una clase no es una casa en sí misma, sino que es la descripción de cómo se construye una casa**, que se necesita para construirla, y el comportamiento que tendrá.

Por ejemplo, cuando la constructora Almagro quiere construir una casa, no construye la casa directamente, sino que primero hace un plano de la casa, y luego construye la casa (o varias casas) a partir de ese plano. **El plano es la clase** en este caso.

Una clase define:

- **Atributos**: Los datos que almacena una eventual creación hecha a partir de la clase.
- **Métodos**: Las funciones que puede realizar una eventual creación hecha a partir de la clase.
- **Constructor**: La forma en que se crea una eventual creación hecha a partir de la clase.

---
layout: default
level: 2
title: Definición de instancias
hideInToc: False
---

# Definición
## Concepto de instancia

El concepto de **creación** es una instancia.

Una instancia es un **objeto creado a partir de una clase**. Es decir, es una **casa** construida a partir de un **plano**. A diferencia de las clases, las instancias sí son objetos que podemos usar directamente, y que tienen los datos y comportamiento definidos en la clase.

Las instancias tienen **atributos** y **métodos**. Los **atributos** son los datos que almacena la instancia, y los **métodos** son las funciones que puede realizar la instancia. Sin embargo, es importante recordar que **los atributos y métodos de una instancia no son los mismos que los define la clase**.

Recordar de la _clase de strings_:

> Los _objetos_ de python suele tener **métodos**. Un método **es una función que se aplica a un objeto**
sobre o con la información que ese objeto contiene. Por ejemplo, los strings tienen métodos que nos permiten transformarlos a mayúsculas, a minúsculas, etc. Para aplicar un método a un objeto, usamos la sintaxis `objeto.metodo()`.

❗ Un método **no es lo mismo que una función**, dado que está asociado a un objeto.

---
layout: default
level: 2
title: Ejemplos de clases
hideInToc: False
---

# Ejemplos

La siguiente tabla muestra algunos ejemplos de clases, instancias, atributos y métodos.

| Clase | Instancia | Atributos | Métodos |
| --- | --- | --- | --- |
| plano de una casa | casa A, casa B, casa C | dirección, puerta, consumo de servicios básicos, ventanas, color de la pintura | abrir puerta, sonar alarma |
| clase de un auto | auto A, auto B, auto C | marca, modelo, color, patente, velocidad | acelerar, frenar, encender, apagar |
| clase de un perro | poodle, pastor alemán, golden retriever | raza, color, tamaño, edad | ladrar, comer, dormir, correr |
| estudiantes de IIC1103 | Nicolás, Juan, María | nombre, apellido, edad, carrera, sección, notas | estudiar, dormir, comer, jugar |

---
layout: section
level: 1
title: Clases - Sintaxis
hideInToc: False
---

# Clases
## Cómo definir una clase en python

---
layout: default
level: 2
title: Definición de clases
hideInToc: False
---

# Definición
## Cómo definir una clase en python

Para definir una clase en python, usamos la palabra reservada `class` seguida del nombre de la clase, y luego dos puntos `:`. Por ejemplo, para definir una clase `Casa`:

```python
class Casa:
    # Código de la clase

# Código fuera de la clase
casa_A = Casa("A", ...)
casa_B = Casa("B", ...)
casas = [casa_A, casa_B]
```

El uso de `class` es la forma de indicarle a python que estamos armando un tipo de dato nuevo (un plano) del tipo `Casa`. Luego, dentro de la clase, podemos definir los atributos y métodos que tendrá la clase.

Fuera de la clase, podemos crear instancias de la clase, y usarlas como cualquier otro tipo de dato.

❓ ¿Pero, y cómo definimos todos esos atributos, métodos, es decir, el comportamiento de la clase?

---
layout: two-cols
level: 2
title: Constructor
hideInToc: False
---

# Constructor o <span class="dark:text-white text-black">`__init__`</span>
## Cómo instanciar una clase

Para definir los atributos que tendrá una clase, usamos un método especial llamado `__init__` (de _initialize_ o inicializar). Este método nos permite _construir_ una instancia de la clase, es decir, definir los atributos que tendrá la instancia (recordar, el objeto es la instancia, no la clase).
El método define todos los atributos que tendrá la instancia, y cómo se inicializarán.

::right::

```python
class Casa:
    """Esta es la clase casa, es decir,
    el manual o plano de una casa."""

    def __init__(self, direccion, n_ventanas, color):
        """Este es el constructor de la clase casa,
        es decir, la forma en que se crea una casa.
        Recibe como parámetros la dirección, el número
        de ventanas y el color de la casa.

        Cada casa tiene una dirección, una puerta que
        comienza cerrada, una lista de ventanas
        que comienzan cerradas, un color y un consumo
        de servicios básicos que comienza en 0.
        """
        self.direccion = direccion
        self.puerta_abierta = False
        self.ventanas = [False] * n_ventanas
        self.color = color
        self.consumo_servicios_basicos = [0, 0, 0]
```

`__init__` es un método especial que se llama automáticamente cuando se crea una instancia de la clase.

---
layout: default
level: 2
title: self y atributos
hideInToc: False
---

# <span class="dark:text-white text-black">`self`</span> y atributos
## ¿Qué es `self`?

Cuando creamos la clase `Casa`, definimos el método `__init__` con 4 parámetros: `self`, `direccion`, `n_ventanas` y `color`. Pero, ¿qué es `self`?

```python
class Casa:
    def __init__(self, direccion, n_ventanas, color):
        self.direccion = direccion
        self.vendanas = [False] * n_ventanas
        ...

casas = [Casa("Benito Rebolledo #3032", 4, "Rojo"), Casa("Benito Rebolledo #3033", 4, "Azul")]
```

Es la forma que nosotros indicamos que para una futura instancia que siga el plano de la clase `Casa`, el atributo `direccion` será igual al parámetro `direccion` que recibe el método `__init__` y así con todos los atributos y parámetros de la función.
Ahora, cualquier comportamiendo de la instancia sabrá de sus propios valores para cada atributo.

❗ Los atributos de una clase se definen con `self.atributo = valor` dentro de un método de la clase y **no son lo mismo** que los parámetros de un método. Es mas, pueden tener el mismo nombre, pero no son lo mismo y pueden haber más atributos que parámetros (o viceversa).

---
layout: default
level: 2
title: Ejemplo de clases
hideInToc: False
---

# Ejemplos
## Ejemplos de clases
### Ejemplo 1: Clase `Casa`

```python
class Casa:
    def __init__(self, direccion, n_ventanas, color):
        self.direccion = direccion
        self.puerta_abierta = False
        self.ventanas = [False] * n_ventanas
        self.color = color
        self.consumo_servicios_basicos = [0, 0, 0]
casa_1 = Casa("Benito Rebolledo #3032", 4, "Rojo")
casas = [casa_1, Casa("Benito Rebolledo #3033", 4, "Azul")]
```

### Ejemplo 2: Clase `Auto`

```python
class Auto:
    def __init__(self, marca, modelo, color, patente):
        self.marca = marca
        self.modelo = modelo
        self.color = color
        self.patente = patente
        self.velocidad = 0
auto_familiar = Auto("Toyota", "Corolla", "Rojo", "ABCD-12")
```

---
layout: two-cols
level: 2
title: Métodos
hideInToc: False
---

# Métodos
## Cómo definir métodos en una clase

Cuando queremos definir un método en una clase, lo hacemos de la misma forma que definimos una función, pero dentro de la clase y con un parámetro `self` al principio. Por ejemplo, si queremos definir el método `abrir_puerta` de la clase `Casa` que utilice un atributo de la clase, hacemos:

```python
class Casa:
    def __init__(self, direccion, n_ventanas, color):
        self.direccion = direccion
        self.puerta_abierta = False
        self.ventanas = [False] * n_ventanas
        self.color = color
        self.consumo_servicios_basicos = [0, 0, 0]

    def abrir_puerta(self):
        self.puerta_abierta = True
```

::right::

Luego para usar el método, hacemos:

```python
casa_1 = Casa("Benito Rebolledo #3032", 4, "Rojo")
casa_1.abrir_puerta()
```

También pueden recibir parámetros y retornar valores como cualquier función.

```python
class Casa
    def __init__(self, direccion, n_ventanas, color):
        self.direccion = direccion
        self.puerta_abierta = False
        self.ventanas = [False] * n_ventanas
        self.color = color
        self.consumo_servicios_basicos = [0, 0, 0]

    def n_ventanas_abiertas(self, n_ventanas):
        total_ventanas_abiertas = 0
        for ventana_abierta in self.ventanas:
            if ventana_abierta:
                total_ventanas_abiertas += 1
        return total_ventanas_abiertas >= n_ventanas
```

---
layout: two-cols
level: 2
title: Método vs Función
hideInToc: False
---

# Método vs Función
## ¿Cuál es la diferencia?

Las clases tienen varios métodos (uno de esos métodos es `__init__`). Pero, ¿qué es un método? ¿Es lo mismo que una función?

Un método es una función que se aplica a un objeto sobre o con la información que ese objeto contiene. Por ejemplo, los strings tienen métodos que nos permiten transformarlos a mayúsculas, a minúsculas, etc. Para aplicar un método a un objeto, usamos la sintaxis `objeto.metodo()`.

En este caso, la clase `Casa` por ahora tiene un método `__init__` que se aplica a una instancia de la clase `Casa` para inicializarla.

::right::

Por ejemplo, si queremos crear una instancia de la clase `Casa` con dirección `Benito Rebolledo #3032`, 4 ventanas y color `Rojo`, hacemos:

```python
casa_1 = Casa("Benito Rebolledo #3032", 4, "Rojo")
```

Eso invoca (o llama) al método `__init__` de la clase `Casa` con los parámetros `"Benito Rebolledo #3032"`, `4` y `"Rojo"`. El método `__init__` se encarga de inicializar la instancia con esos parámetros.

De la misma forma, si queremos abrir la puerta de la casa, hacemos:

```python
casa_1.abrir_puerta()
```

Y ahí invocamos (o llamamos) al método `abrir_puerta` de la instancia `casa_1` de la clase `Casa`.

---
layout: two-cols
level: 2
title: Ejemplo avanzado
hideInToc: False
---

# Ejemplo avanzado
## Intro Simulator-2000

Eres profesor en la universidad y quieres implementar una manera programática de hacer seguimiento a las notas y comportamiento de tus estudiantes. Para eso, vas a crear una clase llamada `Estudiante` con los siguiente atributos y métodos:

**Atributos:**

1. `nombre`: Nombre del estudiante.
2. `seccion`: Sección del curso en la que está inscrito el estudiante.
3. `correo`: Correo electrónico del estudiante.
4. `energia`: Representa el nivel de energía del estudiante para estudiar, comienza en 100 y es un número entre 0 y 100.

::right::

<!-- markdownlint-disable-next-line -->
5. `nivel_estudio`: Representa el nivel de estudio del estudiante, comienza en 0 con un máximo de 100.
<!-- markdownlint-disable-next-line -->
6. `reprobado`: Indicador que determina si el estudiante tiene una sanción ética, comienza en `False`.
<!-- markdownlint-disable-next-line -->
7. `interrogaciones`, `tareas`: Estos son listas que contendrán las notas de las diferentes evaluaciones. Cada estudiante comienza con una nota de 1.0 en todas las evaluaciones. Cada lista tiene 3 elementos, uno por cada evaluación (I1, I2, Examen) o (T1, T2, T3).
<!-- markdownlint-disable-next-line -->
8. `participacion`: Nota de la participación del estudiante en clase, comienza en 1.0.

---
layout: two-cols
level: 2
title: Ejemplo avanzado
hideInToc: False
---

**Métodos:**

1. `__init__`: Constructor que recibe `nombre`, `seccion` y `correo` como parámetros. Inicializa el resto de los atributos a partir de los valores iniciales.
2. `estudiar`: Disminuye `energia` en 10 puntos hasta llegar a 0 y aumenta el nivel de estudio en 10. Si se invoca con energía 0 imprime "Estoy muy cansado para estudiar".
3. `dormir`: Aumenta `energia` en 50 puntos, hasta un máximo de 100.
4. `asistir_a_clases`: Aumenta `participacion` en 0.5.

<!-- markdownlint-disable-next-line -->
5. `resolver_sets`: Aumenta `participacion` en 1.0.

::right::
<!-- markdownlint-disable-next-line -->
6. `copiar`, `compartir_computador`: Cambian `reprobado` a True.
<!-- markdownlint-disable-next-line -->
7. `rendir_prueba`, `rendir_tarea`: Reciben un índice que representa la evaluación a rendir (0, 1 o 2 para interrogaciones y tareas), y establecen la nota en esa evaluación usando la fórmula 7 * `nive_estudio` / 100. `nivel_estudio` se vuelve 0 después de esto.
<!-- markdownlint-disable-next-line -->
8. `obtener_nota`: Calcula la nota final del curso usando la fórmula: 0.15 _(suma de interrogaciones) + 0.3_ nota_examen + 0.1 _(suma de tareas) + 0.1_ participacion. Si `reprobado` es True, retorna 1.1.

---
layout: default
level: 2
title: Ejemplo avanzado - Solución
hideInToc: False
---

```python {1-14|16-31|33-43|45-51|53-65|67-81} {lines: true, maxHeight: '350px'}
class Estudiante:
    """Plano de un estudiante de IIC1103. No es un estudiante en sí mismo, sino
    que es la descripción de cómo se construye un estudiante"""
    def __init__(self, nombre, seccion, correo):
         """Crea un estudiante con nombre, sección y correo."""
        self.nombre = nombre
        self.seccion = seccion
        self.correo = correo
        self.energia = 100
        self.nivel_estudio = 0
        self.reprobado = False
        self.interrogaciones = [1.0, 1.0, 1.0]  # I1, I2, Examen
        self.tareas = [1.0, 1.0, 1.0]  # T1, T2, T3
        self.participacion = 1.0

    def estudiar(self):
        """Disminuye la energía del estudiante en 10 puntos hasta llegar a 0.
        Si se invoca con energía 0 imprime "Estoy muy cansado para estudiar"."""
        if self.energia == 0:
            print("Estoy muy cansado para estudiar")
        else:
            self.energia -= 10
            self.nivel_estudio += 10
            if self.nivel_estudio > 100:
                self.nivel_estudio = 100

    def dormir(self):
        """Aumenta la energía del estudiante en 50 puntos, hasta un máximo de 100."""
        self.energia += 50
        if self.energia > 100:
            self.energia = 100

    def asistir_a_clases(self):
        """Aumenta la participación del estudiante en 0.5."""
        self.participacion += 0.5
        if self.participacion > 7.0:
            self.participacion = 7.0

    def resolver_sets(self):
        """Aumenta la participación del estudiante en 1.0."""
        self.participacion += 1.0
        if self.participacion > 7.0:
            self.participacion = 7.0

    def copiar(self):
        """Cambia el atributo reprobado a True."""
        self.reprobado = True

    def compartir_computador(self):
        """Cambia el atributo reprobado a True."""
        self.reprobado = True

    def rendir_prueba(self, prueba):
        """Recibe un índice que representa la evaluación a rendir (0, 1 o 2 para
        interrogaciones y tareas), y establece la nota en esa evaluación usando
        la fórmula 7 * `nivel_estudio` / 100. `nivel_estudio` se vuelve 0 después de esto."""
        self.interrogaciones[prueba] = 7 * self.nivel_estudio / 100
        self.nivel_estudio = 0

    def rendir_tarea(self, tarea):
        """Recibe un índice que representa la evaluación a rendir (0, 1 o 2 para
        interrogaciones y tareas), y establece la nota en esa evaluación usando
        la fórmula 7 * `nivel_estudio` / 100. `nivel_estudio` se vuelve 0 después de esto."""
        self.tareas[tarea] =7 * self.nivel_estudio / 100
        self.nivel_estudio = 0

    def obtener_nota(self):
        """Calcula la nota final del curso usando la fórmula:
        0.15 (suma de interrogaciones) + 0.3 nota_examen + 0.1 (suma de tareas) + 0.1 participacion.
        Si `reprobado` es True, retorna 1.1."""

        if self.reprobado:
            return 1.1
        else:
            nota_total = self.participacion * 0.1
            for nota in self.tareas:
                nota_total += nota * 0.1
            for nota in self.interrogaciones[:-1]:
                nota_total += nota * 0.15
            nota_total += self.interrogaciones[-1] * 0.3
            return nota_total
```

Este es un ejemplo bastante avanzado que busca ejemplificar todo lo revisado hoy, recomiendo revisarlo con calma y entenderlo bien.

---
layout: center
level: 1
title: Spoiler repaso
hideInToc: true
---

# Coming soon...

Ahora vimos el comienzo de la programación orientada a objetos, pero aún esto es solo el comienzo. Veremos más adelante:

1. Cómo usar métodos en otros métodos.
2. Cómo hacer la representación de una clase en forma de string.
3. Cómo crear objetos dentro de otros objetos.
4. Como crear listas de objetos pero dentro de otros objetos.
5. Cómo usar distintos objetos en otros objetos.

Y mucho más...
Nos vemos en la próxima clase.
