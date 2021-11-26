import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueGoogleMaps from "@fawmi/vue-google-maps";

require("dotenv").config();
const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_API_KEY;

createApp(App)
  .use(store)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: GOOGLE_MAPS_API_KEY,
      libraries: "places",
    },
  })
  .mount("#app");
