// Revisa los ejercicios sin navegador ni dependencias: enlaces del README y de
// index.html, que el índice incluya todas las páginas y la sintaxis de cada <script>.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import vm from 'node:vm';

const raiz = join(import.meta.dirname, '..');
const errores = [];

function paginas(carpeta) {
  return readdirSync(carpeta, { withFileTypes: true }).flatMap((entrada) => {
    const ruta = join(carpeta, entrada.name);
    if (entrada.isDirectory()) {
      return entrada.name.startsWith('.') ? [] : paginas(ruta);
    }
    return entrada.name.endsWith('.html') ? [relative(raiz, ruta).split(sep).join('/')] : [];
  });
}

const todas = paginas(raiz);
const ejercicios = todas.filter((pagina) => pagina !== 'index.html');

const readme = readFileSync(join(raiz, 'README.md'), 'utf8');
const enlacesReadme = [...readme.matchAll(/\]\(([^)]+\.html)\)/g)].map((m) => m[1]);
const indice = readFileSync(join(raiz, 'index.html'), 'utf8');
const enlacesIndice = [...indice.matchAll(/href="([^"]+\.html)"/g)].map((m) => m[1]);

for (const [nombre, enlaces] of [['README.md', enlacesReadme], ['index.html', enlacesIndice]]) {
  for (const enlace of enlaces) {
    if (!existsSync(join(raiz, enlace))) errores.push(`${nombre}: enlace roto a ${enlace}`);
  }
  for (const ejercicio of ejercicios) {
    if (!enlaces.includes(ejercicio)) errores.push(`${nombre}: falta ${ejercicio}`);
  }
}

for (const pagina of todas) {
  const html = readFileSync(join(raiz, pagina), 'utf8');
  for (const [, codigo] of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) {
    try {
      new vm.Script(codigo, { filename: pagina });
    } catch (error) {
      errores.push(`${pagina}: ${error.message}`);
    }
  }
}

if (errores.length > 0) {
  console.error(errores.join('\n'));
  process.exit(1);
}
console.log(`Correcto: ${todas.length} páginas revisadas.`);
