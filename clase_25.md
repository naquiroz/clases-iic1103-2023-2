---
theme: apple-basic
info: |
  ## Clase 25 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 25
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
exportFilename: clase_25
---

# OOP: Interacción entre objetos
## Clase 25 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---

# Anuncios

1. La tarea 3 se publica hoy.

---
layout: center
level: 2
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior

Vimos cómo definir clases y crear instancias de esas clases. Esencialmente, vimos cómo crear un tipo de dato nuevo en python.
Cada clase es un tipo de dato nuevo, que tiene sus propios atributos (son como variables asociados a una instancia de la clase) y métodos (son como funciones asociadas a una instancia de la clase).
Ahora, queremos ver como aprovechar esto en el resto de nuestro código para hacer cosas desde afuera y aún más avanzadas.

---
layout: default
level: 2
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior
Vimos que podemos usar métodos dentro de otros métodos. Por ejemplo, podemos crear un método `usar_ducha` que gasta 10 litros de agua por minuto y reutiliza el método `consumir_agua` pero además consume 7 metros cúbicos de gas por minuto.

```python
class Casa:
    def __init__(self, direccion, n_ventanas, color):
        self.direccion = direccion
        self.puerta_abierta = False
        self.ventanas = [False] * n_ventanas
        self.color = color
        self.consumo_servicios_basicos = [0, 0, 0]
    def consumir_agua(self, litros):
        """Recibe un número de litros y aumenta el consumo de agua en ese número."""
        self.consumo_servicios_basicos[0] += litros
    def usar_ducha(self, minutos):
        """Recibe un número de minutos y gasta 10 litros de agua por minuto."""
        self.consumir_agua(minutos * 10)
        self.consumo_servicios_basicos[1] += minutos * 7
```

---
layout: two-cols
level: 2
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior

También vimos que podemos usar los atributos de una instancia de una clase. Por ejemplo, podemos imprimir la dirección de la casa 1, o abrir la puerta de la casa 2 si la puerta de la casa 1 está abierta.

```python
class Casa:
    def __init__(self, direccion, n_ventanas, color):
        self.direccion = direccion
        self.puerta_abierta = False
        self.ventanas = [False] * n_ventanas
        self.color = color
        self.consumo_servicios_basicos = [0, 0, 0]
    def consumir_agua(self, litros):
        """Recibe un número de litros y
        aumenta el consumo de agua en ese número."""
        self.consumo_servicios_basicos[0] += litros
    def usar_ducha(self, minutos):
        """Recibe un número de minutos y
        gasta 10 litros de agua por minuto."""
        self.consumir_agua(minutos * 10)
        self.consumo_servicios_basicos[1] += minutos * 7
```

::right::

```python
# Creación de las casas
casa_1 = Casa("Benito Rebolledo #3032", 4, "Rojo")
casa_2 = Casa("Benito Rebolledo #3033", 1, "Azul")

print(casa_1.direccion)
if casa_1.puerta_abierta:
    casa_2.abrir_puerta()
```

---
layout: default
level: 2
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior

Vimos que también podemos representar el estado de una instancia de una clase usando el método `__str__`. Este método se llama automáticamente cuando se usa la función `str` sobre una instancia de una clase.

```python
class Casa:
    ... # Código que ya habíamos definido antes
    def __str__(self):
        """Retorna una cadena de caracteres con el estado de la casa."""
        estado = "--- Casa en " + self.direccion + " de color " + self.color + ".\nPuerta:"
        if self.puerta_abierta:
            estado += "Abierta\n"
        else:
            estado += "Cerrada\n"
        estado += "Ventanas: "
        for ventana in self.ventanas:
            if ventana:
                estado += "Abierta "
            else:
                estado += "Cerrada "
        estado += "\nConsumo de servicios básicos: " + str(self.consumo_servicios_basicos)
        estado += "\n---"
        return estado
```

---
layout: default
level: 2
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior

Entonces si trabajamos con dos casas, veríamos lo siguiente:

```python
casa_1 = Casa("Benito Rebolledo #3032", 4, "Rojo")
casa_1.abrir_puerta()
casa_1.abrir_ventana(1) # No la hemos definido aún pero la usamos de ejemplo
casa_1.consumir_agua(100)
casa_1.consumir_luz(200) # No la hemos definido aún pero la usamos de ejemplo
casa_1.consumir_gas(300) # No la hemos definido aún pero la usamos de ejemplo
print(casa_1)
casa_2 = Casa("Benito Rebolledo #3033", 1, "Azul")
casa_2.abrir_puerta()
casa_2.abrir_ventana(0) # No la hemos definido aún pero la usamos de ejemplo
casa_2.consumir_agua(50)
casa_2.consumir_luz(100) # No la hemos definido aún pero la usamos de ejemplo
casa_2.consumir_gas(150) # No la hemos definido aún pero la usamos de ejemplo
print(casa_2)
```

