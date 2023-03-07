<script setup>
import TheWoodSign from "./TheWoodSign.vue";
import TheCoins from "./TheCoins.vue";

defineProps({
  scale: Number,
});
</script>

<template>
  <a-entity
    environment="preset: forest; ground: none; fog:none; dressing:none; shadow:true"
    scale="3 3 3"
  >
  </a-entity>
  <a-entity
    gltf-model="#city"
    rotation="0 90 0"
    position="-30 -12 0"
    scale="0.25 0.25 0.25"
  >
  </a-entity>
  <TheWoodSign></TheWoodSign>
  <TheCoins></TheCoins>
</template>
