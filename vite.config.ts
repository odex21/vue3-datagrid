import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { dependencies, devDependencies } from './package.json'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    // vueJsx({ isCustomElement: (tag) => tag.startsWith('revogr') }),
  ],
  build: {
    lib: {
      entry: 'src/vgrid.ts',
      formats: ['es', 'cjs'],
    },
    sourcemap: true,
    minify: false,
    rollupOptions: {
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        '@revolist/revogrid',
        '@stencil/core',
        '@revolist/revogrid/loader',
        '@revolist/revogrid/custom-element',
      ],
    },
  },
})