---
layout: default
level: 2
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior

Obtendríamos algo como

```text
--- Casa en Benito Rebolledo #3032 de color Rojo.
Puerta: Abierta
Ventanas: Cerrada Abierta Cerrada Cerrada
Consumo de servicios básicos: [100, 200, 300]
---
--- Casa en Benito Rebolledo #3033 de color Azul.
Puerta: Abierta
Ventanas: Abierta
Consumo de servicios básicos: [50, 100, 150]
---
```

---
layout: center
level: 1
title: Agenda
hideInToc: true
---

# Agenda

<Toc />

---
layout: center
level: 1
title: Motivación
hideInToc: false
---

# Motivación
## Interacción entre objetos

Hasta ahora, hemos visto cómo crear clases y cómo crear instancias de esas clases. También hemos visto cómo usar los métodos y atributos de esas instancias. Sin embargo, aún **no hemos visto cómo podemos hacer que las instancias interactúen entre sí**.
Por ejemplo, si tenemos una clase `Condominio` que tiene una lista de casas, **cómo podemos hacer que se agreguen casas a esa lista**? O cómo podemos hacer que una casa le pida a otra que le preste un poco de agua? Cómo podemos obtener el consumo total de agua de todas las casas del condominio?

---
layout: default
level: 1
title: Interacción entre objetos
hideInToc: false
---

# Interacción entre objetos

Sería muy útil poder hacer lo siguiente para agregar una casa a un condominio:

```python
casa_1 = Casa("Benito Rebolledo #3032", 4, "Rojo")
casa_2 = Casa("Benito Rebolledo #3033", 1, "Azul")

condominio = Condominio("Benito Rebolledo #3030", [])
condominio.agregar_casa(casa_1)
condominio.agregar_casa(casa_2)
```

O para pedirle agua a otra casa:

```python
condominio.transferir_agua(casa_1, casa_2, 50)
```

O para obtener el consumo total de agua de todas las casas del condominio:

```python
print(condominio.consumo_total_agua())
```

---
layout: default
level: 2
title: Interacción entre objetos
hideInToc: true
---

# Interacción entre objetos

Para poder hacer esto, debemos entender que las instancias de una clase pueden ser atributos de otra clase. Por ejemplo, podemos tener una clase `Condominio` que tiene una lista de casas. Para esto, debemos definir un atributo de la clase `Condominio` que sea una lista de instancias de la clase `Casa`.

```python
class Casa:
    # Código que ya habíamos definido antes
    ...

class Condominio:
    def __init__(self, direccion, casas):
        self.direccion = direccion
        self.casas = casas # Esta lista tendrá instancias de la clase Casa
```

Dado que ya definimos en nuestro código la clase `Casa`, podemos usarla como un tipo de dato más, por lo que podemos crear una lista de instancias de la clase `Casa`.

---
layout: default
level: 2
title: Interacción entre objetos
hideInToc: true
---

# Interacción entre objetos

Ahora, podemos crear un condominio con una lista de casas. Por ejemplo, podemos crear un condominio con las casas `casa_1` y `casa_2` que creamos anteriormente.

```python
casa_1 = Casa("Benito Rebolledo #3032", 4, "Rojo")
casa_2 = Casa("Benito Rebolledo #3033", 1, "Azul")

condominio = Condominio("Benito Rebolledo #3030", [casa_1, casa_2])
```

Sin embargo, esto no es muy útil, ya que no podemos agregar casas al condominio. Para esto, debemos definir un método que agregue casas a la lista de casas del condominio.

```python
class Condominio:
    def __init__(self, direccion, casas):
        self.direccion = direccion
        self.casas = casas # Esta lista tendrá instancias de la clase Casa
    def agregar_casa(self, casa):
        """Recibe una instancia de la clase Casa y la agrega a la lista de casas del condominio."""
        self.casas.append(casa)
```

---
layout: default
level: 2
title: Interacción entre objetos
hideInToc: true
---

# Interacción entre objetos

Ahora, podemos crear un condominio vacío y agregarle las casas `casa_1` y `casa_2` que creamos anteriormente.

```python
casa_1 = Casa("Benito Rebolledo #3032", 4, "Rojo")
casa_2 = Casa("Benito Rebolledo #3033", 1, "Azul")

condominio = Condominio("Benito Rebolledo #3030", [])
condominio.agregar_casa(casa_1)
condominio.agregar_casa(casa_2)
```

