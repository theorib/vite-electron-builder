import { join, dirname } from 'path';
import { fileURLToPath } from 'node:url';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const PACKAGE_ROOT = dirname(fileURLToPath(import.meta.url));

export default {
  content: [
    join(PACKAGE_ROOT, './index.html'),
    join(PACKAGE_ROOT, './src/**/*.{js,ts,jsx,tsx,vue}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
} satisfies Config;
