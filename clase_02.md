---
theme: apple-basic
info: |
  ## Clase 02 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación
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
---

# Algoritmos
## Clase 02 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Asistencia

1. Por mientras, va a ser con slido

<img class="w-50 mx-auto" src="/content/clase_02/qr_clase_02.png" />

---
layout: center
level: 1
title: Grupo telegram
hideInToc: true
---
# Grupo telegram

Informal pero, oficial.

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Anuncios

1. Primer set se publica la próxima semana (recordar bonus por hacerlos a tiempo)
   - Para los primeros 3 sets, se puede entregar hasta 1 semana después. Publicaremos un calendario con las fechas máximas para cada bonus.
2. SAP comienzan **en dos semanas**
3. Para **todo** lo de este curso (incluso slido, deben usar su correo UC)

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

<div class="slidev-toc" style="column-count: 1;"><ol class="slidev-toc-list slidev-toc-list-level-1"><li class="slidev-toc-item"><a class=""><div><p>Presentación</p></div></a><ol class="slidev-toc-list slidev-toc-list-level-2"><li class="slidev-toc-item"><a class=""><div><p>Quiénes somos</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a class=""><div><p>La coordinación</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a class=""><div><p>Cómo se evalúa el curso</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a class=""><div><p>Nota de participación</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a class=""><div><p>Cómo será el curso</p></div></a><!--v-if--></li></ol></li><li class="slidev-toc-item"><a class=""><div><p>Ética e Integridad Académica</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a class=""><div><p>Introducción al curso</p></div></a><ol class="slidev-toc-list slidev-toc-list-level-2"><li class="slidev-toc-item"><a class=""><div><p>Qué es la computación</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a class=""><div><p>Objetivos del curso</p></div></a><!--v-if--></li><li class="slidev-toc-item"><a class=""><div><p>Tips</p></div></a><!--v-if--></li></ol></li></ol></div>

---
layout: section
level: 1
title: Calibración
---
# Calibración

¿Qué es un algoritmo?

¿Qué es un programa?

¿Qué es un lenguaje de programación?

¿Qué es software?

---
layout: center
level: 3
title: ¿Quiénes son ustedes?
hideInToc: true
---

# ¿Qué tanto saben programar?

<img class="w-50 mx-auto" src="/content/clase_02/qr_clase_02.png" />

---
layout: center
level: 2
title: Agenda
hideInToc: true
---

# Agenda

<Toc maxDepth=2 />

---
layout: cover
level: 2
title: Motivación
hideInToc: false
clicks: 4
---
# Motivación
## ¿Por qué es necesario el pensamiento algorítmico?
### ¿Por qué es necesario pensar en pasos ordenados?

<ImgGrid :images="['content/clase_02/mess_kitchen.avif', 'content/clase_02/cau_cau.jpeg', 'content/clase_02/music.jpeg']" do-clicks class="w-full" v-click-hide="4"/>
<img class="w-60 mx-auto absolute left-80 top-50" src="/content/clase_02/manual.jpeg" v-click="4"/>

---
layout: center
level: 3
title: ¿Qué beneficios tiene el pensamiento algorítmico?
hideInToc: true
---
# ¿Qué beneficios tiene el pensamiento algorítmico?

<img class="w-90 mx-auto rounded" src="/content/clase_02/formula_1.gif" />

El pensamiento algorítmico es una herramienta que nos permite resolver problemas de manera ordenada y sistemática.

---
layout: center
level: 3
title: ¿Cómo se resuelve un problema?
hideInToc: true
---

# ¿Cómo se resuelve un problema?

Al final del día, muchos problemas pueden resolverse con un algoritmo.

```mermaid {theme: 'neutral', scale: 0.8}
flowchart LR
  id1((Análisis del problema)):::orange --> id2((Diseño del algoritmo)):::orange  --> id3((Codificación algoritmo)):::orange
  classDef orange fill:#fb923c,stroke:#c2410c,color:#7c2d12
```

<p class="ml-10 text-6xl">😖 -> &nbsp;🧑🏼‍💻 -> &nbsp; 🤩</p>

---
layout: section
level: 1
title: Qué es un algoritmo
hideInToc: false
---

