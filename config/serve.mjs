import * as esbuild from 'esbuild';

import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

let ctx = await esbuild.context({
  entryPoints: ['./src/index.html', './src/app.tsx'],
  bundle: true,
  sourcemap: true,
  outdir: './dist',
  plugins: [vanillaExtractPlugin()],
  loader: {
    '.html': 'copy'
  },
  inject: ['./config/liveReload.js'],
  platform: 'browser',
});

await ctx.watch();

let { port } = await ctx.serve({
  servedir: './dist',
});

console.log(`Site running on: http://localhost:${port}/`);
