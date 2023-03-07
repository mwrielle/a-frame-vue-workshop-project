<script setup>
import "../aframe/clickable.js";
import { nbCoins, secondLeft } from "../store.js";

import { ref, watch } from "vue";

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

  watch(secondLeft, (second) => {
    if (second <= 0) visibility.value = true;
  });
}

const visibility = ref(true);
</script>
<template>
  <a-entity
    v-if="secondLeft != 0"
    gltf-model="#coin"
    class="coin"
    clickable
    scale="0.09 0.09 0.09"
    rotation="0 0 0"
    @click="collectMoney($event)"
    :visible="visibility ? 'true' : 'false'"
    animation__open="property: rotation; to: 0 360 0; loop: true; dur: 2000; easing: linear"
    sound="src:#money; autoplay: false; volume: 1; on: click"
  ></a-entity>
</template>

<!--  -->
