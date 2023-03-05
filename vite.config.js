import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "yu-ui",
    lib: {
      entry: path.resolve(__dirname, "./modules/yu-ui/index.js"),
      name: 'yu-ui',
      fileName: 'yu-ui'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    extensions: ['.vue', '.js']
  }
})
