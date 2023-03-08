<script setup>
import { computed } from "vue";
import { nbCoins, secondLeft, showOnboarding } from "../store";
import PortalTeleporter from "./PortalTeleporter.vue";

const props = defineProps({
  modelValue: {
    type: [Number],
    default: 1,
  },
});

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<template>
  <div class="overlay" v-if="secondLeft != 0 && showOnboarding == false">
    <div class="debug duringGame">
      <p>You have {{ nbCoins }} coin</p>
    </div>
  </div>

  <div class="overlay" v-if="secondLeft == 0 && showOnboarding == false">
    <div class="debug finalScore">
      <p>You collected {{ nbCoins }} within 1 minute, can you do better ?</p>
    </div>
  </div>

  <div class="overlay" v-if="secondLeft == 0 && showOnboarding == false">
    <div class="debug restart">
      <p>Go back to the wooden sign to restart the game</p>
    </div>
  </div>

  <div class="overlay" v-if="secondLeft != 0 && showOnboarding == false">
    <div class="debug secondLeft">
      <p>{{ secondLeft }} seconds left</p>
    </div>
  </div>
</template>

<style scoped>
p {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.overlay {
  z-index: 10000;
}
:xr-overlay {
  z-index: inherit;
} /* in AR z-index is not supported for AR dom overlay */

.debug {
  position: absolute;
  background-color: darkslategray;
  color: white;
  width: auto;
  padding: 0.1rem 1rem;
  font-family: monospace;
  z-index: 10000;
}

.duringGame {
  left: 30px;
  bottom: 30px;
}

.restart {
  left: 30px;
  bottom: 100px;
}

.finalScore {
  left: 30px;
  bottom: 30px;
}

.secondLeft {
  left: 30px;
  bottom: 100px;
}
</style>
