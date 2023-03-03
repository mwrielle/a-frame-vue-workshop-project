<script setup>
import { ref } from "vue";

import TheCameraRig from "./TheCameraRig.vue";
import TheNavMesh from "./TheNavMesh.vue";
import TheMainPlace from "./TheMainPlace.vue";

import "../aframe/life-like-automaton.js";
import "../aframe/teleport-camera-rig.js";

defineProps({
  scale: Number,
});

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene background="color: white;" renderer="colorManagement: true;">
    <a-assets @loaded="allAssetsLoaded = true">
      <a-asset-item id="city" src="assets/mafer_city.glb"></a-asset-item>
      <a-asset-item id="purse" src="assets/coin_purse.glb"></a-asset-item>
      <a-asset-item id="coin" src="assets/coin.glb"></a-asset-item>
    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheMainPlace :scale="scale" />
    </template>

    <TheNavMesh />

    <TheCameraRig :loaded="allAssetsLoaded" />
  </a-scene>
</template>
