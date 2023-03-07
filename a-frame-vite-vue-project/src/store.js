import {
    ref,
    watch
} from "vue";

export const nbCoins = ref(0);

watch(nbCoins, () => console.log(nbCoins.value));