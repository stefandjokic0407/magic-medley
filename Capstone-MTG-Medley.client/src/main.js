import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const root = createApp(App)
registerGlobalComponents(root)

root
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyA7Lu464b19aRFfGS2r0C11tIMdzYUPs6c'
    }
  })
  .mount('#app')
