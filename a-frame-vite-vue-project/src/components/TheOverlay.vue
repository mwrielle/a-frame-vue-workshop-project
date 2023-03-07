<script setup>
import { computed } from "vue";
import { nbCoins, secondLeft } from "../store";

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
  <div class="overlay" v-if="secondLeft != 0">
    <div class="debug duringGame">
      <p>You have {{ nbCoins }} coin</p>
    </div>
  </div>

  <div class="overlay" v-if="secondLeft == 0">
    <div class="debug finalScore">
      <p>You collected {{ nbCoins }} within 1 minute, can you do better ?</p>
    </div>
  </div>

  <div class="overlay" v-if="secondLeft != 0">
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

.finalScore {
  left: 30px;
  bottom: 30px;
}

.secondLeft {
  left: 30px;
  bottom: 100px;
}
</style>
