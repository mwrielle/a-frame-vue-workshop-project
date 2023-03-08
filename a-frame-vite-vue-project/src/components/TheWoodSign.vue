<script setup>
import "../aframe/clickable.js";
import { nbCoins, secondLeft } from "../store.js";

let gameover = false;

function showScore() {
  gameover = true;
  let player = document.querySelector("#head");
  let pos = player.getAttribute("position");
  let rot = player.getAttribute("rotation");
  const txtScore = document.querySelector("#showScore");
  txtScore.setAttribute("position", pos.x + " " + pos.y + " " + (pos.z - 2));
  txtScore.setAttribute("rotation", "y", rot.y);

  /*txtScore.object3D.position.sub(
    new THREE.Vector3(0, rot.y, 0).normalize().multiply(Math.cos(rot.y))
  );*/
}

function unshowScore() {
  document.querySelector("#showScore").setAttribute("position", "0 10000 0");
}

function timerOn() {
  unshowScore();
  nbCoins.value = 0;
  secondLeft.value = 6;

  document.querySelector("#buttonSign").removeAttribute("clickable");

  document
    .querySelector("#hand-right")
    .setAttribute("raycaster", "lineColor", "white");
  document
    .querySelector("#reticule")
    ?.setAttribute("material", "color", "white");

  // Update the count down every 1 second
  let timer = setInterval(function () {
    // Decrease secondLeft every 1000ms
    secondLeft.value--;
    console.log("second left : " + secondLeft.value);

    // If the count down is finished, write some text
    if (secondLeft.value < 1) {
      console.log("time out");
      document.querySelector("#buttonSign").setAttribute("clickable", "");
      showScore();
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
  </a-entity>
  <a-text
    id="showScore"
    :value="`You collected ${nbCoins} coins within 1 minute, can you do better ? Go to the wood sign to restart the game`"
    align="center"
    wrap-count="18"
    scale="0.3 0.3 0.3"
    position="0 10000 0"
    color="black"
    @click="unshowScore()"
  ></a-text>
</template>
