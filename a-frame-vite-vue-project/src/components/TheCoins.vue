<script setup>
import TheCoin from "./TheCoin.vue";

// CODE CORRECT MAIS UN TEMPLATE VUE (THECOIN.VUE) EST BEAUCOUP PLUS ADAPTÉ ET PROPRE
// const attributes = [
//   ["gltf-model", "#coin"],
//   ["clickable", ""],
//   ["scale", "0.09 0.09 0.09"],
//   ["rotation", "0 0 0"],
//   [
//     "animation__open",
//     "property: rotation; to: 0 360 0; loop: true; dur: 2000; easing: linear",
//   ],
// ];

// console.log(attributes);

// function addCoins() {
//   for (let i = 0; i < 10; i++) {
//     let coin = document.createElement("a-entity");
//     for (const attr of attributes) {
//       coin.setAttribute(attr[i][0], attr[i][1]);
//     }

//     coin.setAttribute("id", "coin" + i);
//     coin.setAttribute("position", "0 0.4 -2");
//     // coin.setAttribute("@click", "$event => collectMoney()");

//     document.getElementById("#coinsTemplate").appendChild(coin);
//   }
// }

//addCoins();

const positions = ["0 0.4 -2", "0 0.4 -4"];
</script>
<!-- animation__open="property: rotation; to: 0 360 0; loop: true; dur: 2000; easing: easeInQuad" -->
<template>
  <template v-for="pos of positions">
    <TheCoin :position="pos"></TheCoin>
  </template>
</template>
