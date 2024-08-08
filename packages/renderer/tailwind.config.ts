import { join } from 'path';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

// eslint-disable-next-line no-undef
const PACKAGE_ROOT = __dirname;
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
