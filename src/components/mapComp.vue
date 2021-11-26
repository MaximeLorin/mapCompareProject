<template>
  <div class="mapsContainer">
    <div class="mapsContainer__indiv">
      <GMapAutocomplete
        placeholder="This is a placeholder"
        @place_changed="setPlace"
      >
      </GMapAutocomplete>
      <GMapMap
        :center="{ lat: 51.093048, lng: 6.84212 }"
        :zoom="12"
        :options="{
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
        placeholder="This is a placeholder"
        @place_changed="setPlace"
      >
      </GMapAutocomplete>
      <GMapMap
        :center="{ lat: this.lat, lng: this.lng }"
        :zoom="12"
        :options="{
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
      type: "",
      radius: "",
      placeChange: "",
      places: [],
    };
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
  width: 100;
  height: 600px;
}
</style>
