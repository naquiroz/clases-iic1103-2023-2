---
theme: apple-basic
info: |
  ## Primer clase de IIC1103 - 2023-2 - Sección 12
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
exportFilename: clase_01
---

# Bienvenidos/as a IIC1103

## Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
hideInToc: true
level: 1
---

# Diapos vs handout

🖥️ Diapos: Link en canvas

📄 Handout: Material complementario para tomar apuntes. Intentaré tener uno para cada clase.

---
layout: center
level: 1
title: Agenda
hideInToc: true
---

# Agenda

<Toc maxDepth=2 />

---
layout: section
level: 1
---

# Presentación

---
layout: center
level: 2
title: Quiénes somos
---

# Quiénes somos

---
layout: two-cols
level: 3
title: ¿Quién soy?
---

# ¿Quién soy?

- Nicolás Quiroz ([naquiroz@uc.cl](mailto:naquiroz@uc.cl))
- Ingeniero Civil Industrial en Computación e Ingeniería de Software, PUC
- Senior Software Eng. en [Unholster](https://unholster.com/) 2023-Now
  - Ex Software Eng. en [NotCo](https://notco.com/) 2019-2023
- Primera vez siendo profesor 🎓
- Tengo apenas 26 años 😮
- Fui coordinador del curso por 2+ años

::right::

<div class="block relative">
<img src="/me.jpeg" alt="Nicolás Quiroz" class="object-none drop-shadow-sm aspect-square rounded-full border-none object-top" />
</div>

---
layout: center
level: 4
---

# Un poco de mis gustos

- Juegos de mesa 🎲
  - Aventureros al Tren, King of Tokyo, Hand to Hand Wombat, etc.
  - Juego mensualmente un juego que se llama Gloomhaven
- Aprendiendo francés 🇫🇷
  - Aguante duolingo 🦉

---
layout: two-cols
level: 3
---

# Quién es su ayudante de cátedra

- **Pablo Aldana** ([pablo.aldana@uc.cl](mailto:pablo.aldana@uc.cl))
- Ingeniero Civil Computación, PUC (Sexto año)
- Ingeniero Generalista, Centrale Lille (Doble Diploma)
- Full Stack Eng. en [Klee Group](https://www.kleegroup.com/en) 2022
- Cuarta vez siendo ayudante del curso. (SAV, Docencia)

### Hobbies

- Jugar y crear videojuegos 🎮

::right::

<div class="block relative">
<img src="/pablo_aldana.jpeg" alt="Pablo Aldana" class="object-none drop-shadow-sm aspect-square rounded-full border-none object-top" />
</div>

---
layout: two-cols
level: 3
---

# Quién es su ayudante de bienestar

- **Kris Pulgar** ([kmpulgar@uc.cl](mailto:kmpulgar@uc.cl))
- En 4to año de Ingeniera Civil Mecánica
- Es mi primera vez siendo ayudante de este curso
- Coordinadora del cuerpo de tutores y de GoIng

### Hobbies

- Pintar 🖌️, escribir poemas 🖊️, ir al teatro 🎭 y tocar el bajo 🎸

### Dato freak (kinda cringe)

- No siento nada en la mitad derecha de mi lengua

::right::

<div class="block relative">
<img src="/kris.jpeg" alt="Kris pulgar" class="object-none drop-shadow-sm aspect-square rounded-full border-none object-top" />
</div>

---
layout: center
level: 3
title: ¿Quiénes son ustedes?
hideInToc: true
---

# ¿Quiénes son ustedes?

<img class="w-50 mx-auto" src="/content/QR_clase.png" />

---
layout: center
level: 2
---

# La coordinación

---
layout: center
level: 3
title: La coordinación - detalle
---

# La coordinación

- 120+ ayudantes
- 5 coordinadores/as
- Equipo muy grande y coordinado
- Curso con más de 1200 alumnos
- **Fechas, notas sanciones, justificaciones, corren
  por el equipo de coordinación.**
- Fechas de sets y puntos de participación es lo único que
  vemos yo con mi ayudante de cátedra

---
layout: iframe
hideInToc: true
title: La coordinación - organigrama
level: 3
url: https://miro.com/app/embed/uXjVMzmlR2k=/?pres=1&frameId=3458764560945730056&embedId=396423725490
---

---
layout: center
level: 2
title: Cómo se evalúa el curso
---

# Cómo se evalúa el curso

---
layout: two-cols
level: 3
title: Resumen
---

# Cómo se evalúa el curso
## Cálculo de la nota
### 90% de la **coordinación**

<Coordinacion />

- **Pruebas (I1, I2)**: 2 interrogaciones. **30%**
- **Examen (E)**: 1 examen (no reprobatorio) **30%**
$$NI = (0.15 \cdot (I1 + I2) + 0.3 \cdot E ) \div 0.6 $$
🚨 **Requisito 1**: $NI \geq 4.0$

- **Tareas (T1, T2, T3)**: 3 tareas en el semestre. **30%**
$$NT = (0.1 \cdot (T1 + T2 + T3)) \div 0.3 $$

🚨 **Requisito 2**: $NT\geq 4.0$

::right::

<div class="h-19"/>

### 10% de la **sección**
<YoYCatedra />

- **Bitpoints**: Nota de participación (**NP**)
  - Calculada por mi y por Pablo
  - Exclusivo para esta sección (sección 12)
  - Evaluará ejercicios de clase, participación en clase, etc.
  - Evaluará ejercicios de sets, simulacros, y asistencia a actividades

---
layout: center
level: 2
hideInToc: true
title : Cómo se calcula la nota final
---

# Cómo se calcula la nota final

$$NF = 0.6 \cdot NI + 0.3 \cdot NT + 0.1 \cdot NP$$

Para aprobar: Requisito 1 & 2 y $NF \geq 4.0$

👀 De igual manera, revisar el programa del curso.

---
layout: center
level: 2
title: Nota de participación
hideInToc: false
---

# Nota de participación

---
layout: default
level: 3
---

# Bitpoints
## Qué son y cómo se calculan

- Puntos para la participación de la sección. Se entregan por realizar:
  - **Sets de ejercicios**: Ejercicios que realiza coordinación y ayudantes. Se entregarán puntos por completar un set
    al 90% o más. Se entregará bonus por completarlo en la semana que se publica, o bien antes de la evaluación correspondiente (I1, I2, Examen)
  - **Participación en clases**: Ejercicios que realizo yo en clases
  - **Asistencia a clases**: Asistencia a clases, controlado por canvas con bloqueo por IP (deben estar en la sala de clases)
  - **Asistencias a salas de ayudante SAP**: Asistencia a salas de ayudante SAP, a través de control de asistencia via los/as ayudantes. Más instrucciones vendrán llegando las instancias.
  - **Actividades de bienestar**: Actividades que el equipo de bienestar realizará durante el semestre

---
layout: center
level: 2
hideInToc: true
---

# Tabla de Bitpoints

| Actividad | BitPoints por actividad |
| --- | --- |
| Sets (puntos base) | 20 |
| Sets (bonus en la semana de publicación) | 10 |
| Sets (bonus antes de la prueba) | 6 |
| Actividades de Bienestar | 5-10 |
| Asistencia a Clases | 4 |
| Actividades en Clase | 2-5 |
| Asistencia a Salas de Ayudantes | 2 |

💡 Notar que son el doble de clases que sets, y pocas actividades de bienestar.

---
layout: center
level: 2
hideInToc: true
---

# Cálculo nota de participación

- **El 7.0 está en 490 bitpoints**

💡 Con hacer todos los sets a tiempo se llega a una nota de 6.0

---
layout: center
level: 2
---

# Cómo será el curso

---
layout: default
level: 3
title: Clearn
hideInToc: true
---

# <span class="flex flex-row items-center "> Clearn <LogoMini class="m-2" /> </span>
## Plataforma oficial del curso
### Fue desarrollada y fundada en el curso

💯 Plataforma que se va a usar para todo el curso: Pruebas, tareas, sets, bitpoints, etc.

Desarrollada por el equipo de coordinación y ayudantes del curso, además de practicantes.

Cuenta con herramientas muy útiles para facilitar el aprendizaje **honesto**

El equipo de coordinación de desarrollo está liderado por:

<CoordinacionDes />

---
layout: default
level: 3
---

# Cómo son las pruebas

- Tres pruebas: I1, I2, Examen
- Todas las pruebas **son en computador** 💻
- Se utilizará la plataforma <span class="text-purple-500 font-bold">Clearn</span>
- Más instrucciónes vendrán llegando a la evaluación. Coordinación enviará _vaaaarios_ anuncios al respecto.
- Deben traer su propio computador, habrán muchos enchufes y zapatillas.
- Deben asegurarse que su computador tenga 🔋 suficiente para la evaluación.

ℹ️ Si no cuentan con computador propio, pueden ir a un laboratorio asignado

ℹ️ El examen **no es reprobatorio**

---
layout: center
level: 3
hideInToc: true
---

# Cómo son las tareas

⏲️ 16 días (2 semanas y un poco más)

💻 Son en computador, en Clearn.

🚫 No son justificables.

1️⃣ **SON INDIVIDUALES**

> ¿Ni si quiera un poquito de ayuda?

**NO. NADA. ZERO. NULO** <span v-click>🤠</span>

---
layout: center
level: 3
---

# Cómo serán las clases

🔴 Programación en vivo, en las diapositivas.
**No recomiendo programar conmigo al mismo tiempo**

📃 _Idealmente_, si el timing lo permite, tendrán un handout del cual podrán tomar apuntes.

✅ **Altamente recomendado asistir**. Asistir entrega puntos para la nota de participación.

🏋🏼‍♂️ **Altamente recomendado** ejercitar los ejercicios de clase. Resolver los ejercicios de clase entrega puntos para la nota de participación.

---
layout: center
level: 3
---

# Cómo serán las SAP

- **SAP** 🧑🏼‍💻: Salas de Ayudantes Presenciales
- Instancia para ejercitar y resolver dudas de sets, ejercicios de la sección,
  tareas y más.
- **No son obligatorias**. Pero **son altamente recomendadas**. Asistir entrega
  puntos para la nota de participación.
- **No son clases**. No se explicará materia nueva. Se resolverán dudas particulares
  y se ejercitará.
- Disponibles de lunes a viernes, módulos 5 y 6. **Para obtener puntos por asistencia a SAP deben asistir a al menos dos módulos** en
  la semana. (Pueden no ser consecutivos)

ℹ️ El equipo de coordinación enviará un anuncio con más detalles cuando vayan a comenzar
(en dos semanas aproximadamente)
---
layout: center
level: 3
---

# Cómo serán las actividades de bienestar

- 🧘🏼‍♀️ Actividades que el equipo de bienestar realizará durante el semestre
- Buscan contribuir a la salud mental de los estudiantes, conocer a sus compañeros,
  conocer la universidad y conocer los recursos que la universidad ofrece.
- **No son obligatorias**. Pero —especialmente para estudiantes nuevos— pueden ser
  muy útiles.
- **No son clases**. No se explicará materia nueva.
- La asistencia a estas actividades entrega puntos para la nota de participación.

---
layout: section
level: 1
title: Ética e Integridad Académica
---

# Integridad académica
## “Cómo hacer que me expulsen de la U”

---
layout: center
level: 2
title: Ejemplo 1
hideInToc: true
---

# Histórico

<img class="rounded w-100" src="/content/asado_familiar.png" />

---
layout: center
level: 2
title: Ejemplo 1
hideInToc: true
---

<img class="rounded w-100" src="/content/chat_gpt.jpeg" />

---
layout: statement
level: 2
title: Reprobados
hideInToc: true
---

# Los sistemas son muy avanzados

## El curso cuenta con un sistema de detección que se usa en las mejores universidades del mundo.

### Complementado con sistemas internos que detectan similitudes entre estudiantes.

---
layout: center
level: 3
title: Sanciones
hideInToc: true
---

# Sanciones

Las sanciones son:

- **Reprobar el curso** (con nota mínima de 1.1)

Luego, la universidad podría aplicar sanciones adicionales, como:

<v-clicks>

- No poder ser deportista seleccionado/a de la universidad
- No poder tener cargos de representación estudiantil en la universidad
- No poder irse de intercambio
- No poder ser ayudante del curso
</v-clicks>

<br/>
<div v-click=5>
👉🏻 En resumen, no lo hagan. No vale la pena.
</div>

---
layout: statement
level: 3
title: Ética
hideInToc: true
clicks: 3
---

# <span class="leading-loose" v-click-hide=1>¿</span> 96 <span v-click-hide=1>?</span>
<div v-click=1>

# Estudiantes sancionados
</div>

<div v-after=1>

## Por faltas a la integridad académica en el curso
## Solamente considerando el 2023-1

### 🚨 Equivalente a casi una sección completa
</div>

<div v-click=2>

### Pero yo les tengo fe 🤞🏼
</div>

<div v-click=3>

### **Es más, estoy tan seguro que no harán nada...**
</div>

<style>

.slidev-vclick-hidden {
  transform: scale(0);
}

</style>

---
layout: statement
level: 3
title: Regalo
hideInToc: true
---

# Les regalaré 10 BitPoints a todos/as por cada tarea.
## **Si no hay ningún caso de integridad académica que involucre a estudiantes de la sección**

---
layout: center
level: 3
title: Qué no se puede hacer
hideInToc: true
---

# El curso es 100% individual

❌ Algunos ejemplos de lo que no está permitido:

<v-clicks>

- Compartir código de cualquier tipo ni en ningún formato
- Compartir cuentas de Clearn, correo, portal UC, etc.
- Enviar fotos de la respuesta
- Explicar la solución de las tareas a otros/as (aunque no sea código) antes de la entrega
- Pedir a alguien que solucione la tarea por ti
</v-clicks>

✅ Algunos ejemplos de lo que está permitido:

<v-clicks>

- Compartir ideas de cómo resolver la tarea (sin código) después del cierre de la evaluación
- Pedir ayuda a un/a ayudante del curso o profesor/a del curso para entender el enunciado
- Pedir ayuda a un/a ayudante del curso o profesor/a del curso para entender un error
- **SIEMPRE** que estén complicados o algo les pase, contactar [iic1103@uc.cl](mailto:iic1103@uc.cl) con copia mí [naquiroz@uc.cl](mailto:naquiroz@uc.cl)
  o a Pablo o Kris.
</v-clicks>

<style>
  h1 {
  @apply text-6xl;
  }
</style>

---
layout: two-cols
level: 3
title: Historias reales
hideInToc: true
---

# Historias reales

<v-clicks>

- No cachaba nada
- Nos compartimos las contraseñas de todo
- Un profesor particular nos ayudó
- Mi amigo sólo quería ayudarme. ¡No lo reprueben por favor!
- No nos conocemos
- Vivimos en el mismo departamento
- Trabajé en su computador y quedó allí
- No tenía internet y se lo pasé para que lo enviara
</v-clicks>

::right::

<v-clicks>

- Siempre trabajamos juntos
- Intenté explicárselo pero como no tenía tiempo se lo envié
- Es el único amigo que tengo
- Me robó la tarea (!!!!!!)
- Se lo pasé para que lo entendiera sin copiar, pero me cagó
- LE DIJE que lo cambiara!
- Solo le expliqué una pequeña cosa
- Se lo expliqué pero no le enseñé el código
- Es que tuve problemas personales/familiares/...
- Otros semestres/secciones/ramos/ ...
</v-clicks>

---
layout: statement
level: 2
title: Política de arrepentimiento
hideInToc: true
---

# Copié en una evaluación, ¿qué hago?
## Política de arrepentimiento temprano

Si cometiste alguna falta a la integridad académica, puedes comunicarte a iic1103@uc.cl luego de que finalice el plazo oficial de la evaluación **previo a ser citados por faltas a la integridad**. Se tendrá **especial consideración** con quienes opten por asumir su error de forma temprana,
no así con los demás casos.

---
layout: statement
level: 2
hideInToc: true
---

# Saliendo de esta clase...
## Revisar el programa el curso
### Se los haré llegar por correo

---
layout: center
level: 2
hideInToc: true
---

# ¿ Preguntas hasta ahora ?
---
layout: section
level: 1
title: Introducción al curso
---
# Empecemos

---
layout: section
level: 2
title: Qué es la computación
---

# Qué es la computación
## Mythbusters

### 5 bitpoints por responder al menos una pregunta

---
layout: center
level: 3
title: ¿Qué es la computación?
hideInToc: true
---

# ¿Qué es la computación?

<img class="w-50 mx-auto" src="/content/QR_clase.png" />

---
layout: center
level: 3
title: ¿Qué es lo malo de la computación?
hideInToc: true
---

# ¿Qué es lo malo de la computación?

<img class="w-50 mx-auto" src="/content/QR_clase.png" />

---
layout: center
level: 3
title: ¿Qué es la computación?
hideInToc: true
---

# ¿Es la computación diversa?

<img class="w-50 mx-auto" src="/content/QR_clase.png" />

---
layout: default
level: 3
title: ¿Qué es la computación? - Mitos
hideInToc: true
---

# ¿Qué es la computación?
## Derribando mitos

La computación hoy en día se usa en todas partes 💻

<div class="flex flex-row space-x-4">
  <img class="basis-1/2 w-1/3 rounded shadow-md shadow-black/50 dark:shadow-white/10" src="/content/notco_giuseppe.gif" />
  <img class="basis-1/2 w-1/3 rounded shadow-md shadow-black/50 dark:shadow-white/10" src="/content/fintual.gif" />
</div>

---
layout: center
level: 3
title: Diversidad en la computación
hideInToc: true
---

# El ambiente laboral

<img class="w-100 mx-auto bg-white rounded" src="/content/offices.jpeg" />
---
layout: center
level: 3
title: Mujeres en la computación
---

# Mujeres en la computación

<img class="w-100 mx-auto bg-white rounded" src="/content/women.svg" />
---
layout: default
level: 2
title: Objetivos del curso
---

# Objetivos del curso
## ¿Qué aprenderemos?

1. **Pensamiento algorítmico**: Descomponer problemas en pasos simples y secuenciales
2. **Programación**: Aprender a programar en Python (3) para resolver problemas

Aprenderemos un pensamiento que nos permitirá **resolver problemas de forma sistemática y programaremos en un nuevo lenguaje**, un lenguaje de programación que nos permitirá resolver problemas de forma sistemática.

---
layout: center
level: 2
title: Tips
---

# Tips para el curso

1. **No te quedes atrás**: Si no entiendes algo, pregunta, el curso es muy acumulativo. **PRACTICA**
2. **No memorices**: Entiende los conceptos, no los memorices. **PRACTICA**
3. **PRACTICA**, **PRACTICA**, **PRACTICA**
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