---
layout: default
level: 2
title: Interacción entre objetos
hideInToc: true
---
# Interacción entre objetos

También podemos definir un método que transfiera agua de una casa a otra. Para esto, debemos definir un método que reciba dos instancias de la clase `Casa` y un número de litros y transfiera esa cantidad de litros de agua de una casa a otra.

```python
class Condominio:
    def __init__(self, direccion, casas):
        self.direccion = direccion
        self.casas = casas # Esta lista tendrá instancias de la clase Casa
    def agregar_casa(self, casa):
        """Recibe una instancia de la clase Casa y la agrega a la lista de casas del condominio."""
        self.casas.append(casa)
    def transferir_agua(self, indice_1, indice_2, litros):
        """Recibe dos instancias de la clase Casa y
        un número de litros y transfiere esa cantidad de litros de agua de una casa a otra."""
        casa_1.consumir_agua(litros)
        casa_2.consumir_agua(-litros)
```

🖊️ Nota: Si bien no es necesario que el método `transferir_agua` esté en la clase `Condominio`, es una buena práctica que esté ahí, ya que es una acción que involucra a dos casas del condominio.

---
layout: default
level: 3
title: Ejemplos
hideInToc: false
---

# Ejemplos

Una clase Equipo que represente un equipo de fútbol. Esta clase podría tener una lista de objetos Jugador, cada uno con atributos como nombre, posicion y goles_marcados. El Equipo podría tener un método para encontrar al jugador con más goles marcados.

```python
class Jugador:
    def __init__(self, nombre, posicion, goles_marcados):
        self.nombre = nombre
        self.posicion = posicion
        self.goles_marcados = goles_marcados

class Equipo:
    def __init__(self, nombre, jugadores):
        self.nombre = nombre
        self.jugadores = jugadores
    def jugador_con_mas_goles(self):
        jugador_mas_goles = None
        for jugador in self.jugadores:
            if jugador_mas_goles == None or jugador.goles_marcados > jugador_mas_goles.goles_marcados:
                jugador_mas_goles = jugador
        return jugador_mas_goles
```

---
layout: default
level: 2
title: Creación al interior de una clase
hideInToc: false
---

# Creación al interior de una clase

Otra cosa que podemos querer hacer es que el condominio cree las casas. Para esto, debemos definir un método que cree una instancia de la clase `Casa` y la agregue a la lista de casas del condominio.

```python

class Condominio:
    def __init__(self, direccion, casas):
        self.direccion = direccion
        self.casas = casas # Esta lista tendrá instancias de la clase Casa
    def agregar_casa(self, casa):
        """Recibe una instancia de la clase Casa y la agrega a la lista de casas del condominio."""
        self.casas.append(casa)
    def crear_casa(self, direccion, n_ventanas, color):
        """Recibe los datos de una casa y crea una instancia de la clase Casa,
        la agrega a la lista de casas del condominio y la retorna."""
        casa = Casa(direccion, n_ventanas, color)
        self.agregar_casa(casa)
        return casa
```

---
layout: default
level: 2
title: Creación al interior de una clase
hideInToc: true
---

# Creación al interior de una clase

También podemos definir la creación de clases en el constructor de una clase. Por ejemplo podemos crear una clase Auto que tenga un manubrio, un estanque y cuatro ruedas.
Para esto, podemos crear un constructor que cree las instancias de las clases `Manubrio`, `Estanque` y `Rueda` y las guarde en atributos de la clase `Auto`. Primero debemos definir las clases `Manubrio`, `Estanque` y `Rueda`.

```python
class Manubrio:
    def __init__(self, material, color):
        self.material = material
        self.color = color
class Estanque:
    def __init__(self, capacidad_maxima):
        self.capacidad_maxima = capacidad_maxima
        self.capacidad_actual = capacidad_maxima
    def gastar(self, litros):
        """Recibe un número de litros y los gasta del estanque."""
        self.capacidad_actual -= litros
class Rueda:
    def __init__(self):
        self.inflacion = 100
```

---
layout: default
level: 2
title: Creación al interior de una clase
hideInToc: true
---

# Creación al interior de una clase

Ahora podemos definir la clase `Auto` que tiene un manubrio, un estanque y cuatro ruedas.

