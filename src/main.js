import { createApp } from 'vue'
import mitt from 'mitt'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router/index'
// import { createStore } from 'vuex'

// const store = createStore({
//     state() {
//         return {
//             count: 0,
//             covidData: [],
//             TotalConfirmed:'',
//         }
//     },
//     mutations: {
//         increment(state) {
//             state.count++
//         },
//         addData(state, newData) {
//             state.covidData.push({newData})
//         }
//     },
// })

const emitter = mitt()
const app = createApp(App)
app.config.globalProperties.emitter = emitter
// app.use(store)
app.use(router).mount('#app')
