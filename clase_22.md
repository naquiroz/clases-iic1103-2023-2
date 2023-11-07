---
theme: apple-basic
info: |
  ## Clase 22 IIC1103 - 2023-2 - Sección 12
drawings:
  persist: false
transition: slide-left
title: IIC1103 - Introducción a la programación - Clase 22
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
exportFilename: clase_22
---
# Archivos II
## Clase 20 | Introducción a la programación

### Nicolás Quiroz | <naquiroz@uc.cl> | <iic1103@uc.cl>

---
layout: center
level: 1
title: Anuncios
hideInToc: true
---
# Anuncios

1. Recordar tarea 2 se entrega hoy!
2. Disfraces halloween, próximo martes.

---
layout: default
level: 1
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior

## Archivos

Los archivos son objetos que permiten guardar información. Los archivos pueden ser de texto, imagen, video, entre otros. En este curso, nos enfocamos en archivos de texto.

### Rutas de Archivos

Las rutas son direcciones que indican la ubicación de un archivo en el sistema. Hay dos tipos de rutas:

1. Ruta absoluta: Ruta completa desde el inicio del sistema hasta el archivo.
2. Ruta relativa: Ruta desde el archivo que estamos usando hasta el archivo que queremos usar.

### Uso de Archivos

Para trabajar con archivos, necesitamos abrirlos, leer/escribir en ellos, y finalmente cerrarlos. Para abrir y cerrar archivos usamos las funciones `open(ruta)` y `archivo.close()`, respectivamente.

---
layout: default
level: 1
title: Repaso Clase Anterior
hideInToc: true
---

# Repaso Clase Anterior
## Archivos

### Lectura de Archivos

Para leer archivos, podemos usar `read()`, `readlines()` o `readline()`. `read()` lee el archivo completo como un solo string, `readlines()` lee el archivo línea por línea pero completo, y `readline()` lee el archivo línea por línea, de a una línea.

```python
# Ejemplo de readlines()
archivo = open("ejercicio.txt")
lineas = archivo.readlines()
archivo.close()
```

### Saltos de Línea y `strip()`

Los saltos de línea son caracteres especiales que representamos con `"\n"`. Para eliminar los saltos de línea de un string, usamos la función `strip("\n")`.

```python
# Ejemplo de strip()
contenido_linea = "Corrida 1\n15 kms\n".strip("\n")
```

---
layout: center
level: 2
title: Agenda
hideInToc: true
---

# Agenda

<Toc />
