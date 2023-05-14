import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url';
import typescript2 from 'rollup-plugin-typescript2';
import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ["src/components/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ["vite.config.ts"]
    })
  ],
  build: {
    cssCodeSplit: true,
    cssMinify: true,
    lib: {
      entry: "src/plugin.ts",
      name: 'vuesax',
      // fileName: format => `vuesax.${format}.js`,
      // formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ['vue', "./example"],
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'plugin.css') return 'vuesax.css';
          return chunkInfo.name;
        },
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
