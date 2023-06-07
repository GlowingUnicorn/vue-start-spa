import { defineConfig } from "@vue/cli-service"
import vue from '@vitejs/plugin-vue'
import openInEditor from 'launch-editor-middleware'

export const config = {
  transpileDependencies: true,
  plugins: [vue()],
  devServer: {
    before(app) {
      app.use('/__open-in-editor', openInEditor('webstorm'))
    }
  }
}
