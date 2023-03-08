<script setup>
import { ref } from "vue";
import { showOnboarding } from "../store";

defineProps({
  loaded: Boolean,
});

function enterScene() {
  showOnboarding.value = false;
  if (
    AFRAME.utils.device.checkHeadsetConnected() &&
    !AFRAME.utils.device.isMobile()
  ) {
    document.querySelector("a-scene").enterVR();
  }
}
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>A-Frame + Vite + Vue Project</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>
      <div class="licences">
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank"
              >aframe-extras controls and animation-mixer</a
            >
          </dt>
          <dd>
            <a
              href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE"
              target="_blank"
              >MIT License</a
            >
          </dd>

          <dt>
            <a
              href="https://github.com/jure/aframe-blink-controls/"
              target="_blank"
              >aframe-blink-controls</a
            >
          </dt>
          <dd>
            <a
              href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE"
              target="_blank"
              >MIT License</a
            >
          </dd>

          <dt>
            <a
              href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate"
              target="_blank"
              >simple-navmesh-constraint</a
            >
          </dt>
          <dd>By Ada Rose Cannon under MIT License</dd>

          <dt>
            <a
              href="https://sketchfab.com/3d-models/mafer-city-2bd53c28a598423f81e883224332dfd1"
              target="_blank"
              >city 3D model</a
            >
          </dt>
          <dd>
            By
            <a
              href="https://sketchfab.com/Fernanda.Aldaco.de.Luna"
              target="_blank"
              >Mafer Luna
            </a>
            under
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              >Creative Commons Licences</a
            >
          </dd>

          <dt>
            <a
              href="https://sketchfab.com/3d-models/coin-purse-03b55ef1a7ac4f89817f15a75acf35bc"
              target="_blank"
              >Coin Purse
            </a>
          </dt>
          <dd>
            By
            <a href="https://sketchfab.com/AQUILA_miniatures" target="_blank"
              >Aquilla Miniature</a
            >
            under
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              >Creative Commons Licences</a
            >
          </dd>

          <dt>
            <a href="https://skfb.ly/6Xqn8" target="_blank">Coin </a>
          </dt>
          <dd>
            By
            <a href="https://sketchfab.com/wearemonsters" target="_blank"
              >Monster</a
            >
            under
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              >Creative Commons Licences</a
            >
          </dd>

          <dt>
            <a
              href="https://orangefreesounds.com/mario-coin-sound/"
              target="_blank"
              >Money sound effect
            </a>
          </dt>
          <dd>
            By
            <a
              href="https://orangefreesounds.com/author/alexander/"
              target="_blank"
              >Alexander</a
            >
            under
            <a
              href="https://creativecommons.org/licenses/by-nc/4.0/"
              target="_blank"
              >Creative Commons Licences</a
            >
          </dd>

          <dt>
            <a
              href="https://sketchfab.com/3d-models/wooden-sign-256975ecc4a947a79ffe2a0e963e8bbd"
              target="_blank"
              >Wooden sign
            </a>
          </dt>
          <dd>
            By
            <a href="https://sketchfab.com/carlossamuelariza" target="_blank"
              >Carlos</a
            >
            under
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              >Creative Commons Licences</a
            >
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
}
a {
  color: #eee;
  text-decoration: none;
}
.licences {
  margin: 2rem 0;
  font-size: 1rem;
  text-align: left;
}
.licences dt {
  padding-top: 0.75rem;
  font-size: 0.9rem;
  font-weight: bold;
}
.licences dd {
  margin-left: 0;
  font-size: 0.8rem;
}

#onboarding {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #333;
  color: #ccc;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  font-family: monospace;
  z-index: 10000;
  overflow: auto;
}
#onboarding > * {
  margin: 0 auto;
  max-width: 50rem;
  width: calc(100vw - 10rem);
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem;
  font-size: 1.3rem;
}
#onboarding button {
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
}
</style>
