# Install
`npm install yuyu-ui`

# Quick Start
```import { createApp } from 'vue'
import App from './App.vue'

import YuUI from 'yuyu-ui' // node_modules 引入
import 'yuyu-ui/style.css' // node_modules 引入需要引入样式

// import YuUI from '../modules/yu-ui/index' //本地引入方式
// import Transfer from '../modules/yu-ui/Transfer' //单个组件引入方式

createApp(App).use(YuUI).mount('#app')
```