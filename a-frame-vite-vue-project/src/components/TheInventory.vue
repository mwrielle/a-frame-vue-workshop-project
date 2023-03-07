<script setup>
import { ref } from "vue";
import { nbCoins } from "../store.js";
let coins = ref(0);
</script>
<template>
  <a-entity
    gltf-model="#purse"
    scale="0.005 0.005 0.005"
    position="0.03 0.01 0.02"
    rotation="-45 0 0"
  >
  </a-entity>
  <a-text
    align="center"
    :value="nbCoins + ' coins'"
    color="#black"
    scale="0.1 0.1 0.1"
    position="0.05 0.1 -0.05"
    rotation="-30 0 0"
  ></a-text>
</template>
