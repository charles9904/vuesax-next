// vite.config.ts
import vue from "file:///C:/Users/Charlot/workspace/me/vuesax-next/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/Charlot/workspace/me/vuesax-next/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { fileURLToPath, URL } from "node:url";
import * as path from "path";
import typescript2 from "file:///C:/Users/Charlot/workspace/me/vuesax-next/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js";
import { defineConfig } from "file:///C:/Users/Charlot/workspace/me/vuesax-next/node_modules/vite/dist/node/index.js";
import dts from "file:///C:/Users/Charlot/workspace/me/vuesax-next/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Charlot\\workspace\\me\\vuesax-next";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Charlot/workspace/me/vuesax-next/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      insertTypesEntry: true
    }),
    typescript2({
      check: false,
      include: ["src/components/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true
        }
      },
      exclude: ["vite.config.ts"]
    })
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/components/main.ts",
      name: "vuesax",
      fileName: (format) => `vuesax.${format}.js`,
      formats: ["es", "cjs", "umd"]
    },
    rollupOptions: {
      // make sure to externalize deps that should not be bundled
      // into your library
      input: {
        main: path.resolve(__vite_injected_original_dirname, "src/components/main.ts")
      },
      external: ["vue"],
      output: {
        /* assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'main.css') return 'my-library-vue-ts.css';
          return assetInfo.name;
        }, */
        // exports: "named",
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxDaGFybG90XFxcXHdvcmtzcGFjZVxcXFxtZVxcXFx2dWVzYXgtbmV4dFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQ2hhcmxvdFxcXFx3b3Jrc3BhY2VcXFxcbWVcXFxcdnVlc2F4LW5leHRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0NoYXJsb3Qvd29ya3NwYWNlL21lL3Z1ZXNheC1uZXh0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgdHlwZXNjcmlwdDIgZnJvbSAncm9sbHVwLXBsdWdpbi10eXBlc2NyaXB0Mic7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZUpzeCgpLFxuICAgIGR0cyh7XG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgIH0pLFxuICAgIHR5cGVzY3JpcHQyKHtcbiAgICAgIGNoZWNrOiBmYWxzZSxcbiAgICAgIGluY2x1ZGU6IFtcInNyYy9jb21wb25lbnRzLyoqLyoudnVlXCJdLFxuICAgICAgdHNjb25maWdPdmVycmlkZToge1xuICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICBvdXREaXI6IFwiZGlzdFwiLFxuICAgICAgICAgIHNvdXJjZU1hcDogdHJ1ZSxcbiAgICAgICAgICBkZWNsYXJhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk1hcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBleGNsdWRlOiBbXCJ2aXRlLmNvbmZpZy50c1wiXVxuICAgIH0pXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIGxpYjoge1xuICAgICAgLy8gQ291bGQgYWxzbyBiZSBhIGRpY3Rpb25hcnkgb3IgYXJyYXkgb2YgbXVsdGlwbGUgZW50cnkgcG9pbnRzXG4gICAgICBlbnRyeTogXCJzcmMvY29tcG9uZW50cy9tYWluLnRzXCIsXG4gICAgICBuYW1lOiAndnVlc2F4JyxcbiAgICAgIGZpbGVOYW1lOiBmb3JtYXQgPT4gYHZ1ZXNheC4ke2Zvcm1hdH0uanNgLFxuICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJjanNcIiwgXCJ1bWRcIl0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBtYWtlIHN1cmUgdG8gZXh0ZXJuYWxpemUgZGVwcyB0aGF0IHNob3VsZCBub3QgYmUgYnVuZGxlZFxuICAgICAgLy8gaW50byB5b3VyIGxpYnJhcnlcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG1haW46IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2NvbXBvbmVudHMvbWFpbi50c1wiKVxuICAgICAgfSxcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8qIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lID09PSAnbWFpbi5jc3MnKSByZXR1cm4gJ215LWxpYnJhcnktdnVlLXRzLmNzcyc7XG4gICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lO1xuICAgICAgICB9LCAqL1xuICAgICAgICAvLyBleHBvcnRzOiBcIm5hbWVkXCIsXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVQsT0FBTyxTQUFTO0FBQ3pVLE9BQU8sWUFBWTtBQUNuQixTQUFTLGVBQWUsV0FBVztBQUNuQyxZQUFZLFVBQVU7QUFDdEIsT0FBTyxpQkFBaUI7QUFDeEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBTmhCLElBQU0sbUNBQW1DO0FBQTRKLElBQU0sMkNBQTJDO0FBU3RQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLGtCQUFrQjtBQUFBLElBQ3BCLENBQUM7QUFBQSxJQUNELFlBQVk7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLFNBQVMsQ0FBQyx5QkFBeUI7QUFBQSxNQUNuQyxrQkFBa0I7QUFBQSxRQUNoQixpQkFBaUI7QUFBQSxVQUNmLFFBQVE7QUFBQSxVQUNSLFdBQVc7QUFBQSxVQUNYLGFBQWE7QUFBQSxVQUNiLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUyxDQUFDLGdCQUFnQjtBQUFBLElBQzVCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxjQUFjO0FBQUEsSUFDZCxLQUFLO0FBQUE7QUFBQSxNQUVILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVUsWUFBVSxVQUFVO0FBQUEsTUFDOUIsU0FBUyxDQUFDLE1BQU0sT0FBTyxLQUFLO0FBQUEsSUFDOUI7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBO0FBQUEsTUFHYixPQUFPO0FBQUEsUUFDTCxNQUFXLGFBQVEsa0NBQVcsd0JBQXdCO0FBQUEsTUFDeEQ7QUFBQSxNQUNBLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1OLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
