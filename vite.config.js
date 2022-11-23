import {
  defineConfig
} from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  IvueMaterialPlusResolver
} from './resolvers/ivue-material-plus.ts'

export default defineConfig({
  plugins: [
    vue(),
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
