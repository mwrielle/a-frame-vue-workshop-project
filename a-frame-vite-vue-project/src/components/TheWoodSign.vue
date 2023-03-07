<script setup>
import "../aframe/clickable.js";
import { nbCoins, secondLeft } from "../store.js";

function timerOn() {
  nbCoins.value = 0;
  secondLeft.value = 10;

  document.querySelector("#buttonSign").removeAttribute("clickable");
  // Update the count down every 1 second
  let timer = setInterval(function () {
    // Decrease secondLeft every 1000ms
    secondLeft.value--;
    console.log("second left : " + secondLeft.value);

    document
      .querySelector("#right-hand")
      ?.setAttribute("raycaster", "lineColor", "white");
    document
      .querySelector("#reticule")
      ?.setAttribute("material", "color", "white");

    // If the count down is finished, write some text
    if (secondLeft.value < 1) {
      console.log("time out");
      document.querySelector("#buttonSign").setAttribute("clickable", "");
      clearInterval(timer);
    }
  }, 1000);
}
</script>
<template>
  <a-entity
    id="buttonSign"
    gltf-model="#sign"
    clickable
    scale="1.3 1.3 1.3"
    position="-1 0.8 -3"
    rotation="0 0 0"
    @click="timerOn($event)"
  >
    <a-text
      value="Go collect as many pieces as possible in 1 minute. You can see your purse on your left hand. Click me to start the timer"
      position="0 0.3 0.12"
      align="center"
      wrap-count="18"
      scale="0.13 0.13 0.13"
      color="darkgrey"
    ></a-text>
    <a-text
      id="timer"
      :value="secondLeft + ' seconds left'"
      position="0 0.8
      0.12"
      align="center"
      wrap-count="18"
      scale="0.13 0.13 0.13"
      color="darkgrey"
    >
    </a-text>
  </a-entity>
</template>
