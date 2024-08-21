import { join, dirname } from 'path';
import { fileURLToPath } from 'node:url';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const PACKAGE_ROOT = dirname(fileURLToPath(import.meta.url));

export default {
  plugins: [tailwindcss(join(PACKAGE_ROOT, './tailwind.config.ts')), autoprefixer],
};