```python
class Auto:
    def __init__(self):
        self.manubrio = Manubrio("Cuero", "Rojo") # Manubrio de cuero rojo
        self.estanque = Estanque(50) # Capacidad máxima de 50 litros
        self.ruedas = [Rueda(), Rueda(), Rueda(), Rueda()] # Cuatro ruedas
    def avanzar(self, distancia):
        """Recibe una distancia y hace avanzar el auto esa distancia."""
        self.estanque.gastar(distancia * 0.1) # El auto gasta 0.1 litros por kilómetro
        for rueda in self.ruedas:
            rueda.inflacion -= 0.1 # Las ruedas se desinflan 0.1% por kilómetro
```

Luego podemos crear un auto y hacerlo avanzar 100 kilómetros. Y ver que el estanque se gastó 10 litros y las ruedas se desinflaron 10%.

```python
auto = Auto()
auto.avanzar(100)
print(auto.estanque.capacidad_actual) # Accedemos primero al estanque y luego a su capacidad actual
print(auto.ruedas[0].inflacion)
# Accedemos primero a la lista de ruedas y luego a la primera rueda y luego a su inflación
```

---
layout: default
level: 2
title: Creación al interior de una clase - Ejemplo
hideInToc: false
---

# Creación al interior de una clase
## Otro ejemplo

Para una clase `Mazo` con una lista de cartas, definimos un constructor que cree un mazo con esas cartas.

```python
class Carta:
    def __init__(self, pinta, numero):
        self.pinta = pinta
        self.numero = numero
class Mazo:
    def __init__(self):
        self.cartas = []
        for pinta in ["Pica", "Corazón", "Diamante", "Trébol"]:
            for numero in range(1, 14):
                if numero == 1:
                    carta = Carta(pinta, "A")
                elif numero == 11:
                    carta = Carta(pinta, "J")
                elif numero == 12:
                    carta = Carta(pinta, "Q")
                elif numero == 13:
                    carta = Carta(pinta, "K")
                else:
                    carta = Carta(pinta, numero)
                self.cartas.append(carta)
```

---
layout: default
level: 2
title: Ejemplo avanzado
hideInToc: false
---

# EcoSushi (Ex 2017-1 P3)
La empresa EcoSushi 🍣 te ha encargado que la ayudes a organizar su proceso de despacho de pedidos, para lo cual utiliza repartidores en bicicleta. Cada pedido tiene el nombre del cliente, una dirección de despacho, una descripción (que indica lo que el cliente pidió) y una coordenada, x e y,
asociadas a la dirección del cliente. Existe un despachador que organiza el reparto, el cual recibe los pedidos una vez que están terminados y los distribuye a los repartidores respetando el orden en que estuvieron listos. Para decidir a qué repartidor asignará un pedido, el despachador calcula la
distancia entre el pedido que quiere asignar (pedido actual) y el último pedido en la lista de cada repartidor (pedido anterior), asignándoselo a aquel repartidor con el que el pedido tiene una menor distancia (si hay varios con la misma distancia mínima, se le asigna al que va primero en la lista).
La función de distancia que usa el despachador es:

$$
\sqrt{\left(x_{\text{pedido actual}} - x_{\text{pedido anterior}}\right)^2 + \left(y_{\text{pedido actual}} - y_{\text{pedido anterior}}\right)^2}
$$

---
layout: center
level: 2
title: Ejemplo avanzado
hideInToc: true
---

# Objetivo
Para ayudar a la empresa EcoSushi, deberás implementar las siguientes clases:

- La clase `Pedido`, con el método `__init__(self, nombre, direccion, x, y, descripcion)`, donde ***nombre*** es un *string* con el nombre del cliente, ***direccion*** es un *string* con la dirección del cliente, ***x*** e ***y*** son *ints* representando la coordenada de la ubicación de la dirección
    del cliente y ***descripcion*** es un *string* con una descripción del pedido.

---
layout: default
level: 2
title: Ejemplo avanzado
hideInToc: true
---

- La clase `Repartidor`, con los siguientes métodos:
  - `__init__(self, nombre)`: pero que además tiene como atributo la lista de pedidos que debe despachar.
  - `agregar_pedido(self, pedido)`: que agrega un pedido al repartidor al final de la lista.
  - `distancia_ultimo_pedido(self, pedido_parametro)`: que retorna la distancia entre el último pedido de la lista del repartidor y el ***pedido_parametro*** de la clase `Pedido` que es recibido como parámetro. Cuando no hay ningún pedido en la lista del repartidor, este método deber retornar cero.
  - `mostrar_ruta(self)`: que muestra la ruta del repartidor imprimiendo una línea por cada pedido, mostrando el nombre del repartidor, el nombre del cliente y la dirección del cliente

    - Un ejemplo de lo que debería imprimir por pedido es el siguiente:

      `Jose Juan Direccion 1`

    donde "Jose" es el nombre del repartidor, "Juan" es el nombre del cliente y "Direccion 1" es la dirección del pedido.

