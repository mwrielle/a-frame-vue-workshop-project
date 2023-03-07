<script setup>
import "../aframe/disable-in-vr.js";
import "../aframe/hide-in-vr.js";
import "../aframe/simple-navmesh-constraint.js";
import "../aframe/blink-controls.js";
import TheInventory from "./TheInventory.vue";
import { secondLeft } from "../store";
import TheWoodSign from "./TheWoodSign.vue";
defineProps({
  loaded: Boolean,
});
</script>

<template>
  <a-entity
    id="camera-rig"
    movement-controls="camera: #head;"
    disable-in-vr="component: movement-controls;"
    position="0 0 0"
  >
    <a-entity
      wasd-controls="acceleration: 50"
      id="head"
      look-controls="pointerLockEnabled: true"
      simple-navmesh-constraint="navmesh: [data-role='nav-mesh']; height: 1.65;"
      disable-in-vr="component: simple-navmesh-constraint;"
      camera
      position="0 1.65 0"
    >
      <a-entity
        id="reticule"
        geometry="primitive: circle; radius: 0.0005;"
        material="shader: flat; color: white;"
        cursor
        raycaster="far: 2; objects: [clickable]; showLine: false;"
        position="0 0 -0.1"
        disable-in-vr="component: raycaster; disableInAR: false;"
        hide-in-vr="hideInAR: false"
      ></a-entity>
    </a-entity>

    <a-entity
      color="lightgreen"
      id="hand-left"
      hand-controls="hand: left"
      blink-controls="
          cameraRig: #camera-rig;
          teleportOrigin: #head;
          collisionEntities: [data-role='nav-mesh'];
          snapTurn: false;
        "
    >
      <TheInventory v-if="loaded"></TheInventory>
      <a-text :value="nbCoins"></a-text>
    </a-entity>

    <a-entity
      color="lightgreen"
      id="hand-right"
      hand-controls="hand: right"
      laser-controls="hand: right"
      raycaster="far: 2; objects: [clickable]; showLine: true;"
      ><a-cylinder
        color="#211A1E"
        height="0.02"
        radius="0.04"
        rotation="80 0 0"
        position="0 0.01 0.1"
      >
        <a-circle
          color="lightgrey"
          radius="0.03"
          rotation="0 90 0"
          position="0.043 -0.0 0 "
          ><a-text
            :value="secondLeft"
            align="center"
            color="black"
            rotation="0 0 90"
            scale="0.2 0.2 0.2"
          >
          </a-text></a-circle
      ></a-cylinder>
    </a-entity>
  </a-entity>
</template>
