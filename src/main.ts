import { createApp } from "vue";
import App from "./App.vue";
import ElAffix from "@elm/affix";
import "../packages/theme-chalk/src/index.scss";
import "../packages/theme-chalk/src/display.scss";

const app = createApp(App);
app.component(ElAffix.name, ElAffix);

app.mount("#app");