---
layout: default
level: 2
title: Ejemplo avanzado
hideInToc: true
---

- La clase `Despachador`, con los siguientes métodos:
  - `__init__(self)`: que tiene como atributos la lista de pedidos que quiere despachar y la lista de repartidores.
  - `agregar_pedido(self, pedido)`: este método solamente agrega un pedido de la clase `Pedido` al despachador, aún no lo asigna a los repartidores.
  - `agregar_repartidor(self, repartidor)`: que agrega un repartidor de la clase `Repartidor`.
  - `despachar(self)`: que distribuye todos los pedidos de la lista entre los repartidores utilizando las reglas indicadas anteriormente, utilizando el método `distancia_ultimo_pedido` de la clase `Repartidor` para tomar la decisión de a quién asignar el pedido (claro está,
  quien tenga la menor distancia). Cuando los pedidos han sido asignados a los repartidores, la lista de pedidos debe quedar vacía (sin pedidos por asignar).

---
layout: default
level: 2
title: Ejemplo avanzado
hideInToc: true
---

### Input Format
¡El manejo de inputs! 🎉 Solo debes implementar las clases pedidas.

De todas formas, te explicamos cómo leer los testcases por si tienes dudas en el output. El input de este ejercicio es como si fuera una extensión del código que implementaste o como si fuera una terminal de python. El programa dejará de leer el input hasta que se encuentre con el *string* `"END"`.
Un ejemplo sería:

```python
r1 = Repartidor("Jose")
END
```

donde se instancia un objeto de la clase "`Repartidor`" con el atributo nombre igual a "`Jose`". Esta instancia se guarda en la variable `r1`. Luego, no se sigue leyendo el input por el "`END`".

---
layout: default
level: 2
title: Ejemplo avanzado
hideInToc: true
---

### Constraints

- Ningún *string* tendrá tildes.
- Siempre habrá al menos un repartidor y al menos un pedido.
- Siempre los pedidos tendrán un nombre, direccion, coordenada x, coordenada y y una descripción.
- Los repartidores siempre tendrán un nombre.
- Se llamarán las clases y métodos con los nombres asignados anteriormente.
- Si dos repartidores resultan tener la misma distancia mínima al pedido (como cuando ningún repartidor tiene pedidos asignados), el pedido se le asigna al primer repartidor que aparezca en la lista.
- Un repartidor sin pedidos asignados tiene distancia 0 a cualquier pedido.

### Output Format
Lo que se entregue en el output será lo que se especifique en el método `mostrar_ruta()` de los `Repartidores` cuando sea llamado en el input.

---
layout: default
level: 2
title: Ejemplo avanzado
hideInToc: true
---

### Ejemplos
#### Input Test Case 00

```python
#Se crean los repartidores
r1=Repartidor("Jose")

#Se crea el despachador
d=Despachador()

#Se crean los pedidos
p1=Pedido("Juan","Direccion 1",10,10,"Ramen")
p2=Pedido("Gabriela","Direccion 2",20,20,"Sashimi")

#Se agregan los pedidos y repartidores al despachador
d.agregar_pedido(p1)
d.agregar_pedido(p2)
d.agregar_repartidor(r1)

#Se ejecuta el metodo despachar()
d.despachar()

#Pedimos que nos muestren las rutas de los repartidores
r1.mostrar_ruta()
END
```

---
layout: default
level: 2
title: Ejemplo avanzado
hideInToc: true
---

<!-- markdownlint-disable-next-line -->
#### Output Test Case 00

```text
Jose Juan Direccion 1
Jose Gabriela Direccion 2
```

- **Explicación**: En el input se crea un repartidor, un despachador y 2 pedidos. Como no hay más repartidores, se les asignan al único repartidor. Finalmente se imprime `mostrar_ruta()` del único repartidor

---
layout: default
level: 2
title: Ejemplo avanzado
hideInToc: true
---

<!-- markdownlint-disable-next-line -->
#### Input Test Case 01

```python
#Se crean los repartidores
r1=Repartidor("Batman")
r2=Repartidor("Robin")

#Se crea el despachador
d=Despachador()

#Se crean los pedidos
p1=Pedido("Juan","Direccion 1",10,10,"Ramen")
p2=Pedido("Gabriela","Direccion 2",20,20,"Sashimi")
p3=Pedido("Josefa","Direccion 3",30,40,"Tempura")

#Se agregan los pedidos y repartidores al despachador
d.agregar_pedido(p1)
d.agregar_pedido(p2)
d.agregar_pedido(p3)
d.agregar_repartidor(r1)
d.agregar_repartidor(r2)

#Se ejecuta el metodo despachar()
d.despachar()

#Pedimos que nos muestren las rutas de los repartidores
r1.mostrar_ruta()
r2.mostrar_ruta()
END
```

