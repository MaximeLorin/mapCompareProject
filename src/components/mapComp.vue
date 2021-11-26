<template>
  <div class="mapsContainer">
    <div class="mapsContainer__indiv">
      <GMapAutocomplete
        placeholder="Enter a place"
        @place_changed="setPlace2"
        :options="{ fields: ['geometry'] }"
      >
      </GMapAutocomplete>
      <GMapMap
        :center="{ lat: this.lat2, lng: this.lng2 }"
        :zoom="12"
        :options="{
          mapTypeId: 'hybrid',
          zoomControl: true,
          mapTypeControl: true,
          scaleControl: true,
          streetViewControl: true,
          rotateControl: true,
          fullscreenControl: false,
        }"
      />
    </div>
    <div class="mapsContainer__indiv">
      <GMapAutocomplete
        placeholder="Enter a place"
        @place_changed="setPlace"
        :options="{ fields: ['geometry'] }"
      >
      </GMapAutocomplete>
      <GMapMap
        :center="{ lat: this.lat, lng: this.lng }"
        :zoom="12"
        :options="{
          mapTypeId: 'hybrid',
          zoomControl: true,
          mapTypeControl: true,
          scaleControl: true,
          streetViewControl: true,
          rotateControl: true,
          fullscreenControl: false,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "mapComp",
  data() {
    return {
      lat: 48.117266,
      lng: -1.6777926,
      lat2: 48.117266,
      lng2: -1.6777926,
      type: "",
      radius: "",
      currentPlace: null,
      currentPlace2: null,
      places: [],
    };
  },

  methods: {
    setPlace(place) {
      this.currentPlace = place;
      if (this.currentPlace) {
        const coords = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.places.push(this.currentPlace);
        this.lat = coords.lat;
        this.lng = coords.lng;
        this.currentPlace = null;
      }
    },
    setPlace2(place2) {
      this.currentPlace2 = place2;
      if (this.currentPlace2) {
        const coords2 = {
          lat: this.currentPlace2.geometry.location.lat(),
          lng: this.currentPlace2.geometry.location.lng(),
        };
        this.places.push(this.currentPlace2);
        this.lat2 = coords2.lat;
        this.lng2 = coords2.lng;
        this.currentPlace2 = null;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mapsContainer {
  display: flex;
  &__indiv {
    width: 50%;
  }
}
.vue-map-container {
  width: 100%;
  height: 80vh;
}
</style>
