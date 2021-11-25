<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>Votre Position</h1>
    <h2>Lattitude: {{ lat.toFixed(2) }}</h2>
    <h2>Longitude: {{ lng.toFixed(2) }}</h2>
    <input ref="autocomplete" type="text" placeholder="Entrez un lieu" />
    <div ref="mapDiv" style="width: 100%; height: 80vh"></div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import HelloWorld from "@/components/HelloWorld.vue";

require("dotenv").config();

import { Loader } from "@googlemaps/js-api-loader";
const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_API_KEY;

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      lat: 0,
      lng: 0,
      type: "",
      radius: "",
      places: [],
    };
  },
  async mounted() {
    try {
      const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
      await loader.load();
      this.drawMap();
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    coordinates() {
      return `${this.lat},${this.lng}`;
    },
  },
  methods: {
    drawMap() {
      new google.maps.Map(this.$refs.mapDiv, {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
        mapTypeId: "roadmap",
      });
    },
  },
};
</script>
