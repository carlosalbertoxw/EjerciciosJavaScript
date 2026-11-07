# Ejercicios de JavaScript

Colección de ejercicios sencillos para aprender **lo básico de JavaScript y de la programación**, desde las variables hasta la asincronía y las clases.

Cada ejercicio es un archivo `.html` independiente: contiene el HTML, los estilos y el JavaScript comentado. No necesita instalar nada ni usar servidor.

## Cómo usarlos

1. Clona o descarga el repositorio.
2. Abre [`index.html`](index.html) en tu navegador (doble clic): enlaza todos los ejercicios en orden. También puedes abrir cualquier ejercicio directamente.
3. Para ver los mensajes de `console.log`, abre las herramientas de desarrollo con **F12** → pestaña *Console*.

Se recomienda seguir las carpetas en orden (01 → 07); dentro de cada una, los archivos van de lo más simple a lo más completo.

## Contenido

### 01 · Fundamentos
Lo mínimo del lenguaje: mostrar datos y guardar valores.

| Ejercicio | Concepto |
|-----------|----------|
| [hola-mundo](01-fundamentos/hola-mundo.html) | Mostrar texto en la página y en la consola |
| [variables](01-fundamentos/variables.html) | `let` y `const` |
| [tipos](01-fundamentos/tipos.html) | Tipos de datos y `typeof` |
| [cadenas](01-fundamentos/cadenas.html) | Trabajar con texto |
| [operadores](01-fundamentos/operadores.html) | Aritméticos, comparación y lógicos |

### 02 · Estructuras de control
Tomar decisiones y repetir código.

| Ejercicio | Concepto |
|-----------|----------|
| [if-else](02-control/if-else.html) | Condicionales `if` / `else if` / `else` |
| [switch](02-control/switch.html) | Elegir entre varios casos |
| [for](02-control/for.html) | Bucle con número conocido de repeticiones |
| [while](02-control/while.html) | Bucle mientras se cumpla una condición |
| [do-while](02-control/do-while.html) | Bucle que se ejecuta al menos una vez |

### 03 · Datos (colecciones)
Guardar y transformar conjuntos de valores.

| Ejercicio | Concepto |
|-----------|----------|
| [arrays](03-datos/arrays.html) | Listas y sus métodos |
| [objetos](03-datos/objetos.html) | Pares clave-valor |
| [map-filter-reduce](03-datos/map-filter-reduce.html) | Recorrer y transformar arrays |
| [desestructuracion-spread](03-datos/desestructuracion-spread.html) | Sacar valores en una línea y los tres puntos `...` |
| [map-set](03-datos/map-set.html) | Colecciones `Map` y `Set` |
| [numeros-romanos](03-datos/numeros-romanos.html) | Algoritmo: decimal a número romano |

### 04 · Funciones
Reutilizar bloques de código.

| Ejercicio | Concepto |
|-----------|----------|
| [declaracion](04-funciones/declaracion.html) | Tres formas de declarar una función |
| [parametros-return](04-funciones/parametros-return.html) | Entradas y salida de una función |
| [ambito](04-funciones/ambito.html) | Ámbito de las variables y closures |

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
| [06 · mouseenter](05-dom-eventos/06-evento-mouseenter.html) | Entrar y salir con el ratón |
| [07 · keydown](05-dom-eventos/07-evento-keydown.html) | Leer el objeto `event` del teclado |
| [08 · submit](05-dom-eventos/08-formulario-submit.html) | `preventDefault` en un formulario |

**Formularios e input del usuario**
| Ejercicio | Concepto |
|-----------|----------|
| [09 · validar inputs](05-dom-eventos/09-validar-inputs.html) | Expresiones regulares y `checkValidity` |
| [10 · previsualizar imagen](05-dom-eventos/10-previsualizar-imagen.html) | `URL.createObjectURL` |
| [11 · formatear texto](05-dom-eventos/11-formatear-texto.html) | Capitalizar como título |
| [12 · crear URL](05-dom-eventos/12-crear-url.html) | Generar un *slug* |

**Proyectos pequeños**
| Ejercicio | Concepto |
|-----------|----------|
| [13 · lista de tareas](05-dom-eventos/13-lista-de-tareas.html) | To-do completo |
| [14 · calculadora](05-dom-eventos/14-calculadora.html) | Botones + estado + funciones en un objeto |
| [15 · semáforo](05-dom-eventos/15-semaforo.html) | `setInterval` en ciclo |
| [16 · reloj](05-dom-eventos/16-reloj.html) | `Date` en vivo |
| [17 · pestañas](05-dom-eventos/17-pestanas.html) | Mostrar/ocultar secciones |

**APIs del navegador**
| Ejercicio | Concepto |
|-----------|----------|
| [18 · geolocalización](05-dom-eventos/18-geolocalizacion.html) | `navigator.geolocation` |
| [19 · canvas con ratón o dedo](05-dom-eventos/19-canvas-raton.html) | Dibujar con eventos `pointer` |
| [20 · canvas con flechas](05-dom-eventos/20-canvas-flechas.html) | Dibujar con el teclado |
| [21 · localStorage](05-dom-eventos/21-localstorage.html) | Guardar datos en el navegador |

### 06 · Asincronía
Trabajar con resultados que tardan en llegar, sin congelar la página.

| Ejercicio | Concepto |
|-----------|----------|
| [01 · promesas](06-asincronia/01-promesas.html) | `Promise`, `then`, `catch`, `finally` |
| [02 · async / await](06-asincronia/02-async-await.html) | `await`, `try/catch`, `Promise.all` |
| [03 · fetch](06-asincronia/03-fetch.html) | Pedir datos a una API, errores y tiempo límite (necesita internet) |

### 07 · Clases
Crear objetos a partir de un molde común.

| Ejercicio | Concepto |
|-----------|----------|
| [01 · clases](07-clases/01-clases.html) | `class`, `constructor`, campos privados, `get`, `static` |
| [02 · herencia](07-clases/02-herencia.html) | `extends`, `super`, polimorfismo |

## Comprobar los ejercicios

Si tienes [Node.js](https://nodejs.org), este script revisa que los enlaces apunten a archivos existentes, que `index.html` incluya todos los ejercicios y que el JavaScript de cada página no tenga errores de sintaxis:

```bash
node scripts/verificar.mjs
```

## Licencia

[MIT](LICENSE)
