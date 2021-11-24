<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>Votre Position</h1>
    <h2>Lattitude: {{ currPos.lat.toFixed(2) }}</h2>
    <h2>Longitude: {{ currPos.lng.toFixed(2) }}</h2>
    <div ref="mapDiv" style="width: 100%; height: 80vh"></div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import HelloWorld from "@/components/HelloWorld.vue";

require("dotenv").config();

import { computed, ref, onMounted } from "vue";
import { useGeolocation } from "../useGeolocation";
import { Loader } from "@googlemaps/js-api-loader";

const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_API_KEY;

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const { coords } = useGeolocation();
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const mapDiv = ref(null);
    console.log(mapDiv);
    onMounted(async () => {
      await loader.load();
      new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 7,
      });
    });

    return { currPos, mapDiv };
  },
};
</script>
