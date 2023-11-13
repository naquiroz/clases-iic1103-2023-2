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
layout: default
level: 2
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior

Vimos cómo definir clases y crear instancias de esas clases. Esencialmente, vimos cómo crear un tipo de dato nuevo en python.
Cada clase es un tipo de dato nuevo, que tiene sus propios atributos (son como variables asociados a una instancia de la clase) y métodos (son como funciones asociadas a una instancia de la clase).
Ahora, queremos ver como aprovechar esto en el resto de nuestro código para hacer cosas desde afuera y aún más avanzadas.

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
layout: default
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
        """Recibe un número de litros y aumenta el consumo de agua en ese número."""
        self.consumo_servicios_basicos[0] += litros
    def usar_ducha(self, minutos):
        """Recibe un número de minutos y gasta 10 litros de agua por minuto."""
        self.consumir_agua(minutos * 10)
        self.consumo_servicios_basicos[1] += minutos * 7
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
    def __str__(self):
        """Retorna una cadena de caracteres con el estado de la casa."""
        estado = "--- Casa en " + self.direccion + " de color " + self.color + ".\n"
        estado += "Puerta: "
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

condominio = Condominio("Benito Rebolledo #3030")
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
    def transferir_agua(self, casa_1, casa_2, litros):
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

## TODO

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

Otro ejemplo, para una clase `Mazo` que tiene una lista de cartas, podemos definir un constructor que reciba una lista de cartas y cree un mazo con esas cartas.

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
            self.cartas.append(Carta(pinta, numero))
```
