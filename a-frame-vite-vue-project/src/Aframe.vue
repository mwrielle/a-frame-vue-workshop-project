<script setup>
import { ref } from "vue";
import TheOnboarding from "./components/TheOnboarding.vue";
import TheOverlay from "./components/TheOverlay.vue";
import TheScene from "./components/TheScene.vue";

const scale = ref(1);
const loaded = ref(false);
</script>

<template>
  <TheOverlay v-model="scale" />
  <TheOnboarding :loaded="loaded" />

  <!-- The DOM element of the overlay must be mounted before the A-Frame Scene is mounted -->
  <!-- Otherwise the "webxr system" of the A-Frame scene wont find the DOM Element -->

  <TheScene :scale="scale" @loaded="loaded = true" />
</template>
