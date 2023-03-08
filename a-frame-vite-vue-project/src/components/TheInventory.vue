<script setup>
import { nbCoins } from "../store.js";
</script>
<template>
  <a-entity
    gltf-model="#purse"
    scale="0.005 0.005 0.005"
    position="0.01 0.01 0.02"
    rotation="0 0 -90"
  >
  </a-entity>
  <a-text
    align="center"
    :value="nbCoins + ' coins'"
    color="black"
    scale="0.1 0.1 0.1"
    position="0.03 0.1 -0.05"
    rotation="0 90 -90"
  ></a-text>
</template>
