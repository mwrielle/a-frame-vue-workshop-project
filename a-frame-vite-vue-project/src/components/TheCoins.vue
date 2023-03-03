<script setup>
import "../aframe/clickable.js";
function collectMoney() {
  console.log("test");
}
</script>
<!-- animation__open="property: rotation; to: 0 360 0; loop: true; dur: 2000; easing: easeInQuad" -->
<template>
  <a-entity
    gltf-model="#coin"
    clickable
    class="coin"
    scale="0.1 0.1 0.1"
    position="0 0.4 -2"
    rotation="0 0 0"
    @click="collectMoney()"
  >
  </a-entity>
</template>