---
layout: default
level: 2
title: Ejemplo avanzado
hideInToc: true
---

<!-- markdownlint-disable-next-line -->
#### Output Test Case 01

```text
Batman Juan Direccion 1
Robin Gabriela Direccion 2
Robin Josefa Direccion 3
```

- **Explicación**: Se crean dos repartidores y 3 pedidos, más el despachador. Todos son agregados al despachador y se ejecuta el método `despachar()`. Como ***"Batman"*** es el primero en la lista de despachadores, se le entrega el primer pedido.
  El segundo pedido se lo entregan a ***"Robin"*** porque es el siguiente en la lista sin tener pedidos asignados (***distancia = 0***) por lo que se le asigna ese pedido a él. El último pedido está a sqrt( (30 - 10)^2 + (40 - 10)^2) = 36.06 de distancia con respecto a ***"Batman"***,
  mientras que con respecto a ***"Robin"*** está a sqrt((20 - 10)^2 +(20 - 10)^2 ) = 14.14 de distancia, por lo que se le entrega este pedido a ***"Robin"*** por tener la menor distancia. Finalmente, se le pide que muestren las rutas de ambos repartidores.

---
layout: default
level: 2
title: Ejemplo avanzado - Solución
hideInToc: false
---

# Solución

```python {1-15|17-30|31-48|50-64|65-70|71-87} {lines: true, maxHeight: '350px'}
class Pedido:
    def __init__(self, nombre, direccion, x, y, descripcion):
        """
        Crea un objeto Pedido con los siguientes atributos:
        nombre: nombre del cliente que realiza el pedido
        direccion: dirección de entrega del pedido
        x: coordenada x de la dirección de entrega
        y: coordenada y de la dirección de entrega
        descripcion: descripción del pedido
        """
        self.nombre = nombre
        self.direccion = direccion
        self.x = x
        self.y = y
        self.descripcion = descripcion

class Repartidor:
    def __init__(self, nombre):
        """
        Crea un objeto Repartidor con los siguientes atributos:
        nombre: nombre del repartidor
        """
        self.nombre = nombre
        self.pedidos = []
    def agregar_pedido(self, pedido):
        """
        Agrega un objeto Pedido a la lista de pedidos del Repartidor
        pedido: objeto Pedido a agregar
        """
        self.pedidos.append(pedido)
    def distancia_ultimo_pedido(self, pedido_parametro):
        """
        Calcula la distancia entre el último pedido del Repartidor y un objeto Pedido dado
        pedido_parametro: objeto Pedido a comparar con el último pedido del Repartidor
        entrega un fload que es la distancia entre los dos puntos
        """
        if len(self.pedidos) == 0:
            return 0
        else:
            pedido_anterior = self.pedidos[-1]
            return ((pedido_parametro.x - pedido_anterior.x)**2 + (pedido_parametro.y - pedido_anterior.y)**2)**0.5
    def mostrar_ruta(self):
        """
        Muestra la ruta del Repartidor, imprimiendo en consola el nombre del Repartidor,
        el nombre y dirección de entrega de cada Pedido en su lista de pedidos
        """
        for pedido in self.pedidos:
            print(self.nombre, pedido.nombre, pedido.direccion)

class Despachador:
    def __init__(self):
        """
        Crea un objeto Despachador con las siguientes listas vacías:
        - pedidos: lista de objetos Pedido
        - repartidores: lista de objetos Repartidor
        """
        self.pedidos = []
        self.repartidores = []
    def agregar_pedido(self, pedido):
        """
        Agrega un objeto Pedido a la lista de pedidos del Despachador
        pedido: objeto Pedido a agregar
        """
        self.pedidos.append(pedido)
    def agregar_repartidor(self, repartidor):
        """
        Agrega un objeto Repartidor a la lista de repartidores del Despachador
        repartidor: objeto Repartidor a agregar
        """
        self.repartidores.append(repartidor)
    def despachar(self):
        """
        Asigna cada Pedido en la lista de pedidos del Despachador al Repartidor más cercano,
        y agrega el Pedido a la lista de pedidos del Repartidor asignado.
        Luego, vacía la lista de pedidos del Despachador.
        """
        for pedido in self.pedidos:
            distancias = []
            for repartidor in self.repartidores:
                distancias.append(repartidor.distancia_ultimo_pedido(pedido))
            min_distancia = None
            for i in range(len(distancias)):
                if min_distancia == None or distancias[i] < min_distancia:
                    min_distancia = distancias[i]
                    repartidor_asignado = self.repartidores[i]
            repartidor_asignado.agregar_pedido(pedido)
        self.pedidos = []
```

