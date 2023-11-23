import * as esbuild from 'esbuild'

import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

await esbuild.build({
  entryPoints: ['./src/index.html', './src/app.tsx'],
  bundle: true,
  sourcemap: true,
  outdir: './dist',
  plugins: [vanillaExtractPlugin()],
  loader: {
    '.html': 'copy'
  },
  minify: true,
})