import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./tailwind.css";
import store from "./store";
import axios from "axios";


const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$apiURL = "http://127.0.0.1:8000/api/";
store.$apiURL = app.config.globalProperties.$apiURL;
store.$axios = app.config.globalProperties.$axios;

app.use(router);
app.use(store);

app.mount("#app");