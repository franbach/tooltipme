import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt';
import TooltipMe from './components'

const app = createApp(App)
const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(TooltipMe)
app.mount('#app')