---
layout: default
level: 2
title: Ejemplo avanzado - 2
hideInToc: false
---

# Album (Ex 2021-1 P2c)

Años de coleccionar láminas y completar álbumes te ha enseñado una cosa: la parte más complicada de este hobby es manejar todas las láminas repetidas y conseguir aquellas que te faltan.
Para ayudarte a manejar tu colección decides crear un programa orientado a objetos que te muestre información de las láminas que has conseguido.

Se te entrega inicialmente la clase `Lamina`. Esta tiene los atributos `numero`, el cual es un id único que representa el número de la lámina; y el atributo `cantidad`, el cual guarda la cantidad de veces que tienes esa lámina.

Por ejemplo, si para el álbum "Los Pitufos" tienes la lámina número dos 3 veces y la lámina número cinco 1 vez, entonces tendrías dos instancias de la clase Lámina, la primera tendría los atributos `numero = 2` y `cantidad = 3`, y la segunda instancia tendría los atributos `numero = 5` y `cantidad = 1`.

Además se te entrega el método `esta_repetida(self)`, el cual retorna `True` si la lámina está repetida y `False` en caso contrario.

---
layout: center
level: 2
title: Ejemplo avanzado - 2
hideInToc: true
---

```python
class Lamina:
    def __init__(self, numero, cantidad):
        self.numero = numero
        self.cantidad = cantidad

    def esta_repetida(self):
        return self.cantidad != 1
```

Un álbum está formado por láminas solas y puzzles de distintos tamaños. Un puzzle es un conjunto de láminas que forman una imagen. La siguiente foto muestra un puzzle de seis láminas para el álbum "Moana", el cual tiene de la lámina 163 a la 168.

<img src="https://i.ibb.co/dcLRfyX/1.jpg" class="mx-auto w-50" />

---
layout: default
level: 2
title: Ejemplo avanzado - 2
hideInToc: true
---

Se te entrega la clase `Puzzle`, la cual tiene dos atributos, `numero_inicial` y `numero_final`. La variable `numero_inicial` es el número de la primera lámina en el puzzle y `numero_final` es el número de la última lámina del puzzle. En el ejemplo anterior estos valores serían 163 y 168 respectivamente.

```python
class Puzzle:
    def __init__(self, n_inicial, n_final):
        self.numero_inicial = n_inicial
        self.numero_final = n_final
```

Se te entrega también la clase `Album`, la cual tiene los atributos: `nombre` (e.g. "Moana"), una lista de instancias de `Puzzle` que comienza inicialmente vacía, y un entero `n`, el cual representa la cantidad de láminas distintas que tiene el álbum.

```python
class Album:
    def __init__(self, nombre, n):
        self.nombre = nombre
        self.puzzles = []
        self.n = n

    def agregar_puzzle(self, n_inicial, n_final):
        p = Puzzle(n_inicial, n_final)
        self.puzzles.append(p)
```

---
layout: default
level: 2
title: Ejemplo avanzado - 2
hideInToc: true
---

Finalmente se te entrega una última clase `Coleccion`. Esta clase tiene como atributos: una lista de instancias de la clase `Lamina` inicialmente vacía, que representa las láminas que tienes, y una instancia de la clase `Album` a la cual pertenece la colección.

```python
class Coleccion:
    def __init__(self, a):
        self.laminas = []
        self.album = a
```

## Parte C

Deberás agregarle a la clase `Colección` el método `numero_puzzles_completos(self)`, el cual no recibe parámetros. Este método deberá **retornar** el número de puzzles completos del álbum que tienes. Un puzzle se considera completo si tienes en tu colección todas las láminas que este necesita.

**NOTA: Para esta parte debes también agregar el método agregar_lamina(self, num) creado en la parte A.**

---
layout: default
level: 2
title: Ejemplo avanzado - 2
hideInToc: true
---

## Input

Al igual que en los sets de *OOP*, el input a tu programa serán líneas de código. **El llamado a inputs ya está hecho por nosotros**, tú solamente deberás definir el método `numero_puzzles_completos(self)`. De todos modos, te explicamos a continuación el contenido de los inputs,
para que puedas interpretar el output de tus respuestas en caso de dudas.

