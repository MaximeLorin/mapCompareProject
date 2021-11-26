<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>Votre Position</h1>
    <h2>Lattitude: {{ lat.toFixed(2) }}</h2>
    <h2>Longitude: {{ lng.toFixed(2) }}</h2>
    <input
      ref="autocomplete"
      type="text"
      placeholder="Entrez un lieu"
      v-model="place"
    />
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
      place: "",
      places: [],
    };
  },
  async mounted() {
    try {
      const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
      await loader.load();
      this.brainMap();
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
    brainMap() {
      new google.maps.Map(this.$refs.mapDiv, {
        center: { lat: 48.117266, lng: -1.6777926 },
        zoom: 13,
        mapTypeId: "hybrid",
      });

      // const request = {
      //   query: this.place,
      //   fields: ["name", "geometry"],
      // };

      // let service = new google.maps.places.PlacesService(
      //   this.$refs.autocomplete
      // );

      // service.findPlaceFromQuery(request, (results, status) => {
      //   if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      //     for (let i = 0; i < results.length; i++) {
      //       createMarker(results[i]);
      //     }
      //     map.setCenter(results[0].geometry.location);
      //   }
      // });
    },
  },
};
</script>
