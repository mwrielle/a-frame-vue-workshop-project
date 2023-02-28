<script setup>
import { ref } from "vue";
let coins = ref(0);
</script>
<template>
  <a-entity
    gltf-model="#purse"
    rotation="0 90 0"
    scale="0.7 0.7 0.7"
  ></a-entity>
  <a-text
    value="0 coins"
    scale="0.2 0.2 0.2"
    rotation="-90 0 0"
    color="darkblue"
    position="-0.15 0 -0.1"
  ></a-text>
</template>
