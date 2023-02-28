<script setup>
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
    position="0 -37 0"
    scale="0.7 0.7 0.7"
  >
  </a-entity>
</template>
