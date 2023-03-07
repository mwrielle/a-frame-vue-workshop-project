<script setup>
import { ref } from "vue";

import TheCameraRig from "./TheCameraRig.vue";
import TheNavMesh from "./TheNavMesh.vue";
import TheMainPlace from "./TheMainPlace.vue";
import TheOverlay from "./TheOverlay.vue";

import "../aframe/life-like-automaton.js";
import "../aframe/teleport-camera-rig.js";

defineProps({
  scale: Number,
  overlaySelector: String,
});

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene background="color: white;" renderer="colorManagement: true;">
    <a-assets @loaded="allAssetsLoaded = true">
      <a-asset-item id="city" src="assets/mafer_city.glb"></a-asset-item>
      <a-asset-item id="purse" src="assets/coin_purse.glb"></a-asset-item>
      <a-asset-item id="coin" src="assets/coin.glb"></a-asset-item>
      <a-asset-item id="sign" src="assets/wooden_sign.glb"></a-asset-item>
      <a-asset-item
        id="money"
        response-type="arraybuffer"
        src="assets/money-effect.mp3"
        preload="auto"
      ></a-asset-item>
    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheMainPlace :scale="scale" />
    </template>

    <TheNavMesh />

    <TheCameraRig :loaded="allAssetsLoaded" />
    <TheOverlay></TheOverlay>
  </a-scene>
</template>
