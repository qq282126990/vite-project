import {
  defineConfig
} from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  IvueMaterialPlusResolver
} from './ivue-material-plus-test.js'

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