```text
entero N que representa la cantidad de líneas de input
N líneas de código que se van a ejecutar en el mismo orden que se encuentran
```

## Output

El output es automático, se imprimirá toda la información de la cual se haga `print()` en el input.

## Constraints

- Todos los álbumes tendrán al menos un puzzle
- Todos los puzzles tienen al menos una lámina

---
layout: two-cols
level: 2
title: Ejemplo avanzado - 2
hideInToc: true
---

## Ejemplo Test Case 00

### Input

```python
31

a = Album('Moana',10)
a.agregar_puzzle(1, 7)

c = Coleccion(a)

c.agregar_lamina(0)
c.agregar_lamina(0)
c.agregar_lamina(1)
c.agregar_lamina(1)
c.agregar_lamina(2)
c.agregar_lamina(2)
c.agregar_lamina(2)
c.agregar_lamina(3)
c.agregar_lamina(3)
c.agregar_lamina(4)

print('Puzzles completos:',c.numero_puzzles_completos())
```

::right::

```python

c.agregar_lamina(6)
c.agregar_lamina(7)
c.agregar_lamina(7)
c.agregar_lamina(7)
c.agregar_lamina(8)
c.agregar_lamina(8)
c.agregar_lamina(9)
c.agregar_lamina(9)

print('Puzzles completos:',c.numero_puzzles_completos())

for lamina in c.laminas:
    print('Lamina:', lamina.numero, 'Cantidad:', lamina.cantidad)
```

---
layout: default
level: 2
title: Ejemplo avanzado - 2
hideInToc: true
---

### Output

```text
Puzzles completos: 0
Puzzles completos: 0
Lamina: 0 Cantidad: 2
Lamina: 1 Cantidad: 2
Lamina: 2 Cantidad: 3
Lamina: 3 Cantidad: 2
Lamina: 4 Cantidad: 1
Lamina: 6 Cantidad: 1
Lamina: 7 Cantidad: 3
Lamina: 8 Cantidad: 2
Lamina: 9 Cantidad: 2
```

### Explicación

Observar que el puzzle requiere láminas desde la 1 a la 7, pero en ningún momento se agregó la lámina 5, por lo que el puzzle no está completo.

---
layout: default
level: 2
title: Ejemplo avanzado - 2 - Solución
hideInToc: false
---

# Solución

```python {1-12|14-22|24-41|43-59} {lines: true, maxHeight: '350px'}
class Lamina:
    def __init__(self, numero, cantidad):
        self.numero = numero
        self.cantidad = cantidad

    def esta_repetida(self):
        return self.cantidad != 1

class Puzzle:
    def __init__(self, n_inicial, n_final):
        self.numero_inicial = n_inicial
        self.numero_final = n_final

class Album:
    def __init__(self, nombre, n):
        self.nombre = nombre
        self.puzzles = []
        self.n = n

    def agregar_puzzle(self, n_inicial, n_final):
        p = Puzzle(n_inicial, n_final)
        self.puzzles.append(p)

class Coleccion:
    def __init__(self, a):
        self.laminas = []
        self.album = a

    def agregar_lamina(self, num):
        """
        Agrega una lámina a la colección.
        Si la lámina ya está en la colección, aumenta en uno la cantidad de esa lámina.
        Si la lámina no está en la colección, la agrega con cantidad 1.
        """
        encontrado = False
        for lamina in self.laminas:
            if lamina.numero == num:
                lamina.cantidad += 1
                encontrado = True
        if not encontrado:
            self.laminas.append(Lamina(num, 1))

    def numero_puzzles_completos(self):
        """
        Retorna el número de puzzles completos del álbum.
        Un puzzle se considera completo si tienes en tu colección todas las láminas que este necesita.
        """
        numeros_laminas = []
        for lamina in self.laminas:
            numeros_laminas.append(lamina.numero)
        puzzles_completos = 0
        for puzzle in self.album.puzzles:
            completo = True
            for i in range(puzzle.numero_inicial, puzzle.numero_final + 1):
                if i not in numeros_laminas:
                    completo = False
            if completo:
                puzzles_completos += 1
        return puzzles_completos
```

---
layout: center
level: 1
title: Spoiler repaso
hideInToc: true
---

# Coming soon...

Esta es toda la materia de OOP que entra en el curso. Ahora nos queda el último contenido de la materia que ordenamiento. Veremos:

1. ¿Qué es ordenamiento?
2. ¿Por qué es importante?
3. ¿Cómo ordenar eficientemente datos?

Nos vemos en la próxima clase.