# ¿Qué es un algoritmo?
## Y por qué es importante

---
layout: default
level: 2
title: Acerca de los algoritmos
hideInToc: false
---
# Acerca de los algoritmos

- Hay cursos enteros dedicados a este tema, como “Diseño y Análisis de Algoritmos”
- Nosotros nos enfocaremos en el pensamiento algorítmico, introduciendo conceptos básicos para poder resolver a la velocidad de la luz ⚡️
- Los algoritmos son una herramienta bastante estudiada que permiten dividir un problema en pasos ordenados más sencillos de abordar y ordenar.

---
layout: center
level: 2
title: Definición de algoritmo
hideInToc: false
---
# Definición de algoritmo

- Un algoritmo es un **conjunto de instrucciones o reglas definidas** y no ambiguas, **ordenadas y finitas** que permite **solucionar un problema**, realizar un cómputo, procesar datos y llevar a cabo otras tareas o actividades.

- Por ejemplo, para que **un computador** pueda realizar una suma, **debe seguir un algoritmo que le indique cómo hacerlo**.

- ¿ Qué algoritmos (además de los de un computador) se les ocurren de la vida diaria?

<div class="flex justify-center">
  <span class="text-6xl" v-click="1">🧑‍🍳</span>
  <span class="text-6xl" v-click="2">👷</span>
  <span class="text-6xl" v-click="3">🗺️</span>
  <span class="text-6xl" v-click="4">🪡</span>
</div>

---
layout: default
level: 2
title: Ejemplos de algoritmos
hideInToc: true
---
# Ejemplos de algoritmos

<ImgGrid :images="['content/clase_02/lego.jpeg', 'content/clase_02/musica.jpg', 'content/clase_02/terremoto.png']" do-clicks class="sm:100 md:w-300" v-click-hide="4"/>

---
layout: center
level: 2
title: # Cómo programar un algoritmo
hideInToc: true
---
# ¿Qué es un algoritmo?
<div class="flex justify-center">
<img src="/content/clase_02/lenguaje_prog.jpeg" class="w-50"/>
</div>

- Un computador al igual que un humano, necesita instrucciones para realizar una tarea. Y para ello es necesario _hablarle_.

- Para entregarle un algoritmo a un computador, es necesario utilizar un **lenguaje de programación**.

---
layout: statement
level: 2
title: Definicion
hideInToc: true
---

# Lenguaje de programación

Un lenguaje de programación es un **lenguaje formal** que especifica una serie de instrucciones para que una computadora produzca diversas clases de datos.

---
layout: section
level: 1
title: Cómo armar un algoritmo
hideInToc: false
---

# Cómo armar un algoritmo

---
layout: two-cols
level: 2
title: Proceso de creación de un algoritmo
---

# Proceso de creación de un algoritmo

Hay dos formas equivalentes de diagramar un algoritmo:

- A nivel de problema
- A nivel de computador

En este curso intentaremos siempre llevar los problemas a nivel de computador.

- **Entrada**: Recurso, dato(s) entrantes, que se necesitan para el algoritmo.
- **Proceso**: Pasos que debe seguir el algoritmo para resolver el problema.
- **Salida**: Resultado del algoritmo, que puede ser un dato o un recurso.

::right::

### A nivel de problema

```mermaid {theme: 'neutral', scale: 0.8}
flowchart LR
  id1((Análisis del problema)):::orange --> id2((Diseño del algoritmo)):::orange  --> id3((Codificación algoritmo)):::orange
  classDef orange fill:#fb923c,stroke:#c2410c,color:#7c2d12
```

### A nivel de computador

```mermaid {theme: 'neutral', scale: 0.8}
flowchart LR
  id1((Entrada o input)):::orange --> id2((Proceso o steps)):::orange  --> id3((Salida o output)):::orange
  classDef orange fill:#fb923c,stroke:#c2410c,color:#7c2d12
```

---
layout: center
level: 2
title: Ejemplo de algoritmo
hideInToc: true
---

# Ejemplo de algoritmo

<div class="flex justify-center">
<img src="/content/clase_02/ejemplo_compu.jpg" class="w-100"/>
</div>

