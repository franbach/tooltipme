import { createApp } from 'vue'
import App from './App.vue'
import TooltipMe from './components'

const app = createApp(App)

app.use(TooltipMe)
app.mount('#app')