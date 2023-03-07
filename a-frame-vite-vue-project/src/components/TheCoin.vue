<script setup>
import "../aframe/clickable.js";

import { ref } from "vue";
import { nbCoins } from "../store.js";

function collectMoney($event) {
  nbCoins.value++;
  visibility.value = false;
  const coin = $event.target;

  coin.removeAttribute("clickable");

  document
    .querySelector("#right-hand")
    ?.setAttribute("raycaster", "lineColor", "white");
  document
    .querySelector("#reticule")
    ?.setAttribute("material", "color", "white");
}

const visibility = ref(true);
</script>
<template>
  <a-entity
    gltf-model="#coin"
    class="coin"
    clickable
    scale="0.09 0.09 0.09"
    rotation="0 0 0"
    @click="collectMoney($event)"
    animation__open="property: rotation; to: 0 360 0; loop: true; dur: 2000; easing: linear"
    :visible="visibility ? 'true' : 'false'"
    sound="src:#money; autoplay: false; volume: 3; on: click"
  ></a-entity>
</template>
