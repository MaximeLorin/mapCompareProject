<template>
  <div class="about">
    <h1>This is an about page</h1>
    <mapComp />
  </div>
</template>
<script>
import mapComp from "@/components/mapComp.vue";

export default {
  name: "Home",
  components: {
    mapComp,
  },
};
</script>
