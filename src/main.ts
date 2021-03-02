import { createApp } from "vue";
import App from "./App.vue";
import ElAffix from "@elm/affix";

const app = createApp(App);
app.component(ElAffix.name, ElAffix);

app.mount("#app");
