# Ejercicios de JavaScript

Colección de ejercicios sencillos para aprender **lo básico de JavaScript y de la programación**, desde las variables hasta la interacción con la página web.

Cada ejercicio es un archivo `.html` independiente: contiene el HTML, los estilos y el JavaScript comentado. No necesita instalar nada ni usar servidor.

## Cómo usarlos

1. Clona o descarga el repositorio.
2. Abre cualquier archivo `.html` en tu navegador (doble clic).
3. Para ver los mensajes de `console.log`, abre las herramientas de desarrollo con **F12** → pestaña *Console*.

Se recomienda seguir las carpetas en orden (01 → 05); dentro de cada una, los archivos van de lo más simple a lo más completo.

## Contenido

### 01 · Fundamentos
Lo mínimo del lenguaje: mostrar datos y guardar valores.

| Ejercicio | Concepto |
|-----------|----------|
| [hola_mundo](01-fundamentos/hola_mundo.html) | Mostrar texto en la página y en la consola |
| [variables](01-fundamentos/variables.html) | `let` y `const` |
| [tipos](01-fundamentos/tipos.html) | Tipos de datos y `typeof` |
| [strings](01-fundamentos/strings.html) | Trabajar con texto |
| [operadores](01-fundamentos/operadores.html) | Aritméticos, comparación y lógicos |

### 02 · Estructuras de control
Tomar decisiones y repetir código.

| Ejercicio | Concepto |
|-----------|----------|
| [if_else](02-control/if_else.html) | Condicionales `if` / `else if` / `else` |
| [switch](02-control/switch.html) | Elegir entre varios casos |
| [for](02-control/for.html) | Bucle con número conocido de repeticiones |
| [while](02-control/while.html) | Bucle mientras se cumpla una condición |
| [do_while](02-control/do_while.html) | Bucle que se ejecuta al menos una vez |

### 03 · Datos (colecciones)
Guardar y transformar conjuntos de valores.

| Ejercicio | Concepto |
|-----------|----------|
| [arrays](03-datos/arrays.html) | Listas y sus métodos |
| [objetos](03-datos/objetos.html) | Pares clave-valor |
| [map_filter_reduce](03-datos/map_filter_reduce.html) | Recorrer y transformar arrays |
| [roman_numerals](03-datos/roman_numerals.html) | Algoritmo: decimal a número romano |

### 04 · Funciones
Reutilizar bloques de código.

| Ejercicio | Concepto |
|-----------|----------|
| [declaracion](04-funciones/declaracion.html) | Tres formas de declarar una función |
| [parametros_return](04-funciones/parametros_return.html) | Entradas y salida de una función |
| [scope](04-funciones/scope.html) | Ámbito de las variables |

### 05 · DOM y eventos
Hacer cosas en la página y responder al usuario. Los archivos están numerados por dificultad.

**Fundamentos del DOM**
| Ejercicio | Concepto |
|-----------|----------|
| [01 · seleccionar y modificar](05-dom-eventos/01-seleccionar-modificar.html) | `querySelector`, `textContent` |
| [02 · estilos y clases](05-dom-eventos/02-estilos-clases.html) | `classList.toggle`, modo oscuro |
| [03 · crear y borrar elementos](05-dom-eventos/03-crear-borrar-elementos.html) | `createElement`, `append`, `remove` |

**Eventos básicos**
| Ejercicio | Concepto |
|-----------|----------|
| [04 · click](05-dom-eventos/04-evento-click.html) | Contador con botones |
| [05 · input](05-dom-eventos/05-evento-input.html) | Texto en vivo |
| [06 · mouseover](05-dom-eventos/06-evento-mouseover.html) | Entrar y salir con el ratón |
| [07 · keydown](05-dom-eventos/07-evento-keydown.html) | Leer el objeto `event` del teclado |
| [08 · submit](05-dom-eventos/08-formulario-submit.html) | `preventDefault` en un formulario |

**Formularios e input del usuario**
| Ejercicio | Concepto |
|-----------|----------|
| [09 · validar inputs](05-dom-eventos/09-validar-inputs.html) | Validación con expresiones regulares |
| [10 · previsualizar imagen](05-dom-eventos/10-image-preview.html) | `FileReader` |
| [11 · formatear texto](05-dom-eventos/11-formatear-texto.html) | Capitalizar como título |
| [12 · crear URL](05-dom-eventos/12-crear-url.html) | Generar un *slug* |

**Proyectos pequeños**
| Ejercicio | Concepto |
|-----------|----------|
| [13 · lista de tareas](05-dom-eventos/13-todo-list.html) | To-do completo |
| [14 · calculadora](05-dom-eventos/14-calculadora.html) | Botones + operaciones |
| [15 · semáforo](05-dom-eventos/15-semaforo.html) | `setInterval` en ciclo |
| [16 · reloj](05-dom-eventos/16-reloj.html) | `Date` en vivo |
| [17 · pestañas](05-dom-eventos/17-tabs.html) | Mostrar/ocultar secciones |

**APIs del navegador**
| Ejercicio | Concepto |
|-----------|----------|
| [18 · geolocalización](05-dom-eventos/18-geolocalizacion.html) | `navigator.geolocation` |
| [19 · canvas con ratón](05-dom-eventos/19-canvas-raton.html) | Dibujar arrastrando |
| [20 · canvas con flechas](05-dom-eventos/20-canvas-flechas.html) | Dibujar con el teclado |
| [21 · localStorage](05-dom-eventos/21-localstorage.html) | Guardar datos en el navegador |
