<script setup>
import { ref } from "vue";
let coins = ref(0);
</script>
<template>
  <a-entity
    gltf-model="#purse"
    scale="0.005 0.005 0.005"
    position="0 0 0"
    rotation="-45 0 0"
  >
    <a-text
      value="0 coins"
      color="darkblue"
      rotation="45 0 0"
      scale="50 50 50"
      position="0 0.2 0"
      align="center"
    ></a-text>
  </a-entity>
</template>