- **Entrada**: Las letras del abecedario.
- **Proceso**: Por cada letra intentar una combinación de 5 letras. Repetir hasta que todas sean verdes.
- **Salida**: La combinación de letras que resultó en todas las letras verdes.

---
layout: two-cols
level: 2
title: Ejemplo de algoritmo - nota
hideInToc: true
---

# Ejemplo de algoritmo
## Calculemos nuestra nota del curso

### Sin criterios para aprobar, calculemos nuestra nota

1. **Entrada**: Notas de las evaluaciones.
2. **Proceso**: Calcular el promedio de las notas.
   1. Calcular NI
   2. Calcular NT
   3. Calcular NP
   4. Calcular NF
3. **Salida**: Nota final del curso.

::right::

```mermaid {theme: 'neutral', scale: 0.8}
flowchart TD;
    A([Entrada: Notas de las evaluaciones]) --> B[Calcular el promedio de las notas];
    B --> C[Calcular NI];
    C --> D[Calcular NT];
    D --> E[Calcular NP];
    E --> F[Calcular NF];
    F --> G([Salida: Nota final del curso]);
```

---
layout: center
level: 3
title: ¿Quiénes son ustedes?
hideInToc: true
---

# ¿Se les ocurre alguno?

<img class="w-50 mx-auto" src="/content/clase_02/qr_clase_02.png" />

---
layout: center
level: 2
title: Preguntas
hideInToc: true
---

# ¿Preguntas?

---
layout: section
level: 1
title: Ejercicios programación
hideInToc: false
---

# Ejercicios programación
## ¿Cómo programar un algoritmo?
### Primer acercamiento, programación en bloques

---
layout: center
level: 1
title: Salas SAP
hideInToc: true
---

# Cómo usar bloques

<img class="w-200 mx-auto" src="/content/clase_02/ejemplo.jpeg" />

---
layout: center
level: 1
title: Inscripción
hideInToc: true
---

# Inscripción
## Con correo UC (No iniciar sesión con cuenta de microsoft)
### **USAR NOMBRE REAL**

[https://forms.office.com/r/uPZZGPqEea](https://forms.office.com/r/uPZZGPqEea)

<img class="w-50 mx-auto" src="/content/clase_02/qr_form.png" />

---
layout: two-cols
level: 2
title: Ejercicios
hideInToc: true
---

# Comencemos
## 🌟 **5** Puntos de participación por hacerlos todos (haré 14)

- **Ejercicio 1**: <span v-click>¡Comiencen! (2 min).</span> <span v-click>Solución</span>
- **Ejercicio 2**: <span v-click>¡Comiencen! (2 min).</span> <span v-click>Solución</span>
- **Ejercicio 3**: <span v-click>¡Comiencen! (2 min).</span> <span v-click>Solución</span>
- **Ejercicio 4**: <span v-click>¡Comiencen! (2 min).</span> <span v-click>Solución</span>
- **Ejercicio 5**: <span v-click>¡Comiencen! (2 min).</span> <span v-click>Solución</span>
- **Ejercicio 6**: <span v-click>¡Comiencen! (2 min).</span> <span v-click>Solución</span>
- **Ejercicio 7**: <span v-click>¡Comiencen! (2 min).</span> <span v-click>Solución</span>
- **Ejercicio 8**: <span v-click>¡Comiencen! (2 min).</span> <span v-click>Solución</span>
- **Ejercicio 9**: <span v-click>¡Comiencen! (2 min).</span> <span v-click>Solución</span>

::right::

- **Ejercicio 10**: <span v-click>¡Comiencen! (5 min).</span> <span v-click>Solución</span>
- **Ejercicio 11**: <span v-click>¡Comiencen! (5 min).</span> <span v-click>Solución</span>
- **Ejercicio 12**: <span v-click>¡Comiencen! (5 min).</span> <span v-click>Solución</span>
- **Ejercicio 13**: <span v-click>¡Comiencen! (5 min).</span> <span v-click>Solución</span>
- **Ejercicio 14**: <span v-click>¡Comiencen! (5 min).</span> <span v-click>Solución</span>

**Tienen hasta el final de la clase para entregar todos los ejercicios**

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
