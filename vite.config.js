import {
  defineConfig
} from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  IvueMaterialPlusResolver
} from './resolvers/ivue-material-plus.ts'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  plugins: [
    vue(),
    ElementPlus(),
    AutoImport({
      resolvers: [
        IvueMaterialPlusResolver(),
      ],
    }),
    Components({
      resolvers: [
        IvueMaterialPlusResolver(),
      ],
    }),
  ],
});
