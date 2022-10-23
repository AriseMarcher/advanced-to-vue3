import { createApp } from 'vue'
import App from './App.vue'

// 注册全局组件
import GlobalComponent from './components/global-component.vue'

const app = createApp(App)

app.component('GlobalComponent', GlobalComponent)

app.mount('#app')
